import React from 'react';
import './UserPages.css';

function Address() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">Address Details</h1>
        <div className="form-container">
          <form className="details-form">
            <div className="form-group">
              <label>Street Address</label>
              <input type="text" placeholder="Enter street address" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="Enter city" />
              </div>
              <div className="form-group">
                <label>State</label>
                <input type="text" placeholder="Enter state" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Postal Code</label>
                <input type="text" placeholder="Enter postal code" maxLength="6" />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" placeholder="Enter country" defaultValue="India" />
              </div>
            </div>
            <button type="submit" className="submit-btn">Save Address</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Address; 