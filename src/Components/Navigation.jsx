import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import { FaHamburger } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Navigation() {
  return (
    <nav>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: '-100' }}
        transition={{ duration: 1, ease: 'anticipate' }}
        className="nav--container"
      >
        <div className="nav--logo">
          <FaHamburger />
          <Link to="/">
            <h4>
              Hugg<span>Burger</span>
            </h4>
          </Link>
        </div>
        <div className="nav--links__container">
          <ul className="nav--links">
            <Link to="menu" className="nav--links__link">
              Our Menu
            </Link>
            <Link to="delivery" className="nav--links__link">
              Delivery
            </Link>
            <Link to="locations" className="nav--links__link">
              Locations
            </Link>
            <Link to="about" className="nav--links__link">
              About Us
            </Link>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navigation;
