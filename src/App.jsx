
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Resume from './pages/Resume';
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/resume" element={<Resume/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
          
}

export default App;
