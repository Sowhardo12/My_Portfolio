
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaDiscord } from "react-icons/fa";
import profilePic from "../images/image.jpeg";

function HomePage(){
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isDark, setDark] = useState(true); // Defaulted to true for a premium dark-first tech look
    
    const toggleDark = () => {
        setDark(!isDark);
    };
    
    return (
        <>
        <div className={isDark ? "dark" : ""}>
            {/* Main Application Shell with Strict Window-Boundary Rules */}
            <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300">
                
                {/* Fixed Top Layout Grid Constraint */}
                <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4">
                    
                    {/* Header: Engineered Terminal Bar Appearance */}
                    <header className="flex items-center justify-between p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#121826]/70 backdrop-blur-md shadow-sm">
                        <Link to="/" className="inline-flex items-center gap-3 group">
                            <div className="w-9 h-9 rounded-md bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center font-mono text-sm font-bold text-white shadow-sm group-hover:rotate-6 transition-transform">
                                &lt;/&gt;
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold tracking-tight font-mono text-slate-900 dark:text-white">Sowhardo Bin Atik</span>
                                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono tracking-widest uppercase">Backend Engineer</span>
                            </div>
                        </Link>
                        
                        {/* Desktop Dashboard Navigation */}
                        <nav className="hidden md:flex items-center gap-1 text-xs font-mono">
                            <a href="#about" className="px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">01. About</a>
                            <a href="#skills" className="px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">02. Skills</a>
                            <a href="/achievements" className="px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">03. Achievements</a>
                            <Link to="/resume" className="ml-2 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-white rounded-md transition-all font-medium">Resume.pdf</Link>
                            <button 
                                onClick={toggleDark} 
                                className="ml-2 p-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161D30] text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-all"
                                title="Toggle Theme"
                            >
                                {isDark ? '☀️' : '🌙'}
                            </button>
                        </nav>
                        
                        {/* Mobile Interface Toggle */}
                        <button className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </header>

                    {/* Mobile Panel: Dropdown Context */}
                    {mobileOpen && (
                        <nav className="md:hidden flex flex-col gap-1 text-sm font-mono mt-2 p-3 bg-white dark:bg-[#121826] rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-lg">
                            <a href="#about" onClick={() => setMobileOpen(false)} className="py-2 px-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">01. About</a>
                            <a href="#skills" onClick={() => setMobileOpen(false)} className="py-2 px-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">02. Skills</a>
                            <a href="/achievements" className="py-2 px-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">03. Achievements</a>
                            <Link to="/resume" className="py-2 mt-2 bg-indigo-600 text-white rounded-md text-center font-medium">Resume.pdf</Link>
                            <button onClick={() => { toggleDark(); setMobileOpen(false); }} className="border border-slate-200 dark:border-slate-800 py-2 rounded-md font-medium mt-1 bg-slate-50 dark:bg-slate-800">
                                {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
                            </button>
                        </nav>
                    )}

                    {/* Hero Segment: Modern Geometric Text Matrix Layout */}
                    <main className="py-16 md:py-28 relative">
                        {/* Abstract Background Design Element for Visual Depth */}
                        <div className="absolute top-1/4 right-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
                        
                        <div className="border-l-2 border-indigo-500 pl-4 md:pl-6 space-y-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">01 // Who am I?</span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                                Hi, I'm Sowhardo, a Final Semester CSE student & an <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">Backend focused Full-Stack Developer</span>
                            </h1>
                        </div>
                        
                        {/* Interactive Tag Chips */}
                        <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] max-w-2xl text-slate-500 dark:text-slate-400">
                            <span className="px-2.5 py-1 rounded bg-slate-200/60 dark:bg-[#161D30] border border-slate-300/40 dark:border-slate-800">Node.js</span>
                            <span className="px-2.5 py-1 rounded bg-slate-200/60 dark:bg-[#161D30] border border-slate-300/40 dark:border-slate-800">Docker</span>
                            <span className="px-2.5 py-1 rounded bg-slate-200/60 dark:bg-[#161D30] border border-slate-300/40 dark:border-slate-800">PostgreSQL</span>
                            <span className="px-2.5 py-1 rounded bg-slate-200/60 dark:bg-[#161D30] border border-slate-300/40 dark:border-slate-800">AI Integration</span>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a href="/projects" className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/10">
                                View Core Projects
                            </a>
                            <a href="#contact" className="px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#121826] font-medium text-sm text-slate-600 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-600 transition-all">
                                Contact Me
                            </a>
                        </div>
                    </main>

                    {/* About Matrix Section */}
                    <section id="about" className="py-16 border-t border-slate-200 dark:border-slate-800/80">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-4 flex justify-center md:justify-start">
                                <div className="relative group p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#121826] rounded-2xl shadow-sm">
                                    <img
                                        src={profilePic}
                                        alt="Sowhardo"
                                        className="w-44 h-44 md:w-full md:h-auto md:aspect-square rounded-xl object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                                    />
                                    <div className="absolute top-4 right-4 bg-indigo-600 text-white font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                                        Active
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-8 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                                <div className="flex items-center gap-2 font-mono text-xs text-indigo-600 dark:text-indigo-400 font-bold mb-2">
                                    <span>[ABOUT ME]</span>
                                    <hr className="flex-grow border-slate-200 dark:border-slate-800" />
                                </div>
                                <p>
                                    I'm currently in the last semester of my undergrad, continually learning and building towards my goal of becoming a Software Engineer. I have strong interests in working closely with how systems work under the hood.
                                </p>
                                <p>
                                    I work with the <span className="font-semibold text-slate-900 dark:text-white underline decoration-indigo-500 decoration-2 underline-offset-4">PERN stack</span> and alongside, I practice towards improving my <span className="font-semibold text-slate-900 dark:text-white">DSA</span> and <span className="font-semibold text-slate-900 dark:text-white">System Design knowledge</span>.
                                </p>
                                <p>
                                    My goal is to build scalable full stack solutions which solve real life problems, with the meaningful integration of AI & Agentic AI.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* High-Performance Skills Control Panel Layout */}
                    <section id="skills" className="py-16 border-t border-slate-200 dark:border-slate-800/80">
                        <div className="mb-8">
                            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">02 // Technical Control Panel</h2>
                            <p className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">Skills & Core Competencies</p>
                        </div>
                        
                        {/* Modular Dashboard Cards Grid Layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            {/* Card 1: Languages */}
                            <div className="p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#121826] shadow-sm">
                                <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold mb-3">
                                    <span>$ Languages</span>
                                </div>
                                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">JavaScript (ES6+)</strong> — Core enterprise ecosystem driver.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">TypeScript</strong> — Integrating type-safety mechanisms into development pipelines.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">C++</strong> — Utilized extensively for high-performance DSA logic & STL structures.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Python</strong> — FastAPI microservices & analytical workflow execution.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">C</strong> — Low level environments: Threads, processes, memory structures, and custom shell builds.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Java</strong> — Practical application of foundational enterprise OOP design models.</li>
                                </ul>
                            </div>

                            {/* Card 2: Backend & DB */}
                            <div className="p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#121826] shadow-sm">
                                <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold mb-3">
                                    <span>$ Backend</span>
                                </div>
                                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Node.js & Express</strong> — Scalable architecture design for complex REST endpoints.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">FastAPI</strong> — High-concurrency routing designed for AI tool-calling agents.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Django</strong> — Implemented clean MVC system operations within production projects.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">PostgreSQL</strong> — Schema normalized setups with integrated Vector extensions.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">NoSQL & File DBs</strong> — Lightweight document stores via MongoDB and SQLite instances.</li>
                                </ul>
                            </div>

                            {/* Card 3: Infrastructure */}
                            <div className="p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#121826] shadow-sm">
                                <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold mb-3">
                                    <span>$ System Design</span>
                                </div>
                                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Docker & Compose</strong> — Microservice containment isolates processes safely.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Redis</strong> — Implementation of memory tracking for low-latency operational caching.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Nginx</strong> — Handling requests via secure standard configurations and proxy tiers.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Environments</strong> — Bash scheduling, core monitoring tools via Postman & Locust profiling.</li>
                                </ul>
                            </div>

                            {/* Card 4: Architecture Core */}
                            <div className="p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#121826] shadow-sm">
                                <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold mb-3">
                                    <span>$ CS Fundamentals</span>
                                </div>
                                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Data Structures & Algos</strong> — Linear configurations, hash-tables, lookup heaps, recursion.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Operating Systems</strong> — Multi-threading processing, sync, race protections, custom file setups.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Networking Core</strong> — Protocol structures (HTTP/HTTPS, TLS), routing rules, packet inspection via Wireshark.</li>
                                    <li><strong className="text-slate-900 dark:text-white font-semibold">Frontend Context</strong> — Lightweight single page application interfaces designed in ReactJS & Tailwind.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Current Focus Area Segment */}
                        <div className="mt-4 p-4 rounded-xl bg-slate-100 dark:bg-[#161D30] border border-slate-200 dark:border-slate-800/80 font-mono text-xs">
                            <div className="text-indigo-600 dark:text-indigo-400 font-bold uppercase mb-2">Actively Learning</div>
                            <ul className="space-y-1.5 list-inside list-square text-slate-600 dark:text-slate-300 text-[11px]">
                              <li>Learning fundamentals of<span className="font-semibold text-slate-900 dark:text-white"> ASP.NET</span> & expanding the features of Child Welfare System Project</li>
                                <li>Adding an architectural <span className="font-semibold text-slate-900 dark:text-white">API rate limiter</span> layer into the MetroSheba Project</li>
                                <li>Local workload orchestration and validation handling via a local cluster set in <span className="font-semibold text-slate-900 dark:text-white">Kubernetes</span>.</li>
                                <li>Practicing up DSA by <span className="font-semibold text-slate-900 dark:text-white"> Lerning New Algorithmic concepts</span> on LeetCode</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contact Hub Grid */}
                    <section id="contact" className="py-16 border-t border-slate-200 dark:border-slate-800/80">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center md:text-left mb-8">
                                <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">03 // Communication</h2>
                                <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">Connect with me</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                                <a href="mailto:sowhardo221@gmail.com" className="flex items-center gap-3 p-3 bg-white dark:bg-[#121826] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all text-slate-600 dark:text-slate-300">
                                    <FaEnvelope className="text-indigo-500 text-sm flex-shrink-0"/>
                                    <span className="truncate">sowhardo221@gmail.com</span>
                                </a>
                                <a href="mailto:sowhardo.bin.atik@g.bracu.ac.bd" className="flex items-center gap-3 p-3 bg-white dark:bg-[#121826] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all text-slate-600 dark:text-slate-300">
                                    <FaEnvelope className="text-indigo-500 text-sm flex-shrink-0"/>
                                    <span className="truncate">sowhardo.bin.atik@g.bracu.ac.bd</span>
                                </a>
                                <a href="https://www.linkedin.com/in/sowhardo-bin-atik/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 bg-white dark:bg-[#121826] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all text-slate-600 dark:text-slate-300">
                                    <FaLinkedin className="text-indigo-500 text-sm flex-shrink-0"/>
                                    <span>/in/sowhardo-bin-atik</span>
                                </a>
                                <a href="tel:+8801798516247" className="flex items-center gap-3 p-3 bg-white dark:bg-[#121826] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all text-slate-600 dark:text-slate-300">
                                    <FaPhone className="text-indigo-500 text-sm flex-shrink-0"/>
                                    <span>+8801798516247</span>
                                </a>
                                <a href="https://github.com/Sowhardo12/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 bg-white dark:bg-[#121826] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all text-slate-600 dark:text-slate-300 sm:col-span-2">
                                    <FaGithub className="text-indigo-500 text-sm flex-shrink-0" />
                                    <span>github.com/Sowhardo12</span>
                                </a>
                            </div>
                            <div className="mt-3 flex items-center gap-3 p-3 bg-slate-100 dark:bg-[#161D30] rounded-xl border border-slate-200 dark:border-slate-800/60 w-full font-mono text-xs text-slate-500 dark:text-slate-400">
                                <FaDiscord className="text-indigo-500 text-sm flex-shrink-0" />
                                <span>discord: sowhardobinatik</span>
                            </div>
                        </div>
                    </section>

                    {/* Footer Anchor */}
                    <footer className="py-8 text-center font-mono text-[10px] tracking-widest text-slate-400 dark:text-slate-600 border-t border-slate-200 dark:border-slate-800/40">
                        © {new Date().getFullYear()} SOWHARDO_BIN_ATIK // portfolio_v2
                    </footer>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomePage;





// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaDiscord } from "react-icons/fa";

// // import { useContext } from "react";
// // import { ThemeContext } from "../context/ThemeContext.jsx";

// import profilePic from "../images/image.jpeg"

// function HomePage(){
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const [isDark,setDark]= useState(false);     
    
//     const toggleDark = ()=>{
//         setDark(!isDark);
//     }
    
//     return(
//     <>
        
//     <div className={isDark?"dark":""}>
//         <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">
//       <div className="max-w-4xl mx-auto px-6">
//         {/* Header */}
//         <header className="flex items-center justify-between py-6">
//           <Link to="/" className="inline-flex items-center gap-3">
//             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-100 dark:to-slate-300 flex items-center justify-center font-bold text-white dark:text-slate-900">SA</div>
//             <span className="text-lg font-medium">Sowhardo Bin Atik</span>
//           </Link>
//           {/* Desktop nav */}
//           <nav className="hidden md:flex items-center gap-6 text-sm">
//             <a href="#about" className="hover:text-indigo-500">About</a>
//             {/* <a href="#projects" className="hover:text-indigo-500">Projects</a> */}
//             <a href="#skills" className="hover:text-indigo-500">Skills</a>
//             {/* <a href="#contact" className="hover:text-indigo-500">Contact</a> */}
//             <a href="/achievements" className="hover:text-indigo-500">Achievements</a>
//             <Link to="/resume" className="ml-4 px-3 py-1 border rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Resume</Link>
//             <button onClick={toggleDark} className="px-3 py-1 rounded-md border text-sm ml-3">{isDark ? 'Dark' : 'Light'} Mode</button>
//           </nav>
//           {/* Mobile toggle */}
//           <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {mobileOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </header>
//         {/* Mobile navigation section */}
//         {mobileOpen && (
//           <nav className="md:hidden flex flex-col gap-3 text-sm mb-4">
//             <a href="#about" className="py-2">About</a>
//             {/* <a href="#projects" className="py-2">Projects</a> */}
//             <a href="#skills" className="py-2">Skills</a>
//             <a href="/achievements" className="hover:text-indigo-500">Achievements</a>
//             {/* <a href="#contact" className="py-2">Contact</a> */}
//             <Link to="/resume" className="py-2 border rounded-md text-center">Resume</Link>
//             <button onClick={toggleDark} className="border py-2 rounded-md">{isDark ? 'Dark' : 'Light'} Mode</button>
//           </nav>
//         )}
//         {/* Personal Section */}
//         <main className="py-12">
//           <h1 className="text-4xl lightbold">Hi, I'm Sowhardo, a Final Semester CSE student & an AI driven Backend Developer.</h1>
//           <p className="mt-4 text-slate-700 dark:text-slate-300 max-w-xl">Full Stack Development | Backend | Cloud | Agentic AI</p>
//           <div className="mt-6 flex gap-3">
//             <a href="/projects" className="px-5 py-2 rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">View Projects</a>
//             <a href="#contact" className="px-5 py-2 rounded-md border">Contact Me</a>
//           </div>
//         </main>
//         {/* Placeholder sections */}
//         {/* <section
//           id="about"
//           className="py-24 border-t dark:border-slate-700">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold mb-6">About Me</h2>

//             <p className="text-lg leading-7 text-slate-700 dark:text-slate-300 mb-6">
//               I'm Sowhardo, Currently in my final semester in BRAC University. I am a software 
//               Engineer Aspirant. I enjoy building applications and learning through practical 
//               problem solvng.
//             </p>

//             <p className="text-lg leading-7 text-slate-700 dark:text-slate-300 mb-6">
//               My core focus areas are <span className="font-bold">MERN stack</span>, 
//               <span className="font-bold"> DSA</span>, and growing my 
//               understanding of <span className="font-bold">System design</span>.  
//               I’m also improving my Problem solving skills on various platforms.
//             </p>

//             <p className="text-lg leading-7 text-slate-700 dark:text-slate-300">
//               I aim to build full stack applications that solves real world problems and integrate my
//               system design knowledge to make applications secure and scalable.
//             </p>
//           </div>
//         </section> */}
//         <section
//   id="about"
//   className="py-24 border-t dark:border-slate-700"
// >
//   <div className="max-w-4xl mx-auto">
//     <h2 className="text-3xl font-bold mb-10 text-center md:text-left">About Me</h2>

//     {/* Parent container */}
//     <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10">

//       {/* --- Image on Right (Desktop) --- */}
//       <div className="flex-shrink-0">
//         <img
//           src={profilePic}
//           alt="Sowhardo"
//           className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
//         />
//       </div>

//       {/* --- Text on Left --- */}
//       <div className="text-center md:text-left space-y-6 md:space-y-4">
//         <p className="text-lg leading-7 text-slate-700 dark:text-slate-300">
//           I'm currently in the last semester of my undergrad, continually learning and building towards my goal of
//           becoming a Software Engineer. I have strong interests in working closely with how systems work under the hood.
//         </p>

//         <p className="text-lg leading-7 text-slate-700 dark:text-slate-300">
//           I work with <span className="font-semibold">PERN stack</span> and alongside, I practice towards
//           improving my <span className="font-semibold">DSA</span> and <span className="font-semibold">System Design knowledge</span>.
  
//         </p>

//         <p className="text-lg leading-7 text-slate-700 dark:text-slate-300">
//          My Goal is to build scalabale full stack solutions which solves real life problems, with the meaningful integration of AI & Agentic AI.
//         </p>
//       </div>

//     </div>
//   </div>
// </section>


        
        
//         <section id="skills" className="py-24 border-t dark:border-slate-700">
//         <div className="max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold mb-10">Skills</h2>

//             {/* Languages */}
//          <div className="mb-10">
//             <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
//              <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
//              <li><span className="font-medium">JavaScript (ES6+)</span>: Primary language for web development</li>
//              <li><span className="font-medium">TypeScript</span>: Beginner, planning to reaplce JS with TS for type safety along the way</li>
//              <li><span className="font-medium">C++</span>: Use for Data Structure & Algorithomic problem solving (STL)</li>
//              <li><span className="font-medium">Python</span>: Used in FastAPI, Worked on machine learning projects and libraries</li>
//              <li><span className="font-medium">C</span>: Used during working with Processes, Threads, VSFS and Bash shell implementation </li>
//              <li><span className="font-medium">JAVA</span>: Used for practicing OOP concepts like Encapsulation, Abstraction, Polymorphism & Inheritance</li>
//              </ul>
//             </div>

//             {/* Frontend */}
//              <div className="mb-10">
//              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
//              <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
//                 <li>ReactJS</li>
//                 <li>TailwindCSS</li>
  
             
//              </ul>
//             </div>

//             {/* Backend & DB */}
//             <div className="mb-10">
//               <h3 className="text-xl font-semibold mb-4">Backend & Databases</h3>
//              <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
//              <li>Node.js & Express: Used in building REST API's in Backend</li>
//              <li>FastAPI: Used during building Agentic Workflow with Groq API</li>
//              <li>Django: Worked on university project: a Metro Management System</li>
//              <li>PostgreSQL: Use regularly in schema designing and vector database integration</li>
//              <li>SQLite: Used in University project</li>
//              <li>MongoDB: Used during CRUD operations & Schema designing (basic)</li>
             
             
//             </ul>
//          </div>

//             {/* Tools */}
//              <div className="mb-10">
//              <h3 className="text-xl font-semibold mb-4">Tools & Workflow</h3>
//              <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
//              <li>Git & GitHub: For version control</li>
//                 <li>Linux: Bash scripting to automate workflow</li>
//                 <li>Vim: Prefer using when working on Linux environment</li>
//                 <li>Postman: Used for testing API</li>
//                 <li>Locust: Used for API response Monitoring</li>
//                 <li>Docker: Containerized Applications and ran multiple services using docker compose</li>
//                 <li>Redis: Utilized for in memory caching </li>
//                 <li>Nginx: Served as a reverse proxy and load balancer</li>
//             </ul>
//             </div>

//              {/* CS Fundamentals */}
//              <div className="mb-10">
//                <h3 className="text-xl font-semibold mb-4">Computer Science Fundamentals</h3>
//                <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
//                  <li>Data Structures & Algorithms — Array, Linked List, Hash Map, Binary Search Tree, Stack, Heap, Queue, Recursion</li>
//                  <li>Operating Systems — Process synchronization, Threading & Multithreading, CPU scheduling algorithms, Mutex & Semaphores, File systems</li>
//                  <li>Computer Networks — HTTP/HTTPS,SSL/TLS, Encryption, Subnetting using VLSM, TCP/IP, OSI Layers, Router configeration with Cisco Packet Tracer, Wireshark for network monitoring</li>
//                </ul>
//              </div>

//              {/* Learning */}
//              <div>
//                <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
//                <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
//                  <li>Working on adding <span className="font-semibold">API rate limiter</span>. on my MetroSheba Application</li>
//                  <li>Planning to containerize the MetroSheba backend, test with API tester, and orchastrate the scaling with containers with <span className="font-semibold">Kubernates</span>. on local machine</li>
//                  <li>learning to build an <span className="font-semibold">AI Coding Agent</span> with python to understand agentic workflow in tools like Claude Code</li>
//                </ul>
//              </div>
//            </div>
//         </section>

//         <section id="contact" className="py-24 border-t dark:border-slate-700">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-2xl font-bold mb-8">Contacts</h2>

//             <div className="space-y-6 text-lg">
//               <a href="mailto:sowhardo221@gmail.com" className="flex items-center gap-3 hover:text-indigo-500">
//                 <FaEnvelope className="text-2xl"/>
//                 sowhardo221@gmail.com 
//               </a>
//               <a href="mailto:sowhardo.bin.atik@g.bracu.ac.bd" className="flex items-center gap-3 hover:text-indigo-500">
//                 <FaEnvelope className="text-2xl"/>
//                 sowhardo.bin.atik@g.bracu.ac.bd  
//               </a>
//               <a href="https://www.linkedin.com/in/sowhardo-bin-atik/" className="flex items-center gap-3 hover:text-indigo-500">
//                 <FaLinkedin className="text-2xl"/>
//                 Linkedin
//               </a>
//               <a href="tel:+8801798516247" className="flex items-center gap-3 hover:text-indigo-500">
//                 <FaPhone className="text-2xl"/>
//                 +8801798516247
//               </a>
//               <a href="https://github.com/Sowhardo12/" target="_blank" className="flex items-center gap-3 hover:text-indigo-500">
//                 <FaGithub className="text-2xl" />
//                 github.com/Sowhardo12
//               </a>
//               <div className="flex items-center gap-3">
//                 <FaDiscord className="text-2xl" />sowhardobinatik
//               </div>
//             </div>
//           </div>
//         </section>
//         <footer className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Sowhardo</footer>
//         </div>
//         </div>
//         </div>
//         </>
//     );
// }

// export default HomePage;
