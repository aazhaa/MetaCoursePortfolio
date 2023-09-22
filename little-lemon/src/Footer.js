// Footer.js
import React from 'react';
import Images from './Images';

function Footer() {
  return (
    <footer>
      <img src={Images.footerImage} alt="Little Lemon Footer Logo" width={50} height={100}/>
      <div className='FooterNav'>
        <h3>Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/about">Menu</a></li>
          <li><a href="/about">Reservations</a></li>
          <li><a href="/about">Order Online</a></li>
          <li><a href="/about">Login</a></li>
        </ul>
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
    </footer>
  );
}

export default Footer;
