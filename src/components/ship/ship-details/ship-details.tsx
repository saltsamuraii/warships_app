import React, { useEffect } from 'react';
import { Ship } from '../ship';

interface ShipDetailsId {
  ship: Ship;
  shipId?: string;
}

export default function ShipDetails({ship, shipId}: ShipDetailsId) {
  
  useEffect((): void => {
    if (shipId === undefined) {
      return;
    }
    // getShipId(`https://vortex.worldofwarships.eu/api/encyclopedia/en/vehicles/${shipId}`);
  }, [shipId]);

  console.log(shipId);

  return (
    <div className="ship_card" key={shipId}>
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
