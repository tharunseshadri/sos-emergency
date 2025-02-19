import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import SOSButton from './components/SOSButton';
import LocationTracker from './components/LocationTracker';
import IncidentReport from './components/IncidentReport';
import RecentAlerts from './components/RecentAlerts';
import PersonalDetails from './components/PersonalDetails';
import AadharDetails from './components/AadharDetails';
import AddressDetails from './components/AddressDetails';
import PhoneVerification from './components/PhoneVerification';
import QuickActions from './components/QuickActions';
import ProfileInfo from './components/ProfileInfo';
import RecentActivity from './components/RecentActivity';
import EmergencyContacts from './components/EmergencyContacts';
import AadharVerification from './components/AadharVerification';
import LicenseVerification from './components/LicenseVerification';
import AlertDetails from './components/AlertDetails';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app-container">
      {isAuthenticated && <Navbar />}
      <div className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/" 
            element={
              !isAuthenticated ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            } 
          />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />}
          />
          <Route
            path="/personal-details"
            element={isAuthenticated ? <PersonalDetails /> : <Navigate to="/" replace />}
          />
          <Route
            path="/location"
            element={isAuthenticated ? <LocationTracker /> : <Navigate to="/" replace />}
          />
          <Route
            path="/sos"
            element={isAuthenticated ? <SOS /> : <Navigate to="/" replace />}
          />
          <Route
            path="/incident-report"
            element={isAuthenticated ? <IncidentReport /> : <Navigate to="/" replace />}
          />
          <Route
            path="/recent-alerts"
            element={isAuthenticated ? <RecentAlerts /> : <Navigate to="/" replace />}
          />
          <Route
            path="/aadhar-details"
            element={isAuthenticated ? <AadharDetails /> : <Navigate to="/" replace />}
          />
          <Route
            path="/address-details"
            element={isAuthenticated ? <AddressDetails /> : <Navigate to="/" replace />}
          />
          <Route
            path="/phone-verification"
            element={isAuthenticated ? <PhoneVerification /> : <Navigate to="/" replace />}
          />
          <Route
            path="/quick-actions"
            element={isAuthenticated ? <QuickActions /> : <Navigate to="/" replace />}
          />
          <Route
            path="/profile-info"
            element={isAuthenticated ? <ProfileInfo /> : <Navigate to="/" replace />}
          />
          <Route
            path="/recent-activity"
            element={isAuthenticated ? <RecentActivity /> : <Navigate to="/" replace />}
          />
          <Route
            path="/emergency-contacts"
            element={isAuthenticated ? <EmergencyContacts /> : <Navigate to="/" replace />}
          />
          <Route
            path="/aadhar-verification"
            element={isAuthenticated ? <AadharVerification /> : <Navigate to="/" replace />}
          />
          <Route
            path="/license-verification"
            element={isAuthenticated ? <LicenseVerification /> : <Navigate to="/" replace />}
          />
          <Route
            path="/alert/:id"
            element={isAuthenticated ? <AlertDetails /> : <Navigate to="/" replace />}
          />

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

function SOS() {
  return (
    <div className="sos-page">
      <h1>Emergency SOS</h1>
      <SOSButton />
    </div>
  );
}

export default App;
