
import React, {useState} from 'react';
import profilePic from './images/image.jpeg'
function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = ()=> setMobileOpen(v=>!v);
  return (
    <div className='min-h-screen bg-white text-slate-900 antialiased'>
      <div className='max-w-4xl mx-auto px-6'>
        <header className='flex items-center justify-between py-6'>
          <a href='#home' className='inline-flex items-center gap-3'>
            <span className='text-lg font-medium'> &lt; Sowhardo Bin Atik /&gt;</span>
          </a>
          <nav className='hidden md:flex items-center gap-6 text-sm'>
            <a href='#about' className='hover:text-indigo-600'>About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="#resume" className="ml-4 px-3 py-1 border rounded-md text-sm hover:bg-red-600">Resume</a>
          </nav>
          <button 
          className='md:hidden p-2 rounded-md focus:outline-none'
          aria-label="Toggle menu"
          onClick={toggleMobile}
          >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {mobileOpen ? (
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          ):(<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>)
          }
          </svg>  
          </button>
        </header>

        {/* mobile nav part */}
        <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} mb-4`}>
          <nav className="flex flex-col gap-3 text-sm" >
            <a href="#about" className="py-2" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#projects" className="py-2" onClick={() => setMobileOpen(false)}>Projects</a>
            <a href="#skills" className="py-2" onClick={() => setMobileOpen(false)}>Skills</a>
            <a href="#contact" className="py-2" onClick={() => setMobileOpen(false)}>Contact</a>
            <a href="#resume" className="mt-2 inline-block px-3 py-1 border rounded-md text-sm">Resume</a>
          </nav>
        </div>

        {/* Main section here */}  
        <main id='home' className='py-12'>
          <div className='grid gap-8 md:grid-cols-2 md:items-center'>
            <div>
              <h1 className='text-5xl sm:text-4xl font-extralight sm:font-extrabold  leading-tight '>
                Hi, I'm <span className='text-transparnt bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500'>Sowhardo</span> - a Software Engineer Aspirant.
              </h1>
              <p className='mt-4 text-slate-700 max-w-xl' >
              I am learning Full Stack Wev development and my area of interest is backend systems. Apart from that, currently focusing on acquiring relevant skills and problem solving on LeetCode :D 
              </p>
              <div className='mt-6 flex gap-3'>
                <a href="#projects" className='inline-block px-5 py-2 rounded-md bg-orange-600 text-white font-medium shadow-sm hover:opacity-60'>View Projects</a>
                <a href="#contacts" className='inline-block px-5 py-2 rounded-md border text-sm hover:bg-red-400'>Contact Me</a>
              </div> 
            </div>
            <div className="hidden md:flex items-center justify-center">
            {/* Photo part */}
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-slate-100 to-white border p-6 flex items-center justify-center">
            <div className="text-center">
            <img
            src={profilePic}
            alt='Profile'
            className='w-43 h-43 mx-auto rounded-full object-cover'
            >
            </img>
            <p className="mt-4 text-sm text-slate-600">
            "Move forward and do not look back"<br />
          </p>
            </div>
            </div>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default Portfolio;
