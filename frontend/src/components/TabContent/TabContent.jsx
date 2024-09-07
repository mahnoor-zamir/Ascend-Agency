import React from 'react';
import TableComponent from '../Table/TableComponent.jsx';
import '../Header/PricingHeader.css';

function TabContent({ activeTab, filters }) {
  return (
    <div className="tab-content">
      {activeTab === 'publications' && <TableComponent tableType="publications" filters={filters} />}
      {activeTab === 'television' && <TableComponent tableType="television" filters={filters} />}
      {activeTab === 'listicles' && <TableComponent tableType="listicles" filters={filters} />}
      {activeTab === 'bestsellers' && <TableComponent tableType="bestsellers" filters={filters} />}
      {activeTab === 'prBundles' }
      {activeTab === 'print' }
      {activeTab === 'socialposts' && <TableComponent tableType="socialposts" filters={filters} />}
    </div>
  );
}

export default TabContent;


