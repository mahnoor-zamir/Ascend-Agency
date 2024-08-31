import React from 'react';
import './TableSection.css';

const TableComponent = ({ tableType }) => {
  const renderTable = () => {
    switch (tableType) {
      case 'publications':
        return (
          <div className="table-section">
            <p className="table-header">SHOWING PUBLICATIONS</p>
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
                {/* Example row */}
                <tr>
                  <td className="publication-cell">
                    <img src="publication-logo.png" alt="Publication" />
                    <span>Publication Name</span>
                  </td>
                  <td>Genre</td>
                  <td>$300</td>
                  <td>32</td>
                  <td>39</td>
                  <td>1 Week</td>
                  <td>Location</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        );
      case 'television':
        return (
          <div className="table-section">
            <p className="table-header">SHOWING TELEVISION DATA</p>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Affiliate</th>
                
                  <th>CALLS</th>
                  <th>STATE</th>
                  <th>MARKET</th>
                  <th>PROGRAM NAME</th>
                  <th>LOCATION</th>
                  <th>TIME</th>
                  <th>RATE</th>
                  {/* Add other columns as needed */}
                </tr>
              </thead>
              <tbody>
                {/* Example row */}
                <tr>
                  <td>Channel Name</td>
                  <td>Genre</td>
                  <td>$500</td>
                  <td>5/5</td>
                  {/* Add other cells as needed */}
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        );
      // Add cases for other table types
      case 'listicles':
        return (
          <div className="table-section">
            <p className="table-header">SHOWING LISTICLES</p>
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
                </tr>
              </thead>
              <tbody>
                {/* Example row */}
                <tr>
                  <td>Listicle Publication</td>
                  <td>Genre</td>
                  <td>$400</td>
                  <td>75</td>
                  <td>80</td>
                  <td>2 Weeks</td>
                  <td>Region</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        );
      // Add more cases for other tables
      default:
        return <div>Select a tab to see the content.</div>;
    }
  };

  return renderTable();
};

export default TableComponent;
