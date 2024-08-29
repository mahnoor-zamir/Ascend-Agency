// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import PricingHeader from './components/Header/PricingHeader.jsx';
import FilterSection from './components/Filter/FilterSection.jsx';
import TabContent from './components/TabContent/TabContent.jsx';
import PRBundles from './components/PRBundles/PRBundles.jsx';
import PrintPage from './components/PrintPage/PrintPage.jsx'; 
import SocialPostTab from './components/SocialPost/SocialPostTab.jsx';
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
    }
  };
  return (
    <div className="app">
      <Navbar />
      <PricingHeader />

      <nav >
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
     
      <div className="content">{renderContent()}</div>
      
    </div>
  );
}

export default App;
