import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function HomePage(){
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isDark,setDark]= useState(false);

    const toggleDark = ()=>{
        setDark(!isDark);
    }
    
    return(
    <>
        
    <div className={isDark?"dark":""}>
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-100 dark:to-slate-300 flex items-center justify-center font-bold text-white dark:text-slate-900">SA</div>
            <span className="text-lg font-medium">Sowhardo Bin Atik</span>
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-500">About</a>
            <a href="#projects" className="hover:text-indigo-500">Projects</a>
            <a href="#skills" className="hover:text-indigo-500">Skills</a>
            <a href="#contact" className="hover:text-indigo-500">Contact</a>
            <Link to="/resume" className="ml-4 px-3 py-1 border rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Resume</Link>
            <button onClick={toggleDark} className="px-3 py-1 rounded-md border text-sm ml-3">{isDark ? 'Dark' : 'Light'} Mode</button>
          </nav>
          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </header>
        {/* Mobile navigation section */}
        {mobileOpen && (
          <nav className="md:hidden flex flex-col gap-3 text-sm mb-4">
            <a href="#about" className="py-2">About</a>
            <a href="#projects" className="py-2">Projects</a>
            <a href="#skills" className="py-2">Skills</a>
            <a href="#contact" className="py-2">Contact</a>
            <Link to="/resume" className="py-2 border rounded-md text-center">Resume</Link>
            <button onClick={toggleDark} className="border py-2 rounded-md">{isDark ? 'Dark' : 'Light'} Mode</button>
          </nav>
        )}
        {/* Personal Section */}
        <main className="py-12">
          <h1 className="text-4xl font-extrabold">Hi, I'm Sowhardo, a Final Semester CS student & a Software Enginner Aspirant.</h1>
          <p className="mt-4 text-slate-700 dark:text-slate-300 max-w-xl">Web Apps | MERN stack | LeetCode problem solving | System Deisgn Learner</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-2 rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">View Projects</a>
            <a href="#contact" className="px-5 py-2 rounded-md border">Contact Me</a>
          </div>
        </main>
        {/* Placeholder sections */}
        <section id="about" className="py-24 border-t dark:border-slate-700"></section>
        <section id="projects" className="py-24 border-t dark:border-slate-700"></section>
        <section id="skills" className="py-24 border-t dark:border-slate-700"></section>
        <section id="contact" className="py-24 border-t dark:border-slate-700"></section>
        <footer className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Sowhardo</footer>
      </div>
    </div>
        </div>
        </>
    );
}

export default HomePage;