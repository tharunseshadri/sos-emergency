// RecentAlerts.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecentAlerts.css';

function RecentAlerts() {
  const navigate = useNavigate();
  
  // Sample alerts data with health emergencies
  const alerts = [
    {
      id: "INC123456",
      type: "Road Accident",
      timestamp: "2024-03-20T14:30:00",
      location: "Junction Main Road, Near City Mall",
      status: "Active",
      severity: "High",
      vehicleId: "AMB-456",
      hospital: "Apollo Hospital",
      description: "Multiple vehicle collision. Emergency services dispatched.",
      victims: 2,
      medicalDetails: {
        injuries: "Multiple trauma",
        treatment: "Emergency surgery required",
        bloodNeeded: "O+, B+"
      }
    },
    {
      id: "INC123457",
      type: "Medical Emergency",
      timestamp: "2024-03-20T15:45:00",
      location: "Park Avenue, Building 7",
      status: "Active",
      severity: "High",
      vehicleId: "AMB-789",
      hospital: "City Hospital",
      description: "Cardiac arrest case. Emergency response team on site.",
      victims: 1,
      medicalDetails: {
        condition: "Cardiac Arrest",
        treatment: "Immediate CPR initiated",
        specialistNeeded: "Cardiologist"
      }
    },
    {
      id: "INC123458",
      type: "Fire Emergency",
      timestamp: "2024-03-20T16:15:00",
      location: "Industrial Area, Sector 5",
      status: "Resolved",
      severity: "Medium",
      vehicleId: "FIRE-789",
      hospital: "General Hospital",
      description: "Building fire contained. Smoke inhalation cases reported.",
      victims: 3,
      medicalDetails: {
        injuries: "Smoke inhalation",
        treatment: "Oxygen therapy",
        specialCare: "Respiratory support"
      }
    },
    {
      id: "INC123459",
      type: "Health Crisis",
      timestamp: "2024-03-20T16:30:00",
      location: "Senior Living Complex, East Wing",
      status: "Active",
      severity: "High",
      vehicleId: "AMB-234",
      hospital: "Specialty Medical Center",
      description: "Multiple elderly patients with severe food poisoning.",
      victims: 5,
      medicalDetails: {
        condition: "Food Poisoning",
        treatment: "IV Fluids, Anti-emetics",
        specialCare: "Elderly care protocols"
      }
    }
  ];

  const handleViewDetails = (alertId) => {
    navigate(`/alert/${alertId}`);
  };

  const getSeverityClass = (severity) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'severity-high';
      case 'medium': return 'severity-medium';
      case 'low': return 'severity-low';
      default: return 'severity-medium';
    }
  };

  const getStatusStyle = (status) => {
    return status.toLowerCase() === 'active' ? 'status-active' : 'status-resolved';
  };

  return (
    <div className="recent-alerts-container">
      <div className="alerts-header">
        <h2>Recent Emergency Alerts</h2>
        <div className="alerts-stats">
          <div className="stat-box">
            <span className="stat-number">{alerts.length}</span>
            <span className="stat-label">Total Alerts</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">
              {alerts.filter(alert => alert.status === 'Active').length}
            </span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">
              {alerts.reduce((acc, curr) => acc + curr.victims, 0)}
            </span>
            <span className="stat-label">Total Victims</span>
          </div>
        </div>
        <div className="admin-controls">
          <button className="admin-btn">
            <i className="fas fa-download"></i>
            Export Reports
          </button>
          <button className="admin-btn">
            <i className="fas fa-bell"></i>
            Broadcast Alert
          </button>
        </div>
      </div>

      <div className="alerts-grid">
        {alerts.map((alert) => (
          <div key={alert.id} className="alert-card">
            <div className="alert-header">
              <div className={`alert-type ${getSeverityClass(alert.severity)}`}>
                {alert.type}
              </div>
              <div className={`alert-status ${getStatusStyle(alert.status)}`}>
                {alert.status}
              </div>
            </div>

            <div className="alert-body">
              <div className="alert-info">
                <p className="alert-time">
                  {new Date(alert.timestamp).toLocaleString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  })}
                </p>
                <p className="alert-location">{alert.location}</p>
              </div>

              <div className="alert-details">
                <div className="detail-item">
                  <span className="label">Vehicle ID</span>
                  <span className="value">{alert.vehicleId}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Hospital</span>
                  <span className="value">{alert.hospital}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Victims</span>
                  <span className="value">{alert.victims}</span>
                </div>
              </div>

              <p className="alert-description">{alert.description}</p>

              {alert.medicalDetails && (
                <div className="medical-details">
                  <h4>Medical Information</h4>
                  {Object.entries(alert.medicalDetails).map(([key, value]) => (
                    <div key={key} className="medical-item">
                      <span className="medical-label">{key}:</span>
                      <span className="medical-value">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              <button 
                className="view-details-btn"
                onClick={() => handleViewDetails(alert.id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentAlerts;
