import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
