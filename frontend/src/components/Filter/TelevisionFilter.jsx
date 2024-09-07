import React from 'react';
import './FilterSection.css';

function TelevisionFilterSection({ filters, setFilters }) {
    const handleTVNameChange = (e) => {
        console.log("TV Name Changed:", e.target.value);
        setFilters(prevFilters => ({
            ...prevFilters,
            TVName: e.target.value,
        }));
    };
    

    return (
        <div className="filter-section">
            <div className="filter-group">
                <label className="filter-label">Search by TV</label>
                <input
                    type="text"
                    placeholder="Enter TV name"
                    className="search-input"
                    value={filters.TVName || ''}
                    onChange={handleTVNameChange}
                />
            </div>
            <p>Turn Around Time: 2-4 Weeks</p>
            <p>Segment Times vary between 2-4 minutes</p>
            <p>Zoom & In Person Options Available</p>
        </div>
    );
}

export default TelevisionFilterSection;
