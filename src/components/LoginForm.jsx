// src/components/LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const API = 'http://127.0.0.1:5000/logins';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('⚠️ Please enter both username and password');
      return;
    }

    const newLogin = {
      username,
      password,
      timestamp: new Date().toISOString()
    };

    try {
      await axios.post(API, newLogin);
      setSuccess(true);
      setUsername('');
      setPassword('');
    } catch (err) {
      console.error('❌ Login failed:', err.message);
      alert('Login failed!');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
      <h2>🔐 Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ margin: '5px', padding: '8px', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ margin: '5px', padding: '8px', width: '100%' }}
        />
        <button type="submit" style={{ margin: '5px', padding: '10px', width: '100%' }}>
          Login
        </button>
      </form>

      {success && <p style={{ color: 'green' }}>✅ Login recorded successfully!</p>}
    </div>
  );
}

export default LoginForm;
