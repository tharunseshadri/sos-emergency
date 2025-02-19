import React, { useState } from 'react';
import './Verification.css';

function LicenseVerification() {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [dob, setDob] = useState('');

  const handleVerify = () => {
    // Add verification logic
  };

  return (
    <div className="verification-container">
      <h2>Driving License Verification</h2>
      
      <div className="verification-form">
        <div className="input-group">
          <label>License Number</label>
          <input
            type="text"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            placeholder="Enter your License number"
          />
        </div>
        <div className="input-group">
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <button onClick={handleVerify} className="verify-btn">
          Verify License
        </button>
      </div>
    </div>
  );
}

export default LicenseVerification; 