import React, { useState } from 'react';
import TabContent from './components/TabContent';
import Navbar from './components/Navbar';
import PricingHeader from './components/PricingHeader';
import FilterSection from './components/FilterSection';
import PRBundles from './components/prBundles';
import PrintPage from './components/PrintPage'; 
import SocialPostTab from './components/SocialPostTab';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('publications');

  const tabs = [
    { id: 'publications', label: 'Publications' },
    { id: 'television', label: 'Television' },
    { id: 'listicles', label: 'Listicles' },
    { id: 'bestSellers', label: 'Best Sellers' },
    { id: 'prBundles', label: 'PR Bundles' },
    { id: 'print', label: 'Print' },
    { id: 'socialPost', label: 'Social Post' }
  ];

  return (
    <div className="app">
      <Navbar />
      <PricingHeader />

      <nav className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="content">
        {/* Conditionally render the FilterSection based on the active tab */}
        {activeTab !== 'socialPost' && <FilterSection />}

        {/* Render the appropriate tab content */}
        {activeTab === 'prBundles' ? (
          <PRBundles />
        ) : activeTab === 'print' ? (
          <PrintPage />
        ) : activeTab === 'socialPost' ? (
          <SocialPostTab />
        ) : (
          <TabContent activeTab={activeTab} />
        )}
      </div>
    </div>
  );
}

export default App;
