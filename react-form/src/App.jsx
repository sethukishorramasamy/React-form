import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import Businessform from './Business-form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Business-form" element={<Businessform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
