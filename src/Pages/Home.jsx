import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import './Home.scss';
import BigReady from '../img/Big-Ready.png';
import BaconDouble from '../img/Bacon-Double.png';
import TexasStacker from '../img/Texas-Stacker.png';
import DeliveryStickers from '../Components/DeliveryStickers';

function Home() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="home">
        <div className="home--container">
          <div className="home--header">
            <h1>Ready for a better burger?</h1>
          </div>
          <div className="home--img">
            <img src={BigReady} alt="bigready-burger" />
            <img src={BaconDouble} alt="bacondouble-burger" />
            <img src={TexasStacker} alt="texas-burger" />
          </div>
          <DeliveryStickers />
          <div className="home--img__img-bg"></div>
        </div>
      </div>
      <div className="home--bottom__msg">
        <p>
          Ready Burger brings you classic flavours at everyday prices. But,
          what's the difference?
        </p>
        <p style={{ fontWeight: '900' }}>Our menu is 100% plant-based.</p>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
