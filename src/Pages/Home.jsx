import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "./Home.scss";

import BigReady from "../img/Big-Ready.png";
import BaconDouble from "../img/Bacon-Double.png";
import TexasStacker from "../img/Texas-Stacker.png";

function Home() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="home">
        <div className="home--container">
          <div className="home--header">
            <h1>Ready For A Burger?</h1>
          </div>
          <div className="home--img">
            <img src={BigReady} alt="bigready-burger" />
            <img src={BaconDouble} alt="bacondouble-burger" />
            <img src={TexasStacker} alt="texas-burger" />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
