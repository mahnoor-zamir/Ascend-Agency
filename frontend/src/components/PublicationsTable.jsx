import React from 'react';
import Table from './Table';

function PublicationsTable() {
  const columns = [
    { header: 'Publication', accessor: 'publication' },
    { header: 'Genres', accessor: 'genres' },
    { header: 'Price', accessor: 'price' },
    { header: 'DA', accessor: 'da' },
    { header: 'DR', accessor: 'dr' },
    { header: 'TAT', accessor: 'tat' },
    { header: 'Region', accessor: 'region' },
    { header: 'Sponsored', accessor: 'sponsored' },
    { header: 'Indexed', accessor: 'indexed' },
    { header: 'DoFollow', accessor: 'doFollow' },
    { 
      header: 'Example', 
      accessor: 'example', 
      render: (value) => <a href={value} className="text-blue-500 hover:underline"><i className="fas fa-image"></i></a>,
      tooltip: "View an example"
    },
    { 
      header: '', 
      accessor: 'actions', 
      render: (value) => (
        <div className="flex space-x-2">
          {value.map((action, index) => (
            <span key={index} className="relative group">
              <a href={action.url} className={`text-gray-600 hover:text-${action.color}`}>
                <i className={`fas fa-${action.icon}`}></i>
              </a>
              <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                {action.tooltip}
              </div>
            </span>
          ))}
        </div>
      ),
      tooltip: "Actions"
    }
  ];

  const data = [
    {
      publication: "Newport Beach Magazine",
      genres: "News",
      price: "$300",
      da: "32",
      dr: "39",
      tat: "1 Week",
      region: "California, United States",
      sponsored: "No",
      indexed: "Yes",
      doFollow: "Yes",
      example: "#",
      actions: [
        { icon: "heart", color: "red-500", url: "#", tooltip: "Favorite" },
        { icon: "dollar-sign", color: "ea8e8c", url: "#", tooltip: "View price" },
        { icon: "leaf", color: "ea8e8c", url: "#", tooltip: "Sustainability" },
        { icon: "dice", color: "ea8e8c", url: "#", tooltip: "Gambling" }
      ]
    },
  ];

  return <Table columns={columns} data={data} />;
}

export default PublicationsTable;
