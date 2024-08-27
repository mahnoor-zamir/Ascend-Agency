// BundleItem.js
import React from 'react';
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
  const bundles = [
    {
      title: 'BEGINNER WITH ASCEND',
      items: [
        {
          name: 'Bundle 1',
          price: '$800',
          retailValue: '$925',
          publications: ['Yahoo Finance', 'California Business Journal', 'Digital Journal']
        },
        {
          name: 'Bundle 2',
          price: '$1,850',
          retailValue: '$2,075',
          publications: ['Yahoo Finance', 'California Business Journal', 'Digital Journal', 'LA Weekly', 'Haute Living']
        },
        {
          name: 'Bundle 3',
          price: '$4,500',
          retailValue: '$4,825',
          publications: ['Yahoo Finance', 'California Business Journal', 'Digital Journal', 'LA Weekly', 'Haute Living', 'Hollywood Life', 'USA Today']
        }
      ]
    },
    {
      title: 'INFLUENCER',
      items: [
        {
          name: 'Bundle 1',
          price: '$1,200',
          retailValue: '$1,350',
          publications: ['Cultr Magazine', 'Flaunt Magazine']
        },
        {
          name: 'Bundle 2',
          price: '$2,800',
          retailValue: '$3,200',
          publications: ['Cultr Magazine', 'Flaunt Magazine']
        },
        {
          name: 'Bundle 3',
          price: '$7,000',
          retailValue: '$7,950',
          publications: ['Cultr Magazine', 'Flaunt Magazine']
        }
      ]
    }
  ];

  return (
    <div className="pr-bundles">
      <Header />
      <ButtonGroup />
      {bundles.map((bundle, index) => (
        <BundleSection key={index} {...bundle} />
      ))}
    </div>
  );
};

export default PRBundles;