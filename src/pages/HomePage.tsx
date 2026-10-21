import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2,
  Calendar,
  Layers,
  Shield,
  Coffee,
  Wind,
  Star,
  MapPin,
  ChevronRight,
  Heart
} from 'lucide-react';
import { STUDIO_SETS } from '../data/setsData';
import { SHOOT_SERVICES } from '../data/servicesData';
import { PRICING_PACKAGES } from '../data/pricingData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { SetCard } from '../components/SetCard';
import { YouTubePlaceholder } from '../components/YouTubePlaceholder';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/sets?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/sets');
    }
  };

  const categories = ['All', 'Royal & Heritage', 'Romantic & European', 'Modern & Chic', 'Nature & Outdoor'];

  const filteredSets = STUDIO_SETS.filter(s => {
    if (activeCategory === 'All') return true;
    return s.category === activeCategory;
  }).slice(0, 6);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 sm:py-24">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599818817282-e30090f4e3c9?auto=format&fit=crop&w=2000&q=80"
            alt="PhotoStudioParadise Grand Heritage Set"
            className="w-full h-full object-cover object-center filter brightness-[0.38] scale-105 animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Delhi&apos;s Premier Film & Photography Campus · Qutabgarh</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.1]">
            Cinematic Photography Sets <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Beyond Imagination
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            Step into 50+ magnificent indoor and outdoor backdrops—from authentic Rajasthani palaces to romantic Santorini alleys, vibrant neon diners, and tranquil greenhouses across 3 lush acres in Delhi.
          </p>

          {/* Quick Search Input */}
          <form
            onSubmit={handleSearch}
            className="max-w-xl mx-auto relative flex items-center bg-neutral-900/90 backdrop-blur-xl border border-neutral-700/80 rounded-2xl p-2 shadow-2xl focus-within:border-amber-400 transition-colors"
          >
            <Search className="w-5 h-5 text-neutral-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search backdrops, props (e.g. Royal Palace, Greek, Neon, Car)..."
              className="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder-neutral-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm shrink-0 transition-all shadow-md"
            >
              Search
            </button>
          </form>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/sets"
              className="px-6 py-3.5 rounded-xl text-sm font-bold bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700/80 hover:border-amber-500/50 flex items-center gap-2 transition-all shadow-lg"
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Explore 50+ Sets</span>
            </Link>

            <Link
              to="/booking"
              className="px-7 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 flex items-center gap-2 shadow-xl shadow-amber-500/20 transition-all transform hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Studio Slot</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Highlights Row */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left max-w-3xl mx-auto">
            <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
              <span className="text-xs font-bold text-amber-400">50+ Backdrops</span>
              <p className="text-[11px] text-neutral-400">Indoor AC & Outdoor</p>
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
              <span className="text-xs font-bold text-amber-400">200+ Props</span>
              <p className="text-[11px] text-neutral-400">Free use across sets</p>
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
              <span className="text-xs font-bold text-amber-400">AC Green Rooms</span>
              <p className="text-[11px] text-neutral-400">Hollywood vanity mirrors</p>
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
              <span className="text-xs font-bold text-amber-400">In-House Cafe</span>
              <p className="text-[11px] text-neutral-400">Fresh meals & snacks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Sets Showcase Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Signature Backdrops</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Explore Our Most Iconic Sets
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              Each set is built with architectural authenticity, professional shooting clearances, and nuanced lighting zones for world-class photography.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSets.map((set) => (
            <SetCard key={set.id} set={set} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/sets"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-neutral-800 font-semibold text-sm transition-all"
          >
            <span>View All 50+ Themed Sets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Photography Genres & Shoots Section */}
      <section className="py-20 bg-neutral-900/40 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Photography Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Designed For Every Special Milestone
            </h2>
            <p className="text-sm text-neutral-400">
              From grand pre-wedding cinematic shoots to peaceful maternity memories and commercial music video productions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOOT_SERVICES.slice(0, 6).map((srv) => (
              <Link
                key={srv.id}
                to={`/services/${srv.id}`}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/40 transition-all p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div>
                  <div className="w-full aspect-video rounded-xl overflow-hidden mb-5 bg-neutral-950">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-amber-400 font-bold">Starts at {srv.startingPrice}</span>
                    <span className="text-neutral-500">{srv.recommendedDuration.split(' ')[0]} Hrs</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {srv.subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span>Explore Shoot Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 text-sm font-semibold transition-all"
            >
              <span>Explore All Shoot Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Video Tour Section (Blank Placeholder matching exact aspect ratio & dimensions) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Cinematic Studio Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Watch PhotoStudioParadise in Motion
          </h2>
          <p className="text-sm text-neutral-400">
            Preview our campus walkthrough, lighting transitions, and behind-the-scenes pre-wedding productions.
          </p>
        </div>

        {/* Reproduce correct 16:9 layout using blank placeholder */}
        <YouTubePlaceholder
          title="PhotoStudioParadise Campus Tour & Golden Hour Lighting Highlights"
          duration="04:18"
          caption="Official Studio Campus Walkthrough (Blank Video Player Placeholder)"
        />
      </section>

      {/* Luxury Amenities & Infrastructure */}
      <section className="py-20 bg-neutral-900/30 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Unrivaled Studio Comfort
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Studio Infrastructure Built For Artists
            </h2>
            <p className="text-sm text-neutral-400">
              Everything you need for a stress-free full-day shoot without rushing between distant locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-display">AC Green Rooms</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Spacious air-conditioned dressing rooms with lighted Hollywood mirrors, garment steamers, and attached washrooms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-display">In-House Paradise Cafe</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Freshly brewed coffee, tea, breakfast platters, North Indian meals, and quick bites served right to your set.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-display">200+ Free Props</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Thrones, vintage bikes, acoustic guitars, suitcases, lanterns, and antique trunks available without hidden rental costs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-display">Private & Sanitized</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Wheelchair-accessible paths, sanitized newborn surfaces, and 100% private shoot bays away from public crowds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Summary Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Choose Your Studio Package
          </h2>
          <p className="text-sm text-neutral-400">
            Straightforward pricing with no hidden camera fees or per-photographer surcharges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all relative ${
                pkg.isPopular
                  ? 'bg-neutral-900 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 lg:-translate-y-2'
                  : 'bg-neutral-900/70 border border-neutral-800'
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-neutral-950 uppercase tracking-wider shadow-md">
                  {pkg.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white font-display">{pkg.name}</h3>
                <p className="mt-1 text-xs text-neutral-400">{pkg.durationLabel}</p>

                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white font-display">{pkg.formattedPrice}</span>
                  <span className="text-xs text-neutral-400 ml-2">/ session</span>
                </div>

                <p className="text-xs text-neutral-300 pb-5 border-b border-neutral-800 leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="mt-6 space-y-3 text-xs text-neutral-300">
                  {pkg.features.slice(0, 5).map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  to={`/booking?package=${pkg.id}`}
                  className={`w-full py-3 rounded-xl text-center font-bold text-xs sm:text-sm block transition-all shadow-md ${
                    pkg.isPopular
                      ? 'bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow-amber-500/20'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                  }`}
                >
                  Reserve {pkg.name} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/pricing" className="text-xs text-neutral-400 hover:text-amber-400 underline underline-offset-4">
            View full pricing breakdown, add-ons & cancellation policies &rarr;
          </Link>
        </div>
      </section>

      {/* Client Reviews / Testimonials */}
      <section className="py-20 bg-neutral-900/40 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Real Client Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Loved by Delhi NCR Couples & Filmmakers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed italic">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border border-amber-500/30"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.name}</h4>
                    <p className="text-[10px] text-neutral-400">{t.shootType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA Strip */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Ready to create timeless photographs?
            </h2>
            <p className="mt-1 text-sm text-neutral-900/80 max-w-xl font-medium">
              Slots fill up fast on weekends. Reserve your preferred date with instant confirmation.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="tel:+919899200017"
              className="px-5 py-3 rounded-xl bg-neutral-950 text-white font-bold text-xs sm:text-sm hover:bg-neutral-900 transition-colors"
            >
              Call +91 9899200017
            </a>
            <Link
              to="/booking"
              className="px-6 py-3 rounded-xl bg-white text-neutral-950 font-extrabold text-xs sm:text-sm hover:bg-neutral-100 shadow-lg transition-transform active:scale-95"
            >
              Book Studio Slot &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Compact Advertisement Placeholder near the bottom above footer */}
      <AdPlaceholder
        slotName="Pro Cine Gear & Strobe Lighting Rental Desk (Qutabgarh Hub)"
        format="compact"
      />
    </div>
  );
};
