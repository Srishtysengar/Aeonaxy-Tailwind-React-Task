import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 mb-4">
        <div className="flex items-center">
          <img src='/images/logo.svg' alt="Logo" className="h-8 mr-4 cursor-pointer" /> 
        </div>
        <nav className="md:hidden">
          <button 
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
              />
            </svg>
          </button>
        </nav>
        <nav className={`md:flex md:items-center md:space-x-8 ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 md:space-y-0">
            <li className="text-base leading-tight text-gray-600"> 
              <a href="#" className="block text-sm">Individuals</a>
            </li>
            <li className="text-base leading-tight text-gray-600">
              <a href="#" className="block text-sm">Teams</a>
            </li>
            <li className="text-base leading-tight text-gray-600">
              <a href="#" className="block text-sm">Enterprise</a>
            </li>
            <li className="relative group text-base leading-tight text-gray-600">
              <div className='flex items-center'>
                <a href="#" className="block text-sm">Product</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 text-gray-200 group-hover:text-gray-500 ml-1"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
              </div>
              <div className="absolute hidden bg-white border border-gray-300 py-2 px-2 rounded-md -mt-2 -mr-2 group-hover:block text-sm">
                <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 py-1 px-1">Drop 1</a>
                <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 py-1 px-1">Drop 2</a>
              </div>
            </li>
            <li className="text-base leading-tight text-gray-600">
              <a href="#" className="block text-sm">Pricing</a>
            </li>
            <li className="relative group text-base leading-tight text-gray-600">
              <div className='flex items-center'>
                <a href="#" className="block text-sm">Resources</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 text-gray-200 group-hover:text-gray-500 ml-1"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
              </div>
              <div className="absolute hidden bg-white border border-gray-300 py-2 px-2 rounded-md -mt-2 -mr-2 group-hover:block text-sm">
                <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 py-1 px-2">Drop 1</a>
                <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 py-1 px-2">Drop 2</a>
              </div>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4 md:space-x-0">
          <button className="bg-transparent border border-white text-gray-600 py-2 px-4 rounded-lg">Login</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full ml-4">Sign up Free</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
