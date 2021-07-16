import React, { Fragment } from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import './ItemPage.scss';
import BigReady from '../img/Big-Ready.png';
import DeliveryStickers from '../Components/DeliveryStickers';
import Gluten from '../img/gluten.svg';
import Nuts from '../img/nuts.svg';
import Mustard from '../img/mustard.svg';
import Sesame from '../img/sesame.svg';
import Soya from '../img/soya.svg';
import Peanuts from '../img/peanuts.svg';
import Celery from '../img/celery.svg';

function ItemPage() {
  return (
    <Fragment>
      <Navigation />
      <div className="item--page">
        <div className="item--details__container">
          <div className="details--img">
            <img src={BigReady} alt="big-ready-burger" />
          </div>
          <div className="details--container">
            <div className="details">
              <small>Premium Burgers</small>
              <h3>Big Hugg</h3>
              <h4>£3.59</h4>
              <p>
                Two grilled patties with cheese, lettuce, pickles and Ready
                sauce. All housed in a soft and freshly toasted double cut
                seeded bun.
              </p>
              <DeliveryStickers />
            </div>
          </div>
        </div>
        <div className="item--ingredients__container">
          <h5>ALLERGENS</h5>
          <div className="allergen--icons">
            <img src={Gluten} alt="gluten" />
            <img src={Nuts} alt="gluten" />
            <img src={Mustard} alt="gluten" />
            <img src={Sesame} alt="gluten" />
            <img src={Soya} alt="gluten" />
            <img src={Peanuts} alt="gluten" />
            <img src={Celery} alt="gluten" />
          </div>
          <p>
            We produce our food in kitchens where allergens are handled by our
            people, and where equipment and utensils are used for multiple menu
            items, including those containing allergens. Although your meal is
            prepared with care, we cannot guarantee it will be allergen free,
            even after ingredients have been removed on request. While there are
            no nuts or peanut ingredients in the products listed we can’t
            guarantee that our food is completely nut or peanut free.
          </p>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default ItemPage;
