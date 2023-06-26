import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import CartPage from './page/CartPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
