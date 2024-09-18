import React, { useEffect, useState } from 'react';
import './PrintPage.css';

const PrintPage = () => {
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = '/api/print';
        const response = await fetch(endpoint);
        const result = await response.json();
        const processedData = processData(result);
        setMagazines(processedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const processData = (result) => {
    return result;
  };

  return (
    <div className="print-page">
      <h1>MAGAZINE PRINT</h1>
      <div className="magazine-list">
        {magazines.length > 0 ? (
          magazines.map((magazine, index) => (
            <div key={index} className="magazine-item">
              {magazine.publication && <h2>{magazine.publication}</h2>}
              {magazine.full_page_cost && <p>Full page {magazine.full_page_cost}</p>}
              {magazine.two_page_cost && <p>Two-page spread {magazine.two_page_cost}</p>}
              {magazine.duration && <p>Turn around: {magazine.duration}</p>}
              {magazine.additional_info && <p>{magazine.additional_info} Circulations</p>}
            </div>
          ))
        ) : (
          <p>No magazines available</p>
        )}
      </div>
    </div>
  );
};

export default PrintPage;