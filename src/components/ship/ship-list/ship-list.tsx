import React, { useState } from 'react';
import useShips from '../../hooks/useShips';
import { Ship } from '../ship';
import { ShipCard } from '../ship-card';
import { ShipDetails } from '../ship-details';

import './ship-list.css';

export default function ShipList() {
  const { isLoading, ships } = useShips();

  if (ships.length <= 0 && isLoading) return <h1>Loading...</h1>;

  return (
    <div className="ship_list_container">
      <ul className="ship_list">
        {ships.slice(0, 10).map((ship) => (
          <li
            className="ship_list-item"
            key={ship.id}
          >
            <ShipCard ship={ship} />
          </li>
        ))}
      </ul>
    </div>
  );
}
