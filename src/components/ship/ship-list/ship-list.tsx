import React, { useState, useEffect } from 'react';
import { Ship } from '../ship';
import { ShipCard } from '../ship-card';
import { Pagination } from '../../pagination';
import './ship-list.css';
import useShips from '../../hooks/useShips';

export default function ShipList() {
  const [displayedShips, setDisplayedShips] = useState<Ship[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [shipsPerPage] = useState(6);
  const { isLoading, ships } = useShips();

  useEffect(() => {
    setDisplayedShips(
      ships.slice(pageNumber * shipsPerPage, (pageNumber + 1) * shipsPerPage)
    );
  }, [pageNumber, shipsPerPage, ships]);

  const pageCount = Math.ceil(ships.length / shipsPerPage);

  const handlePageChange = (selected: number) => {
    setPageNumber(selected);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (ships.length <= 0) return <h2>No ships found...</h2>;

  return (
    <section className="ship_list_container">
      <ul className="ship_list">
        {displayedShips.map((ship) => (
          <ShipCard
            ship={ship}
            key={ship.id}
          />
        ))}
      </ul>
      <Pagination
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
