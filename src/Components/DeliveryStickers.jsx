import React from 'react';
import Deliveroo from '../img/Deliveroo.png';
import JustEat from '../img/Just-Eat.png';
import UberEats from '../img/Uber-Eats.png';
import './DeliveryStickers.scss';

function DeliveryStickers() {
  return (
    <div className="home--sticker__container">
      <div className="home--sticker">
        <div className="sticker">
          <img src={Deliveroo} alt="deliveroo" />
        </div>
        <div className="sticker">
          <img src={JustEat} alt="justeat" />
        </div>
        <div className="sticker">
          <img src={UberEats} alt="ubereats" />
        </div>
      </div>
    </div>
  );
}

export default DeliveryStickers;
