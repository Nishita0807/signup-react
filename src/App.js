import React, { useState } from 'react';
import "./App.css";

const App = () => {
  // State variables for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State variables for input validation
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  // Validate email format
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(value));
  };

  // Validate password length
  const validatePassword = (value) => {
    setPasswordValid(value.length >= 8);
  };

  // Validate confirm password match
  const validateConfirmPassword = (value) => {
    setConfirmPasswordValid(value === password);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Form cannot be submitted!');
    }
  };

  return (
   <div className='center-container'>
     <div className="form-container">
      <div className="form-group">
        
      <div className="row">
            <label>Email:</label>
          </div>
        <input className='input-field'
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          style={{ border: emailValid ? '2px solid green' : '2px solid red' }}
        />
        {!emailValid && <p className="error-message">Invalid email format</p>}
      </div>

      <div className="form-group">
      <div className="row">
            <label>Password:</label>
          </div>
        <input
          type="password" className='input-field'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          style={{
            border: confirmPasswordValid ? '2px solid green' : '2px solid red',
          }}
        />
        {!passwordValid && (
          <p className="error-message">Password must be atleast 8 characters</p>
        )}
      </div>

      <div className="form-group">
      <div className="row">
            <label>Confirm Password:</label>
          </div>
        <input
          type="password" className='input-field'
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validateConfirmPassword(e.target.value);
          }}
          style={{
            border: confirmPasswordValid ? '2px solid green' : '2px solid red',
          }}
        />
        {!confirmPasswordValid && (
          <p className="error-message">Passwords do not match</p>
        )}
      </div>

      <div className="center-button">
          <button onClick={handleSubmit}>Sign Up</button>
        </div>
    </div>
   </div>
  );
};

export default App;
