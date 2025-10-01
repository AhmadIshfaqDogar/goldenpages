import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutBook from './components/AboutBook';
import Features from './components/Features';
import Author from './components/Author';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-dark-primary min-h-screen">
      <Header />
      <Hero />
      <AboutBook />
      <Features />
      <Author />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;