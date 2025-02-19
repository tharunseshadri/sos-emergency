import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import EmergencyDialer from './EmergencyDialer';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to COP Friendly</h1>
        <p className="user-greeting">Hello, John Doe</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-section" onClick={() => navigate('/quick-actions')}>
          <h2>Quick Actions</h2>
          <div className="quick-actions-preview">
            <span className="preview-icon">🚨</span>
            <p>Emergency Services and Quick Help</p>
          </div>
        </div>

        <div className="dashboard-section" onClick={() => navigate('/profile-info')}>
          <h2>Profile Information</h2>
          <div className="profile-preview">
            <span className="preview-icon">👤</span>
            <p>View and Update Your Profile</p>
          </div>
        </div>

        <div className="dashboard-section" onClick={() => navigate('/recent-activity')}>
          <h2>Recent Activity</h2>
          <div className="activity-preview">
            <span className="preview-icon">📝</span>
            <p>View Your Recent Actions</p>
          </div>
        </div>

        <div className="dashboard-section" onClick={() => navigate('/emergency-contacts')}>
          <h2>Emergency Contacts</h2>
          <div className="contacts-preview">
            <span className="preview-icon">📞</span>
            <p>Manage Emergency Contacts</p>
          </div>
        </div>
      </div>

      <div className="emergency-dialer-box">
        <EmergencyDialer />
      </div>
    </div>
  );
}

export default Dashboard;
