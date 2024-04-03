import React from 'react';
import Header from './components/Header';
import MainContent from './components/Main-Component';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      {/* <img src='/images/newsletter.jpg' alt='newsletter' className="w-full newsletter"></img> */}
      <Footer />
    </div>
  );
}

export default App;
