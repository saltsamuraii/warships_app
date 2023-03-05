import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ErrorBoundary } from '../error-boundary';
import { ShipList } from '../ship/ship-list';
import { Ship } from '../ship/ship';

import headerIcon from '../assets/header-icon.svg';
import './app.css';
import { getShips } from '../../helpers/getShips';

export default function App() {
  const [ships, setShips] = useState<Ship[]>([]);
  const [isLoading, setIsLoading] = useState(true);

 

  return (
    <ErrorBoundary>
      <div>
        <img
          src={headerIcon}
          alt="header-icon"
        />
        <h1>World of Warships</h1>
      </div>
      <ShipList />
    </ErrorBoundary>
  );
}
