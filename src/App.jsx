import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './assets/Contact';
import Feature from './assets/Feature';
import Footer from './assets/Footer';
import Hero from './assets/Hero';
import Navbar from './assets/Navbar';
import Products from './assets/Products';
import Sample from './assets/Sample';
import Testimonial from './assets/Testimonial';

function App() {
  return (
    <>
      <Router>
        <Navbar />
       
        <Routes>
        <Route index element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/sample" element={<Sample />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
