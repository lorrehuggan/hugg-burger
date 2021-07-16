import React, { Fragment } from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import './ItemPage.scss';
import BigReady from '../img/Big-Ready.png';

function ItemPage() {
  return (
    <Fragment>
      <Navigation />
      <div className="item--page">
        <div className="item--page__container">
          <div className="menu--item__container">
            <img src={BigReady} alt="big-ready-burger" />
          </div>
          <div className="ingredients--details__container">
            <div className="ingredients--details">
              <small>Premium Burgers</small>
              <h3>Big Hugg</h3>
              <p className="price">£3.59</p>
              <p>
                Two grilled patties with cheese, lettuce, pickles and Ready
                sauce. All housed in a soft and freshly toasted double cut
                seeded bun.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default ItemPage;
