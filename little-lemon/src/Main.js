import React from 'react';
import Images from './Images';
import './stylesheet.css';

function Main() {
  return (
    <main>

      {/* Hero Section - Details about restaurant and reservation button */}
      <section className='HeroSection'>
        <div className='Details'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Little Lemon is a charming neighborhood bistro that serves simple foor and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
          <button>Book Table</button>
        </div>

        <img src={Images.heroImage} alt="Restaurant Food Glipse" width={150} height={200}/>
      </section>


      {/* Highlight Section - Three featured dishes */}
      <section className='Specials'>
        <div className='SectionHeader'>
          <h1>Specials</h1>
          <button>Online Menu</button>
        </div>

        <div className='card1'>
          <img src={Images.dish1} alt="Greek Salad" width={150} height={100}/>
          <h3>Greek Salad</h3>
          <p>$12.99</p>
          <p>Greek salad is often served as a side dish or appetizer in Greek cuisine. It's a delightful combination of textures and tastes.</p>
          <button>Order a Delivery</button>
        </div>
        <div className='card2'>
          <img src={Images.dish2} alt="Brochette Culinary" width={150} height={100}/>
          <h3>Brochette</h3>
          <p>$25.99</p>
          <p>A brochette refers to skewered and grilled or roasted pieces of food, typically served as a savory appetizer, main course, or even a snack.</p>
          <button>Order a Delivery</button>
        </div>
        <div className='card3'>
          <img src={Images.dish3} alt="Lemon Dessert" width={150} height={100}/>
          <h3>Lemon Dessert</h3>
          <p>$5.99</p>
          <p>A lemon tart is a popular lemon-based dessert known for its harmonious balance of sweet and tart flavors.</p>
          <button>Order a Delivery</button>
        </div>
      </section>

      <section className='UserReviews'>
        <h1>User Reviews</h1>

        <div className='UserReview1'>
          <img src={Images.user1} alt="Emma Wills" width={100} height={150}></img>
          <h3>Emma Wills</h3>
          <p>4.5 stars</p>
          <p>I had a wonderful dining experience. The food was exquisite, and the service was impeccable.</p>
        </div>

        <div className='UserReview2'>
          <img src={Images.user2} alt="Greta Hugh" width={150} height={100}></img>
          <h3>Greta Hugh</h3>
          <p>5 stars</p>
          <p>Culinary excellence! Every bite was a flavor journey. Highly recommend!</p>
        </div>

        <div className='UserReview3'>
          <img src={Images.user3} alt="Hayata Mills" width={150} height={100}></img>
          <h3>Hayata Mills</h3>
          <p>4.7 stars</p>
          <p>Exceptional dining! The blend of flavors in every dish was perfect.</p>
        </div>
      </section>

      <section className='Owners'>
        <div className='Details'>
          <h1>Meet our Team</h1>
          <h3>Owner’s of the Restaurant</h3>
          <p>Meet the passionate duo behind the culinary magic at "Little Lemon Restaurant" in the heart of Chicago – Kyle and Jessica. Their shared vision of creating a place where food is a celebration of flavor and community has made their restaurant a beloved destination for locals and visitors alike. Whether you're a Chicago native or a tourist exploring the city's vibrant food culture, a visit to "Little Lemon Restaurant" promises a delightful journey through the culinary passions of Kyle and Jessica.</p>
        </div>

        <img src={Images.owner1} alt="Edward Gregrok Owner" width={150} height={150}/>
        <img src={Images.owner2} alt="Lynda William Owner" width={200} height={150}/>
      </section>
    </main>
  );
}

export default Main;
