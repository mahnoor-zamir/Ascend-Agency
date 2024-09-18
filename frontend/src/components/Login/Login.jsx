import React, { useState } from 'react';
import './Login.css';

function LoginPage({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="login-wrapper">
            {/* Logo above the login container */}
            <div className="logo-container">
                <img 
                    src="../public/logos/HighRollerHorizontal.PNG" 
                    alt="Highroller Agency Logo" 
                    className="logo" 
                />
            </div>

            <div className="login-container">
                <div className="welcome-text">
                    <h1 className="bold">Welcome to Highroller Agency</h1>
                </div>
                
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" style={{ color: "black" }}>EMAIL</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={{ color: "black" }}>PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">Continue</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
