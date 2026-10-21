import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  Heart,
  Sparkles,
  Layers,
  Sun,
  Maximize2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { STUDIO_SETS } from '../data/setsData';
import { useApp } from '../context/AppContext';
import { SetCard } from '../components/SetCard';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const SetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isSetFavorite, toggleFavoriteSet, showToast } = useApp();

  const setItem = STUDIO_SETS.find((s) => s.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!setItem) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <h2 className="text-2xl font-bold text-white">Backdrop Set Not Found</h2>
        <p className="text-sm text-neutral-400">The requested studio backdrop could not be located.</p>
        <Link
          to="/sets"
          className="px-6 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-sm"
        >
          Browse All Sets
        </Link>
      </div>
    );
  }

  const isFav = isSetFavorite(setItem.id);

  const relatedSets = STUDIO_SETS.filter(
    (s) => s.category === setItem.category && s.id !== setItem.id
  ).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Set link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-900 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Link to="/sets" className="hover:text-amber-400 flex items-center gap-1">
              <ChevronLeft className="w-4 h-4" />
              <span>Back to All Sets</span>
            </Link>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400">{setItem.category}</span>
            <span className="text-neutral-600">/</span>
            <span className="text-amber-400 font-medium truncate max-w-[200px]">{setItem.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors"
              title="Share Set"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleFavoriteSet(setItem.id)}
              className={`p-2 rounded-lg border transition-colors flex items-center gap-1.5 text-xs font-semibold ${
                isFav
                  ? 'bg-red-500/20 text-red-400 border-red-500/40'
                  : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border-neutral-800'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
              <span className="hidden sm:inline">{isFav ? 'Saved' : 'Save Set'}</span>
            </button>
          </div>
        </div>

        {/* Set Hero & Gallery Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
          {/* Left Column: Gallery Imagery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
              <img
                src={setItem.gallery[activeImageIndex] || setItem.image}
                alt={setItem.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-amber-300 border border-amber-500/30">
                  {setItem.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900/80 backdrop-blur-md text-neutral-200 border border-neutral-700">
                  {setItem.type}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {setItem.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {setItem.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-amber-400 scale-105 shadow-md'
                        : 'border-neutral-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Set Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-1">
                  Dimensions
                </span>
                <p className="text-xs text-neutral-200 font-medium">{setItem.dimensions}</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-1">
                  Best Light Time
                </span>
                <p className="text-xs text-neutral-200 font-medium">{setItem.popularTime}</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-1">
                  Studio Campus
                </span>
                <p className="text-xs text-neutral-200 font-medium">Qutabgarh, Delhi</p>
              </div>
            </div>
          </div>

          {/* Right Column: Set Information & Booking CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {setItem.isPopular && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500 text-neutral-950 inline-flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-current" />
                    Most Booked Backdrop
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {setItem.name}
              </h1>
              <p className="mt-2 text-sm text-amber-400 font-medium leading-relaxed">
                {setItem.tagline}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Architectural Concept & Details
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                {setItem.description}
              </p>
              <div className="pt-2 text-xs text-neutral-300 flex items-start gap-2 border-t border-neutral-800/80">
                <Sun className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Lighting Environment:</strong> {setItem.lighting}
                </span>
              </div>
            </div>

            {/* Included Props Checklist */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Featured Props Included With This Set
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {setItem.featuredProps.map((prop, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800/80 text-xs text-neutral-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{prop}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Shoots */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Ideal For Photography Genres
              </h3>
              <div className="flex flex-wrap gap-2">
                {setItem.recommendedShoots.map((shoot, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs bg-amber-500/10 border border-amber-500/20 text-amber-300 font-medium"
                  >
                    {shoot}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Booking Action Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-500/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider">Access In Any Package</span>
                  <p className="text-lg font-bold text-white">Included in 4, 8 & 12 Hr Shifts</p>
                </div>
                <ShieldCheck className="w-8 h-8 text-amber-400" />
              </div>

              <div className="space-y-2 text-xs text-neutral-400">
                <p>• Private AC dressing room access included</p>
                <p>• 100% full props usage at zero extra charge</p>
              </div>

              <Link
                to={`/booking?set=${setItem.id}`}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Shoot with This Set</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Sets Section */}
        {relatedSets.length > 0 && (
          <div className="pt-16 mt-16 border-t border-neutral-900">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  More in {setItem.category}
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  Complementary Backdrops
                </h3>
              </div>
              <Link to="/sets" className="text-xs text-amber-400 hover:text-amber-300 font-semibold">
                Browse All Sets &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedSets.map((rs) => (
                <SetCard key={rs.id} set={rs} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Compact Advertisement Placeholder near the bottom */}
      <AdPlaceholder
        slotName="Atmospheric Fog & Haze FX Equipment Partner (PhotoStudioParadise)"
        format="compact"
      />
    </div>
  );
};
