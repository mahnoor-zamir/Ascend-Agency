import React from 'react';
import './FilterSection.css';

function SocialPostFilter({ filters, setFilters }) {
    const handlePubNameChange = (e) => {
        console.log("Pub Name Changed:", e.target.value); 
        setFilters(prevFilters => ({
            ...prevFilters,
            PubName: e.target.value,
        }));
    };
    
    return (
        <div className="filter-section">
            <div className="filter-group">
                <label className="filter-label">Publication Name</label>
                <input
                    type="text"
                    placeholder="Enter publication name"
                    className="search-input"
                    value={filters.PubName || ''}
                    onChange={handlePubNameChange}
                />
            </div>
        </div>
    );
}

export default SocialPostFilter;
