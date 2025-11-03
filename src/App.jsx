
import React from 'react'
import { useState } from 'react';
import "./App.css";
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { ResumeButton } from './components/sections/Resume';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  

function App() {
 const [isLoaded, setIsLoaded] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router basename="/portfolio-app"> {/* Important for GitHub Pages */}



{ !isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{""}
  <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`} >
   
   <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

    <Routes>
    {/* Main page */}

    <Route 
    path="/" 
    element={
      <>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    </>
    }
    />

    {/*Resume page*/}
    <Route path="/resume" element={<ResumeButton />} />
   
 
    </Routes>
    </div>
    </Router>
  );
    
  
}

export default App;
