import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ProductShowcase from './components/ProductShowcase';
import AboutCompanySection from './components/AboutCompanySection';
import RoiCalculatorSection from './components/RoiCalculatorSection';
import PricingSection from './components/PricingSection';
import TestimonialsPartnersSection from './components/TestimonialsPartnersSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DemoRequestModal from './components/DemoRequestModal';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('zikola-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      document.body.classList.add('dark');
      try {
        localStorage.setItem('zikola-theme', 'dark');
      } catch {}
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      try {
        localStorage.setItem('zikola-theme', 'light');
      } catch {}
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark ' : ''}min-h-screen bg-[#FAF9F6] text-slate-900 dark:bg-[#0B0F19] dark:text-slate-100 transition-colors duration-300`}>
      
      {/* Navigation Bar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenDemoModal={() => setIsDemoModalOpen(true)} 
      />

      {/* Main Narrative Flow */}
      <main>
        {/* 1. Hero Section & Interactive Telemetry Studio */}
        <HeroSection onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 2. Scientific Framework: Cattell-Horn-Carroll (CHC) */}
        <WhyChooseUsSection onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 3. 6 Core Domains & Multi-Stakeholder Portal */}
        <ProductShowcase onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 4. Corporate Profile: CV Maju Bersama Generasi */}
        <AboutCompanySection />

        {/* 5. Interactive Assessment Advisory Guide */}
        <RoiCalculatorSection />

        {/* 6. Transparent Family & Institutional Pricing */}
        <PricingSection onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 7. Clinical & Practitioner Testimonials */}
        <TestimonialsPartnersSection />

        {/* 8. Comprehensive FAQ */}
        <FaqSection />

        {/* 9. Direct Contact & Consultation */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      {/* Floating Action */}
      <FloatingWhatsapp />

      {/* Interactive Modal */}
      <DemoRequestModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />

    </div>
  );
}
