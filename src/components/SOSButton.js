import React, { useState, useEffect } from 'react';
import './SOSButton.css';

function SOSButton() {
  const emergencyData = {
    police: {
      locations: [
        { name: 'Police Station 1', vicinity: '123 Main St', phone: '100', distance: '0.8 km', status: 'Open' },
        { name: 'Police Station 2', vicinity: '456 Elm St', phone: '100', distance: '1.2 km', status: 'Open' },
        { name: 'Police Station 3', vicinity: '789 Oak St', phone: '100', distance: '2.1 km', status: 'Open' },
      ],
      icon: '👮‍♂️',
      color: '#1a73e8',
      emergencyNumber: '100'
    },
    hospital: {
      locations: [
        { name: 'City Hospital', vicinity: '111 Maple Ave', phone: '108', distance: '1.0 km', status: 'Open 24/7' },
        { name: 'General Hospital', vicinity: '222 Pine Rd', phone: '108', distance: '1.5 km', status: 'Open 24/7' },
        { name: 'Emergency Care Center', vicinity: '333 Cedar Dr', phone: '108', distance: '1.8 km', status: 'Open' },
      ],
      icon: '🏥',
      color: '#ea4335',
      emergencyNumber: '108'
    },
    fire_station: {
      locations: [
        { name: 'Fire Station 1', vicinity: '101 Birch Ln', phone: '101', distance: '0.5 km', status: 'Available' },
        { name: 'Fire Station 2', vicinity: '202 Spruce Ct', phone: '101', distance: '1.3 km', status: 'Available' },
        { name: 'Fire Station 3', vicinity: '303 Aspen Way', phone: '101', distance: '1.9 km', status: 'Available' },
      ],
      icon: '🚒',
      color: '#ff6b00',
      emergencyNumber: '101'
    }
  };

  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeType, setActiveType] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isSilentEmergency, setIsSilentEmergency] = useState(false);
  const [showTrackingInterface, setShowTrackingInterface] = useState(false);

  useEffect(() => {
    // Get user's location when component mounts
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setLocationError(null);
        },
        (error) => {
          setLocationError("Unable to get location: " + error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser");
    }
  };

  const handleSilentEmergency = () => {
    setIsSilentEmergency(true);
    if (userLocation) {
      // Send location to emergency services
      sendSilentEmergencyAlert(userLocation);
    } else {
      getCurrentLocation();
    }
  };

  const sendSilentEmergencyAlert = (location) => {
    // This would be connected to your backend service
    const emergencyData = {
      location: location,
      timestamp: new Date().toISOString(),
      type: 'silent_emergency',
      user: {
        // Add user details from your auth system
        name: 'User Name',
        phone: 'User Phone',
        bloodGroup: 'User Blood Group',
        emergencyContacts: ['Emergency Contact Numbers']
      }
    };

    // For demonstration, log the data
    console.log('Silent Emergency Alert:', emergencyData);
    
    // Show the tracking interface
    setShowTrackingInterface(true);
  };

  const showLocations = (type) => {
    setLoading(true);
    setActiveType(type);
    setTimeout(() => {
      setNearbyPlaces(emergencyData[type].locations);
      setLoading(false);
    }, 500);
  };

  const handleEmergencyCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="emergency-container">
      {/* Add Silent Emergency Button */}
      <div className="silent-emergency-section">
        <button 
          className="silent-emergency-btn"
          onClick={handleSilentEmergency}
        >
          <span className="silent-icon">🤫</span>
          <span className="silent-text">Silent Emergency</span>
          <span className="silent-subtext">Press if you can't speak</span>
        </button>
      </div>

      {/* Show tracking interface when silent emergency is activated */}
      {showTrackingInterface && (
        <div className="tracking-interface">
          <div className="tracking-header">
            <h3>Silent Emergency Mode Active</h3>
            <p className="tracking-status">Emergency services have been notified</p>
          </div>
          
          <div className="location-info">
            <div className="location-details">
              <h4>Your Current Location:</h4>
              {userLocation ? (
                <>
                  <p>Latitude: {userLocation.latitude}</p>
                  <p>Longitude: {userLocation.longitude}</p>
                </>
              ) : (
                <p>Getting your location...</p>
              )}
            </div>
            {locationError && (
              <div className="location-error">
                {locationError}
              </div>
            )}
          </div>

          <div className="emergency-instructions">
            <h4>Emergency Instructions:</h4>
            <ul>
              <li>Stay calm and remain where you are if safe</li>
              <li>Emergency services are being dispatched</li>
              <li>Your location is being tracked</li>
              <li>Help is on the way</li>
            </ul>
          </div>
        </div>
      )}

      <div className="emergency-buttons">
        {Object.entries(emergencyData).map(([type, data]) => (
          <button 
            key={type}
            onClick={() => showLocations(type)}
            className={`emergency-btn ${type}-btn ${activeType === type ? 'active' : ''}`}
            style={{ '--button-color': data.color }}
          >
            <span className="btn-icon">{data.icon}</span>
            <span className="btn-content">
              <span className="btn-title">Find Nearby</span>
              <span className="btn-subtitle">{type.replace('_', ' ').toUpperCase()}</span>
            </span>
            <span className="emergency-number">{data.emergencyNumber}</span>
          </button>
        ))}
      </div>

      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Locating nearest emergency services...</p>
        </div>
      )}

      {nearbyPlaces.length > 0 && !loading && (
        <div className="locations-container">
          <h3>Nearby Emergency Services</h3>
          <div className="locations-grid">
            {nearbyPlaces.map((place, index) => (
              <div key={index} className="location-card">
                <div className="location-header">
                  <span className="location-icon">
                    {emergencyData[activeType].icon}
                  </span>
                  <span className="location-status">{place.status}</span>
                </div>
                <h4 className="location-name">{place.name}</h4>
                <p className="location-vicinity">{place.vicinity}</p>
                <div className="location-details">
                  <span className="distance">{place.distance}</span>
                  <button 
                    className="call-button"
                    onClick={() => handleEmergencyCall(place.phone)}
                  >
                    <span className="phone-icon">📞</span>
                    Call {place.phone}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SOSButton;
