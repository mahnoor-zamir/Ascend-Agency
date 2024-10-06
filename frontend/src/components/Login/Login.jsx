import React, { useState } from "react";
import "./Login.css";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-wrapper">
      {/* Logo above the login container */}
      <div className="logo-container">
        <img
          src="/logos/HighRollerVertical.png"
          alt="Highroller Agency Logo"
          className="logo"
        />
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button type="submit" className="login-button">
              Log In
            </button>
            <button type="reset" className="help-button">
              Need Help
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
