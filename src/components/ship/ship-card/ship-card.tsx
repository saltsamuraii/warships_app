import React from 'react';

import './ship-card.css'

export default function ShipCard() {
  return (
    <div className="ship_card">
      <img
        className="ship_image"
        src=" https://glossary-wows-global.gcdn.co/icons/vehicle/large/PGSC517_83a5cc53dcf088f35c9670eca9cdccfd48533017da1dfd16f97cf83aa00ca61b.png"
        alt="ship_icon"
      />
      <div className="ship_info">
        <h2 className="ship_name">PGSC517</h2>
        <p className="ship_type">Sedan</p>
        <p className="ship_price">$1000</p>
      </div>
    </div>
  );
}
