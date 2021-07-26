import React from 'react';
import Deliveroo from '../img/Deliveroo.png';
import JustEat from '../img/Just-Eat.png';
import UberEats from '../img/Uber-Eats.png';
import './DeliveryStickers.scss';
import { motion } from 'framer-motion';

function DeliveryStickers() {
  const stickerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.162,
      },
    },
  };
  const sticker = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="home--sticker__container">
      <motion.div
        variants={stickerAnimation}
        animate="visible"
        initial="hidden"
        className="home--sticker"
      >
        <motion.div variants={sticker} className="sticker">
          <img src={Deliveroo} alt="deliveroo" />
        </motion.div>
        <motion.div variants={sticker} className="sticker">
          <img src={JustEat} alt="justeat" />
        </motion.div>
        <motion.div variants={sticker} className="sticker">
          <img src={UberEats} alt="ubereats" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default DeliveryStickers;
