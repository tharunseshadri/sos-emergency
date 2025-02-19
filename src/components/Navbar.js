import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';
import LocationTracker from './LocationTracker';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.clear();
      navigate('/');
    }
  };

  const handlePayment = async () => {
    if (isProcessing) return; // Prevent multiple clicks
    setIsProcessing(true);
    
    const options = {
      key: "rzp_test_51Iw3Rx2BN8UjKo", // Replace with your actual test key
      amount: "50000", // Amount in paise (500 INR)
      currency: "INR",
      name: "SOS Emergency",
      description: "Fine Payment",
      image: "https://your-logo-url.com/logo.png",
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#ff4444"
      },
      handler: function (response) {
        alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
        setIsProcessing(false);
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        alert("Payment Failed");
        console.error("Payment Error:", response.error);
        setIsProcessing(false);
      });
      rzp.open();
    } catch (error) {
      console.error("Razorpay Error:", error);
      alert("Payment initialization failed. Please try again.");
      setIsProcessing(false);
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <nav className="navbar">
        <Logo />
        <div className="nav-buttons">
          <Link to="/dashboard">
            <button className={`nav-button ${isActive('/dashboard')}`}>
              <i className="icon fas fa-home"></i>
              Dashboard
            </button>
          </Link>

          <Link to="/sos">
            <button className={`nav-button emergency ${isActive('/sos')}`}>
              <i className="icon fas fa-exclamation-triangle"></i>
              SOS
            </button>
          </Link>

          <div className="button-group">
            <Link to="/incident-report">
              <button className={`nav-button ${isActive('/incident-report')}`}>
                <i className="icon fas fa-file-alt"></i>
                Report
              </button>
            </Link>
            
            <Link to="/recent-alerts">
              <button className={`nav-button ${isActive('/recent-alerts')}`}>
                <i className="icon fas fa-bell"></i>
                Alerts
              </button>
            </Link>
          </div>

          <div className="profile-section">
            <LocationTracker />
            <Link to="/profile-info">
              <button className={`nav-button ${isActive('/profile-info')}`}>
                <i className="icon fas fa-user"></i>
                Profile
              </button>
            </Link>
          </div>
        </div>
        
        <div className="hamburger-icon" onClick={toggleSidebar}>
          <i className="fas fa-bars nav-icon"></i>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/personal-details">
              <i className="fas fa-user nav-icon"></i>
              Account
            </Link>
          </li>

          {/* Verification Section */}
          <li className="verification-section">
            <div className="section-header">
              <i className="fas fa-shield-alt nav-icon"></i>
              <span>Verify Details</span>
            </div>
            <div className="verification-items">
              <Link to="/phone-verification" className="verify-item">
                <i className="fas fa-phone"></i>
                <div className="verify-info">
                  <span>Phone Number</span>
                  <span className="verify-status pending">Pending</span>
                </div>
              </Link>
              <Link to="/aadhar-verification" className="verify-item">
                <i className="fas fa-id-card"></i>
                <div className="verify-info">
                  <span>Aadhar Card</span>
                  <span className="verify-status pending">Pending</span>
                </div>
              </Link>
              <Link to="/license-verification" className="verify-item">
                <i className="fas fa-car"></i>
                <div className="verify-info">
                  <span>Driving License</span>
                  <span className="verify-status pending">Pending</span>
                </div>
              </Link>
            </div>
          </li>

          <li>
            <Link to="/settings">
              <i className="fas fa-cog nav-icon"></i>
              Settings
            </Link>
          </li>
          
          <li onClick={handlePayment} className={`fine-button ${isProcessing ? 'processing' : ''}`}>
            <i className="fas fa-money-bill-wave nav-icon"></i>
            {isProcessing ? (
              <>
                Processing...
                <span className="processing-spinner"></span>
              </>
            ) : (
              'Pay Fine'
            )}
          </li>
          
          <li onClick={handleLogout}>
            <i className="fas fa-sign-out-alt nav-icon"></i>
            Logout
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Navbar;
