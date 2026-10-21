import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Phone, Heart, Calendar, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { favoriteSetIds, favoriteGalleryIds, bookings } = useApp();
  const location = useLocation();

  const totalFavorites = favoriteSetIds.length + favoriteGalleryIds.length;

  const navLinks = [
    { label: 'Sets & Themes', path: '/sets' },
    { label: 'Shoot Services', path: '/services' },
    { label: 'Pricing & Packages', path: '/pricing' },
    { label: 'Portfolio Gallery', path: '/gallery' },
    { label: 'About Studio', path: '/about' },
    { label: 'Location & Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-amber-600/90 text-neutral-950 text-[11px] sm:text-xs font-semibold py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2 border-b border-amber-500/30">
        <Sparkles className="w-3.5 h-3.5 shrink-0 fill-current" />
        <span>Wedding Season 2026-2027 Bookings Now Open across 50+ Indoor AC & Outdoor Sets in Qutabgarh, Delhi!</span>
        <span className="hidden md:inline text-neutral-900/70 font-normal">| Call: +91 9899200017</span>
      </div>

      <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-display leading-tight group-hover:text-amber-400 transition-colors">
                PhotoStudio<span className="text-amber-400">Paradise</span>
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
                Delhi · Film & Creative Sets
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-amber-400 bg-neutral-900/80 shadow-inner'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Phone */}
            <a
              href="tel:+919899200017"
              className="hidden xl:flex items-center gap-2 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
              title="Call studio directly"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 9899200017</span>
            </a>

            {/* Saved Board / Favorites */}
            <Link
              to="/saved"
              className="relative p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors flex items-center gap-1.5"
              title="View your saved sets and reservations"
            >
              <Heart className={`w-5 h-5 ${totalFavorites > 0 ? 'text-amber-400 fill-amber-400/30' : 'text-neutral-400'}`} />
              {(totalFavorites > 0 || bookings.length > 0) && (
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-amber-500 text-neutral-950">
                  {totalFavorites + bookings.length}
                </span>
              )}
            </Link>

            {/* Book Now Button */}
            <Link
              to="/booking"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Studio Slot</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <Link
              to="/saved"
              className="p-2 rounded-lg text-neutral-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className={`w-5 h-5 ${totalFavorites > 0 ? 'text-amber-400 fill-amber-400/30' : 'text-neutral-400'}`} />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  isActive(link.path)
                    ? 'text-amber-400 bg-neutral-900 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-neutral-800/80 space-y-3">
              <Link
                to="/saved"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm bg-neutral-900/80 text-neutral-200"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-amber-400" />
                  <span>Saved Moodboard & Inquiries</span>
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold">
                  {totalFavorites + bookings.length}
                </span>
              </Link>

              <div className="flex items-center justify-between px-4 py-2 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Village Qutabgarh, Delhi</span>
                </span>
                <a href="tel:+919899200017" className="text-amber-400 font-medium">
                  +91 9899200017
                </a>
              </div>

              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Studio Slot</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
