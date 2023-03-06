import React, { useState } from 'react';
import { ErrorBoundary } from '../error-boundary';
import { ShipList } from '../ship/ship-list';
import { LazyImage } from '../lazy-image';
import useShips from '../hooks/useShips';

import './app.css';
import headerIcon from '../assets/header-icon.svg';

export default function App() {
  const { isLoading, ships } = useShips();

  return (
    <ErrorBoundary>
      <header className="header">
        <LazyImage
          className="header_icon"
          src={headerIcon}
          alt="header-icon"
        />
        <h1>World of Warships</h1>
      </header>
      <ShipList
        ships={ships}
        isLoading={isLoading}
      />
    </ErrorBoundary>
  );
}
