import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  HelpCircle,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { SHOOT_SERVICES } from '../data/servicesData';
import { STUDIO_SETS } from '../data/setsData';
import { SetCard } from '../components/SetCard';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SHOOT_SERVICES.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <h2 className="text-2xl font-bold text-white">Shoot Service Not Found</h2>
        <p className="text-sm text-neutral-400">The requested shoot category does not exist.</p>
        <Link
          to="/services"
          className="px-6 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-sm"
        >
          Browse All Services
        </Link>
      </div>
    );
  }

  const recommendedSetsData = STUDIO_SETS.filter((s) =>
    service.recommendedSets.includes(s.id)
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="pb-6 border-b border-neutral-900 text-xs text-neutral-400 flex items-center gap-2">
          <Link to="/services" className="hover:text-amber-400 flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" />
            <span>All Services</span>
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-amber-400 font-medium">{service.title}</span>
        </div>

        {/* Hero Banner */}
        <div className="my-8 rounded-3xl overflow-hidden bg-neutral-900/60 border border-neutral-800 p-8 sm:p-12 relative">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-400">
              {service.tagline}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
              {service.title}
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              {service.subtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-neutral-800 text-amber-300 font-bold">
                From {service.startingPrice}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {service.recommendedDuration}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-300 flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                {service.outfitChanges}
              </span>
            </div>
          </div>
        </div>

        {/* Overview & Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
              <h2 className="text-xl font-bold font-display text-white">
                Shoot Overview & Experience
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {service.overview}
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-5">
              <h3 className="text-lg font-bold font-display text-white">
                Why Book PhotoStudioParadise for this Shoot?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whyChooseUs.map((w, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300">{w}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Bring */}
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
              <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <span>What to Prepare & Bring</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                {service.whatToBring.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frequently Asked Questions */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
                <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-400" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-4 divide-y divide-neutral-800/80">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="pt-3 first:pt-0 space-y-1">
                      <h4 className="text-xs sm:text-sm font-semibold text-white">
                        {faq.question}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Reservation Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-500/40 shadow-2xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Instant Reservation
                </span>
                <h3 className="text-xl font-bold font-display text-white mt-1">
                  Book {service.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-2">
                  Choose your shift duration, pick your backdrops, and get an instant confirmation code.
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-neutral-800 text-xs text-neutral-300">
                <div className="flex items-center justify-between">
                  <span>Starting Package:</span>
                  <span className="font-bold text-amber-400">{service.startingPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Recommended Pacing:</span>
                  <span>{service.recommendedDuration.split(' ')[0]} Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Green Room:</span>
                  <span>Private AC Room Included</span>
                </div>
              </div>

              <Link
                to={`/booking?shoot=${service.id}`}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Shoot Date</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Recommended Sets for this Shoot Type */}
        {recommendedSetsData.length > 0 && (
          <div className="pt-12 mt-12 border-t border-neutral-900 space-y-8">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Curated Architecture
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Best Sets For {service.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedSetsData.map((set) => (
                <SetCard key={set.id} set={set} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Compact Advertisement Placeholder near the bottom */}
      <AdPlaceholder
        slotName="Cine Drone Pilot & Aerial Permission Concierge (PhotoStudioParadise)"
        format="compact"
      />
    </div>
  );
};
