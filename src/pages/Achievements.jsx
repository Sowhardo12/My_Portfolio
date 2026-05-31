

import { Link } from "react-router-dom";
import agentxPDF from "../assets/promptEngr.pdf";
import copilotPDF from "../assets/copilot365.pdf";
import React, { useState } from 'react';

function Achievements() {
    const [isDark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');     
        
    const toggleDark = () => {
        const nextTheme = !isDark;
        setDark(nextTheme);
        localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
    };

    const achievements = [
        {
          name: "AgentX AI Prompt Engineer Level 1",
          provider: "AgentX",
          file: agentxPDF
        },
        {
          name: "Microsoft 365 Copilot – Ask Questions and Analyze Content",
          provider: "Microsoft",
          file: copilotPDF
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

                    <div className="space-y-6">
                        {achievements.map((a, i) => (
                            <div key={i} className="border dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-indigo-500/50 transition">
                                <div>
                                    <h2 className="text-xl font-semibold mb-1">{a.name}</h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{a.provider}</p>
                                </div>
                                <a
                                    href={a.file}
                                    download
                                    className="w-full sm:w-auto text-center px-5 py-2.5 border dark:border-slate-700 rounded-xl text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                    Download PDF
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;