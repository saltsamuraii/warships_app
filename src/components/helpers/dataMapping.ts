import { Ship } from '../ship/ship';

export function dataMapping(data: Ship[]): void {
  Object.entries(data).map((ship) => {
    return {
        id: ship[0],
    };
  });
}
