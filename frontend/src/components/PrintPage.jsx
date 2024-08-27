import React from 'react';
import './PrintPage.css';

const PrintPage = () => {
  const magazines = [
    {
      name: 'Billboard USA',
      details: [
        'Full Page $7500',
        '2-Page Spread $15000',
        'Turn Around: 1-2 Months'
      ]
    },
    {
      name: 'Billboard Argentina',
      details: [
        'Full Page $1000',
        'Turn Around: 1-2 Months'
      ]
    },
    {
      name: 'Hamptons Magazine',
      details: [
        'Full Page $5000',
        '2-Page Spread $10000',
        'Turn Around: 1-2 Months',
        '50,000+ Circulation'
      ]
    }
  ];

  return (
    <div className="print-page">
      <h1>MAGAZINE PRINT</h1>
      <div className="magazine-list">
        {magazines.map((magazine, index) => (
          <div key={index} className="magazine-item">
            <h2>{magazine.name}</h2>
            <ul>
              {magazine.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintPage;