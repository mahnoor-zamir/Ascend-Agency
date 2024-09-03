// App.js
import React, { useState } from 'react';
import SelectBusinessPage from './components/BusinessPage/BusinessPage.jsx';
import MainApp from './pages/MainApp.jsx';
import LoginPage from './components/Login/Login.jsx';
import Modal from './components/Modal/Modal.jsx'; // Import your Modal component
import './App.css';
<<<<<<< HEAD

=======
import Navbar from './components/Navbar/Navbar.jsx';
import PricingHeader from './components/Header/PricingHeader.jsx';
import FilterSection from './components/Filter/FilterSection.jsx';
import TabContent from './components/TabContent/TabContent.jsx';
import PRBundles from './components/PRBundles/PRBundles.jsx';
import PrintPage from './components/PrintPage/PrintPage.jsx'; 
import SocialPostTab from './components/SocialPost/SocialPostTab.jsx';
>>>>>>> 73fd54857538d2d9cc2839ac3ce1e637067d8571
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isBusinessSelected, setIsBusinessSelected] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

<<<<<<< HEAD
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
=======
  const tabs = [
    { id: 'publications', label: 'Publications' },
    { id: 'television', label: 'Television' },
    { id: 'listicles', label: 'Listicles' },
    { id: 'bestSellers', label: 'Best Sellers' },
    { id: 'prBundles', label: 'PR Bundles' },
    { id: 'print', label: 'Print' },
    { id: 'socialPost', label: 'Social Post' }
  ];
  const renderContent = () => {
    switch (activeTab) {
      case 'publications':
        return (
          <>
            <FilterSection />
            <TabContent activeTab={activeTab}/>
          </>
        );
      case 'television':
        return (
          <>
          <div className="filter-section">
            <div className="filter-group">
              <label className="filter-label">Search by TV</label>
              <input type="text" placeholder="Enter TV name" className="search-input" />
            </div>
            <p>Turn Around Time: 2-4 Weeks</p>
            <p>Segment Times vary between 2-4 minutes</p>
            <p>Zoom & In Person Options Available</p>
          </div>
          <TabContent activeTab={activeTab}/>
          </>
        );
      case 'listicles':
        return <TabContent activeTab={activeTab}/>;
      case 'bestSellers':
        return <TabContent activeTab={activeTab}/>;
      case 'prBundles':
          return <PRBundles />;
      case 'print':
        return <PrintPage />;
        case 'socialPost':
          return <SocialPostTab />;
      default:
        return null;
>>>>>>> 73fd54857538d2d9cc2839ac3ce1e637067d8571
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
