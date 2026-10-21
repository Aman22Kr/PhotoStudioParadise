import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Calendar,
  ShieldCheck,
  Plus,
  Flame,
  Camera,
  Car,
  Wind,
  Clock
} from 'lucide-react';
import { PRICING_PACKAGES, STUDIO_ADDONS } from '../data/pricingData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const PricingPage: React.FC = () => {
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const getAddonIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-amber-400" />;
      case 'Car':
        return <Car className="w-5 h-5 text-amber-400" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-amber-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Honest & Transparent Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Studio Packages & Passes
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            All packages include access to our private air-conditioned makeup suites, 200+ authentic props, and campus amenities. No per-lens charges or hidden surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                pkg.isPopular
                  ? 'bg-neutral-900 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 lg:-translate-y-2'
                  : 'bg-neutral-900/60 border border-neutral-800'
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-neutral-950 uppercase tracking-wider shadow-md">
                  {pkg.badge}
                </span>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white font-display">{pkg.name}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-neutral-800 text-amber-300 font-mono font-semibold">
                    {pkg.durationHours} Hours
                  </span>
                </div>

                <p className="mt-2 text-xs text-neutral-400 font-medium">{pkg.suitableFor}</p>

                <div className="my-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-display">
                    {pkg.formattedPrice}
                  </span>
                  <span className="text-xs text-neutral-400 ml-2">/ complete shoot shift</span>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 mb-6 text-xs space-y-1">
                  <p className="text-amber-400 font-semibold">{pkg.setAccessCount}</p>
                  <p className="text-neutral-400">{pkg.makeupRooms} · {pkg.crewAllowed}</p>
                </div>

                <ul className="space-y-3 text-xs text-neutral-300">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-neutral-800">
                <Link
                  to={`/booking?package=${pkg.id}`}
                  className={`w-full py-3.5 rounded-xl text-center font-bold text-sm block transition-all shadow-md ${
                    pkg.isPopular
                      ? 'bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow-amber-500/20'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                  }`}
                >
                  Book {pkg.name} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Add-ons Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Enhance Your Production
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Optional Studio Add-ons & Gear Passes
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Customize your booking with special SFX, vehicles, drone clearances, and VIP amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDIO_ADDONS.map((addon) => {
              const isSelected = selectedAddonIds.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-500/10 border-amber-500 shadow-lg'
                      : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-neutral-950 flex items-center justify-center border border-neutral-800">
                        {getAddonIcon(addon.iconName)}
                      </div>
                      <span className="text-sm font-bold text-amber-400 font-display">
                        {addon.formattedPrice}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white">{addon.name}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{addon.description}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
                    <span className={isSelected ? 'text-amber-400 font-bold' : 'text-neutral-500'}>
                      {isSelected ? '✓ Selected in Configurator' : 'Click to preview add-on'}
                    </span>
                    <button
                      type="button"
                      className={`p-1.5 rounded-lg border text-xs ${
                        isSelected
                          ? 'bg-amber-500 text-neutral-950 border-amber-400'
                          : 'bg-neutral-800 text-neutral-300 border-neutral-700'
                      }`}
                    >
                      {isSelected ? 'Added' : '+ Add'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {selectedAddonIds.length > 0 && (
            <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-amber-300">
                You selected {selectedAddonIds.length} add-on(s). Apply them directly on the booking page!
              </span>
              <Link
                to={`/booking?addons=${selectedAddonIds.join(',')}`}
                className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs shrink-0"
              >
                Proceed to Booking &rarr;
              </Link>
            </div>
          )}
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Package Feature Comparison
            </h2>
            <p className="text-xs text-neutral-400">
              Clear breakdown of sets, crew limits, and dressing rooms across tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950/80">
                  <th className="p-4 sm:p-5 font-bold text-white">Feature / Specification</th>
                  <th className="p-4 sm:p-5 font-bold text-amber-300">Silver (4 Hrs)</th>
                  <th className="p-4 sm:p-5 font-bold text-amber-400">Gold (8 Hrs)</th>
                  <th className="p-4 sm:p-5 font-bold text-amber-500">Platinum (12 Hrs)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 text-neutral-300">
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Package Pricing</td>
                  <td className="p-4 sm:p-5 font-bold text-amber-300">₹15,000</td>
                  <td className="p-4 sm:p-5 font-bold text-amber-400">₹25,000</td>
                  <td className="p-4 sm:p-5 font-bold text-amber-500">₹38,000</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5">Themed Set Access</td>
                  <td className="p-4 sm:p-5">Choice of 15 Sets</td>
                  <td className="p-4 sm:p-5">35+ Sets (incl. Royal Palace)</td>
                  <td className="p-4 sm:p-5 font-semibold text-white">All 50+ Sets Campus-wide</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5">Air-Conditioned Green Rooms</td>
                  <td className="p-4 sm:p-5">1 AC Room</td>
                  <td className="p-4 sm:p-5">2 Dedicated AC Rooms</td>
                  <td className="p-4 sm:p-5">Master VIP Suite + 2 Green Rooms</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5">Costume / Wardrobe Changes</td>
                  <td className="p-4 sm:p-5">Up to 3 Looks</td>
                  <td className="p-4 sm:p-5">Unlimited Looks</td>
                  <td className="p-4 sm:p-5">Unlimited Looks</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5">Crew & Guest Allowance</td>
                  <td className="p-4 sm:p-5">Up to 6 Persons</td>
                  <td className="p-4 sm:p-5">Up to 10 Persons</td>
                  <td className="p-4 sm:p-5">Up to 15 Persons</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5">Night Fairy Lights & Lighting Setup</td>
                  <td className="p-4 sm:p-5 text-neutral-600">Available as add-on</td>
                  <td className="p-4 sm:p-5 text-emerald-400">Included</td>
                  <td className="p-4 sm:p-5 text-emerald-400">Included (Exclusive Slot)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5">Drone Flight Permission Pass</td>
                  <td className="p-4 sm:p-5 text-neutral-600">₹2,500 add-on</td>
                  <td className="p-4 sm:p-5 text-neutral-600">₹2,500 add-on</td>
                  <td className="p-4 sm:p-5 text-emerald-400">Included Complimentary</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5">Bonfire & Cold Pyro Clearance</td>
                  <td className="p-4 sm:p-5 text-neutral-600">₹3,500 add-on</td>
                  <td className="p-4 sm:p-5 text-neutral-600">₹3,500 add-on</td>
                  <td className="p-4 sm:p-5 text-emerald-400">Included Complimentary</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5">Paradise Cafe Voucher</td>
                  <td className="p-4 sm:p-5 text-neutral-600">—</td>
                  <td className="p-4 sm:p-5">₹1,000 Voucher</td>
                  <td className="p-4 sm:p-5">Complimentary Lunch & Refreshments</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Studio Policies & Terms Card */}
        <div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-base font-display">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span>Studio Booking Policy & Transparent Rules</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-400 leading-relaxed">
            <div>
              <strong className="text-white block mb-1">Slot Confirmation & Advance:</strong>
              50% advance token secures your selected date, time slot, and dressing suite. Balance is settled upon arrival at the studio desk.
            </div>
            <div>
              <strong className="text-white block mb-1">Weather Protection & Rain Guarantee:</strong>
              If sudden heavy rain interrupts outdoor shoots, we provide a free date reschedule or immediate migration to our indoor AC stages.
            </div>
            <div>
              <strong className="text-white block mb-1">Props & Studio Gear:</strong>
              All 200+ handheld props, chairs, and garden furniture are free to position. Please handle fragile heritage items with care.
            </div>
          </div>
        </div>
      </div>

      {/* Compact Advertisement Placeholder near the bottom */}
      <AdPlaceholder
        slotName="Pro Lens & Camera Gimbal Rental Partner (Same-Day Studio Dispatch)"
        format="compact"
      />
    </div>
  );
};
