import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-sm">
      {/* Top Banner / Facilities Bar */}
      <div className="border-b border-neutral-900/80 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-2xl font-bold text-amber-400 font-display">50+</span>
            <p className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">Themed Backdrops</p>
            <p className="text-[11px] text-neutral-500">Royal palaces, European & vintage lofts</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-2xl font-bold text-amber-400 font-display">200+</span>
            <p className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">Authentic Props</p>
            <p className="text-[11px] text-neutral-500">Classic cars, thrones, pianos & lights</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-2xl font-bold text-amber-400 font-display">3 Acres</span>
            <p className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">Lush Private Studio</p>
            <p className="text-[11px] text-neutral-500">Serene Qutabgarh greenery in Delhi</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-2xl font-bold text-amber-400 font-display">100%</span>
            <p className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">Private & Sanitized</p>
            <p className="text-[11px] text-neutral-500">Air-conditioned bridal makeup vanity suites</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-neutral-950 shadow-md">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                PhotoStudio<span className="text-amber-400">Paradise</span>
              </span>
              <p className="text-[10px] tracking-widest uppercase text-neutral-500">Film & Creative Photography Sets</p>
            </div>
          </Link>

          <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
            Delhi&apos;s premier dedicated photography and cinematic film studio. Designed with bespoke indoor air-conditioned sets, grand outdoor architectural backdrops, private luxury bridal green rooms, and in-house cafe amenities for effortless shoots.
          </p>

          <div className="pt-2 text-xs space-y-1 text-neutral-400">
            <p className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Registered Studio Facility · Wheelchair Accessible</span>
            </p>
            <p className="flex items-center gap-2 text-neutral-500">
              <span>Managed by Aman22kr · Open 7 Days a Week</span>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Studio Spaces
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link to="/sets" className="hover:text-amber-400 transition-colors">
                All 50+ Themed Sets
              </Link>
            </li>
            <li>
              <Link to="/sets/royal-heritage-palace" className="hover:text-amber-400 transition-colors">
                Royal Rajputana Palace
              </Link>
            </li>
            <li>
              <Link to="/sets/santorini-greece-alley" className="hover:text-amber-400 transition-colors">
                Santorini Greek Alley
              </Link>
            </li>
            <li>
              <Link to="/sets/neon-cyberpunk-diner" className="hover:text-amber-400 transition-colors">
                Neon Retro 80s Diner
              </Link>
            </li>
            <li>
              <Link to="/sets/glass-conservatory-greenhouse" className="hover:text-amber-400 transition-colors">
                Glass Botanical Conservatory
              </Link>
            </li>
            <li>
              <Link to="/sets/punjabi-village-pind" className="hover:text-amber-400 transition-colors">
                Rustic Punjabi Pind
              </Link>
            </li>
          </ul>
        </div>

        {/* Shoot Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Photography Genres
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link to="/services" className="hover:text-amber-400 transition-colors">
                Pre-Wedding & Engagement
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-amber-400 transition-colors">
                Maternity & Newborn
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-amber-400 transition-colors">
                Fashion & Model Portfolios
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-amber-400 transition-colors">
                25th Wedding Anniversaries
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-amber-400 transition-colors">
                Pricing Packages & Passes
              </Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-amber-400 transition-colors font-semibold text-amber-400">
                Book Studio Slot &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Studio Location
          </h4>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Plot Number 308, Nearest Main Bus Stand, Village Qutabgarh, Delhi - 110039</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+919899200017" className="hover:text-amber-400">+91 9899200017</a>
                <a href="tel:+919999954054" className="hover:text-amber-400">+91 9999954054</a>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="mailto:2016.photoparadise@gmail.com" className="hover:text-amber-400 truncate">
                2016.photoparadise@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>6:00 AM – 10:00 PM (Everyday)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 bg-neutral-950/80 py-6 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PhotoStudioParadise. All rights reserved. Formerly inspired by photoparadise.in.</p>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="hover:text-neutral-300">FAQ</Link>
            <Link to="/saved" className="hover:text-neutral-300">My Saved Sets</Link>
            <Link to="/contact" className="hover:text-neutral-300">Directions</Link>
            <a
              href="https://github.com/Aman22kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
            >
              <span>GitHub: Aman22kr</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
