// 

import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Projects = () => {
    // Sync state with localStorage so page navigation doesn't wipe choice
    const [isDark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');     
        
    const toggleDark = () => {
        const nextTheme = !isDark;
        setDark(nextTheme);
        localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
    };

    const projects = [
        {
          title: "MetroSheba - smart transit companion",
          description: "Built using ExpressJS, ReactJS, PostgreSQL, pgvector, GROQ LLM, Gemini embeddings & docker",
          stack: ["Express JS", "Docker", "PostgreSQL"],
          link: "https://github.com/Sowhardo12/MetroSheba",
          live: "https://metro-sheba.vercel.app/"
        },
        {
          title: "AI Research Assistance",
          description: "Built using ReactJS and FastAPI with Groq API integration, in order to automate the workflow of a Researcher",
          stack: ["ReactJS", "FastAPI"],
          link: "https://github.com/Sowhardo12/AI_Research_Assistant"
        },
        {
          title: "API High Traffic Simulation",
          description: "Built a small Application with FastAPI, Ran multiple containers with Docker compose and used tools like Locust, Redis, and Nginx to Monitor & Reduce API response time",
          stack: ["FastAPI", "Docker", "Redis", "Nginx", "Locust"],
          link: "https://github.com/Sowhardo12/High-Traffic-Simulation-in-a-small-App"
        },
        {
          title: "Fire Simulator",
          description: "Animated game made with PyOpenGL to put water on the Fire",
          stack: ["Python", "PyOpenGL"],
          link: "https://github.com/Sowhardo12/Fire_simulator"
        }
    ];

    return (
        <div className={isDark ? "dark" : ""}>
            <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-6 transition-colors duration-200">
                <div className="max-w-4xl mx-auto py-16">
                    <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-6">
    <div className="flex items-center gap-3 font-mono">
        <Link 
            to="/" 
            className="inline-flex items-center justify-center h-10 px-4 text-xs font-semibold text-indigo-500 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all"
        >
            &larr; Back to Home
        </Link>
        <button 
            onClick={toggleDark} 
            className="inline-flex items-center justify-center h-10 px-4 text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#161D30] text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        >
            {isDark ? '☀️ Light' : '🌙 Dark'} Mode
        </button>
    </div>
    <div className="font-mono">
        <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-right">
            /projects
        </h1>
    </div>
</div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((p, i) => (
                            <div key={i} className="flex flex-col justify-between border dark:border-slate-700 rounded-xl p-6 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-400 transition-all bg-slate-50/50 dark:bg-slate-800/30">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed">{p.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {p.stack.map((tech, index) => (
                                            <span key={index} className="px-2.5 py-1 text-xs font-medium border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                        GitHub Code →
                                    </a>
                                    {p.live && (
                                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                            Live Demo ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;