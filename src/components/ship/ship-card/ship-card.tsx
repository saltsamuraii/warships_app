import React, { MouseEventHandler, useCallback } from 'react';
import { Ship } from '../ship';
import { ShipDetails } from '../ship-details';

import './ship-card.css'

type ShipCardPros = {
  shipId: string;
  ship: Ship,
}

export default function ShipCard({ shipId, ship }: ShipCardPros) {

  return (
    <div className="ship_card">
      <img
        className="ship_image"
        src={`https://glossary-wows-global.gcdn.co/icons/${ship.icons.medium}`}
        alt="ship_icon"
      />
      <div className="ship_info" >
        <h2 className="ship_name">{ship.name.split('_').join(' ')}</h2>
        <p className="ship_name">{ship.localization.shortmark.en}</p>
        <p className="ship_name">{ship.nation.toUpperCase()}</p>
      </div>
    </div>
  );
}
