// Modal.js
import React from 'react';
import './Modal.css'; // Optional: For styling

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Ascend Agency</h2>
        <p>Your modal content goes here.</p>
      </div>
    </div>
  );
};

export default Modal;

