import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import './Menu.scss';
import MenuCard from '../Components/MenuCard';

import Footer from '../Components/Footer';
import { menuData } from '../Data/data';

function Menu() {
  let history = useHistory();

  return (
    <Fragment>
      <Navigation />
      <div className="menu">
        <div className="menu--container">
          <div className="menu--cards">
            {menuData.map((card) => {
              return (
                <div
                  key={card.id}
                  onClick={() => history.push(`/menu/${card.id}`)}
                >
                  <MenuCard
                    img={card.img}
                    type={card.status}
                    name={card.name}
                    price={card.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Menu;
