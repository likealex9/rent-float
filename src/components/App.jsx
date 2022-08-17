import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Edithouse from './Edithouse';
import Favorite from './Favorite';
import Login from './Login';
import MainPage from './MainPage';
import Navbar from './Navbar';
import Register from './Register';

function App({ path, fav }) {
  console.log(fav);
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/houses/:id" element={<Edithouse />} />
        <Route path="/favorite/:id" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
