import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { SearchBar } from '../search-bar';
import { ErrorBoundary } from '../error-boundary';

import './app.css';

export default function App() {
  // const [data, setData] = useState({});
  const [searchShip, setSearchShip] = useState<string>('');
  // const [isLoading, setIsLoading] = useState(true);


  // useEffect(() => {
  //   fetch('https://vortex.worldofwarships.eu/api/encyclopedia/en/vehicles/')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `Could not fetch ${response.url} status: ${response.status}`
  //         );
  //       }
  //       return response.json();
  //     })
  //     .then((result) => {
  //       setIsLoading(!isLoading);
  //       setData(result.data);
  //     })
  //     .catch((error) => {
  //       throw new Error(error + error.message);
  //     });

  // }, [isLoading, data]);
  // console.log(data["3765319664"]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setSearchShip('');
    console.log('est probitie');
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
      />
    </ErrorBoundary>
  );
}
