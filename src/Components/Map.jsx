import React from 'react';
import './Map.scss';

function Map() {
  return (
    <div
      style={{
        overFlow: 'hidden',
        resize: 'none',
        maxWidth: '100%',
        width: '700px',
        height: '500px',
      }}
    >
      <div
        id="gmapcanvas"
        style={{ height: '100%', width: '100%', maxWidth: '100%' }}
      >
        <iframe
          title="map"
          style={{ height: '100%', width: '100%', border: '0' }}
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=london&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
