import React, { useState } from 'react';
import './IncidentReport.css'; // For styling the centered layout

function IncidentReport() {
  const [incident, setIncident] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const submitReport = () => {
    alert(`Incident Reported: ${incident}`);
    setIncident(''); // Clear the form

    setReportSubmitted(true);
    setResponseMessage('Report submitted, waiting for a reply...');

    // Simulate a response in 2 minutes (120,000ms)
    setTimeout(() => {
      setResponseMessage('Your report has been acknowledged. You will be contacted shortly.');
    }, 120000);
  };

  return (
    <div className="incident-report-container">
      <h3>Report an Incident</h3>

      <textarea
        value={incident}
        onChange={(e) => setIncident(e.target.value)}
        placeholder="Describe the incident..."
        rows="6"
        className="incident-textarea"
      />

      <button onClick={submitReport} className="submit-btn">
        Submit
      </button>

      {/* Show response message after submission */}
      {reportSubmitted && <p className="response-message">{responseMessage}</p>}
    </div>
  );
}

export default IncidentReport;
