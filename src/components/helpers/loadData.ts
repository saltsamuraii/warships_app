export function loadData(apiUrl: string) {
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Could not fetch ${response.url} status: ${response.status}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(error + error.message);
    });
}
