import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Search,
  ChevronDown,
  Sparkles,
  Phone,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { FAQS_DATA } from '../data/faqsData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-1', 'faq-4']);

  const categories = [
    'All',
    'Booking & Timing',
    'Sets & Facilities',
    'Equipment & Props',
    'Food & Cafe',
    'Policies & Rescheduling'
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((item) => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQ = item.question.toLowerCase().includes(q);
        const matchesA = item.answer.toLowerCase().includes(q);
        if (!matchesQ && !matchesA) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 fill-current" />
            <span>Studio Guidelines & Common Queries</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            Everything you need to know about booking, air-conditioned green rooms, prop usage, rain guarantees, and shoot guidelines at PhotoStudioParadise.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-10">
          <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. rain, photographer, drones, pets, props)..."
            className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl pl-12 pr-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 shadow-xl"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-neutral-900/70 border border-neutral-800/80 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-neutral-900 transition-colors"
                >
                  <div className="space-y-1 pr-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-neutral-800/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16 bg-neutral-900/40 rounded-2xl border border-neutral-800 p-8 space-y-3">
              <p className="text-sm text-neutral-300">No matching questions found.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs text-amber-400 underline underline-offset-4"
              >
                Clear FAQ search
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-16 p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-display text-white">Still have a specific query?</h3>
            <p className="text-xs text-neutral-400">
              Our studio managers are available every day from 6:00 AM to 10:00 PM to help you plan.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919899200017"
              className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call +91 9899200017</span>
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs"
            >
              Send Message &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Compact Advertisement Placeholder near the bottom */}
      <AdPlaceholder
        slotName="Photography Workshop & Masterclass Events (Delhi NCR)"
        format="compact"
      />
    </div>
  );
};
