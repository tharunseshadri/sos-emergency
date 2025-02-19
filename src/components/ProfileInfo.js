import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function ProfileInfo() {
  return (
    <div className="dashboard-section full-page">
      <h2>Profile Information</h2>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-info">
            <h3>Prabhas</h3>
            <p>ID: COP123456</p>
          </div>
        </div>
        <div className="profile-actions">
          <Link to="/personal-details" className="profile-link">View Full Profile</Link>
          <Link to="/settings" className="profile-link">Settings</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo; 