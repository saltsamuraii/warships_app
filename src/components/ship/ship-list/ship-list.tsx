import React, { useState } from 'react';
import useShips from '../../hooks/useShips';
import { Ship } from '../ship';
import { ShipCard } from '../ship-card';
import { ShipDetails } from '../ship-details';

import './ship-list.css';

type ShipListProps = {
  ships: Ship[];
  isLoading: boolean;
};

export default function ShipList({ships, isLoading}: ShipListProps) {
  if (ships.length <= 0 && isLoading) return <h1>Loading...</h1>;

  return (
    <div className="ship_list_container">
        <ul className="ship_list">
          {ships.slice(0, 10).map((ship) => (
            <ShipCard
              ship={ship}
              key={ship.id}
            />
          ))}
        </ul>
    </div>
  );
}
