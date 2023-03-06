import { useEffect, useState } from 'react';
import { getShips } from '../../helpers/getShips';
import { Ship } from '../ship/ship';

export default function useShips() {
  const [ships, setShips] = useState<Ship[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getShips().then((data) => {
      setIsLoading(!isLoading);
      setShips(data);
    });
  }, []);

  const formatedShips = Object.entries(ships).map(([id, { ...rest }]) => ({
    id,
    ...rest,
  }));

  return { isLoading, ships: formatedShips };
}
