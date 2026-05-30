import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    // Extract credentials from URL query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = queryParams.get("token");
    const usernameFromUrl = queryParams.get("username");
    const emailFromUrl = queryParams.get("email");

    if (tokenFromUrl) {
      // Save them in dashboard's own localStorage (port 3001)
      localStorage.setItem("token", tokenFromUrl);
      localStorage.setItem("username", usernameFromUrl || "User");
      localStorage.setItem("email", emailFromUrl || "");
      
      // Clean up the URL query parameters so the address bar is clean
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "http://localhost:3000/login";
    }
  }, []);

  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "'Inter', sans-serif",
        fontSize: "18px",
        color: "#666",
        backgroundColor: "#FCFCFC"
      }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: 600, color: "#444", marginBottom: "8px" }}>Securing Session</h2>
          <p style={{ color: "#888" }}>Redirecting to Kite login terminal...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
