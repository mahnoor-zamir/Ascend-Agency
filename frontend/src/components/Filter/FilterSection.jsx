import React, { useState } from 'react';
import './FilterSection.css';

function FilterSection() {
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(100000);

  const handleMinPriceChange = (e) => {
    const value = Math.min(e.target.value, maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(e.target.value, minPrice + 1);
    setMaxPrice(value);
  };

  return (
    <div className="filter-section">
      <div className="filter-group">
        <label className="filter-label">Publication name</label>
        <input type="text" placeholder="Search publication name" className="search-input" />
      </div>

      <div className="filter-group">
      <label className="filter-label">Sort by</label>
  
  <select className="sort-select">
    <option>Price (Asc)</option>
    <option>Price (Desc)</option>
    <option>Domain Authority (Asc)</option>
    <option>Domain Authority (Desc)</option>
    <option>Domain Rating (Asc)</option>
    <option>Domain Rating (Desc)</option>
  </select>
</div>



<div className="filter-group">
  <label className="filter-label">Select regions</label>
  <select className="regions-select">
    <option>California</option>
    <option>United States</option>
    <option>Utah</option>
    <option>New York</option>
    <option>Global</option>
    <option>Illinois</option>
    <option>Oregon</option>
    <option>Texas</option>
    <option>Georgia</option>
  </select>
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
