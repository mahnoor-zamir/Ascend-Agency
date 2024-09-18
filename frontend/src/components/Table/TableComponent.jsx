import React, { useState, useEffect } from 'react';
import './TableSection.css';
import { processData } from '../../utils';
import { FaStar, FaRegStar, FaRegQuestionCircle, FaImage, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TableComponent = ({ tableType, filters }) => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  function showImage(e, imageUrl) {
    const previewDiv = document.getElementById('image-preview');
    previewDiv.innerHTML = `<img src="${imageUrl}" alt="Full Image" />`;
    previewDiv.style.display = 'block';
  }

  function hideImage() {
    const previewDiv = document.getElementById('image-preview');
    previewDiv.style.display = 'none';
  }

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
      console.log('Filtering with PubName:', filters.publicationName);
      console.log('Row publication_name:', row.publication);
      // Publication name filter (case-insensitive)
      if (filters.publicationName && !row.publication.toLowerCase().includes(filters.publicationName.toLowerCase())) return false;

      // Regions filter (check if at least one region matches, case-insensitive)
      if (filters.regions.length > 0 && !filters.regions.some(region => row.region.some(r => r.toLowerCase().includes(region.toLowerCase())))) return false;

      // Genres filter (check if at least one genre matches)
      if (filters.genres.length > 0 && !filters.genres.some(genre => row.genres.includes(genre))) return false;

      // Sponsored filter (checking against 'Yes'/'No' or other possible values)
      if (filters.sponsored && filters.sponsored !== row.sponsored) return false;

      // DoFollow filter (checking against 'Yes'/'No' or other possible values)
      if (filters.doFollow && filters.doFollow !== row.do_follow) return false;

      // Indexed filter (checking against 'Yes'/'No' or other possible values)
      if (filters.indexed && filters.indexed !== row.indexed) return false;

      // Image filter
      if (filters.image && filters.image !== (row.example_image ? 'Yes' : 'No')) return false;

      // Niches filter (check if at least one niche matches)
      if (filters.niches.length > 0 && !filters.niches.some(niche => row.niches.includes(niche))) return false;
    }
    else if (tableType === 'television') {
      if (filters.TVName && !row.affiliate.toLowerCase().includes(filters.TVName.toLowerCase())) return false;
    } else if (tableType === 'socialposts') {
      console.log('Filtering with PubName:', filters.PubName);
      console.log('Row publication_name:', row.publication_name);

      // The filter for the socialposts table
      if (filters.PubName && !row.publication_name.toLowerCase().includes(filters.PubName.toLowerCase())) return false;
    }
    return true;
  });

  const sortedData = filteredData.sort((a, b) => {
    const getPrice = (price) => {
      if (price === undefined || price === null) return 0;
      if (typeof price === 'number') return price;
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
            <p className="table-header" style={{ color: "white" }}>SHOWING {filteredData.length} OF {data.length} PUBLICATIONS</p>
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
                        <p className='heading'>Turnaround Time</p>
                        <p>Estimated time to deliver</p>
                      </div>
                    </div>
                  </th>
                  <th>Region</th>
                  <th>Sponsored</th>
                  <th>Indexed</th>
                  <th>Do Follow</th>
                  <th>Example</th>
                  {/* <th>Image</th>
                  <th>Niches</th> */}
                </tr>
              </thead>
              <tbody>
                {sortedData.map((row, index) => (
                  <tr key={index}>
                    <td style={{ width: '200px' }} className="publication-cell">
                      <img src={`${row.publication_image_url}`} alt="Publication" />
                      <a
                        href={row.publication_url}
                        target="_blank"  // This will open the link in a new tab
                        rel="noopener noreferrer"
                      >
                        <span>{row.publication}</span>
                      </a>
                      {favorites.includes(row.publication_url) ? (
                        <FaStar
                          className={`star-icon ${favorites.includes(row.publication_url) ? 'favorite' : ''}`}
                          onClick={() => toggleFavorite(row.publication_url)}
                        />
                      ) : (
                        <FaRegStar
                          className={`star-icon ${favorites.includes(row.publication_url) ? 'favorite' : ''}`}
                          onClick={() => toggleFavorite(row.publication_url)}
                        />
                      )}
                    </td>
                    <td className='genres-cell'>
                      {row.genres.length <= 2 ? (
                        row.genres.map((genre, idx) => (
                          <div key={idx}>
                            <div className="genre-tooltip">
                              {genre}
                              <FaRegQuestionCircle className='question-icon' />
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="genre-tooltip">
                          {`${row.genres.length} genres`}
                          <FaRegQuestionCircle className='question-icon' style={{ marginLeft: '8px' }} />
                          <div className="tooltip-text">{row.genres.join(', ')}</div>
                        </div>
                      )}
                    </td>
                    <td className="price-cell" style={{ width: '100px' }}>
                      {row.price.split(/(Top \d+:.*?)(?=Top|$)/g).map((pricePart, index) => (
                        pricePart.trim() && <div key={index}>{pricePart}</div>
                      ))}
                    </td>
                    <td>{row.da || 'N/A'}</td>
                    <td>{row.dr || 'N/A'}</td>
                    <td>{row.tat || 'N/A'}</td>
                    <td className='genres-cell'>
                      {row.region.map((region, idx) => (
                        <div key={idx} className="genre-item">{region}</div>
                      ))}
                    </td>
                    <td>{row.sponsored}</td>
                    <td>{row.indexed}</td>
                    <td>{row.do_follow}</td>

                    <td>
                      {row.example_image ? (
                        <div className="image-tooltip">
                          {/* Click event to open full-size image in a new tab */}
                          <a href={row.example_image} target="_blank" rel="noopener noreferrer">
                            <FaImage className="image-icon" />
                          </a>
                          {/* Hover event to display large image preview */}
                          <div className="tooltip-text" style={{ position: 'absolute', top: '100%', left: '0', zIndex: '1000' }}>
                            <img src={row.example_image} alt="Example" style={{ width: '300px', height: 'auto', border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </td>
                    {/* <td>

                      <div className="heading-tooltip">
                        <FaImage className="image-icon" />
                        <div className="heading-text">

                          <p>No Explanation</p>
                        </div>
                      </div>
                    </td>
                    <td>{row.niches || 'N/A'}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'bestsellers':
        return (
          <div className="table-section">
            <p className="table-header" style={{ color: "white" }}>SHOWING {filteredData.length} OF {data.length} BESTSELLERS</p>
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
                        <p className='heading'>Turnaround Time</p>
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
                {data.map((row, index) => (
                  <tr key={index}>

                    <td style={{ width: '400px' }} className="publication-cell">
                      <img src={`${row.publication_image_url}`} alt="Publication" />
                      <a
                        href={row.publication_url}
                        target="_blank"  // This will open the link in a new tab
                        rel="noopener noreferrer"
                      >
                        <span>{row.publication}</span>
                      </a>
                      {favorites.includes(row.publication_url) ? (
                        <FaStar
                          className={`star-icon ${favorites.includes(row.publication_url) ? 'favorite' : ''}`}
                          onClick={() => toggleFavorite(row.publication_url)}
                        />
                      ) : (
                        <FaRegStar
                          className={`star-icon ${favorites.includes(row.publication_url) ? 'favorite' : ''}`}
                          onClick={() => toggleFavorite(row.publication_url)}
                        />
                      )}
                    </td>
                    <td className='genres-cell'>
                      {row.genres.length <= 2 ? (
                        row.genres.map((genre, idx) => (
                          <div key={idx}>
                            <div className="genre-tooltip">
                              {genre}
                              <FaRegQuestionCircle className='question-icon' />
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="genre-tooltip">
                          {`${row.genres.length} genres`}
                          <FaRegQuestionCircle className='question-icon' style={{ marginLeft: '8px' }} />
                          <div className="tooltip-text">{row.genres.join(', ')}</div>
                        </div>
                      )}
                    </td>
                    <td className="price-cell" style={{ width: '100px' }}>
                      {row.price}
                    </td>
                    <td>{row.da}</td>
                    <td>{row.dr}</td>
                    <td>{row.tat}</td>
                    <td className='genres-cell'>
                      {row.region.map((region, idx) => (
                        <div key={idx} className="genre-item">{region}</div>
                      ))}
                    </td>
                    <td>{row.sponsored}</td>
                    <td>{row.indexed}</td>
                    <td>{row.do_follow}</td>
                    <td>
                      {row.example_image ? (
                        <div className="image-tooltip">
                          {/* Click event to open full-size image in a new tab */}
                          <a href={row.example_image} target="_blank" rel="noopener noreferrer">
                            <FaImage className="image-icon" />
                          </a>
                          {/* Hover event to display large image preview */}
                          <div className="tooltip-text" style={{ position: 'absolute', top: '100%', left: '0', zIndex: '1000' }}>
                            <img src={row.example_image} alt="Example" style={{ width: '300px', height: 'auto', border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
                          </div>
                        </div>
                      ) : (
                        'N/A'
                      )}
                    </td>
                    <td>

                      <div className="heading-tooltip">
                        <FaImage className="image-icon" />
                        <div className="heading-text">

                          <p>No Explanation</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="niche-icons">
                        {/* Niche icons using Font Awesome or custom SVG */}
                        <span className="niche-icon adult"><i className="fas fa-exclamation-circle"></i></span>
                        <span className="niche-icon heart"><i className="fas fa-heart"></i></span>
                        <span className="niche-icon cannabis"><i className="fas fa-cannabis"></i></span>
                        <span className="niche-icon circle"><i className="fas fa-sync"></i></span>
                        <span className="niche-icon dots"><i className="fas fa-ellipsis-h"></i></span>
                      </div>
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
            <p className="table-header" style={{ color: "white" }}>SHOWING {filteredData.length} OF {data.length} Listicles</p>
            
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Publication</th>
                  <th>Genres</th>
                  <th >Price</th>
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
                        <p className='heading'>Turnaround Time</p>
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
                </tr>
              </thead>
              <tbody>
                {sortedData.map((row, index) => (
                  <tr key={index}>
                    <td style={{ width: '250px' }} className="publication-cell">
                      <img src={`${row.publication_image_url}`} alt="Publication" />
                      <a
                        href={row.publication_url}
                        target="_blank"  // This will open the link in a new tab
                        rel="noopener noreferrer"
                      >
                        <span>{row.publication}</span>
                      </a>
                      {favorites.includes(row.publication_url) ? (
                        <FaStar
                          className={`star-icon ${favorites.includes(row.publication_url) ? 'favorite' : ''}`}
                          onClick={() => toggleFavorite(row.publication_url)}
                        />
                      ) : (
                        <FaRegStar
                          className={`star-icon ${favorites.includes(row.publication_url) ? 'favorite' : ''}`}
                          onClick={() => toggleFavorite(row.publication_url)}
                        />
                      )}
                    </td>
                    <td className='genres-cell'>
                      {row.genres.length <= 2 ? (
                        row.genres.map((genre, idx) => (
                          <div key={idx}>
                            <div className="genre-tooltip">
                              {genre}
                              <FaRegQuestionCircle className='question-icon' />
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="genre-tooltip">
                          {`${row.genres.length} genres`}
                          <FaRegQuestionCircle className='question-icon' style={{ marginLeft: '8px' }} />
                          <div className="tooltip-text">{row.genres.join(', ')}</div>
                        </div>
                      )}
                    </td>
                    <td className="price-cell" style={{ width: '100px' }}>
                      {row.price.split(/(Top \d+:.*?)(?=Top|$)/g).map((pricePart, index) => (
                        pricePart.trim() && <div key={index}>{pricePart}</div>
                      ))}
                    </td>

                    <td>{row.da}</td>
                    <td>{row.dr}</td>
                    <td>{row.tat}</td>
                    <td className='genres-cell'>
                      {row.region.map((region, idx) => (
                        <div key={idx} className="genre-item">{region}</div>
                      ))}
                    </td>
                    <td>{row.sponsored}</td>
                    <td>{row.indexed}</td>
                    <td>{row.do_follow}</td>
                    <td>
                      {row.example_image ? (
                        <div className="image-tooltip">
                          {/* Click event to open full-size image in a new tab */}
                          <a href={row.example_image} target="_blank" rel="noopener noreferrer">
                            <FaImage className="image-icon" />
                          </a>
                          {/* Hover event to display large image preview */}
                          <div className="tooltip-text" style={{ position: 'absolute', top: '100%', left: '0', zIndex: '1000' }}>
                            <img src={row.example_image} alt="Example" style={{ width: '300px', height: 'auto', border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
                          </div>
                        </div>
                      ) : (
                        'N/A'
                      )}
                    </td>
                    <td>

                      <div className="heading-tooltip">
                        <FaImage className="image-icon" />
                        <div className="heading-text">

                          <p>No Explanation</p>
                        </div>
                      </div>
                    </td>


                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'television':
        return (
          <div className="table-section">
            <p className="table-header" style={{ color: "white" }}>SHOWING {filteredData.length} OF {data.length} TVs</p>
            
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
                    {/* Clicking on Affiliate will navigate to row.url */}
                    <td>
                      <a href={row.url} target="_blank" rel="noopener noreferrer" className="affiliate-link">
                        {row.affiliate}
                      </a>
                      {/* If 'Example' is in row.affiliate, show intake form link */}
                      {row.affiliate.includes('Intake') && (
                        <span className="intake-form-label">
                          <a
                            href="https://docs.google.com/document/d/1AHGeTyjzSDKwMz6BBxPKgdyRFfBh_4h3amXxVJGZVnA/edit" // Replace with actual Google Doc link
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Intake form
                          </a>
                        </span>
                      )}
                    </td>

                    <td>{row.calls}</td>
                    <td>{row.state}</td>
                    <td>{row.market}</td>

                    {/* Clicking on Program Name will navigate to row.url */}
                    <td>
                      <a href={row.url} target="_blank" rel="noopener noreferrer" className="program-link">
                        {row.program_name}
                      </a>
                    </td>

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
            <p className="table-header" style={{ color: "white" }}>SHOWING {filteredData.length} OF {data.length} PUBLICATIONS</p>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Publication Name</th>
                  <th>Price</th>
                  <th>Platform</th>
                  <th>TAT</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td className="publication-cell" style={{ width: '250px' }}>
                      <img src={`${row.publication_image_url}`} alt="Publication" />
                      <a href={row.publication_url} target="_blank" rel="noopener noreferrer">
                        <span>{row.publication_name}</span>
                      </a>
                      {favorites.includes(row.publication_name) ? (
                        <FaStar
                          className={`star-icon ${favorites.includes(row.publication_url) ? 'favorite' : ''}`}
                          onClick={() => toggleFavorite(row.publication_url)}
                        />
                      ) : (
                        <FaRegStar
                          className={`star-icon ${favorites.includes(row.publication_url) ? 'favorite' : ''}`}
                          onClick={() => toggleFavorite(row.publication_url)}
                        />
                      )}
                    </td>
                    <td>{row.price || 'N/A'}</td>
                    <td className='platform-cell'>
                      <FaFacebook className={`platform-icon ${row.platform.includes('facebook') ? 'solid' : 'faded'}`} />
                      <FaInstagram className={`platform-icon ${row.platform.includes('instagram') ? 'solid' : 'faded'}`} />
                      <FaTwitter className={`platform-icon ${row.platform.includes('twitter') ? 'solid' : 'faded'}`} />
                      <FaLinkedin className={`platform-icon ${row.platform.includes('linkedIn') ? 'solid' : 'faded'}`} />
                    </td>
                    <td>{row.tat}</td>
                    <td>
                      {row.example_image ? (
                        <div className="image-tooltip">
                          {/* Click event to open full-size image in a new tab */}
                          <a href={row.example_image} target="_blank" rel="noopener noreferrer">
                            <FaImage className="image-icon" />
                          </a>
                          {/* Hover event to display large image preview */}
                          <div className="tooltip-text" style={{ position: 'absolute', top: '100%', left: '0', zIndex: '1000' }}>
                            <img src={row.example_image} alt="Example" style={{ width: '300px', height: 'auto', border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </td>
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
