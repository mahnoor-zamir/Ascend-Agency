import React, { useState, useEffect } from 'react';
import './TableSection.css';

const TableComponent = ({ tableType }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint;
        switch (tableType) {
          case 'publications':
            endpoint = '/api/publications';
            break;
          case 'television':
            endpoint = '/api/television';
            break;
          case 'listicles':
            endpoint = '/api/listicles';
            break;
          case 'socialpost':
            endpoint = '/api/socialposts';
            break;
          case 'bestsellers':
            endpoint = '/api/bestsellers';
            break;
          default:
            return;
        }
        const response = await fetch(endpoint);
        const result = await response.json();
        console.log(result); 
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [tableType]);

  const renderTable = () => {
    if (data.length === 0) {
      return <p>No data available</p>;
    }

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
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="publication-cell">
                      <img src="publication-logo.png" alt="Publication" />
                      <span>{row.publication_name}</span>
                    </td>
                    <td>{row.genres}</td>
                    <td>{row.price}</td>
                    <td>{row.da}</td>
                    <td>{row.dr}</td>
                    <td>{row.tat}</td>
                    <td>{row.region}</td>
                    <td>{row.sponsored ? 'Yes' : 'No'}</td>
                    <td>{row.indexed ? 'Yes' : 'No'}</td>
                    <td>{row.do_follow ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
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
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.affiliate}</td>
                    <td>{row.calls}</td>
                    <td>{row.state}</td>
                    <td>{row.market}</td>
                    <td>{row.program_name}</td>
                    <td>{row.location}</td>
                    <td>{row.time}</td>
                    <td>{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
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
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.publication}</td>
                    <td>{row.genres}</td>
                    <td>{row.price}</td>
                    <td>{row.da}</td>
                    <td>{row.dr}</td>
                    <td>{row.tat}</td>
                    <td>{row.region}</td>
                    <td>{row.sponsored ? 'Yes' : 'No'}</td>
                    <td>{row.indexed ? 'Yes' : 'No'}</td>
                    <td>{row.do_follow ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'bestsellers':
        return (
          <div className="table-section">
            <p className="table-header">SHOWING BESTSELLERS</p>
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
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.Publication || 'N/A'}</td>
                    <td>{row.Genres || 'N/A'}</td>
                    <td>{row.Price || 'N/A'}</td>
                    <td>{row.DA || 'N/A'}</td>
                    <td>{row.DR || 'N/A'}</td>
                    <td>{row.TAT || 'N/A'}</td>
                    <td>{row.Region || 'N/A'}</td>
                    <td>{row.Sponsored}</td>
                    <td>{row.Indexed}</td>
                    <td>{row.Do_Follow}</td>
                    <td>{row.Example || 'N/A'}</td>
                    <td>{row.Image && <img src={row.image} alt="Bestseller" /> || 'N/A'}</td>
                    <td>{row.Niches || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'socialpost':
        return (

          <div className="table-section">
            <p className="table-header">SHOWING SOCIAL POSTS</p>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Publication Name</th>
                  <th>Platform</th>
                  <th>Price</th>
                  <th>TAT</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.publication_name}</td>
                    <td>{row.platform || 'N/A'}</td>
                    <td>{row.price}</td>
                    <td>{row.tat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return <div>Select a tab to see the content.</div>;
    }
  };

  return renderTable();
};

export default TableComponent;
