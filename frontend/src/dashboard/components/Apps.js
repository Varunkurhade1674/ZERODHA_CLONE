import React from "react";

const Apps = () => {
  const appsList = [
    {
      name: "Console",
      desc: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
      icon: "📊",
      link: "https://console.zerodha.com",
      status: "Active",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      name: "Coin",
      desc: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account with seamless investment experience.",
      icon: "🪙",
      link: "https://coin.zerodha.com",
      status: "Active",
      color: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    },
    {
      name: "Kite Connect API",
      desc: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. Showcase to our active clientbase.",
      icon: "⚡",
      link: "https://kite.trade",
      status: "Developer",
      color: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    },
    {
      name: "Varsity",
      desc: "An easy to grasp, massive collection of stock market lessons with in-depth coverage and illustrations to learn on the go.",
      icon: "🎓",
      link: "https://zerodha.com/varsity",
      status: "Free",
      color: "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)",
    },
    {
      name: "Sentinel",
      desc: "Create real-time price alerts on stocks, futures, options, and commodities, triggered instantly even when you are offline.",
      icon: "🔔",
      link: "https://sentinel.zerodha.com",
      status: "Active",
      color: "linear-gradient(135deg, #13547a 0%, #80d0c7 100%)",
    }
  ];

  return (
    <div style={{ padding: "10px", fontFamily: "'Inter', sans-serif" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#444", marginBottom: "8px" }}>Ecosystem Apps</h2>
      <p style={{ fontSize: "14px", color: "#888", marginBottom: "30px" }}>
        Discover and access the powerful investment and analysis applications in the Zerodha Universe.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "24px",
      }}>
        {appsList.map((app, idx) => (
          <div key={idx} style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            border: "1px solid #EAEAEA",
            padding: "24px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "230px",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer",
            boxSizing: "border-box"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.02)";
          }}
          >
            <div>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: app.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#FFF",
                marginBottom: "14px",
              }}>
                {app.icon}
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "6px", marginTop: "0px" }}>{app.name}</h3>
              <p style={{ fontSize: "12px", color: "#777", lineHeight: "1.4", margin: 0 }}>{app.desc}</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
              <span style={{
                fontSize: "10px",
                fontWeight: "600",
                backgroundColor: app.status === "Active" ? "#E8F5E9" : app.status === "Developer" ? "#E3F2FD" : "#FFF3E0",
                color: app.status === "Active" ? "#2E7D32" : app.status === "Developer" ? "#1565C0" : "#E65100",
                padding: "3px 8px",
                borderRadius: "20px",
                textTransform: "uppercase",
              }}>
                {app.status}
              </span>
              <a href={app.link} target="_blank" rel="noopener noreferrer" style={{
                fontSize: "12px",
                color: "#387ED1",
                textDecoration: "none",
                fontWeight: "500",
              }}>
                Launch App →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
