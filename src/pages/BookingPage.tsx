import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  User,
  Phone,
  Mail,
  Printer,
  Copy,
  ArrowRight,
  Layers
} from 'lucide-react';
import { PRICING_PACKAGES, STUDIO_ADDONS, PricingPackage } from '../data/pricingData';
import { STUDIO_SETS } from '../data/setsData';
import { SHOOT_SERVICES } from '../data/servicesData';
import { useApp, BookingRecord } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const packageParam = searchParams.get('package');
  const setParam = searchParams.get('set');
  const shootParam = searchParams.get('shoot');
  const addonsParam = searchParams.get('addons');

  const { addBooking, showToast } = useApp();

  // Form State
  const [selectedShoot, setSelectedShoot] = useState<string>(
    shootParam ? SHOOT_SERVICES.find(s => s.id === shootParam)?.title || 'Pre-Wedding & Engagement Shoots' : 'Pre-Wedding & Engagement Shoots'
  );

  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    packageParam || 'gold-full-day'
  );

  const [preferredDate, setPreferredDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 5);
    return d.toISOString().split('T')[0];
  });

  const [preferredSlot, setPreferredSlot] = useState<string>('Afternoon Golden Hour (12:00 PM - 8:00 PM)');
  const [guestCount, setGuestCount] = useState<number>(6);
  const [selectedSetIds, setSelectedSetIds] = useState<string[]>(
    setParam ? [setParam] : ['royal-heritage-palace', 'santorini-greece-alley']
  );

  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(() => {
    if (addonsParam) {
      return addonsParam.split(',').filter(Boolean);
    }
    return [];
  });

  // Client Details
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Confirmation modal state
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);

  const currentPackage = PRICING_PACKAGES.find(p => p.id === selectedPackageId) || PRICING_PACKAGES[1];

  // Calculate live total
  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const add = STUDIO_ADDONS.find(a => a.id === id);
    return sum + (add ? add.price : 0);
  }, 0);

  const estimatedTotal = currentPackage.price + addonsTotal;

  const toggleSet = (id: string) => {
    setSelectedSetIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleAddon = (id: string) => {
    setSelectedAddonIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName.trim() || !phone.trim() || !email.trim()) {
      showToast('Please fill in your name, phone number, and email.');
      return;
    }

    const booking = addBooking({
      clientName: clientName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      shootType: selectedShoot,
      packageId: currentPackage.id,
      packageName: currentPackage.name,
      preferredDate,
      preferredSlot,
      guestCount,
      selectedSets: selectedSetIds,
      selectedAddons: selectedAddonIds,
      estimatedTotal,
      notes: notes.trim()
    });

    setConfirmedBooking(booking);
  };

  const copyRefCode = () => {
    if (confirmedBooking && navigator.clipboard) {
      navigator.clipboard.writeText(confirmedBooking.referenceCode);
      showToast('Booking reference copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Instant Slot Reservation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Book Your Studio Photoshoot Slot
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            Reserve your preferred date and backdrops with transparent pricing. Your confirmation reference is generated instantly and saved to your device.
          </p>
        </div>

        {/* Confirmation Modal Receipt */}
        {confirmedBooking && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
            <div className="bg-neutral-900 border border-amber-500/60 rounded-3xl p-6 sm:p-10 max-w-2xl w-full shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-amber-500 text-neutral-950 mx-auto flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Reservation Voucher Generated
                </span>
                <h2 className="text-2xl font-bold font-display text-white">
                  Thank You, {confirmedBooking.clientName}!
                </h2>
                <p className="text-xs text-neutral-400">
                  Your reservation slot at PhotoStudioParadise has been logged in browser storage.
                </p>
              </div>

              {/* Reference Box */}
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                    Booking Reference Code
                  </span>
                  <span className="text-xl font-bold font-mono text-amber-400">
                    {confirmedBooking.referenceCode}
                  </span>
                </div>
                <button
                  onClick={copyRefCode}
                  className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 flex items-center gap-1.5 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </button>
              </div>

              {/* Summary Details */}
              <div className="space-y-2.5 text-xs text-neutral-300 border-y border-neutral-800 py-4">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Shoot Milestone:</span>
                  <span className="font-semibold text-white">{confirmedBooking.shootType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Selected Package:</span>
                  <span className="font-semibold text-amber-400">{confirmedBooking.packageName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Date & Slot:</span>
                  <span className="font-semibold text-white">{confirmedBooking.preferredDate} ({confirmedBooking.preferredSlot})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Studio Location:</span>
                  <span className="font-semibold text-white">Plot 308, Qutabgarh, Delhi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Total Estimated Rate:</span>
                  <span className="font-bold text-amber-400 text-sm">
                    ₹{confirmedBooking.estimatedTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-neutral-300 space-y-1">
                <p className="font-semibold text-amber-300">Studio Check-in Instructions:</p>
                <p>• Please arrive 30 minutes prior to your slot to complete green room allotment and outfit steaming.</p>
                <p>• Show this reference code at the main studio reception desk on your shoot day.</p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="flex-1 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt</span>
                </button>

                <Link
                  to="/saved"
                  onClick={() => setConfirmedBooking(null)}
                  className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>View in My Bookings</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Booking Form Layout */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configuration Options */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Shoot Category */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">1</span>
                <span>Select Photography Milestone</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">What type of photoshoot are you planning?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {SHOOT_SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedShoot(s.title)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      selectedShoot === s.title
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                        : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <p className="text-xs font-bold">{s.title}</p>
                    <p className="text-[11px] text-neutral-500 mt-1">{s.tagline}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Package Tier */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">2</span>
                <span>Select Package Tier & Duration</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">How long will your shoot take?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {PRICING_PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      selectedPackageId === pkg.id
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg'
                        : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white">{pkg.name}</span>
                        {pkg.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500 text-neutral-950 font-bold uppercase">
                            {pkg.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-2xl font-extrabold text-amber-400 font-display">
                        {pkg.formattedPrice}
                      </span>
                      <p className="text-[11px] text-neutral-500 mt-2">{pkg.durationLabel}</p>
                      <p className="text-[11px] text-neutral-400 mt-1">{pkg.setAccessCount}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[10px] text-neutral-500">
                      {pkg.makeupRooms}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Date & Slot */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">3</span>
                <span>Preferred Shoot Date & Time Slot</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-2">
                    Shoot Date
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-2">
                    Shift Timing Slot
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Morning Sunrise (6:00 AM - 2:00 PM)">Morning Sunrise (6:00 AM - 2:00 PM)</option>
                    <option value="Afternoon Golden Hour (12:00 PM - 8:00 PM)">Afternoon Golden Hour (12:00 PM - 8:00 PM)</option>
                    <option value="Full Day Cinematic (6:00 AM - 6:00 PM)">Full Day Shift (6:00 AM - 6:00 PM)</option>
                    <option value="Evening Twilight & Night (2:00 PM - 10:00 PM)">Evening Twilight & Night (2:00 PM - 10:00 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Backdrop Set Selection */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">4</span>
                  <span>Select Desired Sets (Optional Wishlist)</span>
                </div>
                <span className="text-xs text-neutral-400">
                  {selectedSetIds.length} selected
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                You can prioritize which backdrops our assistants should prep with lighting and props before your arrival.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {STUDIO_SETS.map((s) => {
                  const isChecked = selectedSetIds.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleSet(s.id)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs flex items-center justify-between ${
                        isChecked
                          ? 'bg-amber-500/15 border-amber-500 text-amber-300 font-semibold'
                          : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <span className="truncate pr-2">{s.name}</span>
                      <span className="shrink-0 text-xs">{isChecked ? '✓' : '+'}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Optional Studio Add-ons */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">5</span>
                <span>Select Add-ons & Equipment Passes</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {STUDIO_ADDONS.map((add) => {
                  const isChecked = selectedAddonIds.includes(add.id);
                  return (
                    <button
                      key={add.id}
                      type="button"
                      onClick={() => toggleAddon(add.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-amber-500/10 border-amber-500 text-white'
                          : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <div className="pr-3">
                        <span className="text-xs font-semibold block text-white">{add.name}</span>
                        <span className="text-[10px] text-neutral-400">{add.formattedPrice}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded font-bold ${isChecked ? 'bg-amber-500 text-neutral-950' : 'bg-neutral-800 text-neutral-400'}`}>
                        {isChecked ? 'Added' : '+ Add'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 6: Client Information */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">6</span>
                <span>Client & Point of Contact Details</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 9876543210"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rahul@gmail.com"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Special Notes or Props Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Need special electrical hookup, bringing 2 vintage gowns, bringing baby stroller..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Live Price & Sticky Checkout Bar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-amber-500/50 shadow-2xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Order Summary
                </span>
                <h3 className="text-xl font-bold font-display text-white mt-1">
                  Live Quote Calculator
                </h3>
              </div>

              <div className="space-y-3 text-xs text-neutral-300 border-t border-neutral-800 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">{currentPackage.name} ({currentPackage.durationLabel}):</span>
                  <span className="font-semibold text-white">{currentPackage.formattedPrice}</span>
                </div>

                {selectedAddonIds.map((aid) => {
                  const ad = STUDIO_ADDONS.find(a => a.id === aid);
                  if (!ad) return null;
                  return (
                    <div key={aid} className="flex justify-between items-center text-[11px] text-neutral-400">
                      <span>+ {ad.name}:</span>
                      <span className="text-amber-300">{ad.formattedPrice}</span>
                    </div>
                  );
                })}

                <div className="pt-3 border-t border-neutral-800 flex justify-between items-baseline">
                  <span className="font-bold text-sm text-white">Estimated Total:</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-amber-400 font-display">
                      ₹{estimatedTotal.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-neutral-500 block">Taxes included</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 text-[11px] text-neutral-400 space-y-1">
                <p className="flex items-center gap-1.5 text-neutral-300 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No upfront payment required today</span>
                </p>
                <p>
                  Submit your details to generate your reservation code. Settle advance with studio desk via UPI / Card.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all transform active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Studio Reservation</span>
              </button>

              <div className="text-center">
                <span className="text-[11px] text-neutral-500">
                  Assistance: Call +91 9899200017 (6 AM - 10 PM)
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Compact Advertisement Placeholder near the bottom */}
      <AdPlaceholder
        slotName="Pre-Wedding Wardrobe & Designer Gown Rental Concierge (Delhi NCR)"
        format="compact"
      />
    </div>
  );
};
