import React, { useState } from "react";

const Funds = () => {
  const [availableMargin, setAvailableMargin] = useState(4043.10);
  const [usedMargin, setUsedMargin] = useState(3757.30);
  const [availableCash, setAvailableCash] = useState(4043.10);
  const [openingBalance, setOpeningBalance] = useState(4043.10);
  
  const [commodityActive, setCommodityActive] = useState(false);
  const [isOpeningCommodity, setIsOpeningCommodity] = useState(false);
  const [notification, setNotification] = useState("");

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification("");
    }, 4000);
  };

  const handleAddFunds = () => {
    setAvailableMargin(prev => prev + 10000);
    setAvailableCash(prev => prev + 10000);
    showNotification("₹10,000 added successfully to Equity margin! 🚀");
  };

  const handleWithdraw = () => {
    if (availableMargin < 1000) {
      showNotification("Insufficient balance for withdrawal! ❌");
      return;
    }
    setAvailableMargin(prev => prev - 1000);
    setAvailableCash(prev => prev - 1000);
    showNotification("₹1,000 withdrawal processed successfully! 💸");
  };

  const handleOpenCommodity = () => {
    setIsOpeningCommodity(true);
    setTimeout(() => {
      setCommodityActive(true);
      setIsOpeningCommodity(false);
      showNotification("Commodity account activated successfully! 📈");
    }, 1500);
  };

  // Helper to format currency numbers cleanly
  const formatCurrency = (val) => {
    return val.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Toast Notification */}
      {notification && (
        <div style={{
          position: "fixed",
          top: "30px",
          right: "30px",
          backgroundColor: "#333333",
          color: "#FFFFFF",
          padding: "14px 24px",
          borderRadius: "8px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          zIndex: 10000,
          fontSize: "14px",
          fontWeight: "500",
          transition: "all 0.3s ease",
          borderLeft: "4px solid #4caf50",
        }}>
          {notification}
        </div>
      )}

      {/* Top action header */}
      <div className="funds" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
        <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Instant, zero-cost fund transfers with UPI </p>
        <button 
          onClick={handleAddFunds}
          style={{ 
            backgroundColor: "#4caf50", 
            color: "#FFF", 
            border: "none",
            padding: "10px 20px", 
            borderRadius: "4px", 
            fontSize: "14px", 
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#43a047"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#4caf50"}
        >
          Add funds
        </button>
        <button 
          onClick={handleWithdraw}
          style={{ 
            backgroundColor: "#4184f3", 
            color: "#FFF", 
            border: "none",
            padding: "10px 20px", 
            borderRadius: "4px", 
            fontSize: "14px", 
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#357ae8"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#4184f3"}
        >
          Withdraw
        </button>
      </div>

      <div className="row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "30px", flexWrap: "wrap", marginTop: "20px" }}>
        {/* Equity Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <span>
            <p style={{ fontSize: "18px", fontWeight: "500", color: "#444", marginBottom: "15px" }}>Equity</p>
          </span>

          <div className="table" style={{ border: "1px solid #EEE", borderRadius: "8px", padding: "20px", backgroundColor: "#FFF" }}>
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <p style={{ margin: 0, color: "#777" }}>Available margin</p>
              <p style={{ margin: 0, fontWeight: "600", fontSize: "18px", color: "#4184f3" }}>{formatCurrency(availableMargin)}</p>
            </div>
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <p style={{ margin: 0, color: "#777" }}>Used margin</p>
              <p style={{ margin: 0, fontWeight: "600", fontSize: "18px", color: "#333" }}>{formatCurrency(usedMargin)}</p>
            </div>
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <p style={{ margin: 0, color: "#777" }}>Available cash</p>
              <p style={{ margin: 0, fontWeight: "600", fontSize: "18px", color: "#333" }}>{formatCurrency(availableCash)}</p>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid #EEE", margin: "15px 0" }} />
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Opening Balance</p>
              <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>{formatCurrency(openingBalance)}</p>
            </div>
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Payin</p>
              <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>4,064.00</p>
            </div>
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>SPAN</p>
              <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>0.00</p>
            </div>
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Delivery margin</p>
              <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>0.00</p>
            </div>
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Exposure</p>
              <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>0.00</p>
            </div>
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Options premium</p>
              <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>0.00</p>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid #EEE", margin: "15px 0" }} />
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Collateral (Liquid funds)</p>
              <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>0.00</p>
            </div>
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Collateral (Equity)</p>
              <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>0.00</p>
            </div>
            <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Total Collateral</p>
              <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <span>
            <p style={{ fontSize: "18px", fontWeight: "500", color: "#444", marginBottom: "15px" }}>Commodity</p>
          </span>

          {!commodityActive ? (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "350px" }}>
              <div className="commodity" style={{ textAlign: "center", padding: "40px", border: "1px dashed #DDD", borderRadius: "8px", backgroundColor: "#FCFCFC", width: "100%" }}>
                <p style={{ color: "#666", fontSize: "15px", marginBottom: "20px" }}>You don't have a commodity account</p>
                <button 
                  onClick={handleOpenCommodity}
                  disabled={isOpeningCommodity}
                  style={{ 
                    backgroundColor: "#4184f3", 
                    color: "#FFF", 
                    border: "none",
                    padding: "10px 24px", 
                    borderRadius: "4px", 
                    fontSize: "14px", 
                    fontWeight: "500",
                    cursor: isOpeningCommodity ? "not-allowed" : "pointer",
                    transition: "background-color 0.2s",
                    opacity: isOpeningCommodity ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => { if(!isOpeningCommodity) e.target.style.backgroundColor = "#357ae8" }}
                  onMouseLeave={(e) => { if(!isOpeningCommodity) e.target.style.backgroundColor = "#4184f3" }}
                >
                  {isOpeningCommodity ? "Opening Account..." : "Open Account"}
                </button>
              </div>
            </div>
          ) : (
            <div className="table" style={{ border: "1px solid #EEE", borderRadius: "8px", padding: "20px", backgroundColor: "#FFF", animation: "fadeIn 0.5s ease" }}>
              <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <p style={{ margin: 0, color: "#777" }}>Available margin</p>
                <p style={{ margin: 0, fontWeight: "600", fontSize: "18px", color: "#4184f3" }}>0.00</p>
              </div>
              <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <p style={{ margin: 0, color: "#777" }}>Used margin</p>
                <p style={{ margin: 0, fontWeight: "600", fontSize: "18px", color: "#333" }}>0.00</p>
              </div>
              <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <p style={{ margin: 0, color: "#777" }}>Available cash</p>
                <p style={{ margin: 0, fontWeight: "600", fontSize: "18px", color: "#333" }}>0.00</p>
              </div>
              <hr style={{ border: "none", borderTop: "1px solid #EEE", margin: "15px 0" }} />
              <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Opening Balance</p>
                <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>0.00</p>
              </div>
              <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Payin</p>
                <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>0.00</p>
              </div>
              <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Exposure</p>
                <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>0.00</p>
              </div>
              <hr style={{ border: "none", borderTop: "1px solid #EEE", margin: "15px 0" }} />
              <div className="data" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>Total Collateral</p>
                <p style={{ margin: 0, color: "#444", fontSize: "14px" }}>0.00</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Funds;
