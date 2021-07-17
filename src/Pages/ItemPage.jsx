import React, { Fragment } from 'react';
import './ItemPage.scss';
import DeliveryStickers from '../Components/DeliveryStickers';
import Gluten from '../img/gluten.svg';
import Nuts from '../img/nuts.svg';
import Mustard from '../img/mustard.svg';
import Sesame from '../img/sesame.svg';
import Soya from '../img/soya.svg';
import Peanuts from '../img/peanuts.svg';
import Celery from '../img/celery.svg';
import Navigation from '../Components/Navigation';

function ItemPage({ name, small, price, info, img }) {
  return (
    <Fragment>
      <div className="item--page">
        <div className="item--details__container">
          <div className="details--img">
            <img src={img} alt="big-ready-burger" />
          </div>
          <div className="details--container">
            <div className="details">
              <small>{small}</small>
              <h3>{name}</h3>
              <h4>{price}</h4>
              <p>{info}</p>
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
    </Fragment>
  );
}

export default ItemPage;
