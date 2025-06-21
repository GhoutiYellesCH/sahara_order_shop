
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import About from '../components/About';
import OrderForm from '../components/OrderForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <About />
      <OrderForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
