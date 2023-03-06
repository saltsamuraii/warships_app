import React, { useState } from 'react';
import { LazyImage } from '../../lazy-image';
import { Ship } from '../ship';

import './ship-card.css';

interface ShipCardPros {
  ship: Ship;
}

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
    icons,
    localization: {
      description,
      shortmark: { en },
    },
  } = ship;

  const imgSrc = !imageError
    ? 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    : `https://glossary-wows-global.gcdn.co/icons/${icons.large}`;

  return (
    <li className="ship_card">
      <h2 className="ship_card-name">{name.split('_').join(' ')}</h2>
      <LazyImage
        className="ship_card-image"
        onError={handleErrorImage}
        src={imgSrc}
        alt="ship_icon"
      />
      <div className="ship_card-info">
        <p className="ship_card-shortmark">{en}</p>
        <p className="ship_card-nation">{nation.toUpperCase()}</p>
        <p className="ship_card-description">
          {description.en}
        </p>
      </div>
    </li>
  );
}
