import React, { useState, useMemo } from 'react';
import { Sparkles, Heart, Eye, Filter, Tag, Search, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { useApp } from '../context/AppContext';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const GalleryPage: React.FC = () => {
  const { isGalleryFavorite, toggleFavoriteGallery } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Pre-Wedding',
    'Maternity',
    'Fashion',
    'Baby',
    'Anniversary',
    'Sets & Architecture'
  ];

  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      if (activeCategory !== 'All' && item.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSet = item.setName.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSet && !matchesTags) return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const activeIndex = selectedItem
    ? filteredItems.findIndex((it) => it.id === selectedItem.id)
    : -1;

  const handleNext = () => {
    if (activeIndex >= 0 && activeIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[activeIndex + 1]);
    } else {
      setSelectedItem(filteredItems[0]);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setSelectedItem(filteredItems[activeIndex - 1]);
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Captured at PhotoStudioParadise Campus</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Portfolio & Inspiration Gallery
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            Browse real photographs shot by leading Delhi NCR wedding photographers, stylists, and filmmakers. Click any photo to inspect set details or save to your moodboard.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-4 sm:p-5 mb-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                    : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tag (e.g. Royal, Pastel, Neon)..."
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isFav = isGalleryFavorite(item.id);
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/80 hover:border-amber-500/50 shadow-md transition-all duration-300"
              >
                <div
                  className="aspect-[4/3] w-full overflow-hidden bg-neutral-950 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {item.category}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-white font-display line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-amber-400">Set: {item.setName}</p>
                  </div>
                </div>

                {/* Always-visible Bottom Bar */}
                <div className="p-3.5 bg-neutral-900 flex items-center justify-between text-xs border-t border-neutral-800">
                  <div className="flex items-center gap-1.5 truncate max-w-[200px]">
                    <span className="text-neutral-300 font-medium truncate">{item.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavoriteGallery(item.id);
                      }}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isFav
                          ? 'bg-red-500/20 text-red-400 border-red-500/40'
                          : 'bg-neutral-800 text-neutral-400 hover:text-white border-neutral-700'
                      }`}
                      title={isFav ? 'Remove from moodboard' : 'Save to moodboard'}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>

                    <button
                      onClick={() => setSelectedItem(item)}
                      className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700"
                      title="Inspect photo full-screen"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-neutral-900/40 rounded-2xl border border-neutral-800 p-8 space-y-3">
            <h3 className="text-base font-bold text-white">No photos matched your filter</h3>
            <p className="text-xs text-neutral-400">Try choosing a different category or search query.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <GalleryLightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}

      {/* Compact Advertisement Placeholder near the bottom */}
      <AdPlaceholder
        slotName="Professional Colour Grading & Album Printing Studio Partner"
        format="compact"
      />
    </div>
  );
};
