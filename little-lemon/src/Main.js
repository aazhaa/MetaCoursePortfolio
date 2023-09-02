import React from 'react';
import Images from './Images';

function Main() {
  return (
    <main>

      {/* Hero Section - Details about restaurant and reservation button */}
      <section className="HeroSection">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Little Lemon is a charming neighborhood bistro that serves simple foor and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        <button>Book Table</button>

        <img src={Images.heroImage} alt="Little Lemon Logo" width={150} height={200}/>
      </section>


      {/* Highlight Section - Three featured dishes */}
      <section>
        <h1>Specials</h1>
      </section>
    </main>
  );
}

export default Main;
