import React from 'react';
import { Ship } from '../ship';

type ShipCardPros = {
  ship: Ship;
};

export default function ShipDetails({ ship }: ShipCardPros) {
  return (
    <div className="ship_card">
      <img
        className="ship_image"
        src={`https://glossary-wows-global.gcdn.co/icons/${ship.icons.large}`}
        alt="ship_icon"
      />
      <div className="ship_info">
        <p className="ship_name">{ship.localization.description.en}</p>
      </div>
    </div>
  );
}
