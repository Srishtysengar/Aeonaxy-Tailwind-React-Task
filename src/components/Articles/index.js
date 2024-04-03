
import React, { useState } from 'react';
import { generateDummyData } from '../../data/dataGenerator'; 

const Articles = () => {
  
  const dummyData = generateDummyData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => { 
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    const pageNumbers = [];

    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentItems.map((article, index) => (
          <div key={index} className={`border border-gray-100 p-12 rounded-2xl ${index === 0 ? 'bg-purple-700' : index === 1 ? 'bg-blue-500' : index === 2 ? 'bg-blue-950' : 'bg-white'}`}>
            <button class={`border-2 ${index < 3 ? 'border-white text-white' : 'border-blue-500 text-blue-500'} font-bold hover:text-white hover:bg-blue-500 hover:border-blue-600 py-2 px-4 rounded-full mb-8`}>{article.tag}</button>
            <p className={`text-black mb-2 text-xl ${index < 3 ? 'text-white' : ''}`}>{article.description}</p>
            <p className={`text-sm text-gray-400 mb-4 ${index < 3 ? 'text-white' : ''}`}>READ TIME: {article.time}</p>
            <p className={`text-base mb-20 ${index < 3 ? 'text-white' : ''}`}>{article.paragraph}</p>
            <div className='flex items-center'>
                <p className={`text-black-500 text-xs ${index < 3 ? 'text-white' : ''}`}>Read the article</p>
                {index < 3 ? (
                    <div className='bg-white rounded-full ml-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-5 w-5'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </div>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-5 w-5 ml-4 cursor-pointer'><path fill="#000000" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"/></svg>
                )}
               </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 ">
        <button
          onClick={handleFirstPage}
          className={`mx-2 px-3 py-1 border rounded-full ${
            currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-white text-gray-600 hover:bg-gray-200'
          }`}
        >
          &lt;&lt;
        </button>
        <button
          onClick={handlePrevPage}
          className={`mx-2 px-3 py-1 border rounded-full ${
            currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-white text-gray-600 hover:bg-gray-200'
          }`}
        >
          &lt;
        </button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`mx-1 px-3 py-1 border rounded-full ${
              currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-200'
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`mx-2 px-3 py-1 border rounded-full ${
            currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-white text-gray-600 hover:bg-gray-200'
          }`}
        >
          &gt;
        </button>
        <button
          onClick={handleLastPage}
          className={`mx-2 px-3 py-1 border rounded-full ${
            currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-white text-gray-600 hover:bg-gray-200'
          }`}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Articles;
