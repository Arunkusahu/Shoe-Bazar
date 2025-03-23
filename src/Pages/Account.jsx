import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faMobileScreen,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../Style/AccountStyle.css";
import login from "../assets/Account/login.jpg";

export default function Account() {
  const [activeSection, setActiveSection] = useState("login");
  const [userType, setUserType] = useState("admin");

  return (
    <div className="account-container">
      <div className="left-sidebar">
        <nav>
          <ul>
            <li>
              <button className="sidebar-btn" onClick={() => setActiveSection("login")}>
                Log-in
              </button>
            </li>
            <li>
              <button className="sidebar-btn" onClick={() => setActiveSection("signup")}>
                Sign-up
              </button>
            </li>
            <li>
              <button className="sidebar-btn" onClick={() => setActiveSection("account")}>
                Edit Profile
              </button>
            </li>
            {/* <li>
              <button className="sidebar-btn" onClick={() => setActiveSection("helpCenter")}>
                Help Center</button>
            </li>
            <li>
              <button className="sidebar-btn" onClick={() => setActiveSection("termsConditions")}>
                Terms & Conditions</button>
            </li> */}
            <li>
              <button className="sidebar-btn" onClick={() => alert("Logout successfully!")}>
                Log-Out <FontAwesomeIcon icon={faSignOutAlt} className="icon" /></button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">

{/*         
        {activeSection === "helpCenter" && (
          <div className="help-center">
            <h2>Help Center</h2>
            <p>lorem100</p>
            <ul>
              <li>How to reset your password?</li>
              <li>How to update account details?</li>
              <li>Cotact support</li>
              li
            </ul>
          </div>
        )}

        {activeSection === "termsConditions" && (
          <div className="terms-conditions">
            <h2>Terms & Conditions</h2>
            <p>By using this platform, you agree to our terms and conditions.By using this platform, you agree to our terms and conditions.By using this platform, you agree to our terms and conditions.</p>
            <ul>
              <li>No spamming or abusive behavior.</li>
              <li>Respect user privacy and data protection policies.</li>
              <li>All transactions are subject to our refund policy.</li>
            </ul>
          </div>
        )} */}

        {activeSection !== "helpCenter" && activeSection !== "termsConditions" && (
          <div className="card">
            <div className="image-side">
              <img src={login} alt="Login Visual" />
            </div>
            <div className="form-side">
              <h1>
                {activeSection === "login"
                  ? "Login Form"
                  : activeSection === "signup"
                  ? "Sign Up"
                  : "Update Your Profile"}
              </h1>
              <div className="user-type-buttons">
                <button className={userType === "admin" ? "active-btn" : ""} onClick={() => setUserType("admin")}>
                  Admin
                </button>
                <button className={userType === "customer" ? "active-btn" : ""} onClick={() => setUserType("customer")}>
                  Customer
                </button>
              </div>
              {activeSection !== "login" && (
                <div className="input-group">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                  <input type="text" placeholder="Enter Your Name" />
                </div>
              )}
              <div className="input-group">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <input type="email" placeholder="Enter your Email" />
              </div>
              <div className="input-group">
                <FontAwesomeIcon icon={faLock} className="icon" />
                <input type="password" placeholder="Enter your Password" />
              </div>
              {activeSection === "signup" && (
                <>
                  <div className="input-group">
                    <FontAwesomeIcon icon={faMobileScreen} className="icon" />
                    <input type="number" placeholder="Enter Your Mobile Number" />
                  </div>
                  <div className="input-group">
                    <FontAwesomeIcon icon={faLock} className="icon" />
                    <input type="password" placeholder="Confirm Your Password" />
                  </div>
                </>
              )}
              <button className="form-btn" onClick={() => alert(`${activeSection} Successful!`)}>
                {activeSection === "login" ? "Log-in" : activeSection === "signup" ? "Sign-up" : "Update"}
              </button>
              {activeSection !== "account" && (
                <h3>
                  {activeSection === "login" ? "Don't have an account? " : "Already have an account? "}
                  <span onClick={() => setActiveSection(activeSection === "login" ? "signup" : "login")}>
                    {activeSection === "login" ? "Sign-up" : "Log-in"}
                  </span>
                </h3>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
