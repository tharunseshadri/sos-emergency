import React, { useState } from 'react';
import './Verification.css';

function AadharVerification() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const handleSendOTP = () => {
    setStep(2);
  };

  const handleVerify = () => {
    // Add verification logic
  };

  return (
    <div className="verification-container">
      <h2>Aadhar Verification</h2>
      
      {step === 1 ? (
        <div className="verification-form">
          <div className="input-group">
            <label>Aadhar Number</label>
            <input
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              placeholder="Enter your Aadhar number"
              maxLength="12"
            />
          </div>
          <button onClick={handleSendOTP} className="verify-btn">
            Send OTP
          </button>
        </div>
      ) : (
        <div className="verification-form">
          <div className="input-group">
            <label>Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              maxLength="6"
            />
          </div>
          <button onClick={handleVerify} className="verify-btn">
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
}

export default AadharVerification; 