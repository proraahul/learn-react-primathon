import React, { useState } from 'react';
import Pagination from './Pagination';

const DataList = ({ data }) => {
  // Assuming data is an array of items to display
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set the number of items to display per page

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
      {/* Render your data here using `currentItems` */}
      {
      currentItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))
      }

      {/* Render Pagination component */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default DataList;
