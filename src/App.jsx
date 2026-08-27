import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProgramDetails from './pages/ProgramDetails';
import AboutPage from './pages/AboutPage';
import LegalPage from './pages/LegalPage';
import FreeBookletPage from './pages/FreeBookletPage';
import MeditationsPage from './pages/MeditationsPage';
import MeditationDetailsPage from './pages/MeditationDetailsPage';
import PromoPopup from './components/PromoPopup';
import WhatsAppWidget from './components/WhatsAppWidget';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  // IntersectionObserver removed from here and moved to ScrollToTop to support route changes


  return (
    <Router>
      <ReactLenis root options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true
      }}>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <PromoPopup />
          <WhatsAppWidget />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/program-details/:slug" element={<ProgramDetails />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/free-guide" element={<FreeBookletPage />} />
            <Route path="/meditations" element={<MeditationsPage />} />
            <Route path="/meditations/:slug" element={<MeditationDetailsPage />} />
          </Routes>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </ReactLenis>
    </Router>
  );
}

export default App;

