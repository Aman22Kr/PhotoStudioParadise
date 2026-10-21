import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, Layers, Sparkles, X, Sun, Moon } from 'lucide-react';
import { STUDIO_SETS, SET_CATEGORIES } from '../data/setsData';
import { SetCard } from '../components/SetCard';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const SetsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Sets');
  const [selectedType, setSelectedType] = useState<string>('All Types');
  const [sortBy, setSortBy] = useState<'featured' | 'props' | 'name'>('featured');

  const filteredSets = useMemo(() => {
    return STUDIO_SETS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All Sets' && item.category !== selectedCategory) {
        return false;
      }

      // Type filter (Indoor AC vs Outdoor)
      if (selectedType !== 'All Types' && item.type !== selectedType) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesTagline = item.tagline.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesProps = item.featuredProps.some((p) => p.toLowerCase().includes(q));
        const matchesShoots = item.recommendedShoots.some((s) => s.toLowerCase().includes(q));

        if (!matchesName && !matchesTagline && !matchesDesc && !matchesCategory && !matchesProps && !matchesShoots) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'props') return b.featuredProps.length - a.featuredProps.length;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, selectedType, sortBy]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Sets');
    setSelectedType('All Types');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>50+ Bespoke Photography Backdrops</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Studio Sets & Themed Backdrops
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            Explore our diverse collection of architecturally crafted sets spread across 3 lush acres in Qutabgarh, Delhi. Filter by style, atmosphere, or shoot requirements.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-4 sm:p-6 mb-10 shadow-xl space-y-4">
          {/* Top Row: Search and Sort */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value) {
                    setSearchParams({ q: e.target.value });
                  } else {
                    setSearchParams({});
                  }
                }}
                placeholder="Search by theme, props, or keywords..."
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchParams({});
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end flex-wrap">
              {/* Type Switcher */}
              <div className="flex items-center bg-neutral-950 p-1 rounded-xl border border-neutral-800 text-xs">
                {['All Types', 'Indoor AC', 'Outdoor', 'Covered Semi-Outdoor'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                      selectedType === t
                        ? 'bg-neutral-800 text-amber-400 shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-neutral-950 border border-neutral-800 text-neutral-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="props">Sort by: Most Props</option>
                <option value="name">Sort by: Name (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Bottom Row: Category Pills */}
          <div className="pt-2 border-t border-neutral-800/80 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {SET_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                    : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter and Active Filter Tags */}
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-6 px-1">
          <span>
            Showing <strong className="text-white">{filteredSets.length}</strong> sets
            {selectedCategory !== 'All Sets' && ` in ${selectedCategory}`}
            {selectedType !== 'All Types' && ` (${selectedType})`}
          </span>

          {(searchQuery || selectedCategory !== 'All Sets' || selectedType !== 'All Types') && (
            <button
              onClick={handleClearFilters}
              className="text-amber-400 hover:text-amber-300 underline underline-offset-4 flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              Reset all filters
            </button>
          )}
        </div>

        {/* Sets Grid */}
        {filteredSets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSets.map((set) => (
              <SetCard key={set.id} set={set} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-900/40 rounded-2xl border border-neutral-800 p-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-neutral-800 text-neutral-500 mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No sets match your criteria</h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              Try adjusting your search terms or clearing the selected category filters to view all backdrops.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs hover:bg-amber-400 transition-colors"
            >
              Clear Search Filters
            </button>
          </div>
        )}
      </div>

      {/* Compact Advertisement Placeholder near the bottom */}
      <AdPlaceholder
        slotName="Lighting Equipment Rental Partner - Continuous & Strobe Flash Packages"
        format="compact"
      />
    </div>
  );
};
