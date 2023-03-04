import React, { ChangeEvent, FormEvent } from 'react';

import searchIcon from '../assets/search-icon.svg';
import crossIcon from '../assets/cross-icon.svg';
import './search-bar.css';

interface SearchBarProps {
  ship: string;
  onSearchShip: (event: ChangeEvent<HTMLInputElement>) => void;
  onReset: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function SearchBar({
  onReset,
  onSubmit,
  ship,
  onSearchShip,
}: SearchBarProps) {
  return (
    <header className='header'>
      <h1 className="title">World of Warships</h1>
      <form onSubmit={onSubmit}>
        <input
          className="search_input"
          onChange={onSearchShip}
          value={ship}
          type="text"
          placeholder="Search..."
        />
        {ship.length > 0 ? (
          <button type='reset' className="search_input-clear" onClick={onReset}>
            <img
              src={crossIcon}
              alt="crossIcon"
            />
          </button>
        ) : (
          <button
            className="search_input-button"
            type="submit"
          >
            <img
              src={searchIcon}
              alt="searchIcon"
            />
          </button>
        )}

        {/* <div className="filters">
        <fieldset>
          <legend>Search by filters</legend>
          <input type="radio" />
          <input type="radio" />
        </fieldset>
      </div> */}
      </form>
    </header>
  );
}
