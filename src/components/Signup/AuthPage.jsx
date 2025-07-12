import React, { useState } from "react";
import "./AuthPage.css";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button
          className={activeTab === "login" ? "active" : ""}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={activeTab === "signup" ? "active" : ""}
          onClick={() => setActiveTab("signup")}
        >
          Sign Up
        </button>
      </div>

      {activeTab === "login" && (
        <form className="auth-form">
          <input type="text" placeholder="Username or Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      )}

      {activeTab === "signup" && (
        <form className="auth-form">
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Set Password" required />
          <input type="password" placeholder="Retype Password" required />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default AuthPage;
