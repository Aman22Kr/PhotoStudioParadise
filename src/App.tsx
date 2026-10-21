import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { SetsPage } from './pages/SetsPage';
import { SetDetailPage } from './pages/SetDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PricingPage } from './pages/PricingPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';
import { SavedPage } from './pages/SavedPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on navigation helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Global Toast Banner
const GlobalToast = () => {
  const { toastMessage, hideToast } = useApp();

  if (!toastMessage) return null;

  return (
    <div
      role="status"
      className="fixed bottom-6 right-6 z-50 bg-neutral-900 border border-amber-500/60 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
      <span>{toastMessage}</span>
      <button
        onClick={hideToast}
        className="ml-2 text-neutral-400 hover:text-white font-bold"
        aria-label="Dismiss toast"
      >
        ✕
      </button>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sets" element={<SetsPage />} />
              <Route path="/sets/:id" element={<SetDetailPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/saved" element={<SavedPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <GlobalToast />
        </div>
      </HashRouter>
    </AppProvider>
  );
}
