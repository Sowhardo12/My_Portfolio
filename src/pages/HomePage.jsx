import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaDiscord } from "react-icons/fa";

// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext.jsx";



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
            {/* <a href="#projects" className="hover:text-indigo-500">Projects</a> */}
            <a href="#skills" className="hover:text-indigo-500">Skills</a>
            {/* <a href="#contact" className="hover:text-indigo-500">Contact</a> */}
            <a href="/achievements" className="hover:text-indigo-500">Achievements</a>
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
            {/* <a href="#projects" className="py-2">Projects</a> */}
            <a href="#skills" className="py-2">Skills</a>
            <a href="/achievements" className="hover:text-indigo-500">Achievements</a>
            {/* <a href="#contact" className="py-2">Contact</a> */}
            <Link to="/resume" className="py-2 border rounded-md text-center">Resume</Link>
            <button onClick={toggleDark} className="border py-2 rounded-md">{isDark ? 'Dark' : 'Light'} Mode</button>
          </nav>
        )}
        {/* Personal Section */}
        <main className="py-12">
          <h1 className="text-4xl lightbold">Hi, I'm Sowhardo, a Final Semester CS student & a Software Enginner Aspirant.</h1>
          <p className="mt-4 text-slate-700 dark:text-slate-300 max-w-xl">Web Apps | MERN stack | LeetCode problem solving | System Deisgn Learner</p>
          <div className="mt-6 flex gap-3">
            <a href="/projects" className="px-5 py-2 rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">View Projects</a>
            <a href="#contact" className="px-5 py-2 rounded-md border">Contact Me</a>
          </div>
        </main>
        {/* Placeholder sections */}
        <section
          id="about"
          className="py-24 border-t dark:border-slate-700">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>

            <p className="text-lg leading-7 text-slate-700 dark:text-slate-300 mb-6">
              I'm Sowhardo, Currently in my final semester in BRAC University. I am a software 
              Engineer Aspirant. I enjoy building applications and learning through practical 
              problem solvng.
            </p>

            <p className="text-lg leading-7 text-slate-700 dark:text-slate-300 mb-6">
              My core focus areas are <span className="font-bold">MERN stack</span>, 
              <span className="font-bold"> DSA</span>, and growing my 
              understanding of <span className="font-bold">System design</span>.  
              I’m also improving my Problem solving skills on various platforms.
            </p>

            <p className="text-lg leading-7 text-slate-700 dark:text-slate-300">
              I aim to build full stack applications that solves real world problems. I aim to integrate my
              system design knowledge to make applications scalable and bug-free.
            </p>
          </div>
        </section>

        
        
        <section id="skills" className="py-24 border-t dark:border-slate-700">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Skills</h2>

            {/* Languages */}
         <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
             <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
             <li><span className="font-medium">JavaScript (ES6+)</span>: primary language for web development</li>
             <li><span className="font-medium">TypeScript</span>: currently learning</li>
             <li><span className="font-medium">C++</span>: Using for DSA problem solving (STL)</li>
             <li><span className="font-medium">Python</span>: medium-level knowledge, worked on machine leanring projects and libraries like pandas, matplotlib, pythorch etc.</li>
             <li><span className="font-medium">C</span>: Used during working with Processes, Threads, VSFS and Bash shell implementation </li>
             </ul>
            </div>

            {/* Frontend */}
             <div className="mb-10">
             <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
             <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
                <li>ReactJS (components, props, useState, useEffect, useContext)</li>
                <li>React Routing</li>
                <li>TailwindCSS</li>
                <li>Basic HTML & CSS</li>
             <li>Learning modern UI/UX principles, responsive design</li>
             </ul>
            </div>

            {/* Backend & DB */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">Backend & Databases</h3>
             <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
             <li>Node.js & Express: beginner level expertise, worked on a few projects & currently learining for MERN</li>
             <li>MongoDB: CRUD operations & schema fundamentals</li>
             <li>SQLite: used in Django project</li>
             <li>Django: beginner expertise, worked on university project</li>
            </ul>
         </div>

            {/* Tools */}
             <div className="mb-10">
             <h3 className="text-xl font-semibold mb-4">Tools & Workflow</h3>
             <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
             <li>Git & GitHub: version control, pushing, branching</li>
                <li>Linux (Ubuntu 24.04): Bash scripting</li>
                <li>VS Code: main development environment</li>
                <li>Vite: preferred React build tool</li>
                <li>Postman: testing APIs</li>
            </ul>
            </div>

             {/* CS Fundamentals */}
             <div className="mb-10">
               <h3 className="text-xl font-semibold mb-4">Computer Science Fundamentals</h3>
               <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
                 <li>Data Structures & Algorithms — arrays, Linked Lists, Graphs, Trees, sorting, two-pointers, recursion</li>
                 <li>Operating Systems — process management, scheduling (MLFQ), signals(semaphores), Multithreading</li>
                 <li>Computer Networks — subnetting, protocols, routers, Cisco Packet Tracer basics, wireshark</li>
               </ul>
             </div>

             {/* Learning */}
             <div>
               <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
               <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
                 <li>Learning enough concepts to comfortably build a full-stack application</li>
                 <li>System Design basics (scalability, caching, load balancing)</li>
                 <li>Improving problem solving capabilites in C++</li>
               </ul>
             </div>
           </div>
        </section>

        <section id="contact" className="py-24 border-t dark:border-slate-700">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Contact</h2>

            <div className="space-y-6 text-lg">
              <a href="mailto:sowhardo221@gmail.com" className="flex items-center gap-3 hover:text-indigo-500">
                <FaEnvelope className="text-2xl"/>
                sowhardo221@gmail.com
              </a>
              <a href="tel:+8801798516247" className="flex items-center gap-3 hover:text-indigo-500">
                <FaPhone className="text-2xl"/>
                +8801798516247
              </a>
              <a href="https://github.com/Sowhardo12/" target="_blank" className="flex items-center gap-3 hover:text-indigo-500">
                <FaGithub className="text-2xl" />
                github.com/Sowhardo12
              </a>
              <div className="flex items-center gap-3">
                <FaDiscord className="text-2xl" />sowhardobinatik
              </div>
            </div>
          </div>
        </section>
        <footer className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Sowhardo</footer>
        </div>
        </div>
        </div>
        </>
    );
}

export default HomePage;