import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import ProductsFeed from "./pages/products-feed/products-feed";
import Dashboard from "./pages/dashboard/dashboard";
import Feed from "./pages/feed/feed";


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/products" element={<ProductsFeed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
