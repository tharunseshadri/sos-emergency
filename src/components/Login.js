import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Logo from './Logo';

function Login({ onLogin }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate('/dashboard');
  };

  const toggleLoginType = (isAdmin) => {
    setIsAdminLogin(isAdmin);
    setIdentifier('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <Logo />
      </div>
      <div className="login-wrapper">
        <div className="login-left">
          <div className="welcome-text">
            <h1>Welcome to COP Friendly</h1>
            <p>Your trusted platform for emergency assistance and community safety. Login to access our comprehensive safety features and services.</p>
          </div>
        </div>
        
        <div className="login-right">
          <div className="login-header">
            <h2>{isAdminLogin ? 'Admin Login' : 'User Login'}</h2>
          </div>
          
          <div className="toggle-login-type">
            <button
              className={`toggle-btn ${!isAdminLogin ? 'active' : ''}`}
              onClick={() => toggleLoginType(false)}
            >
              User Login
            </button>
            <button
              className={`toggle-btn ${isAdminLogin ? 'active' : ''}`}
              onClick={() => toggleLoginType(true)}
            >
              Admin Login
            </button>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                placeholder={isAdminLogin ? "Enter your email" : "Enter your email or phone number"}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
