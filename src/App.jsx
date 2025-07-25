import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/header';
import Home from './pages/Home';
import Services from './pages/Services';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Myteam from './pages/MyTeam';
import Gallary from './pages/gallary';
import Awards from './pages/Awards';
import Blogs from './pages/Blogs';
import Footer from './pages/Footer';






function App() {

  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<home />} />
        <Route path="/header" element={<header />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
