/* import React, { useState, useEffect } from 'react';
 */import { HashRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
/* import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp'; */
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';

const App = () => {
/*   const [showFooter, setShowFooter] = useState(window.innerWidth > 768);
 */
/*   useEffect(() => {
    const handleResize = () => {
      setShowFooter(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); */

  return (
    <HashRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* {showFooter && <Footer />} */}
      {/* <ScrollUp /> */}
    </HashRouter>
  );
};

export default App;
