import React from 'react';
import Articles from '../Articles';

const MainComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-9">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-10">The Calendly Blog</h1>
      <ul className="flex flex-wrap justify-center md:justify-between items-center mt-4 mx-0 md:mx-36">
        <li className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-full mb-2 md:mb-0">ALL</li>
        <li className="gap-2 text-gray-600 hover:text-gray-800 cursor-pointer mb-2 md:mb-0">WHAT'S NEW</li>
        <li className="gap-2 text-gray-600 hover:text-gray-800 cursor-pointer mb-2 md:mb-0">SALES</li>
        <li className="gap-2 text-gray-600 hover:text-gray-800 cursor-pointer mb-2 md:mb-0">RECRUITING</li>
        <li className="gap-2 text-gray-600 hover:text-gray-800 cursor-pointer mb-2 md:mb-0">PRODUCTIVITY</li>
        <li className="gap-2 text-gray-600 hover:text-gray-800 cursor-pointer mb-2 md:mb-0">CREATING CALENDLY</li>
      </ul>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 ">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <img src="/images/main-image.png" alt="Main" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 md:ml-8">
          <p className="text-gray-800 mb-4 md:mb-8">WHAT'S NEW</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-12">Welcome to the Time Economy</h1>
          <p className="text-gray-600 mb-4 md:mb-12">Our most precious resource is time -- and the next decade will be defined by how we manage it.</p>
          <div className="flex items-center">
            <p className="text-black-500 text-xs mr-2 md:mr-4">Read the article</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 md:h-5 md:w-5 cursor-pointer"><path fill="#000000" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"/></svg>
          </div>
        </div>
      </div>
      <div className=" mt-8 md:mt-12 mb-4 md:mb-12">Most Popular</div>
      <div className="container mx-auto px-4 py-8">
        <Articles />
      </div>
    </div>
  );
};

export default MainComponent;
