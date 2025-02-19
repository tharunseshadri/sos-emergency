// UserInfo.js
import React from 'react';
import './UserInfo.css';

function UserInfo() {
  // You can replace this with real user data
  const user = {
    name: 'Tharun',
    email: 'tharun@example.com',
    phone: '+91 9876543210',
    address: 'Chennai, India',
  };

  return (
    <div className="user-info-container">
      <h2>User Information</h2>
      <div className="user-info-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
}

export default UserInfo;
