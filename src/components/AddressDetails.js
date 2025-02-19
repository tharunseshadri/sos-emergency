import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddressDetails.css';

function AddressDetails() {
  const navigate = useNavigate();

  return (
    <div className="address-container">
      <h2>Address Details</h2>
      <p>Update or verify your address information.</p>
      <button className="back-btn" onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default AddressDetails;
