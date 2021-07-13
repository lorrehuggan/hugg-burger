import React from "react";
import Navigation from "../Components/Navigation";
import "./Menu.scss";
import MenuCard from "../Components/MenuCard";

import Footer from "../Components/Footer";
import { menuData } from "../Data/data";

function Menu() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="menu">
        <div className="menu--container">
          <div className="menu--cards">
            {menuData.map((card) => {
              return (
                <MenuCard
                  img={card.img}
                  type={card.class}
                  name={card.name}
                  price={card.price}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Menu;
