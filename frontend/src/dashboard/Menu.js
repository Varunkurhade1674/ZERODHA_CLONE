import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const storedUsername = localStorage.getItem("username") || "User";
  const avatarText = storedUsername.slice(0, 2).toUpperCase();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ position: "relative" }}>
          <div className="avatar">{avatarText}</div>
          <p className="username">{storedUsername}</p>
          {isProfileDropdownOpen && (
            <div style={{
              position: "absolute",
              bottom: "45px",
              right: "0",
              backgroundColor: "#FFF",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              borderRadius: "6px",
              border: "1px solid #EEE",
              padding: "6px 0",
              zIndex: 100,
              minWidth: "130px",
            }}>
              <button 
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "left",
                  fontSize: "14px",
                  color: "#D32F2F",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#FEECEE"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              >
                Logout Kite
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
