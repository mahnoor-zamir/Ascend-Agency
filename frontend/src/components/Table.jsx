import React from 'react';

function Table({ columns, data }) {
  return (
    <div className="bg-[#ffffff] rounded-md shadow-md overflow-x-auto">
      <table className="min-w-full bg-[#ffffff]">
        <thead>
          <tr className="bg-[#f0f4f7]">
            {columns.map((column, index) => (
              <th
                key={index}
                className="py-3 px-4 border-b text-left text-[#6e6e6e] font-semibold relative group"
              >
                {column.header}
                {column.tooltip && (
                  <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                    {column.tooltip}
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-[#f0f4f7]">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="py-3 px-4 border-b text-[#6e6e6e]"
                >
                  {column.render ? column.render(row[column.accessor], row) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
