import React from 'react';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import PublicationsTable from './components/PublicationsTable';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <FilterSection />
        <PublicationsTable />
      </div>
    </div>
  );
}

export default App;
