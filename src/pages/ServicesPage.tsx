import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, Clock, Calendar, ShieldCheck } from 'lucide-react';
import { SHOOT_SERVICES } from '../data/servicesData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Curated Photography Experiences</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Shoot Services & Packages
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            Every photography genre requires unique pacing, lighting, and amenities. Explore how PhotoStudioParadise caters to pre-wedding couples, expecting mothers, models, and families.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {SHOOT_SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className={`rounded-3xl bg-neutral-900/60 border border-neutral-800/80 p-6 sm:p-10 flex flex-col ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-8 items-center hover:border-amber-500/40 transition-all shadow-xl`}
            >
              {/* Media Preview */}
              <div className="w-full lg:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 relative group">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-neutral-950 font-bold">
                    Starts at {srv.startingPrice}
                  </span>
                  <span className="bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg text-neutral-300 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {srv.recommendedDuration.split(' ')[0]} Hours
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    {srv.tagline}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                    {srv.title}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {srv.overview}
                </p>

                {/* Features Highlights */}
                <div className="space-y-2 pt-1">
                  {srv.whyChooseUs.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Links */}
                <div className="pt-4 flex items-center gap-4 flex-wrap">
                  <Link
                    to={`/services/${srv.id}`}
                    className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-amber-300 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Shoot Details & Sets</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to={`/booking?shoot=${srv.id}`}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors shadow-md shadow-amber-500/20"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book For {srv.title.split(' ')[0]}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compact Advertisement Placeholder near the bottom */}
      <AdPlaceholder
        slotName="Professional Bridal MUA & Hair Styling Concierge (Verified Partners)"
        format="compact"
      />
    </div>
  );
};
