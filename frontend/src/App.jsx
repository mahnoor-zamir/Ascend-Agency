// App.js
import React, { useState, useEffect } from 'react';
import SelectBusinessPage from './components/BusinessPage/BusinessPage.jsx';
import MainApp from './pages/MainApp.jsx';
import LoginPage from './components/Login/Login.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Modal from './components/Modal/Modal.jsx'; // Import your Modal component
import './App.css';


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isBusinessSelected, setIsBusinessSelected] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

    useEffect(() => {
        const authState = localStorage.getItem('isAuthenticated');
        if (authState === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (email, password) => {
        // Replace with your own authentication logic
        if (email === 'your-email@example.com' && password === 'your-password') {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
        } else {
            alert('Invalid email or password');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setIsBusinessSelected(false);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('isBusinessSelected');
    };

    const handleBusinessSelection = () => {
        setIsBusinessSelected(true);
        setIsModalOpen(true); // Open the modal when a business is selected
        localStorage.setItem('isBusinessSelected', 'true');
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    useEffect(() => {
        const authState = localStorage.getItem('isAuthenticated');
        const businessState = localStorage.getItem('isBusinessSelected');
        if (authState === 'true') {
            setIsAuthenticated(true);
        }
        if (businessState === 'true') {
            setIsBusinessSelected(true);
        }
    }, []);

    if (!isAuthenticated) {
        return <LoginPage onLogin={handleLogin} />;
    }

    if (!isBusinessSelected) {
        return <SelectBusinessPage onSelectBusiness={handleBusinessSelection} />;
    }

    return (
        <div>
            <Navbar onLogout={handleLogout} />
            <MainApp />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> {/* Modal component */}
        </div>
    );
}

export default App;