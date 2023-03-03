import React, { ChangeEvent, FormEvent } from 'react';

import './search-bar.css';

interface SearchBarProps {
  ship: string;
  onSearchShip: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function SearchBar({
  onSubmit,
  ship,
  onSearchShip,
}: SearchBarProps) {
  return (
    <>
      <h1 className="title">World of Warships</h1>
      <form onSubmit={onSubmit}>
        <input
          className="search_input"
          onChange={onSearchShip}
          value={ship}
          type="text"
          placeholder="Search..."
        />
        <button type="submit">Search</button>
        {/* <div className="filters">
        <fieldset>
          <legend>Search by filters</legend>
          <input type="radio" />
          <input type="radio" />
        </fieldset>
      </div> */}
      </form>
    </>
  );
}
