import React, { useState, useEffect } from 'react';
import './TableSection.css';
import { processData } from '../../utils';
import { FaStar, FaRegStar, FaRegQuestionCircle, FaImage, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TableComponent = ({ tableType, filters }) => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `/api/${tableType}`;
        const response = await fetch(endpoint);
        const result = await response.json();
        const processedData = processData(result);
        setData(processedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [tableType, filters]);

  const filteredData = data.filter((row) => {
    if (tableType === 'publications') {
      if (filters.publicationName && !row.publication.toLowerCase().includes(filters.publicationName.toLowerCase())) return false;
      if (filters.regions.length > 0 && !filters.regions.some(region => row.region.includes(region))) return false;
      if (filters.genres.length > 0 && !filters.genres.some(genre => row.genres.includes(genre))) return false;
      if (filters.sponsored && filters.sponsored !== (row.sponsored ? 'Yes' : 'No')) return false;
      if (filters.doFollow && filters.doFollow !== (row.do_follow ? 'Yes' : 'No')) return false;
      if (filters.indexed && filters.indexed !== (row.indexed ? 'Yes' : 'No')) return false;
      if (filters.image && filters.image !== (row.image ? 'Yes' : 'No')) return false;
      if (filters.niches.length > 0 && !filters.niches.some(niche => row.niches.includes(niche))) return false;
    } else if (tableType === 'television') {
      if (filters.TVName && !row.affiliate.toLowerCase().includes(filters.TVName.toLowerCase())) return false;
    } else if (tableType === 'socialposts') {
      if (filters.PubName && !row.publication_name.toLowerCase().includes(filters.PubName.toLowerCase())) return false;
    }
    return true;
  });

  
  const sortedData = filteredData.sort((a, b) => {
    const getPrice = (price) => {
      if (price === undefined || price === null) return 0;
      return Number(price.replace(/[^0-9.-]+/g, ""));
    };
  
    if (filters.sortBy === 'Price (Asc)') return getPrice(a.price) - getPrice(b.price);
    if (filters.sortBy === 'Price (Desc)') return getPrice(b.price) - getPrice(a.price);
    if (filters.sortBy === 'Domain Authority (Asc)') return a.da - b.da;
    if (filters.sortBy === 'Domain Authority (Desc)') return b.da - a.da;
    if (filters.sortBy === 'Domain Rating (Asc)') return a.dr - b.dr;
    if (filters.sortBy === 'Domain Rating (Desc)') return b.dr - a.dr;
    return 0;
  });
  

  const toggleFavorite = (publicationName) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(publicationName)
        ? prevFavorites.filter((name) => name !== publicationName)
        : [...prevFavorites, publicationName]
    );
  };

  const renderTable = () => {
    if (sortedData.length === 0) {
      return <p>No data available</p>;
    }
    switch (tableType) {
      case 'publications':
        return (
          <div className="table-section">
            <p className="table-header">SHOWING PUBLICATION DATA</p>
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
                {sortedData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.publication || 'N/A'}</td>
                    <td>{row.genres?.join(', ') || 'N/A'}</td>
                    <td>{row.price || 'N/A'}</td>
                    <td>{row.da || 'N/A'}</td>
                    <td>{row.dr || 'N/A'}</td>
                    <td>{row.tat || 'N/A'}</td>
                    <td className='genres-cell'>
                      {row.region?.map((region, idx) => (
                        <div key={idx} className="region-item">{region}</div>
                      )) || 'N/A'}
                    </td>
                    <td>{row.sponsored ? 'Yes' : 'No'}</td>
                    <td>{row.indexed ? 'Yes' : 'No'}</td>
                    <td>{row.do_follow ? 'Yes' : 'No'}</td>
                    <td>{row.example || 'N/A'}</td>
                    <td>
                      {row.image ? (
                        <div className="image-tooltip">
                          <FaImage className="image-icon" />
                          <div className="tooltip-text">
                            <img src={row.image} alt="Publication" />
                          </div>
                        </div>
                      ) : 'N/A'}
                    </td>
                    <td>{row.niches || 'N/A'}</td>
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
                    <td>{row.Publication}</td>
                    <td>{row.Genres}</td>
                    <td>{row.Price}</td>
                    <td>{row.DA}</td>
                    <td>{row.DR}</td>
                    <td>{row.TAT}</td>
                    <td className='genres-cell'>
                      {row.Region.map((Region, idx) => (
                        <div key={idx} className="genre-item">{Region}</div>
                      ))}
                    </td>
                    <td>{row.Sponsored ? 'Yes' : 'No'}</td>
                    <td>{row.Indexed ? 'Yes' : 'No'}</td>
                    <td>{row.Do_Follow ? 'Yes' : 'No'}</td>
                    <td>{row.Example || 'N/A'}</td>
                    <td>
                      {row.Image ? (
                        <div className="image-tooltip">
                          <FaImage className="image-icon" />
                          <div className="tooltip-text">
                            <img src={row.Image} alt="Publication" />
                          </div>
                        </div>
                      ) : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'listicles':
        return (
          <div className="table-section">
            <p className="table-header">SHOWING {tableType.toUpperCase()}</p>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Publication</th>
                  <th>Genres</th>
                  <th>Price</th>
                  <th>DA
                    <div className="heading-tooltip">
                      <FaRegQuestionCircle className='question-icon' />
                      <div className="heading-text">
                        <p className='heading'>Domain Authority</p>
                        <p>Search engine ranking score (1 - 100)</p>
                      </div>
                    </div>
                  </th>
                  <th>DR
                    <div className="heading-tooltip">
                      <FaRegQuestionCircle className='question-icon' />
                      <div className="heading-text">
                        <p className='heading'>Domain Rating</p>
                        <p>Search engine ranking score (1 - 100)</p>
                      </div>
                    </div>
                  </th>
                  <th>TAT
                    <div className="heading-tooltip">
                      <FaRegQuestionCircle className='question-icon' />
                      <div className="heading-text">
                        <p className='heading'>Time at arrival</p>
                        <p>Estimated time to deliver</p>
                      </div>
                    </div>
                  </th>
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
                {sortedData.map((row, index) => (
                  <tr key={index}>
                    <td className="publication-cell">
                      <img src="publication-logo.png" alt="Publication" />
                      <span>{row.publication}</span>
                      {favorites.includes(row.publication) ? (
                        <FaStar
                          className={`star-icon ${favorites.includes(row.publication) ? 'favorite' : ''}`}
                          onClick={() => toggleFavorite(row.publication)}
                        />
                      ) : (
                        <FaRegStar
                          className={`star-icon ${favorites.includes(row.publication) ? 'favorite' : ''}`}
                          onClick={() => toggleFavorite(row.publication)}
                        />
                      )}
                    </td>
                    <td className='genres-cell'>
                      {row.genres.length <= 2 ? (
                        row.genres.map((genre, idx) => (
                          <div key={idx} className="genre-item">{genre}</div>
                        ))
                      ) : (
                        <div className="genre-tooltip">
                          {`${row.genres.length} genres `}
                          <FaRegQuestionCircle className='question-icon' />
                          <div className="tooltip-text">{row.genres.join(', ')}</div>
                        </div>
                      )}
                    </td>
                    <td>{row.price}</td>
                    <td>{row.da}</td>
                    <td>{row.dr}</td>
                    <td>{row.tat}</td>
                    <td className='genres-cell'>
                      {row.region.map((region, idx) => (
                        <div key={idx} className="genre-item">{region}</div>
                      ))}
                    </td>
                    <td>{row.sponsored ? 'Yes' : 'No'}</td>
                    <td>{row.indexed ? 'Yes' : 'No'}</td>
                    <td>{row.do_follow ? 'Yes' : 'No'}</td>
                    <td>{row.example || 'N/A'}</td>
                    <td>
                      {row.image ? (
                        <div className="image-tooltip">
                          <FaImage className="image-icon" />
                          <div className="tooltip-text">
                            <img src={row.image} alt="Publication" />
                          </div>
                        </div>
                      ) : 'N/A'}
                    </td>
                    <td>{row.niches || 'N/A'}</td>
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
                {sortedData.map((row, index) => (
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
      case 'socialposts':
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
                    <td className='platform-cell'>
                      <FaFacebook className={`platform-icon ${row.platform.includes('facebook') ? 'solid' : 'faded'}`} />
                      <FaInstagram className={`platform-icon ${row.platform.includes('instagram') ? 'solid' : 'faded'}`} />
                      <FaTwitter className={`platform-icon ${row.platform.includes('twitter') ? 'solid' : 'faded'}`} />
                      <FaLinkedin className={`platform-icon ${row.platform.includes('linkedIn') ? 'solid' : 'faded'}`} />
                    </td>
                    <td>{row.price || 'N/A'}</td>
                    <td>{row.tat || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return <>{renderTable()}</>;
};

export default TableComponent;
