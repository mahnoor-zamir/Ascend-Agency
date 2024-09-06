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

  // State for Select regions dropdown (multiple selection)
  const [showSelectDropdown, setShowSelectDropdown] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const toggleSelectDropdown = () => {
    setShowSelectDropdown(!showSelectDropdown);
  };

  const handleRegionSelect = (region) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter((r) => r !== region)); // Deselect region
    } else {
      setSelectedRegions([...selectedRegions, region]); // Add region to selection
    }
  };

  const isSelected = (region) => selectedRegions.includes(region);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);


  const types = [
    'New', 'Staff', 'Lowered', 'Raised', 'Press Release', 
    'Contributor', '6 Month Lifespan', 'Under Development', 
    'Pitch', 'Includes Social Posts', 'Guaranteed Impressions'
  ];
  const genres = [
    'Entertainment', 'Business', 'Tech', 'News', 'Luxury', 'Lifestyle', 
    'Music', 'Fashion', 'Web 3', 'Sports', 'Real Estate', 'Political', 
    'Gaming', 'Alcohol', 'Legal'
  ];

  const toggleGenreSelection = (genre) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const toggleTypeSelection = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };
  const [selectedSponsored, setSelectedSponsored] = useState(null);
  const [selectedDoFollow, setSelectedDoFollow] = useState(null);
  const [selectedIndexed, setSelectedIndexed] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedNiches, setSelectedNiches] = useState([]);

  const toggleNicheSelection = (niche) => {
    setSelectedNiches((prevNiches) =>
      prevNiches.includes(niche)
        ? prevNiches.filter((item) => item !== niche)
        : [...prevNiches, niche]
    );
  };

  const sponsoredOptions = ['Yes', 'No', 'Discrete'];
  const doFollowOptions = ['Yes', 'No'];
  const indexedOptions = ['Yes', 'Maybe', 'No'];
  const imageOptions = ['Yes', 'Maybe'];
  const niches = ['Health', 'Crypto', 'Cbd', 'Gambling', 'Erotic'];
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
          <div className="region-tags" onClick={toggleSelectDropdown}>
      {selectedRegions.length === 0 ? (
        <span className="placeholder">Select regions</span>
      ) : (
        selectedRegions.map((region) => (
          <div className="region-tag" key={region}>
            {region}
            <button onClick={(e) => handleRegionRemove(e, region)}>x</button>
          </div>
        ))
      )}
    </div>
          </button>
          {showSelectDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => handleRegionSelect("California")} className={isSelected("California") ? "selected" : ""}>California</li>
              <li onClick={() => handleRegionSelect("United States")} className={isSelected("United States") ? "selected" : ""}>United States</li>
              <li onClick={() => handleRegionSelect("Utah")} className={isSelected("Utah") ? "selected" : ""}>Utah</li>
              <li onClick={() => handleRegionSelect("New York")} className={isSelected("New York") ? "selected" : ""}>New York</li>
              <li onClick={() => handleRegionSelect("Global")} className={isSelected("Global") ? "selected" : ""}>Global</li>
              <li onClick={() => handleRegionSelect("Illinois")} className={isSelected("Illinois") ? "selected" : ""}>Illinois</li>
            </ul>
          )}
        </div>
      </div>

      {/* Select genres buttons */}
      <div className="filter-group">
        <label className="filter-label">Select genres</label>
        <div className="genres">
          {genres.map((genre) => (
            <button
              key={genre}
              className={`genre-button ${selectedGenres.includes(genre) ? 'selected' : ''}`}
              onClick={() => toggleGenreSelection(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Select Types */}
      <div className="filter-group">
        <label className="filter-label">Type</label>
        <div className="types">
          {types.map((type) => (
            <button
              key={type}
              className={`type-button ${selectedTypes.includes(type) ? 'selected' : ''}`}
              onClick={() => toggleTypeSelection(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className="filter-group">
  <label className="filter-label">Sponsored:</label>
  <div>
    {sponsoredOptions.map((option) => (
      <button
        key={option}
        className={`filter-options ${selectedSponsored === option ? 'active' : ''}`}
        onClick={() => setSelectedSponsored(option)}
      >
        {option}
      </button>
    ))}
  </div>
</div>

{/* Do Follow Filter */}
<div className="filter-group">
  <label className="filter-label">Do Follow:</label>
  <div>
    {doFollowOptions.map((option) => (
      <button
        key={option}
        className={`filter-options ${selectedDoFollow === option ? 'active' : ''}`}
        onClick={() => setSelectedDoFollow(option)}
      >
        {option}
      </button>
    ))}
  </div>
</div>

{/* Indexed Filter */}
<div className="filter-group">
  <label className="filter-label">Indexed:</label>
  <div>
    {indexedOptions.map((option) => (
      <button
        key={option}
        className={`filter-options ${selectedIndexed === option ? 'active' : ''}`}
        onClick={() => setSelectedIndexed(option)}
      >
        {option}
      </button>
    ))}
  </div>
</div>

{/* Image Filter */}
<div className="filter-group">
  <label className="filter-label">Image:</label>
  <div>
    {imageOptions.map((option) => (
      <button
        key={option}
        className={`filter-options ${selectedImage === option ? 'active' : ''}`}
        onClick={() => setSelectedImage(option)}
      >
        {option}
      </button>
    ))}
  </div>
</div>

{/* Niche Filter */}
<div className="filter-group">
  <label className="filter-label">Niche:</label>
  <div>
    {niches.map((niche) => (
      <button
        key={niche}
        className={`filter-options ${selectedNiches.includes(niche) ? 'active' : ''}`}
        onClick={() => toggleNicheSelection(niche)}
      >
        {niche}
      </button>
    ))}
  </div>
</div>

    </div>
  );
}

export default FilterSection;
