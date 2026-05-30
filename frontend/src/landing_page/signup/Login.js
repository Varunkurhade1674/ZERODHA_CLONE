import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.emailOrUsername || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Invalid credentials. Please try again.");
      }

      const data = await response.json();
      
      // Store session data in local localStorage (port 3000)
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("email", data.email);

      // Redirect internally to the trading dashboard terminal on port 3000
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Modern HSL color design palette
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "75vh",
      backgroundColor: "#FBFBFB",
      fontFamily: "'Inter', sans-serif",
      padding: "20px",
    },
    card: {
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04), 0 1px 8px rgba(0, 0, 0, 0.02)",
      width: "100%",
      maxWidth: "420px",
      padding: "40px",
      border: "1px solid #EAEAEA",
      transition: "all 0.3s ease",
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "24px",
    },
    logo: {
      width: "140px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#444444",
      textAlign: "center",
      marginBottom: "8px",
    },
    subtitle: {
      fontSize: "14px",
      color: "#999999",
      textAlign: "center",
      marginBottom: "28px",
    },
    formGroup: {
      marginBottom: "20px",
      position: "relative",
    },
    label: {
      display: "block",
      fontSize: "13px",
      fontWeight: "500",
      color: "#666666",
      marginBottom: "6px",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "14px",
      borderRadius: "6px",
      border: "1px solid #CCCCCC",
      backgroundColor: "#FAFAFA",
      color: "#333333",
      outline: "none",
      transition: "border-color 0.2s, box-shadow 0.2s",
      boxSizing: "border-box",
    },
    inputFocus: {
      borderColor: "#387ED1",
      boxShadow: "0 0 0 3px rgba(56, 126, 209, 0.15)",
    },
    errorMsg: {
      backgroundColor: "#FFF3F3",
      border: "1px solid #FFC4C4",
      color: "#D32F2F",
      padding: "12px 16px",
      borderRadius: "6px",
      fontSize: "13px",
      marginBottom: "20px",
      textAlign: "center",
    },
    button: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#387ED1",
      color: "#FFFFFF",
      border: "none",
      borderRadius: "6px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.2s, transform 0.1s",
      marginTop: "10px",
    },
    buttonDisabled: {
      backgroundColor: "#A0C0E7",
      cursor: "not-allowed",
    },
    footerText: {
      marginTop: "24px",
      textAlign: "center",
      fontSize: "14px",
      color: "#777777",
    },
    link: {
      color: "#387ED1",
      textDecoration: "none",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logoContainer}>
          <img src="media/images/logo.svg" alt="Zerodha logo" style={styles.logo} />
        </div>
        <h2 style={styles.title}>Login to Kite</h2>
        <p style={styles.subtitle}>Enter your credentials to access your terminal</p>

        {error && <div style={styles.errorMsg}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email or Username</label>
            <input
              type="text"
              name="emailOrUsername"
              placeholder="e.g. varun3 or user@gmail.com"
              value={formData.emailOrUsername}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => {
                e.target.style.borderColor = styles.inputFocus.borderColor;
                e.target.style.boxShadow = styles.inputFocus.boxShadow;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#CCCCCC";
                e.target.style.boxShadow = "none";
              }}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => {
                e.target.style.borderColor = styles.inputFocus.borderColor;
                e.target.style.boxShadow = styles.inputFocus.boxShadow;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#CCCCCC";
                e.target.style.boxShadow = "none";
              }}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={
              loading ? { ...styles.button, ...styles.buttonDisabled } : styles.button
            }
            onMouseEnter={(e) => {
              if (!loading) e.target.style.backgroundColor = "#2C6BB6";
            }}
            onMouseLeave={(e) => {
              if (!loading) e.target.style.backgroundColor = "#387ED1";
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={styles.footerText}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
