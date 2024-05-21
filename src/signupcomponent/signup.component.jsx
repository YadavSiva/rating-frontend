import React, { useState } from 'react';
import axios from 'axios';
import "./signup.component.css";

export function SignupComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:7000/signup', {
        firstName,
        lastName,
        email,
        password,
      });
  
      window.alert('Signup successful! Please login to continue.');
      window.location.href = '/login';
    } catch (error) {
      console.error('Signup failed:', error.response?.data || 'Unknown error occurred');
    }
  };
  
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <div className='form-group'>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
        </div>

        <div className='form-group'>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
        </div>

        <div className='form-group'>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>

        <div className='form-group'>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>

        <div className='form-group'>
          <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
        </div> 
      </div>
    </div>
  );
}
