import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
const Projects = ()=>{
    const [isDark,setDark]= useState(false);     
        
        const toggleDark = ()=>{
            setDark(!isDark);
        }
    const projects = [

        {
          title: "MetroSheba - smart transit companion",
          description: "Built using ExpressJS, ReactJS, PostgreSQL, pgvector, GROQ LLM, Gemini embeddings & docker",
          stack: ["Express JS","Docker","PostgreSQL"],
          link: "https://github.com/Sowhardo12/MetroSheba",
          live: "https://metro-sheba.vercel.app/"
        },
        {
          title: "AI Research Assistance",
          description: "Built using ReactJS and FastAPI with Groq API integration, in order to automate the workflow of a Researcher",
          stack: ["ReactJS","FastAPI"],
          link: "https://github.com/Sowhardo12/AI_Research_Assistant"
        },
        {
          title: "API High Traffic Simulation",
          description: "Built a small Application with FastAPI, Ran multiple containers with Docker compose and used tools like Locus, Redis, and Nginx to Monitor & Reduce API response time",
          stack: ["FastAPI","Docker","Redis","Nginx","Locust"],
          link: "https://github.com/Sowhardo12/High-Traffic-Simulation-in-a-small-App"
        },
        {
          title: "Fire Simulator",
          description: "Animated game made with PyOpenGL to put water on the Fire",
          stack: ["Python","PyOpenGL"],
          link: "https://github.com/Sowhardo12/Fire_simulator"
        }

    ];
    return(
        <div className={isDark?"dark":""}>
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-6" >
            <div className="max-w-4xl mx-auto py-16" >
                <div className="mb-10">
                    <Link to="/" className="text-indigo-500 border rounded-2xl p-2 hover:underline">&larr; Back to Home</Link>
                    <button onClick={toggleDark} className="px-3 py-1 rounded-md border text-sm ml-3">{isDark ? 'Dark' : 'Light'} Mode</button>
                    <h1 className="text-4xl font-bold mt-4">Projects</h1>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((p,i)=>(
                        <div key={i} className="border dark:border-slate-700 rounded-lg p-6 hover:shadow-lg hover:border-indigo-500 transition">
                            <h2 className="text-2xl font-semibold mb-2" >{p.title}</h2>
                            <p className="text-slate-700 dark:text-slate-300 mb-4">{p.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                            {p.stack.map((tech, index) => (
                            <span
                             key={index}
                             className="px-2 py-1 text-xs border dark:border-slate-600 rounded-md"
                                 >
                                  {tech}
                                 </span>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2">
                                    <a
                                       href={p.link}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-indigo-500 hover:underline"
                                     >
                                       View on GitHub →
                                     </a>

                                     {p.title === "MetroSheba - smart transit companion" && (
                                       <a
                                         href={p.live}
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className="text-indigo-500 hover:underline"
                                       >
                                         View on Live →
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
}

export default Projects;