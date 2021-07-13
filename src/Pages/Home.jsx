import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "./Home.scss";

import BigReady from "../img/Big-Ready.png";
import BaconDouble from "../img/Bacon-Double.png";
import TexasStacker from "../img/Texas-Stacker.png";
import Deliveroo from "../img/Deliveroo.png";
import JustEat from "../img/Just-Eat.png";
import UberEats from "../img/Uber-Eats.png";

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
          <div className="home--sticker__container">
            <div className="home--sticker">
              <div className="sticker">
                <img src={Deliveroo} alt="deliveroo" />
              </div>
              <div className="sticker">
                <img src={JustEat} alt="justeat" />
              </div>
              <div className="sticker">
                <img src={UberEats} alt="ubereats" />
              </div>
            </div>
          </div>
          <div className="home--img__img-bg"></div>
        </div>
      </div>
      <div className="home--bottom__msg">
        <p>
          Ready Burger brings you classic flavours at everyday prices. But,
          what's the difference?
        </p>
        <p style={{ fontWeight: "900" }}>Our menu is 100% plant-based.</p>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
