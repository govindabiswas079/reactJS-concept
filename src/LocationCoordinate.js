import React, { useState } from 'react';

const LocationCoordinate = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const data = position.coords;
        const latitude = data.latitude;
        const longitude = data.longitude

        setStatus(null);
        setLat(latitude);
        setLng(longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }


  return (
    <div className="App">
      <button onClick={getLocation}>Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
    </div>
  );
}

export default LocationCoordinate;