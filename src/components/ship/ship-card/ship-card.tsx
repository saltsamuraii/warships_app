import React from 'react';

import './ship-card.css'

const shipsLink = "https://glossary-wows-global.gcdn.co/icons/vehicle/large/PGSC517_83a5cc53dcf088f35c9670eca9cdccfd48533017da1dfd16f97cf83aa00ca61b.png"

export default function ShipCard() {
  return (
    <div className="ship_card">
      <img
        className="ship_image"
        src={shipsLink}
        alt="ship_icon"
      />
      <div className="ship_info">
        <h2 className="ship_name">PGSC517</h2>
        <p className="ship_type">Sedan</p>
      </div>
    </div>
  );
}
