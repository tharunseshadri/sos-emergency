import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AadharDetails.css';

function AadharDetails() {
  const navigate = useNavigate();
  const [aadhar, setAadhar] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const sendOtp = () => {
    if (/^\d{10}$/.test(phone)) {
      setIsOtpSent(true);
      alert(`OTP sent to ${phone}`);
    } else {
      alert('Enter a valid 10-digit phone number.');
    }
  };

  const verifyOtp = () => {
    if (otp === '1234') alert('Aadhar linked successfully!');
    else alert('Invalid OTP. Try again.');
  };

  return (
    <div className="aadhar-container">
      <h2>Aadhar Details</h2>
      <form className="aadhar-form">
        <label>Aadhar Number:</label>
        <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} maxLength="12" required />

        <label>Phone Number:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength="10" required />

        {!isOtpSent ? (
          <button type="button" className="send-otp-btn" onClick={sendOtp}>Send OTP</button>
        ) : (
          <>
            <label>Enter OTP:</label>
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            <button type="button" className="verify-otp-btn" onClick={verifyOtp}>Verify OTP</button>
          </>
        )}
      </form>

      <button className="back-btn" onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default AadharDetails;
