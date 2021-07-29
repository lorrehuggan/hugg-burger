import React, { Fragment } from 'react';
import DeliveryStickers from '../Components/DeliveryStickers';
import Footer from '../Components/Footer';
import Map from '../Components/Map';
import Navigation from '../Components/Navigation';
import './Locations.scss';

function Locations() {
  return (
    <Fragment>
      <Navigation />
      <section>
        {/* Map */}
        <div className="location__container">
          <div className="location__details">
            <h2>London</h2>
            <h4>Open for instore orders</h4>
            <p>Online orders and deliveries available from 5th July 2021.</p>
            <p>Open 12 noon to 12 midnight, 7 days a week.</p>
            <p className="last__p">16 Park Road Crouch End London N8 8TD</p>
            <DeliveryStickers />
          </div>
          <Map />
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}

export default Locations;
