import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function LoginRegister() {
  const { user, login, logout } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) {
      login({ email }); // You can add more data
    }
  };

  return (
    <div>
      <h2>{user ? `Welcome, ${user.email}` : 'Login'}</h2>

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
