import React, { MouseEventHandler, useCallback } from 'react';
import { Ship } from '../ship';

import './ship-card.css';

type ShipCardPros = {
  ship: Ship;
};

export default function ShipCard({ ship }: ShipCardPros) {
  const {
    name,
    nation,
    icons: { medium },
    localization: {
      shortmark: { en },
    },
  } = ship;

  if (!ship) {
    return null;
  }

  return (
    <li className="ship_card">
      <img
        className="ship_card-image"
        src={`https://glossary-wows-global.gcdn.co/icons/${medium}`}
        alt="ship_icon"
      />
      <div className="ship_card-info">
        <h2 className="ship_card-name">{name.split('_').join(' ')}</h2>
        <p className="ship_card-description">{en}</p>
        <p className="ship_card-nation">{nation.toUpperCase()}</p>
      </div>
    </li>
  );
}
