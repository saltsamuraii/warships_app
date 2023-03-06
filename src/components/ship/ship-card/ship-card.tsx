import React, { useState } from 'react';
import { Ship } from '../ship';

import './ship-card.css';

type ShipCardPros = {
  ship: Ship;
};

export default function ShipCard({ ship }: ShipCardPros) {
  const [imageError, setImageError] = useState(true);

  const handleErrorImage = (): void => {
    setImageError(false);
  };

  if (!ship) {
    return null;
  }

  const {
    name,
    nation,
    icons: { medium },
    localization: {
      description: { ru },
      shortmark: { en },
    },
  } = ship;

  //const imgSrc = !imageError ? 'https://allmovies.tube/assets/img/no-poster.png' : `https://glossary-wows-global.gcdn.co/icons/${medium}`;

  return (
    <>
      <img
        className="ship_card-image"
        onError={handleErrorImage}
        src={`https://glossary-wows-global.gcdn.co/icons/${medium}`}
        alt="ship_icon"
        role="presentation"
      />
      <div className="ship_card-info">
        <div className="test">
          <h2 className="ship_card-name">{name.split('_').join(' ')}</h2>
          <p className="ship_card-shortmark">{en}</p>
          <p className="ship_card-nation">{nation.toUpperCase()}</p>
        </div>
        <p className="ship_card-description">{ru}</p>
      </div>
    </>
  );
}
