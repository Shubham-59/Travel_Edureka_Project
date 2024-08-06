import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Rocket from './Rocket'; // Adjust the path as necessary
import './Register.css'; // Update with the correct path to your CSS file

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [stage, setStage] = useState('default'); // stages: default, ignite, ready, launch
  const navigate = useNavigate();

  useEffect(() => {
    if (firstName || lastName || address || email || password || mobileNumber) {
      setStage('ignite');
    } else {
      setStage('default');
    }
  }, [firstName, lastName, address, email, password, mobileNumber]);

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !address || !email || !password || !mobileNumber) {
      setError('Please fill in all fields.');
      return;
    }

    setStage('launch');

    // Simulate registration success
    setTimeout(() => {
      // Here you would typically handle the registration process (e.g., send data to your server)

      // For now, let's just navigate to the login page after "successful" registration
      navigate('/login');
    }, 1000); // Adjust the timeout as needed
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Join Us!</h1>
        <p>Register to start your journey</p>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
      <Rocket stage={stage} />
    </div>
  );
};

export default Register;
