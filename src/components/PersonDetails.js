import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonDetails.css';

function PersonDetails() {
  const navigate = useNavigate();
  const [person, setPerson] = useState({ name: '', accountNumber: '', address: '', fines: '' });

  const handleChange = (e) => setPerson({ ...person, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Information Saved Successfully!');
  };

  return (
    <div className="person-container">
      <h2>Person Details</h2>
      <form onSubmit={handleSubmit} className="person-form">
        <label>Name:</label>
        <input type="text" name="name" value={person.name} onChange={handleChange} required />

        <label>Account Number:</label>
        <input type="text" name="accountNumber" value={person.accountNumber} onChange={handleChange} required />

        <label>Address:</label>
        <textarea name="address" value={person.address} onChange={handleChange} required />

        <label>Fines:</label>
        <input type="text" name="fines" value={person.fines} onChange={handleChange} required />

        <button type="submit" className="save-btn">Save</button>
      </form>

      <button className="back-btn" onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default PersonDetails;
