import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ScreenStyles.css';

function LoginScreen() {
  const navigate = useNavigate();
  
  // Track input fields dynamically
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State to capture and display authentication errors
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors on a new attempt

    // 1. Define valid credentials for comparison
    // Matches the default data stored inside your App.jsx global state configuration
    const validEmail = "marry@gmail.com"; 
    const validPassword = "password123";

    // 2. Verification Logic Matrix
    if (email.toLowerCase().trim() === validEmail && password === validPassword) {
      // Success: Route straight to profile dashboard area
      navigate('/profile');
    } else {
      // Failure: Populate interface warning notification
      setErrorMessage('Invalid email address or password. Please try again.');
    }
  };

  return (
    <div className="screen form-screen">
      <h1 className="form-title">Signin to your PopX account</h1>
      <p className="form-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      
      <form onSubmit={handleLogin} className="input-form">
        
        {/* Error Notification Block */}
        {errorMessage && (
          <div className="auth-error-banner">
            {errorMessage}
          </div>
        )}

        <div className="floating-input-group">
          <input 
            type="email" 
            placeholder="Enter email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <label>Email Address <span className="required">*</span></label>
        </div>

        <div className="floating-input-group">
          <input 
            type="password" 
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <label>Password <span className="required">*</span></label>
        </div>

        <button type="submit" className="btn btn-submit create-acc-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginScreen;