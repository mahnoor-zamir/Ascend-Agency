
import React, { useState } from 'react';
import './FilterSection.css';

function SocialPostFilter() {
    const genres = [
        'Entertainment', 'Business', 'Tech', 'News', 'Luxury', 'Lifestyle', 
        'Music', 'Fashion', 'Web 3', 'Sports', 'Real Estate', 'Political', 
        'Gaming', 'Alcohol', 'Legal'
      ];
      const [selectedGenres, setSelectedGenres] = useState([]);
      const toggleGenreSelection = (genre) => {
        setSelectedGenres(prev =>
          prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
        );
      };
    
    return (
        <>
            <div className="filter-section">
      <div className="filter-group">
        <label className="filter-label">Publication name</label>
        <input type="text" placeholder="Search publication name" className="search-input" />
      </div>
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
      </div>
        </>
    );
}

export default SocialPostFilter;




