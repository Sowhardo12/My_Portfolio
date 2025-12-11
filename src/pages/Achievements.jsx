
import { Link } from "react-router-dom";
import agentxPDF from "../assets/promptEngr.pdf";
import copilotPDF from "../assets/copilot365.pdf";
import React, { useState, useEffect } from 'react';


function Achievements() {
    const [isDark,setDark]= useState(false);     
        
        const toggleDark = ()=>{
            setDark(!isDark);
        }
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
    <div className={isDark?"dark":""}>
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-6">
      <div className="max-w-4xl mx-auto py-16">

        <div className="mb-10">
          <Link to="/" className="text-indigo-500 border rounded-2xl p-2 hover:underline">&larr; Back to Home</Link>
          <button onClick={toggleDark} className="px-3 py-1 rounded-md border text-sm ml-3">{isDark ? 'Dark' : 'Light'} Mode</button>
          <h1 className="text-4xl font-bold mt-4">Achievements</h1>
        </div>

        <div className="space-y-6">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="border dark:border-slate-700 rounded-lg p-6 flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{a.name}</h2>
                <p className="text-slate-700 dark:text-slate-300">{a.provider}</p>
              </div>

              <a
                href={a.file}
                download
                className="px-4 py-2 border rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
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
