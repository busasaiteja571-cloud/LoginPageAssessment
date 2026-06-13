import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ScreenStyles.css';

function SignupScreen({ setUserData }) {
  const navigate = useNavigate();
  
  // All default string initializations are now completely empty
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [isAgency, setIsAgency] = useState('no'); // Defaulting radio selector to 'no'

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Pushes the typed user data up to the global App.jsx state container
    setUserData({
      fullName: fullName || 'Anonymous User',
      phone: phone || 'N/A',
      email: email || 'No Email Provided',
      company: company || 'N/A',
      isAgency: isAgency === 'yes' ? 'Yes' : 'No'
    });
    
    navigate('/profile');
  };

  return (
    <div className="screen form-screen">
      <h1 className="form-title">Create your<br />account</h1>
      
      <form onSubmit={handleSubmit} className="input-form signup-form">
        <div className="floating-input-group">
          <input 
            type="text" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            placeholder="Enter full name"
            required 
          />
          <label>Full Name <span className="required">*</span></label>
        </div>

        <div className="floating-input-group">
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Enter phone number"
            required 
          />
          <label>Phone number <span className="required">*</span></label>
        </div>

        <div className="floating-input-group">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter email address"
            required 
          />
          <label>Email address <span className="required">*</span></label>
        </div>

        <div className="floating-input-group">
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Create password"
            required 
          />
          <label>Password <span className="required">*</span></label>
        </div>

        <div className="floating-input-group">
          <input 
            type="text" 
            value={company} 
            onChange={(e) => setCompany(e.target.value)} 
            placeholder="Enter company name"
          />
          <label>Company name</label>
        </div>

        <div className="radio-container">
          <label className="radio-title">Are you an Agency? <span className="required">*</span></label>
          <div className="radio-options">
            <label className="radio-label">
              <input 
                type="radio" 
                name="agency" 
                value="yes" 
                checked={isAgency === 'yes'}
                onChange={() => setIsAgency('yes')}
              />
              <span className="custom-radio"></span>
              Yes
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="agency" 
                value="no"
                checked={isAgency === 'no'}
                onChange={() => setIsAgency('no')}
              />
              <span className="custom-radio"></span>
              No
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-submit create-acc-btn">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupScreen;