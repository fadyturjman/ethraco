import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TrustedPartners from './components/TrustedPartners';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TrustedPartners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;