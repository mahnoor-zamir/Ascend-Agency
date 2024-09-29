import React from 'react';
import './FilterSection.css';
import PriceRangeFilter from './PriceRange';
function FilterSection({ filters, setFilters }) {
  const toggleSortDropdown = () => {
    setFilters(prevFilters => ({
      ...prevFilters,
      showSortDropdown: !filters.showSortDropdown,
    }));
  };
  const handlePriceRangeChange = ([min, max]) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      minPrice: min,
      maxPrice: max,
    }));
  };


  const handleSortSelect = (option) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      sortBy: option,
      showSortDropdown: false,
    }));
  };

  const toggleSelectDropdown = () => {
    setFilters(prevFilters => ({
      ...prevFilters,
      showSelectDropdown: !filters.showSelectDropdown,
    }));
  };

  const handleRegionSelect = (region) => {
    const updatedRegions = filters.regions.includes(region)
      ? filters.regions.filter((r) => r !== region)
      : [...filters.regions, region];
    setFilters(prevFilters => ({ ...prevFilters, regions: updatedRegions }));
  };

  const toggleGenreSelection = (genre) => {
    const updatedGenres = filters.genres.includes(genre)
      ? filters.genres.filter(g => g !== genre)
      : [...filters.genres, genre];
    setFilters(prevFilters => ({ ...prevFilters, genres: updatedGenres }));
  };

  const toggleTypeSelection = (type) => {
    const updatedTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type];
    setFilters(prevFilters => ({ ...prevFilters, types: updatedTypes }));
  };

  const toggleNicheSelection = (niche) => {
    const updatedNiches = filters.niches.includes(niche)
      ? filters.niches.filter(n => n !== niche)
      : [...filters.niches, niche];
    setFilters(prevFilters => ({ ...prevFilters, niches: updatedNiches }));
  };

  const sponsoredOptions = ['Yes', 'No', 'Discrete'];
  const doFollowOptions = ['Yes', 'No'];
  const indexedOptions = ['Yes', 'Maybe', 'No'];
  const imageOptions = ['Yes', 'Maybe'];

  const toggleSponsoredSelection = (option) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      sponsored: prevFilters.sponsored === option ? '' : option,
    }));
  };

  const toggleDoFollowSelection = (option) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      doFollow: prevFilters.doFollow === option ? '' : option,
    }));
  };

  const toggleIndexedSelection = (option) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      indexed: prevFilters.indexed === option ? '' : option,
    }));
  };

  const toggleImageSelection = (option) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      image: prevFilters.image === option ? '' : option,
    }));
  };
  const niches = ['Health', 'Crypto', 'Cbd', 'Gambling', 'Erotic'];

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

  const handlePublicationNameChange = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      publicationName: e.target.value,
    }));
  };

  return (
    <div className="filter-section">
      <div className="filter-group">
        <label className="filter-label">Publication name</label>
        <input 
          type="text" 
          placeholder="Search publication name" 
          className="search-input" 
          value={filters.publicationName || ''}
          onChange={handlePublicationNameChange}
        />
      </div>
      <div className="filter-group">
        <PriceRangeFilter
          minPrice={0}
          maxPrice={100000}
          onChange={handlePriceRangeChange}
        />
      </div>
      {/* Sort by Dropdown */}
      <div className="filter-group">
        <label className="filter-label">Sort by</label>
        <div className="custom-dropdown">
          <button className="dropdown-button" onClick={toggleSortDropdown}>
            {filters.sortBy}
          </button>
          {filters.showSortDropdown && (
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
            <div className="region-tags">
              {filters.regions.length === 0 ? (
                <span className="placeholder">Select regions</span>
              ) : (
                filters.regions.map((region) => (
                  <div className="region-tag" key={region}>
                    {region}
                    <button onClick={() => handleRegionSelect(region)}>x</button>
                  </div>
                ))
              )}
            </div>
          </button>
          {filters.showSelectDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => handleRegionSelect("California")} className={filters.regions.includes("California") ? "selected" : ""}>California</li>
              <li onClick={() => handleRegionSelect("United States")} className={filters.regions.includes("United States") ? "selected" : ""}>United States</li>
              <li onClick={() => handleRegionSelect("Utah")} className={filters.regions.includes("Utah") ? "selected" : ""}>Utah</li>
              <li onClick={() => handleRegionSelect("New York")} className={filters.regions.includes("New York") ? "selected" : ""}>New York</li>
              <li onClick={() => handleRegionSelect("Global")} className={filters.regions.includes("Global") ? "selected" : ""}>Global</li>
              <li onClick={() => handleRegionSelect("Illinois")} className={filters.regions.includes("Illinois") ? "selected" : ""}>Illinois</li>
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
              className={`genre-button ${filters.genres.includes(genre) ? 'selected' : ''}`}
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
              className={`type-button ${filters.types.includes(type) ? 'selected' : ''}`}
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
              className={`filter-options ${filters.sponsored === option ? 'active' : ''}`}
              onClick={() => toggleSponsoredSelection(option)}
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
              className={`filter-options ${filters.doFollow === option ? 'active' : ''}`}
              onClick={() => toggleDoFollowSelection(option)}
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
              className={`filter-options ${filters.indexed === option ? 'active' : ''}`}
              onClick={() => toggleIndexedSelection(option)}
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
              className={`filter-options ${filters.image === option ? 'active' : ''}`}
              onClick={() => toggleImageSelection(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Niche Filter */}
      {/* <div className="filter-group">
        <label className="filter-label">Niche:</label>
        <div>
          {niches.map((niche) => (
            <button
              key={niche}
              className={`filter-options ${filters.niches.includes(niche) ? 'active' : ''}`}
              onClick={() => toggleNicheSelection(niche)}
            >
              {niche}
            </button>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default FilterSection;
