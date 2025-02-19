// LocationTracker.js
import React, { useState, useEffect } from 'react';
import './LocationTracker.css';

function LocationTracker() {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setLocationError(null);
        },
        (error) => {
          setLocationError('Unable to retrieve location');
          console.error('Error:', error);
        }
      );
    } else {
      setLocationError('Geolocation not supported');
    }
  };

  return (
    <div className="location-tracker">
      <div className="location-button" onClick={() => setShowMap(!showMap)}>
        <i className="fas fa-map-marker-alt"></i>
        <span>Location</span>
        {location && <div className="location-active-indicator"></div>}
      </div>

      {showMap && location && (
        <div className="location-popup">
          <div className="location-header">
            <h3>Your Location</h3>
            <button className="close-map" onClick={() => setShowMap(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="map-container">
            <iframe
              title="Location Map"
              width="100%"
              height="300"
              frameBorder="0"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude-0.01},${location.latitude-0.01},${location.longitude+0.01},${location.latitude+0.01}&layer=mapnik&marker=${location.latitude},${location.longitude}`}
            ></iframe>
          </div>
          <div className="location-coordinates">
            <p>Latitude: {location.latitude.toFixed(6)}</p>
            <p>Longitude: {location.longitude.toFixed(6)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocationTracker;
