import React from 'react';
import './Login.css';

function LoginPage() {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="logo">
                    <img src="your-logo-url" alt="AscendAgency" />
                </div>
                <h2 className="login-title">
    <span className="bold">ASCEND</span>AGENCY
</h2>

                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="login-button">Continue</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
