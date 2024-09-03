// App.js
import React, { useState } from 'react';
import SelectBusinessPage from './components/BusinessPage/BusinessPage.jsx';
import MainApp from './pages/MainApp.jsx';
import LoginPage from './components/Login/Login.jsx';
import Modal from './components/Modal/Modal.jsx'; // Import your Modal component
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isBusinessSelected, setIsBusinessSelected] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

    const handleLogin = (email, password) => {
        // Replace with your own authentication logic
        if (email === 'your-email@example.com' && password === 'your-password') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid email or password');
        }
    };

    const handleBusinessSelection = () => {
        setIsBusinessSelected(true);
        setIsModalOpen(true); // Open the modal when a business is selected
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    if (!isAuthenticated) {
        return <LoginPage onLogin={handleLogin} />;
    }

    if (!isBusinessSelected) {
        return <SelectBusinessPage onSelectBusiness={handleBusinessSelection} />;
    }

    return (
        <div>
            <MainApp />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> {/* Modal component */}
        </div>
    );
}

export default App;
