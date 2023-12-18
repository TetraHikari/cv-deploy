import { useState, useEffect } from 'react'
import './App.css'
import { Navbar, Home , AboutMe, Projects, Contact, Education, Skills} from './components';
import React from 'react'
import styles from './style';
import bgimg from './assets/bac.jpg';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AnimateCursor from './components/AnimateCursor';



export const App = () => {


  return (
    <div className={`App h-full`}>
    <Router>
      <AnimateCursor />
      <div className='App w-full overflow-hidden h-full'>
        <div className={ `${styles.paddingX} ${styles.flexCenter} sm:mb-20` }>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
        </div>
      <div className='Content h-full w-full flex xxxs:max-xxs:justify-start justify-center lg:items-start` pl-10 pr-10' >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
      </div>
    </Router>
    </div>
  );
}


export default App

