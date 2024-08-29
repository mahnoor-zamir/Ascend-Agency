import React from 'react';
import './BusinessPage.css';

function SelectBusinessPage() {
  return (
    <div className="select-container">
      <div className="select-box">
        <h2 className="business-title">
          <span className="bold">ASCEND</span>AGENCY
        </h2>
        <p className="select-subtitle">Select a business</p>
        <button className="business-button">Ascend</button>
        <p className="or-text">or</p>
        <p className="sign-in-another">
          <a href="/login">Sign into another account</a>
        </p>
      </div>
    </div>
  );
}

export default SelectBusinessPage;
