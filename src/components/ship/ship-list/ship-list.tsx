import React from 'react';
import { Ship } from '../ship';
import { ShipCard } from '../ship-card';

import './ship-list.css';

type ShipListProps = {
  ships: Ship[];
};

export default function ShipList({ ships }: ShipListProps) {
  const data = Object.entries(ships).map((ship) => {
    return {
      id: ship[0],
      name: ship[1].name,
      icons: ship[1].icons,
      ...(ship[1] as object),
    } as Ship;
  });

  return (
    <div className='ship_list_container'>
    <ul className="ship_list">
      {data.slice(0, 10).map((ship) => (
        <li
          key={ship.id}
          className="ship_list_item"
        >
          <ShipCard shipId={ship.id} ship={ship} />
        </li>
      ))}
    </ul>
    </div>
  );
}
