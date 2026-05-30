import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
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
    if (!formData.username || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Registration failed. Try a different username/email.");
      }

      const data = await response.json();
      
      setSuccess(true);
      
      // Store session data in local localStorage (port 3000)
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("email", data.email);

      // Redirect internally to the trading dashboard terminal on port 3000 after a short delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Harmonious modern visual design
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
    successMsg: {
      backgroundColor: "#E8F5E9",
      border: "1px solid #C8E6C9",
      color: "#2E7D32",
      padding: "12px 16px",
      borderRadius: "6px",
      fontSize: "13px",
      marginBottom: "20px",
      textAlign: "center",
      fontWeight: "500",
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
        <h2 style={styles.title}>Join Kite</h2>
        <p style={styles.subtitle}>Open a modern account for seamless trading</p>

        {error && <div style={styles.errorMsg}>{error}</div>}
        {success && (
          <div style={styles.successMsg}>
            Registration Successful! Redirecting to Terminal... 🚀
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              placeholder="e.g. varun3"
              value={formData.username}
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
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. varun3@gmail.com"
              value={formData.email}
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
              placeholder="Minimum 6 characters"
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
            disabled={loading || success}
            style={
              loading || success
                ? { ...styles.button, ...styles.buttonDisabled }
                : styles.button
            }
            onMouseEnter={(e) => {
              if (!loading && !success) e.target.style.backgroundColor = "#2C6BB6";
            }}
            onMouseLeave={(e) => {
              if (!loading && !success) e.target.style.backgroundColor = "#387ED1";
            }}
          >
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login to Kite
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;