import { ROUTE } from "../enums/enum-routes";

export function getShips()  {
  return fetch(ROUTE.URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Could not fetch ${response.url} status: ${response.status}`
        );
      }
      return response.json();
    })
    .then((result) => result.data)
    .catch((error) => {
      throw new Error(error + error.message);
    });
}
