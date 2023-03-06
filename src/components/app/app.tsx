import React, { useState } from 'react';
import { ErrorBoundary } from '../error-boundary';
import { ShipList } from '../ship/ship-list';
import { ShipDetails } from '../ship/ship-details';

import './app.css';
import headerIcon from '../assets/header-icon.svg';
import useShips from '../hooks/useShips';

export default function App() {
  const [shipId, setShipId] = useState<string | undefined>(undefined);
 

  return (
    <ErrorBoundary>
      <div>
        <img
          src={headerIcon}
          alt="header-icon"
        />
        <h1>World of Warships</h1>
      </div>
          <ShipList/>

    </ErrorBoundary>
  );
}
