import React from 'react';
import './BusinessPage.css';

function SelectBusinessPage({ onSelectBusiness }) {
    return (
        <div className="select-container">
            {/* Logo similar to login section */}
            <div className="logo-container">
                <img 
                    src="../public/logos/HighRollerHorizontal.PNG" 
                    alt="Highroller Agency Logo" 
                    className="logo" 
                />
            </div>

            <div className="select-box">
                <h2 className="business-title" >Welcome to Highroller Agency</h2>
                <p className="select-subtitle" >Select a business</p>
                <button className="business-button" onClick={onSelectBusiness}>Ascend</button>
                <p className="or-text" >or</p>
                <p className="sign-in-another">
                    <a href="/login">Sign into another account</a>
                </p>
            </div>
        </div>
    );
}

export default SelectBusinessPage;
