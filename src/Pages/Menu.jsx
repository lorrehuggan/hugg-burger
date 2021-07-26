import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import './Menu.scss';
import MenuCard from '../Components/MenuCard';

import Footer from '../Components/Footer';
import { menuData } from '../Data/data';
import { motion } from 'framer-motion';

function Menu() {
  let history = useHistory();
  const itemAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1.162,
      },
    },
  };

  return (
    <Fragment>
      <Navigation />
      <div className="menu">
        <div className="menu--container">
          <div className="menu--cards">
            {menuData.map((card) => {
              return (
                <motion.div
                  variants={itemAnimation}
                  animate="visible"
                  initial="hidden"
                  key={card.id}
                  onClick={() => history.push(`/menu/${card.id}`)}
                >
                  <MenuCard
                    img={card.img}
                    type={card.status}
                    name={card.name}
                    price={card.price}
                  />
                </motion.div>
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
