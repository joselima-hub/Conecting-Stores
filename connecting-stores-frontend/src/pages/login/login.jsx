import React from 'react';
import { useState } from 'react';
import { loginRequest } from '../../api/auth-api';
import { useAuthStore } from '../../context/auth-store/auth-store';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const authLogin = useAuthStore((state) => state.login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const { token, user } = await loginRequest(email, password);
      authLogin(user, token);
      navigate('/dashboard');
    } catch (err) {
      setError(`Login failed: ${err.response?.data || err.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-2xl p-8 w-96"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
        
        {error && (
          <div className="bg-red-200 text-red-700 p-2 rounded mb-4">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
