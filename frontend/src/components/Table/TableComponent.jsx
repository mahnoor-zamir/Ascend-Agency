// TableComponent.jsx
import React, { useState, useEffect } from 'react';
import './TableSection.css';
import { FaStar, FaRegStar, FaRegQuestionCircle, FaImage } from 'react-icons/fa';

const TableComponent = ({ tableType }) => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let dummyData;
        switch (tableType) {
          case 'publications':
            dummyData = [
              { publication: 'Pub 1', genres: ['Tech', 'News'], price: '$100', da: 50, dr: 60, tat: '1 week', region: ['US', 'Global'], sponsored: true, indexed: true, do_follow: true, example: 'Example 1', image: 'image1.png', niches: 'Niche 1' },
              { publication: 'Pub 2', genres: ['Entertainment', 'Sports', 'Health'], price: '$200', da: 55, dr: 65, tat: '2 weeks', region: ['EU'], sponsored: false, indexed: true, do_follow: false, example: 'Example 2', image: 'image2.png', niches: 'Niche 2' },
            ];
            break;
          case 'television':
            dummyData = [
              { affiliate: 'Affiliate 1', calls: 100, state: 'CA', market: 'Market 1', program_name: 'Program 1', location: ['Location 1'], time: '10:00 AM', rate: '$500' },
              { affiliate: 'Affiliate 2', calls: 150, state: 'NY', market: 'Market 2', program_name: 'Program 2', location: ['Location 2'], time: '11:00 AM', rate: '$600' },
            ];
            break;
          case 'listicles':
            dummyData = [
              { publication: 'Pub 1', genres: ['Genre 1'], price: '$100', da: 50, dr: 60, tat: '1 week', region: ['US'], sponsored: true, indexed: true, do_follow: true, example: 'Example 1', image: 'image1.png', niches: 'Niche 1' },
              { publication: 'Pub 2', genres: ['Genre 2', 'Genre 3', 'Genre 4'], price: '$200', da: 55, dr: 65, tat: '2 weeks', region: ['EU'], sponsored: false, indexed: true, do_follow: false, example: 'Example 2', image: 'image2.png', niches: 'Niche 2' },
            ];
            break;
          case 'socialpost':
            dummyData = [
              { publication_name: 'Pub 1', platform: 'Platform 1', price: '$100', tat: '1 week' },
              { publication_name: 'Pub 2', platform: 'Platform 2', price: '$200', tat: '2 weeks' },
            ];
            break;
          case 'bestsellers':
            dummyData = [
              { publication: 'Pub 1', genres: ['Genre 1'], price: '$100', da: 50, dr: 60, tat: '1 week', region: ['US'], sponsored: true, indexed: true, do_follow: true, example: 'Example 1', image: 'image1.png', niches: 'Niche 1' },
              { publication: 'Pub 2', genres: ['Genre 2', 'Genre 3', 'Genre 4'], price: '$200', da: 55, dr: 65, tat: '2 weeks', region: ['EU'], sponsored: false, indexed: true, do_follow: false, example: 'Example 2', image: 'image2.png', niches: 'Niche 2' },
            ];
            break;
          default:
            return;
        }
        setData(dummyData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [tableType]);
  


  const toggleFavorite = (publicationName) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(publicationName)
        ? prevFavorites.filter((name) => name !== publicationName)
        : [...prevFavorites, publicationName]
    );
  };

  const renderTable = () => {
    if (data.length === 0) {
      return <p>No data available</p>;
    }
  
    switch (tableType) {
      case 'publications':
      case 'bestsellers':
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
                        <p className='heading'>Time at arival</p>
                        <p>estimated time to deliver</p>
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
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.affiliate}</td>
                    <td>{row.calls}</td>
                    <td>{row.state}</td>
                    <td>{row.market}</td>
                    <td>{row.program_name}</td>
                    <td>
                      {row.location.map((loc, idx) => (
                        <div key={idx} className="genre-item">{loc}</div>
                      ))}
                    </td>
                    <td>{row.time}</td>
                    <td>{row.rate}</td>
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