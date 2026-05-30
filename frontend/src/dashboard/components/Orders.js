import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setLoading(false);
      });
  }, []);

  /* ── Loading ── */
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "300px",
        }}
      >
        <p style={{ color: "#999", fontSize: "14px" }}>Loading orders…</p>
      </div>
    );
  }

  /* ── Empty state ── */
  if (orders.length === 0) {
    return (
      <div className="orders">
        <div
          className="no-orders"
          style={{ height: "80vh" }}
        >
          <span
            className="icon"
            style={{
              fontSize: "48px",
              transform: "none",
              marginBottom: "24px",
              opacity: 0.3,
            }}
          >
            📋
          </span>
          <p>You haven't placed any orders today</p>
          <Link to="/dashboard" className="btn">
            Start trading
          </Link>
        </div>
      </div>
    );
  }

  /* ── Summary stats ── */
  const buyOrders  = orders.filter((o) => o.mode === "BUY").length;
  const sellOrders = orders.filter((o) => o.mode === "SELL").length;
  const totalQty   = orders.reduce((acc, o) => acc + (o.qty || 0), 0);
  const totalValue = orders.reduce((acc, o) => acc + (o.price || 0) * (o.qty || 0), 0);

  return (
    <div>
      {/* ── Page header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h3 className="title" style={{ margin: 0 }}>
          Orders&nbsp;
          <span
            style={{
              fontSize: "0.9rem",
              fontWeight: "400",
              color: "#aaa",
            }}
          >
            ({orders.length})
          </span>
        </h3>

        <div style={{ display: "flex", gap: "12px" }}>
          <span
            style={{
              fontSize: "12px",
              background: "#E8F5E9",
              color: "#2E7D32",
              padding: "4px 12px",
              borderRadius: "12px",
              fontWeight: "500",
            }}
          >
            {buyOrders} BUY
          </span>
          <span
            style={{
              fontSize: "12px",
              background: "#FFEBEE",
              color: "#C62828",
              padding: "4px 12px",
              borderRadius: "12px",
              fontWeight: "500",
            }}
          >
            {sellOrders} SELL
          </span>
        </div>
      </div>

      {/* ── Orders table ── */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Instrument</th>
              <th>Type</th>
              <th>Qty.</th>
              <th>Avg. Price</th>
              <th>Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const isBuy  = order.mode === "BUY";
              const value  = (order.price || 0) * (order.qty || 0);

              return (
                <tr key={index}>
                  {/* Instrument */}
                  <td className="align-left">
                    <strong style={{ color: "#333", fontSize: "0.9rem" }}>
                      {order.name}
                    </strong>
                  </td>

                  {/* BUY / SELL badge */}
                  <td style={{ textAlign: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "10px",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                        background: isBuy ? "#E8F5E9" : "#FFEBEE",
                        color:      isBuy ? "#2E7D32" : "#C62828",
                        padding: "3px 10px",
                        borderRadius: "3px",
                        textTransform: "uppercase",
                      }}
                    >
                      {order.mode}
                    </span>
                  </td>

                  {/* Qty */}
                  <td>{order.qty}</td>

                  {/* Avg price */}
                  <td>
                    ₹{order.price ? order.price.toFixed(2) : "—"}
                  </td>

                  {/* Total value */}
                  <td>₹{value.toFixed(2)}</td>

                  {/* Status */}
                  <td style={{ textAlign: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "10px",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                        background: "#E3F2FD",
                        color: "#1565C0",
                        padding: "3px 10px",
                        borderRadius: "3px",
                        textTransform: "uppercase",
                      }}
                    >
                      EXECUTED
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ── Summary footer ── */}
      <div className="row">
        <div className="col">
          <h5>{orders.length}</h5>
          <p>Total orders</p>
        </div>
        <div className="col">
          <h5>{totalQty}</h5>
          <p>Total qty.</p>
        </div>
        <div className="col">
          <h5 style={{ color: "#4184f3" }}>
            ₹{totalValue.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
          </h5>
          <p>Total value</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
