
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/resume" element={<Resume/>} ></Route>
        <Route path="/projects" element={<Projects/>} ></Route>
        <Route path="/achievements" element={<Achievements/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
          
}

export default App;
