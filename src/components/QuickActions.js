import React from 'react';
import './Dashboard.css';

function QuickActions() {
  const handleEmergencyCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="dashboard-section full-page">
      <h2>Quick Actions</h2>
      <div className="quick-actions">
        <button 
          className="action-button emergency"
          onClick={() => handleEmergencyCall('100')}
        >
          <span className="icon">🚨</span>
          Emergency SOS
        </button>
        <button 
          className="action-button alert"
          onClick={() => handleEmergencyCall('112')}
        >
          <span className="icon">⚠️</span>
          Report Incident
        </button>
        <button 
          className="action-button help"
          onClick={() => handleEmergencyCall('108')}
        >
          <span className="icon">🆘</span>
          Request Help
        </button>
      </div>
    </div>
  );
}

export default QuickActions; 