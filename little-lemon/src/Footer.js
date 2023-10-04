// Footer.js
import React from 'react';
import Nav from './Nav.js';
import Images from './Images';
import './stylesheet.css';

function Footer() {
  return (
    <footer>
      <div className='footerContainer'>
        <div className='logoFrame'>
          <img src={Images.footerImage} alt="Little Lemon Footer Logo"/>
        </div>
        <div className='FooterNav'>
          <h3>Navigation</h3>
          <Nav location="footer" />
        </div>
        <div className='Contact'>
          <h3>Contact</h3>
          <p>
            Address<br />
            someone@example.com<br />
            +1 111 222 3333
          </p>
        </div>
        <div className='SocialMediaLinks'>
          <h3>Social Media</h3>
          <ul>
            <li><a href="/">Instagram</a></li>
            <li><a href="/about">Facebook</a></li>
            <li><a href="/about">Twitter</a></li>
            <li><a href="/about">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
