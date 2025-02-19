import React, { useState } from 'react';
import './UserPages.css';

function PersonalDetails() {
  const [userInfo, setUserInfo] = useState({
    fullName: 'Prabhas',
    dateOfBirth: '1979-10-23',
    gender: 'male',
    email: 'prabhas@example.com',
    phoneNumber: '+91 9876543210',
    bloodGroup: 'O+',
    emergencyContact: '+91 9876543211',
    occupation: 'Actor',
    address: '123 Movie Street, Hyderabad',
    idNumber: 'ID12345678',
    medicalConditions: 'None',
    allergies: 'None',
    medications: 'None'
  });

  const handleEdit = () => {
    // Implement edit functionality
    console.log('Edit button clicked');
  };

  const handleEmergencyUpdate = () => {
    // Implement emergency contacts update
    console.log('Update emergency contacts clicked');
  };

  return (
    <div className="personal-details-container">
      <div className="details-header">
        <h1>Personal Details</h1>
        <div className="emergency-badge">
          <span className="badge-icon">🚨</span>
          <span className="badge-text">Emergency Profile</span>
        </div>
      </div>

      <div className="quick-info-bar">
        <div className="quick-info-item">
          <span className="info-label">Blood Group</span>
          <span className="info-value highlight">{userInfo.bloodGroup}</span>
        </div>
        <div className="quick-info-item">
          <span className="info-label">Emergency Contact</span>
          <span className="info-value">{userInfo.emergencyContact}</span>
        </div>
        <div className="quick-info-item">
          <span className="info-label">Medical Status</span>
          <span className="info-value status-badge">Verified</span>
        </div>
      </div>

      <div className="details-grid">
        <section className="details-section">
          <h2>Basic Information</h2>
          <div className="details-content">
            <div className="info-row">
              <label>Full Name</label>
              <p>{userInfo.fullName}</p>
            </div>
            <div className="info-row">
              <label>Date of Birth</label>
              <p>{userInfo.dateOfBirth}</p>
            </div>
            <div className="info-row">
              <label>Gender</label>
              <p>{userInfo.gender}</p>
            </div>
            <div className="info-row">
              <label>Blood Group</label>
              <p className="highlight">{userInfo.bloodGroup}</p>
            </div>
          </div>
        </section>

        <section className="details-section">
          <h2>Contact Information</h2>
          <div className="details-content">
            <div className="info-row">
              <label>Email</label>
              <p>{userInfo.email}</p>
            </div>
            <div className="info-row">
              <label>Phone Number</label>
              <p>{userInfo.phoneNumber}</p>
            </div>
            <div className="info-row emergency">
              <label>Emergency Contact</label>
              <p>{userInfo.emergencyContact}</p>
            </div>
            <div className="info-row">
              <label>Address</label>
              <p>{userInfo.address}</p>
            </div>
          </div>
        </section>

        <section className="details-section">
          <h2>Medical Information</h2>
          <div className="details-content">
            <div className="info-row">
              <label>Medical Conditions</label>
              <p>{userInfo.medicalConditions}</p>
            </div>
            <div className="info-row">
              <label>Allergies</label>
              <p>{userInfo.allergies}</p>
            </div>
            <div className="info-row">
              <label>Current Medications</label>
              <p>{userInfo.medications}</p>
            </div>
          </div>
        </section>

        <section className="details-section">
          <h2>Additional Information</h2>
          <div className="details-content">
            <div className="info-row">
              <label>Occupation</label>
              <p>{userInfo.occupation}</p>
            </div>
            <div className="info-row">
              <label>ID Number</label>
              <p>{userInfo.idNumber}</p>
            </div>
          </div>
        </section>
      </div>

      <div className="action-buttons">
        <button className="edit-button" onClick={handleEdit}>
          <span className="button-icon">✏️</span>
          Edit Information
        </button>
        <button className="emergency-button" onClick={handleEmergencyUpdate}>
          <span className="button-icon">🚑</span>
          Update Emergency Contacts
        </button>
      </div>
    </div>
  );
}

export default PersonalDetails; 