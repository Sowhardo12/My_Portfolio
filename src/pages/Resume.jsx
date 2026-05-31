import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import resumePDF from '../assets/Resume.pdf';

function Resume() {
    // Sync state with localStorage so page theme choice is uniformly preserved
    const [isDark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');     
        
    const toggleDark = () => {
        const nextTheme = !isDark;
        setDark(nextTheme);
        localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
    };

    return (
        <div className={isDark ? "dark" : ""}>
            {/* Top Level Layout Matrix Shield to block infinite desktop stretch */}
            <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-4 sm:px-8 py-16 transition-colors duration-200">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Uniform Symmetrical Header Architecture */}
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
                                /resume
                            </h1>
                        </div>
                    </div>

                    {/* Interactive Preview Element Wrapper */}
                    <div className="text-center md:text-left mb-6">
                        <p className="text-sm font-mono text-slate-500 dark:text-slate-400">// Interactive Document Preview Stack</p>
                    </div>

                    <div className="w-full flex justify-center mb-10 shadow-lg rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                        <embed
                            src={resumePDF}
                            type="application/pdf"
                            className="w-full h-[78vh] bg-white rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;