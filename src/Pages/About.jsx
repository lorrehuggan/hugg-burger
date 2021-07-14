import React, { Fragment } from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import BigReadyMeal from '../img/Big-Ready-Meal.png';
import InfoGraphic from '../img/Info-Graphics.jpeg';
import LineBreak from '../img/Group.svg';
import './About.scss';

function About() {
  return (
    <Fragment>
      <Navigation />
      <div className="about">
        <div className="about--container">
          <div className="about--top">
            <div className="about--top__left">
              <h3>It's time you had a better burger</h3>
              <p style={{ fontWeight: '200' }}>
                More people than ever before can now enjoy a tasty burger at
                everyday prices.
              </p>
              <p style={{ fontWeight: '900' }}>
                This is Ready Burger and our menu is 100% plant-based.
              </p>
            </div>
            <div className="about--top__right">
              <img src={BigReadyMeal} alt="big-ready-meal" />
            </div>
          </div>
          <div className="about--line-break">
            <img src={LineBreak} alt="line-break" />
          </div>

          <img src={InfoGraphic} alt="info-graphics" />

          <div className="about--info-graphic__info-container">
            <div className="about--info-graphic__box">
              <h3>Want to know more? </h3>
              <p>
                We’re all ears, please get in touch if you have any questions,
                links are below.
              </p>
            </div>
          </div>
          <div className="about--info-graphic__info-container">
            <div className="about--info-graphic__box">
              <h3>Franchising? </h3>
              <p>
                We are in the early stages of planning our franchise strategy.
              </p>
            </div>
          </div>
          <div className="about--info-graphic__info-container">
            <div className="about--info-graphic__box">
              <h3>Where and when? </h3>
              <p>
                Our first location has already opened in Stand End in London and
                our second site on Parker Road will open in late Summer 2021.
                With more locations already in the pipeline. Sign up below for
                news, offers, exclusive events and more
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default About;
