import React from 'react';
import './TableSection.css';

const TableSection = () => {
  return (
    <div className="table-section">
      <p className="table-header">SHOWING 930 OF 930 PUBLICATIONS</p>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Publication</th>
            <th>Genres</th>
            <th>Price</th>
            <th>DA</th>
            <th>DR</th>
            <th>TAT</th>
            <th>Region</th>
            <th>Sponsored</th>
            <th>Indexed</th>
            <th>Do Follow</th>
            <th>Example</th>
            <th>Image</th>
            <th>Niches</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="publication-cell">
              <img src="publication-logo.png" alt="Newport Beach Magazine" />
              <span>Newport Beach Magazine</span>
            </td>
            <td>News</td>
            <td>$300</td>
            <td>32</td>
            <td>39</td>
            <td>1 Week</td>
            <td>California, United States</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
              <img src="example-icon.png" alt="Example" />
            </td>
            <td>
              <img src="image-icon.png" alt="Image" />
            </td>
            <td>
              <img src="niche-icons.png" alt="Niches" />
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default TableSection;
