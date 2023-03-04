import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { SearchBar } from '../search-bar';
import { ErrorBoundary } from '../error-boundary';
import { ShipList } from '../ship/ship-list';
import { Ship } from '../ship/ship';

import './app.css';

export default function App() {
  const [ships, setShips] = useState<Ship[]>([]);
  const [searchShip, setSearchShip] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    fetch('https://vortex.worldofwarships.eu/api/encyclopedia/en/vehicles/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Could not fetch ${response.url} status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((result) => {
        setIsLoading(!isLoading);
        setShips(result.data);
      })
      .catch((error) => {
        throw new Error(error + error.message);
      });
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSearchShip('');
    console.log('est probitie');
  };

  const handleReset = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchShip('');
  };

  const handleSearchShip = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setSearchShip(value);
  };

  return (
    <ErrorBoundary>
      <SearchBar
        ship={searchShip}
        onSubmit={handleSubmit}
        onSearchShip={handleSearchShip}
        onReset={handleReset}
      />
      <ShipList ships={ships} />
    </ErrorBoundary>
  );
}
