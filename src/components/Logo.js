import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <div className="logo-container">
      <div className="logo">
        <div className="siren">
          <div className="light left blue-light"></div>
          <div className="light right red-light"></div>
          <div className="base">
            <i className="fas fa-shield-alt shield-icon"></i>
          </div>
        </div>
        <div className="logo-text">
          <h1 className="logo-title">
            <span className="sos-text">SOS</span>
            <span className="emergency-text">Emergency</span>
          </h1>
          <p className="logo-subtitle">24/7 Emergency Assistance</p>
        </div>
      </div>
    </div>
  );
}

export default Logo; 