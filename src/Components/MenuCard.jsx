import React from 'react';
import './MenuCard.scss';
import { motion } from 'framer-motion';

function MenuCard({ img, type, name, price }) {
  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div variants={item} className="menu--card">
      <img className="menu--card__img" src={img} alt="big-ready" />
      <div className="menu--card__details">
        <small>{type}</small>
        <h4>{name}</h4>
        <p>{price}</p>
      </div>
    </motion.div>
  );
}

export default MenuCard;
