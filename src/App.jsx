import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingScreen from './components/LandingScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ProfileScreen from './components/ProfileScreen';

function App() {
  // Store user info globally to share between components
  const [userData, setUserData] = useState({
    fullName: 'Marry Doe',
    phone: '9876543210',
    email: 'Marry@Gmail.Com',
    company: 'PopX Agency',
    isAgency: 'Yes'
  });

  return (
    <Router>
      <div className="mobile-container">
        {/* Simple Top Navbar holding only the Home link */}
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route 
            path="/signup" 
            element={<SignupScreen setUserData={setUserData} />} 
          />
          <Route 
            path="/profile" 
            element={<ProfileScreen userData={userData} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;