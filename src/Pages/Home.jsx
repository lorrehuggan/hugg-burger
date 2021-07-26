import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import './Home.scss';
import BigReady from '../img/Big-Ready.png';
import BaconDouble from '../img/Bacon-Double.png';
import TexasStacker from '../img/Texas-Stacker.png';
import DeliveryStickers from '../Components/DeliveryStickers';
import { motion } from 'framer-motion';

function Home() {
  const burgerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.162,
      },
    },
  };
  const burger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <React.Fragment>
      <Navigation />
      <div className="home">
        <div className="home--container">
          <motion.div
            className="home--header"
            animate={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              opacity: 0,
              y: '-100',
            }}
            transition={{
              duration: 1,
              ease: 'anticipate',
            }}
          >
            <h1>Ready for a better burger?</h1>
          </motion.div>
          <motion.div
            variants={burgerAnimation}
            animate="visible"
            initial="hidden"
            className="home--img"
          >
            <motion.img
              variants={burger}
              src={BigReady}
              alt="bigready-burger"
            />
            <motion.img
              variants={burger}
              src={BaconDouble}
              alt="bacondouble-burger"
            />
            <motion.img
              variants={burger}
              src={TexasStacker}
              alt="texas-burger"
            />
          </motion.div>
          <DeliveryStickers />
          <motion.div
            animate={{ height: '45%' }}
            initial={{ height: '0%' }}
            transition={{ duration: 1, ease: 'anticipate' }}
            className="home--img__img-bg"
          ></motion.div>
        </div>
      </div>
      <div className="home--bottom__msg">
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'anticipate' }}
        >
          Ready Burger brings you classic flavours at everyday prices. But,
          what's the difference?
        </motion.p>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'anticipate' }}
          style={{ fontWeight: '900' }}
        >
          Our menu is 100% plant-based.
        </motion.p>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
