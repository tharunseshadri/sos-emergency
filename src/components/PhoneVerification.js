import React, { useState } from 'react';
import './Verification.css';

function PhoneVerification() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const handleSendOTP = () => {
    // Add OTP sending logic
    setStep(2);
  };

  const handleVerify = () => {
    // Add verification logic
  };

  return (
    <div className="verification-container">
      <h2>Phone Verification</h2>
      
      {step === 1 ? (
        <div className="verification-form">
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
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

export default PhoneVerification;
