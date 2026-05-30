require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel} = require('./model/OrdersModel');
const { UserModel } = require("./model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "zerodhaclonesecretkey987654321";


const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

/* ================= AUTHENTICATION MIDDLEWARE ================= */
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).send("A token is required for authentication");
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).send("Token format is Bearer <token>");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid/Expired Token");
  }
  return next();
};

/* ================= DB CONNECTION ================= */

mongoose
  .connect(URL)
  .then(() => console.log("DB connected ✅"))
  .catch((err) => console.log("DB Error:", err));

/* ================= ADD HOLDINGS ================= */

   app.get("/addHoldings", async (req, res) => {
  try {
    let tempHoldings = [
      { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
      { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
      { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
      { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
      { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
      { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
      { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
      { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
      { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
      { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
      { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
      { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
     { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
    ];

    await HoldingsModel.deleteMany({}); // avoid duplicates

    for (let item of tempHoldings) {
      await HoldingsModel.create(item);
    }

    res.send("Holdings Added ✅");
  } catch (err) {
    res.status(500).send(err.message);
 }
});

 /* ================= ADD POSITIONS ================= */

 app.get("/addPositions", async (req, res) => {
   try {
     let tempPositions = [
       { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
       { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
     ];

    await PositionsModel.deleteMany({});

    for (let item of tempPositions) {
     await PositionsModel.create(item);   }

    res.send("Positions Added ✅");
  } catch (err) {
    res.status(500).send(err.message);
   }
 });

  /* ================= AUTHENTICATION APIs ================= */

  app.post("/signup", async (req, res) => {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        return res.status(400).send("Username, email and password are required");
      }

      const existingUser = await UserModel.findOne({
        $or: [{ email: email.toLowerCase() }, { username }]
      });
      if (existingUser) {
        return res.status(409).send("User already exists. Please login.");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await UserModel.create({
        username,
        email: email.toLowerCase(),
        password: hashedPassword,
      });

      const token = jwt.sign(
        { user_id: user._id, email: user.email, username: user.username },
        JWT_SECRET,
        { expiresIn: "2h" }
      );

      res.status(201).json({ token, username: user.username, email: user.email });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error during registration");
    }
  });

  app.post("/login", async (req, res) => {
    try {
      const { emailOrUsername, password } = req.body;
      if (!emailOrUsername || !password) {
        return res.status(400).send("Email/Username and password are required");
      }

      const user = await UserModel.findOne({
        $or: [
          { email: emailOrUsername.toLowerCase() },
          { username: emailOrUsername }
        ]
      });

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email: user.email, username: user.username },
          JWT_SECRET,
          { expiresIn: "2h" }
        );

        return res.status(200).json({ token, username: user.username, email: user.email });
      }

      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error during login");
    }
  });

  app.get("/verify", verifyToken, (req, res) => {
    res.status(200).json({ valid: true, user: req.user });
  });

 /* ================= GET APIs ================= */

 app.get("/holdings", verifyToken, async (req, res) => {
   try {
     const data = await HoldingsModel.find({});
     res.json(data);
   } catch (err) {
     res.status(500).send(err.message);
   }
 });

 app.get("/positions", verifyToken, async (req, res) => {
   try {
     const data = await PositionsModel.find({});
     res.json(data);
 } catch (err) {
    res.status(500).send(err.message);   }
 });

 app.get("/orders", verifyToken, async (req, res) => {
   try {
     const data = await OrdersModel.find({});
     res.json(data);
   } catch (err) {
     res.status(500).send(err.message);
   }
 });

app.get("/allHoldings", verifyToken, async(requestAnimationFrame,res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", verifyToken, async(requestAnimationFrame,res)=>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", verifyToken, async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Order saved! ✅");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving order");
  }
});


/* ================= STATIC ASSET SERVING ================= */
const path = require("path");

// Serve static assets from frontend build folder
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Catch-all fallback route to serve React's index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});


/* ================= SERVER ================= */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});