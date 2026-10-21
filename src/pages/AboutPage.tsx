import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  Camera,
  Coffee,
  Wind,
  Layers,
  ShieldCheck,
  Phone,
  ArrowRight,
  Heart
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Delhi&apos;s Creative Filmmaking Haven</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            About PhotoStudioParadise
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Founded with a singular vision: to eliminate the logistical hassle of outdoor photoshoots by bringing the world&apos;s most iconic architectural backdrops into a single 3-acre private sanctuary in Delhi.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1599818817282-e30090f4e3c9?auto=format&fit=crop&w=1200&q=80"
              alt="PhotoStudioParadise Campus Grounds"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Village Qutabgarh, Delhi
              </span>
              <h3 className="text-xl font-bold text-white font-display">
                3 Acres of Pure Creative Freedom
              </h3>
            </div>
          </div>

          <div className="space-y-6 text-sm text-neutral-300 font-light leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              From Royal Rajasthan to Santorini, In One Private Campus
            </h2>
            <p>
              Couples and production crews used to spend days traveling between crowded monuments, struggling with public permits, changing costumes in cars, and dealing with uncontrollable onlookers.
            </p>
            <p>
              <strong className="text-white font-medium">PhotoStudioParadise</strong> reimagined this experience. Located at Plot 308 in the serene green belt of Village Qutabgarh, Delhi-110039, we built over 50 immersive indoor air-conditioned and outdoor sets designed specifically with camera angles, golden hour light traps, and privacy in mind.
            </p>
            <p>
              Whether you wish to pose before the grand sandstone arches of a Rajputana palace, stroll along cobblestone streets of Santorini, relax in a neon 80s diner, or shoot inside an authentic rustic Punjabi pind courtyard, every transition takes merely two minutes on foot.
            </p>
          </div>
        </div>

        {/* Pillars & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">Crafted for Filmmakers</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every backdrop features ample depth of field, 18-to-20 foot ceilings, 3-phase heavy power for HMIs and continuous lights, and zero visual clutter in the background.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">Bridal Comfort & Green Rooms</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We provide private climate-controlled makeup suites with bright Hollywood vanity mirrors, garment steamers, clothing racks, and sanitized private washrooms.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">In-House Paradise Cafe</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              A full-day shoot demands energy. Our on-site cafe prepares hot tea, artisan espresso, fresh parathas, sandwiches, and meals served straight to your set.
            </p>
          </div>
        </div>

        {/* Location & Getting Here Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Studio Address & Contact</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              Visiting PhotoStudioParadise
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Plot Number 308, Nearest Main Bus Stand, Village Qutabgarh, Delhi - 110039.
              Easily accessible via Outer Ring Road or Rohtak Road with ample private on-campus parking for crew vans and cars.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href="tel:+919899200017" className="hover:text-amber-400">+91 9899200017</a>
              </span>
              <span>Open 6:00 AM – 10:00 PM Daily</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm transition-all"
            >
              Get Directions & Route
            </Link>
            <Link
              to="/booking"
              className="px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs sm:text-sm transition-all"
            >
              Book a Slot &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Compact Advertisement Placeholder near the bottom */}
      <AdPlaceholder
        slotName="Professional Camera Equipment & Crane Partner (Qutabgarh Studio Desk)"
        format="compact"
      />
    </div>
  );
};
