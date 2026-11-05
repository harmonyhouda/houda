import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PromoPopup from './components/PromoPopup';
import WhatsAppWidget from './components/WhatsAppWidget';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// تحميل الصفحات عند الحاجة فقط (Lazy Loading) لتسريع الموقع
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProgramDetails = lazy(() => import('./pages/ProgramDetails'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const FreeBookletPage = lazy(() => import('./pages/FreeBookletPage'));
const MeditationsPage = lazy(() => import('./pages/MeditationsPage'));
const MeditationDetailsPage = lazy(() => import('./pages/MeditationDetailsPage'));
const PrivateCoursePage = lazy(() => import('./pages/PrivateCoursePage'));
const FreeCoursePage = lazy(() => import('./pages/FreeCoursePage'));

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
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/program-details/:slug" element={<ProgramDetails />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/free-guide" element={<FreeBookletPage />} />
              <Route path="/meditations" element={<MeditationsPage />} />
              <Route path="/meditations/:slug" element={<MeditationDetailsPage />} />
              <Route path="/vip-session/:accessKey" element={<PrivateCoursePage />} />
              {/* تم تعطيل صفحة الكورس المجاني: إذا فتح أي شخص الرابط يتم تحويله للرئيسية */}
              <Route path="/free-course" element={<Navigate to="/" replace />} />
              {/* لإعادة تفعيل الصفحة لاحقاً، استبدل السطر السابق بـ: <Route path="/free-course" element={<FreeCoursePage />} /> */}
            </Routes>
          </Suspense>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </ReactLenis>
    </Router>
  );
}

export default App;

