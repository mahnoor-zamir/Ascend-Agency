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
            <p className='disc'>Turn Around Time: 2-4 Weeks</p>
            <p className='disc'>Segment Times vary between 2-4 minutes</p>
            <p className='disc'>Zoom & In Person Options Available</p>
        </div>
    );
}

export default TelevisionFilterSection;
