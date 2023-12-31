import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './stylesheet.css';


function HomePage() {
  return (
    <div className="grid-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}


export default HomePage;
