import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ScreenStyles.css';

function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen landing-screen">
      <div className="content-bottom">
        <h1 className="main-title">Welcome to PopX</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        
        <button className="btn btn-primary" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default LandingScreen;