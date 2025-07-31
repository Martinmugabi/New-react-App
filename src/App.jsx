import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/home';
import About from './pages/About';
import Services from './pages/Services';
import Skills from './pages/skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Myteam from './pages/MyTeam';
import Gallary from './pages/gallary';
import Testimonies from './pages/Testimonies';
import Awards from './pages/Awards';
import Blogs from './pages/Blogs';
import Footer from './pages/Footer';
import './assets/style/global.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/testmonies" element={<Testimonies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/myteam" element={<Myteam />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;