import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import resumePDF from '../assets/Resume.pdf';

function Resume() {
  return (
    <div className="dark">
    <div className="min-h-screen min-w-screen text-center bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>
      <p className="mb-4">Your resume download link will be placed here.</p>
      <a href={resumePDF} download className="px-4 py-2 rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">Download Resume</a>
      <Link to="/" className="p-2 m-2 border rounded-md text-center hover:bg-slate-400">Home</Link>
    </div>
    </div>
  );
}

export default Resume;