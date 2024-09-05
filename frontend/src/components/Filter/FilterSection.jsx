import React, { useState } from 'react';
import './FilterSection.css';

function FilterSection() {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Price (Asc)");

  const toggleSortDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setShowSortDropdown(false);
  };

  // State for Select regions dropdown
  const [showSelectDropdown, setShowSelectDropdown] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("California");

  const toggleSelectDropdown = () => {
    setShowSelectDropdown(!showSelectDropdown);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setShowSelectDropdown(false);
  };


  return (
    <div className="filter-section">
      <div className="filter-group">
        <label className="filter-label">Publication name</label>
        <input type="text" placeholder="Search publication name" className="search-input" />
      </div>

      {/* Sort by Dropdown */}
      <div className="filter-group">
        <label className="filter-label">Sort by</label>
        <div className="custom-dropdown">
          <button className="dropdown-button" onClick={toggleSortDropdown}>
            {selectedSort}
          </button>
          {showSortDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => handleSortSelect("Price (Asc)")}>Price (Asc)</li>
              <li onClick={() => handleSortSelect("Price (Desc)")}>Price (Desc)</li>
              <li onClick={() => handleSortSelect("Domain Authority (Asc)")}>Domain Authority (Asc)</li>
              <li onClick={() => handleSortSelect("Domain Authority (Desc)")}>Domain Authority (Desc)</li>
              <li onClick={() => handleSortSelect("Domain Rating (Asc)")}>Domain Rating (Asc)</li>
              <li onClick={() => handleSortSelect("Domain Rating (Desc)")}>Domain Rating (Desc)</li>
            </ul>
          )}
        </div>
      </div>

      {/* Select regions Dropdown */}
      <div className="filter-group">
        <label className="filter-label">Select regions</label>
        <div className="custom-dropdown">
          <button className="dropdown-button" onClick={toggleSelectDropdown}>
            {selectedRegion}
          </button>
          {showSelectDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => handleRegionSelect("California")}>California</li>
              <li onClick={() => handleRegionSelect("United States")}>United States</li>
              <li onClick={() => handleRegionSelect("Utah")}>Utah</li>
              <li onClick={() => handleRegionSelect("New York")}>New York</li>
              <li onClick={() => handleRegionSelect("Global")}>Global</li>
              <li onClick={() => handleRegionSelect("Illinois")}>Illinois</li>
            </ul>
          )}
        </div>
      </div>

      {/* Select genres buttons */}
      <div className="filter-group">
        <label className="filter-label">Select genres</label>
        <div className="genres">
          <button className="genre-button">News</button>
          <button className="genre-button">Business</button>
          <button className="genre-button">Entertainment</button>
          <button className="genre-button">Luxury</button>
          <button className="genre-button">Lifestyle</button>
          <button className="genre-button">Tech</button>
          <button className="genre-button">Music</button>
          <button className="genre-button">Fashion</button>
          <button className="genre-button">Sports</button>
          <button className="genre-button">Real Estate</button>
          <button className="genre-button">Political</button>
          <button className="genre-button">Gaming</button>
        </div>
      </div>
   

      <div className="filter-group">
        <label className="filter-label">Select genres</label>
        <div className="genres">
          <button className="genre-button">News</button>
          <button className="genre-button">Business</button>
          <button className="genre-button">Entertainment</button>
          <button className="genre-button">Luxury</button>
          <button className="genre-button">Lifestyle</button>
          <button className="genre-button">Tech</button>
          <button className="genre-button">Music</button>
          <button className="genre-button">Fashion</button>
          <button className="genre-button">Sports</button>
          <button className="genre-button">Real Estate</button>
          <button className="genre-button">Political</button>
          <button className="genre-button">Gaming</button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;