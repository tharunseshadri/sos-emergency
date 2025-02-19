import React, { useState, useEffect } from 'react';
import './EmergencyDialer.css';

function EmergencyDialer() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const emergencyNumbers = [
    { name: 'Police', number: '100', icon: '👮‍♂️' },
    { name: 'Ambulance', number: '108', icon: '🚑' },
    { name: 'Women Helpline', number: '1091', icon: '👩' },
    { name: 'Fire', number: '101', icon: '🚒' },
    { name: 'Emergency Disaster', number: '112', icon: '🆘' },
  ];

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
          setLocationError('Unable to retrieve your location');
          console.error('Error getting location:', error);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser');
    }
  };

  const handleNumberClick = (num) => {
    setPhoneNumber(prev => prev + num);
  };

  const handleDelete = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  const handleCall = () => {
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      {!isExpanded ? (
        <button className="quick-call-btn" onClick={() => setIsExpanded(true)}>
          <i className="fas fa-phone-alt"></i>
          <span className="call-text">Call</span>
          <span className="pulse-ring"></span>
        </button>
      ) : (
        <div className="dialer-overlay" onClick={() => setIsExpanded(false)}>
          <div className="dialer-container" onClick={e => e.stopPropagation()}>
            <div className="dialer-header">
              <h2>Emergency Dialer</h2>
              <div className="header-actions">
                <div className="location-info">
                  {location ? (
                    <div className="location-display" onClick={toggleMap}>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>View on map</span>
                    </div>
                  ) : (
                    <button className="location-btn" onClick={getLocation}>
                      <i className="fas fa-map-marker-alt"></i>
                      {locationError ? 'Retry location' : 'Get location'}
                    </button>
                  )}
                </div>
                <button className="close-btn" onClick={() => setIsExpanded(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>

            {showMap && location && (
              <div className="map-container">
                <iframe
                  title="Location Map"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location.latitude},${location.longitude}&zoom=15`}
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <div className="phone-display">
              <input type="text" value={phoneNumber} readOnly />
            </div>

            <div className="dial-pad">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num) => (
                <button key={num} onClick={() => handleNumberClick(num)} className="dial-btn">
                  {num}
                </button>
              ))}
              <button onClick={() => setPhoneNumber('')} className="dial-btn cancel-btn">
                <i className="fas fa-times"></i>
              </button>
              <button onClick={handleCall} className="dial-btn confirm-btn">
                <i className="fas fa-check"></i>
              </button>
            </div>

            <div className="emergency-numbers">
              <h3>Emergency Contacts</h3>
              <div className="numbers-grid">
                {emergencyNumbers.map((emergency) => (
                  <button 
                    key={emergency.number}
                    onClick={() => setPhoneNumber(emergency.number)}
                    className="emergency-btn"
                  >
                    <span className="emergency-icon">{emergency.icon}</span>
                    <span className="emergency-name">{emergency.name}</span>
                    <span className="emergency-number">{emergency.number}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EmergencyDialer; 