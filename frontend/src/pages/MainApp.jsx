import React, { useState } from 'react';
import PricingHeader from '../components/Header/PricingHeader.jsx';
import FilterSection from '../components/Filter/FilterSection.jsx';
import TabContent from '../components/TabContent/TabContent.jsx';
import PRBundles from '../components/PRBundles/PRBundles.jsx';
import PrintPage from '../components/PrintPage/PrintPage.jsx';
import TelevisionFilterSection from '../components/Filter/TelevisionFilter.jsx';
import SocialPostFilter from '../components/Filter/SocialPostFilter.jsx';

function MainApp() {
    const [activeTab, setActiveTab] = useState('publications');

    const [filters, setFilters] = useState({
        sortBy: 'Price (Asc)',
        regions: [],
        genres: [],
        types: [],
        sponsored: null,
        doFollow: null,
        indexed: null,
        image: null,
        niches: [],
        TVName: '',
        PubName: '',
    });

    const tabs = [
        { id: 'publications', label: 'Publications' },
        { id: 'television', label: 'Television' },
        { id: 'listicles', label: 'Listicles' },
        { id: 'bestsellers', label: 'Best Sellers' },
        { id: 'prBundles', label: 'PR Bundles' },
        { id: 'print', label: 'Print' },
        { id: 'socialposts', label: 'Social Post' }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'publications':
                return (
                    <>
                        <FilterSection filters={filters} setFilters={setFilters} />
                        <TabContent activeTab={activeTab} filters={filters} />
                    </>
                );
            case 'television':
                return (
                    <>
                        <TelevisionFilterSection filters={filters} setFilters={setFilters} />
                        <TabContent activeTab={activeTab} filters={filters} />
                    </>
                );
            case 'socialposts':
                return (
                    <>
                        <SocialPostFilter filters={filters} setFilters={setFilters} />
                        <TabContent activeTab={activeTab} filters={filters} />
                    </>
                );
            case 'listicles':
                return <TabContent activeTab={activeTab} filters={filters} />;
            case 'bestsellers':
                return <TabContent activeTab={activeTab} filters={filters} />;
            case 'prBundles':
                return <PRBundles />;
            case 'print':
                return <PrintPage />;

            default:
                return null;
        }
    };

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
            <div className="line" style={{ backgroundColor: 'lightgrey', width: '98%', height: '1px', margin: '0 auto', marginTop: '10px' }}></div>
            <div className="content">{renderContent()}</div>
        </div>
    );
}

export default MainApp;
