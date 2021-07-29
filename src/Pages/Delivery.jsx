import React, { Fragment } from 'react';
import Navigation from '../Components/Navigation';
import './Delivery.scss';
import Sticker from '../Components/DeliveryStickers';
import Footer from '../Components/Footer';

function Delivery() {
  return (
    <Fragment>
      <Navigation />
      <section>
        <h2>Delivery and collection</h2>
        <h5>
          You can now order a Ready Burger delivery on Just Eat, Deliveroo &
          Uber Eats
        </h5>
        <Sticker />
      </section>
      <Footer />
    </Fragment>
  );
}

export default Delivery;
