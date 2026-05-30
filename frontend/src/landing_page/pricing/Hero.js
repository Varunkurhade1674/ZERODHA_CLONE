import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div className="row text-center mt-5 p-5 " style={{ display: "flex" }}>
        <h5>Charges</h5>
        <p className="text-muted ">List of all charges and taxes</p>
        <div className="row p-5 mt-5">
          <div className="col-4 p-3 text-muted" style={{ textAlign: "center" }}>
            <img
              src="media/images/pricing0.svg"
              style={{ width: "250px", marginBottom: "15px", maxWidth: "100%" }}
            ></img>
            <h2
              style={{
                fontsize: "1.75rem",
                display: "block",
                fontSize: "150%",
              }}
            >
              Free equity delivery
            </h2>
            <br />
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage
            </p>
          </div>
          <div className="col-4 p-3 text-muted">
            <img
              src="media\images\intradayTrades.svg"
              style={{ width: "250px", marginBottom: "15px", maxWidth: "100%" }}
            ></img>
            <h2
              style={{
                fontsize: "1.75rem",
                display: "block",
                fontSize: "150%",
              }}
            >
              Intraday & F&O trades
            </h2>
            <br />
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-3 text-muted" style={{ textAlign: "center" }}>
            <img
              src="media/images/pricing0.svg"
              style={{ width: "250px", marginBottom: "15px", maxWidth: "100%" }}
            ></img>
            <h2
              style={{
                fontsize: "1.75rem",
                display: "block",
                fontSize: "150%",
              }}
            >
              Free direct MF
            </h2>
            <br />
            <p className="">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
