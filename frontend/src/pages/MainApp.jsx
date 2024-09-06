// App.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import PricingHeader from '../components/Header/PricingHeader.jsx';
import FilterSection from '../components/Filter/FilterSection.jsx';
import TabContent from '../components/TabContent/TabContent.jsx';
import PRBundles from '../components/PRBundles/PRBundles.jsx';
import PrintPage from '../components/PrintPage/PrintPage.jsx';
import TelevisionFilterSection from '../components/Filter/TelevisionFilter.jsx';
import SocialPostFilter from '../components/Filter/SocialPostFilter.jsx';
function MainApp() {
    const [activeTab, setActiveTab] = useState('publications');

    const tabs = [
        { id: 'publications', label: 'Publications' },
        { id: 'television', label: 'Television' },
        { id: 'listicles', label: 'Listicles' },
        { id: 'bestsellers', label: 'Best Sellers' },
        { id: 'prBundles', label: 'PR Bundles' },
        { id: 'print', label: 'Print' },
        { id: 'socialpost', label: 'Social Post' }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'publications':
                return (
                    <>
                        <FilterSection />
                        <TabContent activeTab={activeTab} />
                    </>
                );
            case 'television':
                return (
                    <>
                        {/* <div className="filter-section">
                            <div className="filter-group">
                                <label className="filter-label">Search by TV</label>
                                <input type="text" placeholder="Enter TV name" className="search-input" />
                            </div>
                            <p>Turn Around Time: 2-4 Weeks</p>
                            <p>Segment Times vary between 2-4 minutes</p>
                            <p>Zoom & In Person Options Available</p>
                        </div> */}
                        <TelevisionFilterSection/>
                        <TabContent activeTab={activeTab} />
                    </>
                );
            case 'listicles':
                return <TabContent activeTab={activeTab} />;
            case 'bestsellers':
                return <TabContent activeTab={activeTab} />;
            case 'prBundles':
                return <PRBundles />;
            case 'print':
                return <PrintPage />;
            case 'socialpost':
             
                return (
                  <>
                      {/* <div className="filter-section">
                          <div className="filter-group">
                              <label className="filter-label">Search by TV</label>
                              <input type="text" placeholder="Enter TV name" className="search-input" />
                          </div>
                          <p>Turn Around Time: 2-4 Weeks</p>
                          <p>Segment Times vary between 2-4 minutes</p>
                          <p>Zoom & In Person Options Available</p>
                      </div> */}
                      <SocialPostFilter/>
                      <TabContent activeTab={activeTab} />
                  </>
              );

            default:
                return null;
        } // <- Make sure this closing brace is here
    }; // <- Closing for renderContent function

    return (
        <div className="app">
            <PricingHeader />

            <nav>
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

export default MainApp;

