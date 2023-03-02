import React, { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://vortex.worldofwarships.eu/api/encyclopedia/en/vehicles/')
    .then(res => res.json())
    .then(data => setData(data))

  }, []);
  console.log(data)
  return <h1>Hello</h1>;
}
