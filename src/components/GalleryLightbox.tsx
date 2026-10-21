import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Tag, MapPin, Share2 } from 'lucide-react';
import { GalleryItem } from '../data/galleryData';
import { useApp } from '../context/AppContext';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  onClose,
  onNext,
  onPrev
}) => {
  const { isGalleryFavorite, toggleFavoriteGallery, showToast } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  const isFav = isGalleryFavorite(item.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copied to clipboard!');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="w-full max-w-6xl flex items-center justify-between text-white pb-3 border-b border-neutral-800">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            {item.category}
          </span>
          <h3 className="text-sm sm:text-base font-bold font-display line-clamp-1">
            {item.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleFavoriteGallery(item.id)}
            className={`p-2 rounded-full border transition-all ${
              isFav
                ? 'bg-red-500/20 text-red-400 border-red-500/50'
                : 'bg-neutral-900 text-neutral-300 border-neutral-700 hover:text-white'
            }`}
            title="Save to moodboard"
          >
            <Heart className={`w-5 h-5 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-700 hover:text-white transition-all"
            title="Share inspiration"
          >
            <Share2 className="w-5 h-5" />
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-700 hover:text-white hover:bg-neutral-800 transition-all ml-2"
            title="Close viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-3 overflow-hidden">
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all transform hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all select-none"
        />

        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all transform hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Information Footer */}
      <div className="w-full max-w-6xl pt-3 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-3">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5 text-neutral-200 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Set: {item.setName} ({item.location})
          </span>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <div className="flex items-center gap-1.5 flex-wrap">
            <Tag className="w-3.5 h-3.5 text-neutral-500" />
            {item.tags.map((t, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">
                #{t}
              </span>
            ))}
          </div>
        </div>

        <span className="text-[11px] text-neutral-500 font-mono">
          Shot at PhotoStudioParadise Campus, Qutabgarh
        </span>
      </div>
    </div>
  );
};
