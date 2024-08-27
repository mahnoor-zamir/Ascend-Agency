import React from 'react';
import TableComponent from './TableComponent';

import './PricingHeader.css';
function TabContent({ activeTab }) {
  return (
    <div className="tab-content ">
      {activeTab === 'publications' && <TableComponent />}
      {activeTab === 'television' && <TableComponent />}
      {activeTab === 'listicles' && <TableComponent />}
      {activeTab === 'bestSellers' && <TableComponent />}
      {activeTab === 'prBundles' && <TableComponent />}
      {activeTab === 'print' && <TableComponent />}
      {activeTab === 'socialPost' && <TableComponent />}
    </div>
  );
}

export default TabContent;
