import React from 'react';
import { ShipCard } from '../ship-card';

import './ship-list.css'

export default function ShipList() {
  return (
    <ul className='ship_list'>
      <li className='ship_list_item'>
        <ShipCard />
      </li>
      <li className='ship_list_item'>
        <ShipCard />
      </li>
      <li className='ship_list_item'>
        <ShipCard />
      </li>
      <li className='ship_list_item'>
        <ShipCard />
      </li>
    </ul>
  );
}
