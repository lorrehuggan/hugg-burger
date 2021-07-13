import React from "react";
import "./Footer.scss";
import Vegan from "../img/Shhh.svg";
import { GrMail } from "react-icons/gr";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="footer--signup">
        <div className="footer--signup__container">
          <h3>Stay up to date</h3>
          <p>Get Hugg Burger offers, news and more.</p>
          <form>
            <input placeholder="Email address" type="text" />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
      <div className="footer--bottom">
        <div className="footer-info">
          <div className="footer--info__top">
            <GrMail className="icon" />
            <small>ITSBETTER@HUGGBURGER.COM</small>
            <AiOutlineInstagram className="icon" />
            <AiOutlineFacebook className="icon" />
            <AiFillTwitterSquare className="icon" />
          </div>
          <div className="footer--info__bottom"></div>
        </div>
        <div className="footer--vegan">
          <img src={Vegan} alt="shhh" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
