// Header.js
import React from 'react';
import { Helmet } from 'react-helmet';
import Images from './Images';
import './stylesheet.css';

function Header() {
  return (
    <div className="Header">
      <header>
        <Helmet>
          {/* Basic meta tags for SEO */}
          <meta name="description" content="Explore Little Lemon Restaurant in Chicago - A charming neighborhood bistro offering simple food and classic cocktails in a lively, casual atmosphere with locally-sourced daily specials." />
          <meta name="title" content="Little Lemon Restaurant" />
          <meta name="author" content="Azha Balouch" />
          <meta name="language" content="english" />
          <meta name="robots" content="index,follow" />
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="googlebot" content="notranslate" />
          <meta name="revised" content="Thursday, August 18th, 2023, 3:30 pm" />
          <meta name="rating" content="safe for kids" />
          <meta name="copyright" content="Copyright 2023 Little Lemon Restaurant" />

          {/* Open Graph Protocol (OGP) tags for social media sharing */}
          <meta property="og:title" content="Little Lemon Restaurant" />
          <meta property="og:description" content="Explore Little Lemon Restaurant in Chicago - A charming neighborhood bistro offering simple food and classic cocktails in a lively, casual atmosphere with locally-sourced daily specials." />
          <meta property="og:image" content={Images.logoImage} />
          <meta property="og:url" content="https://example.com/little-lemon" />
          <meta property="og:type" content="website" />

          {/* HTTP-equiv meta tags */}
          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <meta http-equiv="default-style" content="Your default style" />
          <meta http-equiv="refresh" content="30" />

          {/* Responsive design/mobile meta tags */}
          <meta name="format-detection" content="telephone=yes" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>

        <img src={Images.logoImage} alt="Little Lemon Logo" width={200} height={50} />
      </header>

      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about">Menu</a></li>
            <li><a href="/about">Reservations</a></li>
            <li><a href="/about">Order</a></li>
          </ul>
      </nav>
    </div>
  );
}

export default Header;
