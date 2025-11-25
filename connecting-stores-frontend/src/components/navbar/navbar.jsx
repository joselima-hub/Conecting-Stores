import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  const active = 'text-blue-600 font-semibold';

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-700">
        ConnectingStores
      </Link>
      <div className="flex gap-6">
        <Link to="/" className={pathname === '/' ? active : 'text-gray-600'}>
          Feed
        </Link>
        <Link
          to="/products"
          className={pathname === '/products' ? active : 'text-gray-600'}
        >
          Produtos
        </Link>
        <Link
          to="/dashboard"
          className={pathname === '/dashboard' ? active : 'text-gray-600'}
        >
          Dashboard
        </Link>
        <Link
          to="/login"
          className={pathname === '/login' ? active : 'text-gray-600'}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
