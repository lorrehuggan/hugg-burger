import React from 'react';
import './Footer.scss';
import Vegan from '../img/Shhh.svg';
import { GrMail } from 'react-icons/gr';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterSquare,
} from 'react-icons/ai';

import { motion } from 'framer-motion';

function Footer() {
  //Animation Variants
  const topVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const bottomVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '100' },
  };
  return (
    <footer>
      <div className="footer--signup">
        <motion.div
          variants={topVariants}
          animate="visible"
          initial="hidden"
          transition={{ duration: 1, ease: 'anticipate' }}
          className="footer--signup__container"
        >
          <h3>Stay up to date</h3>
          <p>Get Hugg Burger offers, news and more.</p>
          <form>
            <input placeholder="Email address" type="text" />
            <button>Sign Up</button>
          </form>
        </motion.div>
      </div>
      <div className="footer--bottom">
        <motion.div
          variants={topVariants}
          animate="visible"
          initial="hidden"
          transition={{ duration: 1, ease: 'anticipate' }}
          className="footer-info"
        >
          <motion.div
            variants={bottomVariants}
            animate="visible"
            initial="hidden"
            transition={{ duration: 1, ease: 'anticipate' }}
            className="footer--info__top"
          >
            <GrMail className="icon" />
            <small>ITSBETTER@HUGGBURGER.COM</small>
            <AiOutlineInstagram className="icon" />
            <AiOutlineFacebook className="icon" />
            <AiFillTwitterSquare className="icon" />
          </motion.div>
          <div className="footer--info__bottom"></div>
        </motion.div>
        <motion.div
          variants={bottomVariants}
          animate="visible"
          initial="hidden"
          transition={{ duration: 1, ease: 'anticipate' }}
          className="footer--vegan"
        >
          <img src={Vegan} alt="shhh" />
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
