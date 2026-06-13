import React from 'react';
import './ScreenStyles.css';

function ProfileScreen({ userData }) {
  return (
    <div className="screen profile-screen">
      <div className="header-nav">
        <h2>Account Settings</h2>
      </div>
      
      <div className="profile-card">
        <div className="avatar-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
            alt="User Avatar" 
            className="avatar-img"
          />
          <div className="camera-icon-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </div>
        </div>
        
        <div className="profile-details">
          <h3>{userData.fullName}</h3>
          <p>{userData.email}</p>
        </div>
      </div>

      <div className="profile-description">
        <p style={{ marginBottom: '10px' }}><strong>Phone:</strong> {userData.phone}</p>
        {userData.company && <p style={{ marginBottom: '10px' }}><strong>Company:</strong> {userData.company}</p>}
        <p><strong>Agency Status:</strong> {userData.isAgency}</p>
      </div>

      <div className="dashed-divider"></div>
    </div>
  );
}

export default ProfileScreen;