import React from 'react';
import { Routes, Route } from "react-router-dom";
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
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/myteam" element={<Myteam />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Add a simple 404 component
function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

export default App;