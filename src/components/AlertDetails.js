import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AlertDetails.css';

function AlertDetails() {
  const { id } = useParams();
  const [incident, setIncident] = useState(null);

  useEffect(() => {
    // Simulated data fetch based on ID
    const fetchIncidentDetails = () => {
      // This would normally be an API call
      const sampleIncident = {
        id: id,
        type: "Road Accident",
        timestamp: "2024-03-20T14:30:00",
        location: {
          address: "Junction Main Road, Near City Mall",
          coordinates: { lat: 17.385044, lng: 78.486671 },
          landmark: "Opposite Central Park",
          city: "Hyderabad",
          state: "Telangana",
          pincode: "500032"
        },
        victim: {
          name: "John Doe",
          age: 32,
          contact: "+91 9876543210",
          address: "123, Park Avenue, Hyderabad",
          bloodGroup: "O+",
        },
        emergency: {
          reportedTime: "14:30:00",
          responseTime: "14:35:00",
          dispatchTime: "14:37:00",
          arrivalTime: "14:45:00",
          status: "Active",
          priority: "High"
        },
        responders: {
          ambulance: {
            vehicleId: "AMB-456",
            hospital: "Apollo Hospital",
            crew: ["Dr. Sarah Smith", "Paramedic John Wilson"],
            contact: "+91 9876543211",
            estimatedArrival: "5 minutes"
          },
          police: {
            unitId: "PCR-789",
            officers: ["Officer Kumar", "Officer Singh"],
            contact: "+91 9876543212",
            status: "En Route"
          }
        },
        treatment: {
          hospital: "Apollo Hospital",
          admissionTime: "15:00:00",
          department: "Emergency Trauma Care",
          initialDiagnosis: "Multiple injuries, stable condition",
          doctorInCharge: "Dr. Mehta",
          currentStatus: "Under Observation"
        }
      };
      setIncident(sampleIncident);
    };

    fetchIncidentDetails();
  }, [id]);

  if (!incident) {
    return <div className="loading">Loading incident details...</div>;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="alert-details-container">
      <div className="alert-header">
        <div className="incident-type">
          <span className="incident-badge">{incident.type}</span>
          <span className="incident-id">#{incident.id}</span>
        </div>
        <div className="severity-badge" data-severity={incident.emergency.priority}>
          {incident.emergency.priority} Priority
        </div>
      </div>

      <div className="location-section">
        <h3>Location Details</h3>
        <div className="location-details">
          <div className="location-map">
            {/* Add a map component here if needed */}
            <div className="map-placeholder">
              <span>📍 Location Map</span>
              <p>Lat: {incident.location.coordinates.lat}</p>
              <p>Lng: {incident.location.coordinates.lng}</p>
            </div>
          </div>
          <div className="location-info">
            <div className="info-item">
              <span className="label">Address:</span>
              <span className="value">{incident.location.address}</span>
            </div>
            <div className="info-item">
              <span className="label">Landmark:</span>
              <span className="value">{incident.location.landmark}</span>
            </div>
            <div className="info-item">
              <span className="label">City:</span>
              <span className="value">{incident.location.city}</span>
            </div>
            <div className="info-item">
              <span className="label">Pincode:</span>
              <span className="value">{incident.location.pincode}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-section">
        <h3>Emergency Timeline</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="time">{incident.emergency.reportedTime}</div>
            <div className="event">Incident Reported</div>
          </div>
          <div className="timeline-item">
            <div className="time">{incident.emergency.responseTime}</div>
            <div className="event">Response Initiated</div>
          </div>
          <div className="timeline-item">
            <div className="time">{incident.emergency.arrivalTime}</div>
            <div className="event">Emergency Services Arrived</div>
          </div>
          <div className="timeline-item">
            <div className="time">{incident.treatment.admissionTime}</div>
            <div className="event">Hospital Admission</div>
          </div>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-section">
          <h3>Victim Information</h3>
          <div className="detail-content">
            <p><strong>Name:</strong> {incident.victim.name}</p>
            <p><strong>Age:</strong> {incident.victim.age}</p>
            <p><strong>Blood Group:</strong> {incident.victim.bloodGroup}</p>
            <p><strong>Contact:</strong> {incident.victim.contact}</p>
            <p><strong>Address:</strong> {incident.victim.address}</p>
          </div>
        </div>

        <div className="detail-section">
          <h3>Emergency Response</h3>
          <div className="detail-content">
            <div className="responder-info">
              <h4>Ambulance</h4>
              <p><strong>Vehicle ID:</strong> {incident.responders.ambulance.vehicleId}</p>
              <p><strong>Hospital:</strong> {incident.responders.ambulance.hospital}</p>
              <p><strong>Crew:</strong> {incident.responders.ambulance.crew.join(', ')}</p>
              <p><strong>Contact:</strong> {incident.responders.ambulance.contact}</p>
            </div>
            <div className="responder-info">
              <h4>Police Unit</h4>
              <p><strong>Unit ID:</strong> {incident.responders.police.unitId}</p>
              <p><strong>Officers:</strong> {incident.responders.police.officers.join(', ')}</p>
              <p><strong>Contact:</strong> {incident.responders.police.contact}</p>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Hospital Treatment</h3>
          <div className="detail-content">
            <p><strong>Hospital:</strong> {incident.treatment.hospital}</p>
            <p><strong>Department:</strong> {incident.treatment.department}</p>
            <p><strong>Doctor:</strong> {incident.treatment.doctorInCharge}</p>
            <p><strong>Initial Diagnosis:</strong> {incident.treatment.initialDiagnosis}</p>
            <p><strong>Current Status:</strong> {incident.treatment.currentStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertDetails; 