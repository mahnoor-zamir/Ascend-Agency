// BundleItem.js
import React, { useEffect, useState } from 'react';
import './PRBundles.css';

const BundleItem = ({ name, price, retailValue, publications }) => (
  <div className="bundle-item">
    <h3>{name} — {price}</h3>
    <p>Retail Value — {retailValue}</p>
    <ul>
      {publications.map((pub, index) => (
        <li key={index}>{pub}</li>
      ))}
    </ul>
  </div>
);

// BundleSection.js
const BundleSection = ({ title, items }) => (
  <div className="bundle-section">
    <h2>{title}</h2>
    <div className="bundle-items">
      {items.map((item, index) => (
        <BundleItem key={index} {...item} />
      ))}
    </div>
  </div>
);

// PRBundles.js (main component)


const PRBundles = () => {
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = '/api/prbundles';
        const response = await fetch(endpoint);
        const result = await response.json();
        const processedData = processData(result);
        setBundles(processedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const processData = (result) => {
    return result.reduce((acc, bundle) => {
      console.log(bundle)
      const { category, bundle_name, price, retail_price, inclusions } = bundle;
      const existingCategory = acc.find(item => item.title === category);

      const bundleItem = {
        name: bundle_name,
        price: `$${price}`,
        retailValue: `$${retail_price}`,
        publications: inclusions.split(', ')
      };

      if (existingCategory) {
        existingCategory.items.push(bundleItem);
      } else {
        acc.push({
          title: category,
          items: [bundleItem]
        });
      }

      return acc;
    }, []);
  };

  return (
    <div className="pr-bundles">
      {bundles.map((bundle, index) => (
        <BundleSection key={index} {...bundle} />
      ))}
    </div>
  );
};

export default PRBundles;