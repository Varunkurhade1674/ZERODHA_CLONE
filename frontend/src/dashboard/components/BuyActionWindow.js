import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice]       = useState(0.0);
  const [orderType, setOrderType]         = useState("market");   // "market" | "limit"
  const [product, setProduct]             = useState("MIS");       // "MIS" | "CNC" | "NRML"

  /* ── Derived values ── */
  const isMarket    = orderType === "market";
  const marginPrice = isMarket ? 140.65 : (stockPrice * stockQuantity).toFixed(2);

  /* ── Handlers ── */
  const handleBuyClick = () => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "/newOrder",
        {
          name:  uid,
          qty:   Number(stockQuantity),
          price: isMarket ? 0 : Number(stockPrice),
          mode:  "BUY",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        generalContext.closeBuyWindow();
        generalContext.showToast({
          type:    "success",
          title:   "Order Placed! 🎉",
          message: `Bought ${stockQuantity} × ${uid} successfully.`,
        });
      })
      .catch((err) => {
        generalContext.showToast({
          type:    "error",
          title:   "Order Failed",
          message: err?.response?.data || "Something went wrong. Please try again.",
        });
      });
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="buy-action-window-container" id="buy-window" draggable="true">

      {/* ── Header ── */}
      <div className="baw-header">
        <div className="baw-header-left">
          <span className="baw-badge">BUY</span>
          <div>
            <h3>{uid || "INSTRUMENT"}</h3>
            <span className="baw-header-sub">NSE · Equity</span>
          </div>
        </div>
        <button
          className="baw-close-btn"
          onClick={handleCancelClick}
          title="Close"
        >
          ✕
        </button>
      </div>

      {/* ── Order type tabs ── */}
      <div className="baw-tabs">
        <button
          className={`baw-tab ${orderType === "market" ? "active-buy" : ""}`}
          onClick={() => setOrderType("market")}
        >
          Market
        </button>
        <button
          className={`baw-tab ${orderType === "limit" ? "active-buy" : ""}`}
          onClick={() => setOrderType("limit")}
        >
          Limit
        </button>
        <button
          className={`baw-tab ${orderType === "sl" ? "active-buy" : ""}`}
          onClick={() => setOrderType("sl")}
        >
          SL
        </button>
        <button
          className={`baw-tab ${orderType === "slm" ? "active-buy" : ""}`}
          onClick={() => setOrderType("slm")}
        >
          SL-M
        </button>
      </div>

      {/* ── Product type ── */}
      <div className="baw-product-row">
        {["MIS", "CNC", "NRML"].map((p) => (
          <button
            key={p}
            className={`baw-product-chip ${product === p ? "selected" : ""}`}
            onClick={() => setProduct(p)}
          >
            {p}
          </button>
        ))}
      </div>

      {/* ── Inputs ── */}
      <div className="baw-body">
        <div className="baw-inputs-row">
          {/* Qty */}
          <div className="baw-field">
            <label htmlFor="baw-qty">Qty.</label>
            <input
              id="baw-qty"
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </div>

          {/* Price */}
          <div className="baw-field">
            <label htmlFor="baw-price">Price (₹)</label>
            <input
              id="baw-price"
              type="number"
              step="0.05"
              value={isMarket ? "" : stockPrice}
              placeholder={isMarket ? "At market" : "0.00"}
              disabled={isMarket}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Margin info */}
        <div className="baw-margin-row">
          <span className="baw-margin-label">Margin required</span>
          <span className="baw-margin-value">₹{marginPrice}</span>
        </div>
      </div>

      {/* ── Footer buttons ── */}
      <div className="baw-footer">
        <button className="baw-btn baw-btn-cancel" onClick={handleCancelClick}>
          Cancel
        </button>
        <button className="baw-btn baw-btn-buy" onClick={handleBuyClick}>
          Buy
        </button>
      </div>

    </div>
  );
};

export default BuyActionWindow;
