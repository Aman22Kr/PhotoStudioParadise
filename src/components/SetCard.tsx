import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, Sun, Shield, Layers } from 'lucide-react';
import { StudioSet } from '../data/setsData';
import { useApp } from '../context/AppContext';

interface SetCardProps {
  set: StudioSet;
}

export const SetCard: React.FC<SetCardProps> = ({ set }) => {
  const { isSetFavorite, toggleFavoriteSet } = useApp();
  const isFav = isSetFavorite(set.id);

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-neutral-900/80 border border-neutral-800/80 hover:border-amber-500/50 shadow-md hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col h-full">
      {/* Image Preview Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
        <img
          src={set.image}
          alt={set.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback if network drops
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1599818817282-e30090f4e3c9?auto=format&fit=crop&w=800&q=80';
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/30">
              {set.category}
            </span>
            {set.isPopular && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500 text-neutral-950 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 fill-current" />
                Popular
              </span>
            )}
            {set.isNew && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500 text-neutral-950">
                New
              </span>
            )}
          </div>

          {/* Favorite Toggle Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavoriteSet(set.id);
            }}
            className={`pointer-events-auto p-2 rounded-full backdrop-blur-md transition-all ${
              isFav
                ? 'bg-red-500/20 text-red-400 border border-red-500/40 shadow-sm'
                : 'bg-black/50 text-neutral-300 hover:text-white hover:bg-black/80'
            }`}
            title={isFav ? 'Remove from favorites' : 'Save to favorites'}
            aria-label="Save set"
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>

        {/* Bottom Image Overlay Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-neutral-300 pointer-events-none">
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/10 font-medium">
            <Layers className="w-3 h-3 text-amber-400" />
            {set.type}
          </span>
          <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/10">
            {set.featuredProps.length}+ Props Included
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link to={`/sets/${set.id}`} className="group-hover:text-amber-400 transition-colors">
            <h3 className="text-lg font-bold text-white font-display line-clamp-1">
              {set.name}
            </h3>
          </Link>
          <p className="mt-1 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            {set.tagline}
          </p>
        </div>

        {/* Props Preview Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {set.featuredProps.slice(0, 3).map((prop, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700/50"
            >
              {prop}
            </span>
          ))}
          {set.featuredProps.length > 3 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800/60 text-neutral-400">
              +{set.featuredProps.length - 3} more
            </span>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
          <span className="text-[11px] text-neutral-400 flex items-center gap-1">
            <Sun className="w-3 h-3 text-amber-400" />
            <span className="truncate max-w-[140px]">{set.popularTime}</span>
          </span>

          <Link
            to={`/sets/${set.id}`}
            className="inline-flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Explore Set</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
