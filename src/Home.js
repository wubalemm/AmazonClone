import React from "react";
import "./Home.css";
import Product from "./Product";
// import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div className="home">

      {/* <Carousel>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/61LQoUReX3L._SX3000_.jpg" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" class="d-block w-100" alt=""/>
    </div>
  </div>
</div>
</Carousel> */}

      <div className="home__container">
         <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61LQoUReX3L._SX3000_.jpg"
          alt=""
        />  */}

        {/* <img
          className="home__image "
          src="	https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
        /> */}
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="Visit the Instant Pot Store
4.5 out of 5 stars  9,230Reviews
Instant Pot Aura 10-in-1 Multicooker Slow Cooker, 10 One-Touch Programs, 6 Qt, Silver (AURA 6Qt)"
          price={69.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/41JpjFg03fL._AC_SY580_.jpg"
        />
        <Product
          id="49538094"
          title="The Road to React: Your journey to master plain yet pragmatic React.js"
          price={29.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Apple Watch Series 7 GPS + Cellular, 41mm (Product) RED Aluminum Case with (Product) RED Sport Band - Regular"
          price={499.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71BYUTSXJLL._AC_SX466_.jpg"
        />
        <Product
          id="23445930"
          title="Introducing Fire HD 10 Kids Pro tablet, 10.1, 1080p Full HD, ages 6–12, 32 GB, Sky Blue"
          price={199.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71h3WD4NL0S._AC_SX679_.jpg"
        />
        <Product
          id="3254354345"
          title="Knife Set, imarku 16-Pieces Premium Kitchen Knife Set, German Stainless Steel Knife Set with Block and Knife Sharpener"
          price={259.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61r2CFrlsLL._AC_SX522_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="NIKE Air Force 1 Black/Aluminum-Blue Legend-White Size 11 D(M) US"
          price={149.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/31FHmyyMdtL._AC_.jpg
"
        />
        <Product
          id="23445930"
          title="COOLIFE Luggage Expandable(only 28'') Suitcase PC ABS TSA Lock Spinner Carry on new fashion design (purple, 3 piece set)"
          price={144.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/71NLOnYCZFL._AC_SX425_.jpg"
        />
        <Product
          id="3254354345"
          title="Ray-Ban Rb2140 Original Wayfarer Sunglasses"
          price={161.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51NRGgxWacL._AC_UL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
