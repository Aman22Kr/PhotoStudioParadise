import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Calendar,
  Trash2,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { STUDIO_SETS } from '../data/setsData';
import { GALLERY_ITEMS } from '../data/galleryData';
import { SetCard } from '../components/SetCard';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const SavedPage: React.FC = () => {
  const {
    favoriteSetIds,
    toggleFavoriteSet,
    favoriteGalleryIds,
    toggleFavoriteGallery,
    bookings,
    removeBooking
  } = useApp();

  const [activeTab, setActiveTab] = useState<'sets' | 'gallery' | 'bookings'>('sets');

  const savedSets = STUDIO_SETS.filter((s) => favoriteSetIds.includes(s.id));
  const savedGallery = GALLERY_ITEMS.filter((g) => favoriteGalleryIds.includes(g.id));

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Saved in Browser LocalStorage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            My Moodboard & Bookings
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            Review your shortlisted backdrops, bookmarked photo inspirations, and your submitted studio reservation vouchers.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('sets')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'sets'
                ? 'bg-amber-500 text-neutral-950 shadow-md font-bold'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Saved Backdrops ({savedSets.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'gallery'
                ? 'bg-amber-500 text-neutral-950 shadow-md font-bold'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Inspirations ({savedGallery.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'bookings'
                ? 'bg-amber-500 text-neutral-950 shadow-md font-bold'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>My Bookings ({bookings.length})</span>
          </button>
        </div>

        {/* Tab 1: Saved Backdrops */}
        {activeTab === 'sets' && (
          <div>
            {savedSets.length > 0 ? (
              <div className="space-y-8">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>You have shortlisted <strong>{savedSets.length}</strong> themed backdrops</span>
                  <Link
                    to="/booking"
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                  >
                    <span>Book with these sets</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {savedSets.map((s) => (
                    <SetCard key={s.id} set={s} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-20 bg-neutral-900/40 rounded-3xl border border-neutral-800 p-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-neutral-800 text-neutral-500 mx-auto flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">No backdrops saved yet</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                  Click the heart icon on any of our 50+ sets to build your personal moodboard.
                </p>
                <Link
                  to="/sets"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs inline-block"
                >
                  Explore Studio Sets
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Saved Gallery Inspirations */}
        {activeTab === 'gallery' && (
          <div>
            {savedGallery.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedGallery.map((g) => (
                  <div
                    key={g.id}
                    className="group rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 flex flex-col justify-between"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                      <img
                        src={g.imageUrl}
                        alt={g.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4 flex items-center justify-between text-xs">
                      <div>
                        <h4 className="font-bold text-white line-clamp-1">{g.title}</h4>
                        <p className="text-[11px] text-amber-400">Set: {g.setName}</p>
                      </div>
                      <button
                        onClick={() => toggleFavoriteGallery(g.id)}
                        className="p-1.5 rounded-lg text-red-400 hover:bg-neutral-800"
                        title="Remove from board"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-neutral-900/40 rounded-3xl border border-neutral-800 p-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-neutral-800 text-neutral-500 mx-auto flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">No gallery photos saved yet</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                  Browse our portfolio gallery and heart your favorite framing ideas.
                </p>
                <Link
                  to="/gallery"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs inline-block"
                >
                  Browse Portfolio
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: My Bookings */}
        {activeTab === 'bookings' && (
          <div>
            {bookings.length > 0 ? (
              <div className="space-y-6">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800/80 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                          {b.referenceCode}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {b.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-display text-white">
                        {b.shootType} · {b.packageName}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 pt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          <span>{b.preferredDate}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>{b.preferredSlot}</span>
                        </span>
                        <span>Client: <strong className="text-neutral-200">{b.clientName}</strong> ({b.phone})</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-neutral-800">
                      <div className="text-left md:text-right">
                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                          Total Estimate
                        </span>
                        <span className="text-xl font-bold text-amber-400 font-display">
                          ₹{b.estimatedTotal.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <button
                        onClick={() => removeBooking(b.id)}
                        className="p-2.5 rounded-xl bg-neutral-950 hover:bg-red-500/20 text-neutral-400 hover:text-red-400 border border-neutral-800 transition-colors"
                        title="Delete reservation entry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-neutral-900/40 rounded-3xl border border-neutral-800 p-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-neutral-800 text-neutral-500 mx-auto flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">No active bookings recorded</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                  When you reserve a shoot date, your voucher will appear here and persist across browser refreshes.
                </p>
                <Link
                  to="/booking"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs inline-block"
                >
                  Reserve Shoot Slot
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Compact Advertisement Placeholder near the bottom */}
      <AdPlaceholder
        slotName="Professional Cinematic Video Editor & Sound Design Studio Partner"
        format="compact"
      />
    </div>
  );
};
