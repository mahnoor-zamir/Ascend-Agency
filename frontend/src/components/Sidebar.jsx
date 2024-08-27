// import React from 'react';
// import './Sidebar.css';

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <input type="text" placeholder="Search publication name" className="search-input" />
//       <div className="sort-section">
//         <label htmlFor="sort">Sort by</label>
//         <select id="sort" className="sort-dropdown">
//           <option value="priceAsc">Price (Asc)</option>
//           <option value="priceDesc">Price (Desc)</option>
//         </select>
//       </div>
//       <div className="price-range">
//         <label htmlFor="price">Price range</label>
//         <input type="range" min="0" max="100000" className="price-slider" />
//       </div>
//       <div className="filter-section">
//         <label>Select regions</label>
//         <select className="filter-dropdown">
//           <option value="usa">United States</option>
//           <option value="uk">United Kingdom</option>
//           <option value="global">Global</option>
//         </select>
//       </div>
//       <div className="genres-section">
//         <label>Select genres</label>
//         <div className="genres">
//           <button>News</button>
//           <button>Business</button>
//           <button>Entertainment</button>
//           <button>Luxury</button>
//           <button>Lifestyle</button>
//           <button>Tech</button>
//           <button>Music</button>
//           <button>Fashion</button>
//           <button>Gaming</button>
//           <button>Sports</button>
//           <button>Real Estate</button>
//           <button>Political</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
import React from 'react';
import './FilterSection.css';

function Sidebar() {
  return (
    <div className="filter-section">
      <div className="filter-group">
        <label>Publication name</label>
        <input type="text" placeholder="Search publication name" className="search-input" />
      </div>

      <div className="filter-group">
        <label>Sort by</label>
        <select className="sort-select">
          <option>Price (Asc)</option>
          <option>Price (Desc)</option>
          <option>DA</option>
          <option>DR</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Price range</label>
        <div className="price-range">
          <input type="range" min="0" max="100000" className="price-slider" />
          <div className="price-values">
            <span>$0</span>
            <span>$100,000</span>
          </div>
        </div>
      </div>

      <div className="filter-group">
        <label>Select regions</label>
        <select className="regions-select">
          <option>United States</option>
          <option>Europe</option>
          <option>Asia</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Select genres</label>
        <div className="genres">
          <label>
            <input type="checkbox" />
            News
          </label>
          <label>
            <input type="checkbox" />
            Business
          </label>
          <label>
            <input type="checkbox" />
            Entertainment
          </label>
          <label>
            <input type="checkbox" />
            Luxury
          </label>
          <label>
            <input type="checkbox" />
            Lifestyle
          </label>
          <label>
            <input type="checkbox" />
            Tech
          </label>
          <label>
            <input type="checkbox" />
            Music
          </label>
          <label>
            <input type="checkbox" />
            Fashion
          </label>
          <label>
            <input type="checkbox" />
            Sports
          </label>
          <label>
            <input type="checkbox" />
            Real Estate
          </label>
          <label>
            <input type="checkbox" />
            Political
          </label>
          <label>
            <input type="checkbox" />
            Gaming
          </label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
