import React from 'react';
import TableComponent from '../Table/TableComponent.jsx';
 
import '../Header/PricingHeader.css';

function TabContent({ activeTab }) {
  return (
    <div className="tab-content">
      {activeTab === 'publications' && <TableComponent tableType="publications" />}
      {activeTab === 'television' && <TableComponent tableType="television" />}
      {activeTab === 'listicles' && <TableComponent tableType="listicles" />}
      {activeTab === 'bestsellers' && <TableComponent tableType="bestsellers" />}
      {activeTab === 'prBundles' && <TableComponent tableType="prBundles" />}
      {activeTab === 'print' && <TableComponent tableType="print" />}
      {activeTab === 'socialpost' && <TableComponent tableType="socialpost" />}
    </div>
  );
}

export default TabContent;
