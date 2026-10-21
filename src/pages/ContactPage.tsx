import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  Car,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [shootType, setShootType] = useState('Pre-Wedding & Engagement');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      showToast('Please fill all required fields');
      return;
    }

    setIsSubmitted(true);
    showToast('Inquiry message received! Our team will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 fill-current" />
            <span>Studio Directions & Concierge</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Contact & Studio Location
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Located in the serene, unpolluted green expanses of Qutabgarh, Delhi. Reach out to schedule a preliminary recce walk or discuss custom commercial production shifts.
          </p>
        </div>

        {/* Studio Info & Quick Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Studio Address</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Plot Number 308, Nearest Main Bus Stand, Village Qutabgarh, Delhi - 110039
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Direct Phone Lines</h3>
            <p className="text-xs text-neutral-400 flex flex-col gap-1">
              <a href="tel:+919899200017" className="hover:text-amber-400">+91 9899200017 (Primary)</a>
              <a href="tel:+919999954054" className="hover:text-amber-400">+91 9999954054 (Reception)</a>
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Email Address</h3>
            <p className="text-xs text-neutral-400">
              <a href="mailto:2016.photoparadise@gmail.com" className="hover:text-amber-400 break-all">
                2016.photoparadise@gmail.com
              </a>
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Operating Hours</h3>
            <p className="text-xs text-neutral-400">
              6:00 AM – 10:00 PM <br />
              Open All 7 Days a Week
            </p>
          </div>
        </div>

        {/* Main Content: Map & Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Interactive Map & Route Assistance */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-neutral-800 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Campus Map & Driving Guide
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Easy connectivity via NH-10 (Rohtak Road) or Kanjhawala Road.
                  </p>
                </div>
                <Navigation className="w-6 h-6 text-amber-400" />
              </div>

              {/* Styled Map Graphic Card */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center text-center p-6 shadow-inner">
                {/* Visual Map Pin Canvas */}
                <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 mx-auto flex items-center justify-center animate-bounce">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      PhotoStudioParadise Campus
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Plot 308, Village Qutabgarh, Delhi-110039
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Photo+Paradise+Qutabgarh+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs shadow-md transition-all"
                  >
                    <span>Open in Google Maps</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Travel Times from NCR Hubs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  Approximate Driving Durations
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                    <span className="text-amber-400 font-bold block">Rohini / Pitampura</span>
                    <span className="text-[11px] text-neutral-400">25 - 35 mins</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                    <span className="text-amber-400 font-bold block">West Delhi / Janakpuri</span>
                    <span className="text-[11px] text-neutral-400">35 - 45 mins</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                    <span className="text-amber-400 font-bold block">Central Delhi (CP)</span>
                    <span className="text-[11px] text-neutral-400">50 - 60 mins</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                    <span className="text-amber-400 font-bold block">Gurugram / IGI</span>
                    <span className="text-[11px] text-neutral-400">55 - 65 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Studio Inquiry Form
                </span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Need a custom quote, technical recce walkthrough, or music video shift? Drop us your details.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">Inquiry Received</h4>
                  <p className="text-xs text-neutral-300">
                    Thank you, {name}! Our studio manager will call you at {phone} within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 text-xs text-amber-400 underline underline-offset-4"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-neutral-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-neutral-300 mb-1.5">
                        Phone (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 9876543210"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-neutral-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@email.com"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-300 mb-1.5">
                      Shoot Interest
                    </label>
                    <select
                      value={shootType}
                      onChange={(e) => setShootType(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Pre-Wedding & Engagement">Pre-Wedding & Engagement</option>
                      <option value="Maternity & Baby">Maternity & Baby Milestone</option>
                      <option value="Fashion Lookbook / Model Portfolio">Fashion Lookbook / Model Portfolio</option>
                      <option value="Anniversary & Family">25th Anniversary / Family Reunion</option>
                      <option value="Music Video / Commercial Ad">Music Video / Commercial Production</option>
                      <option value="Studio Recce / General Visit">Studio Recce / General Visit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-300 mb-1.5">
                      Tell us about your shoot requirements *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Expected date, number of outfits, specific sets you like..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Studio</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Compact Advertisement Placeholder near the bottom */}
      <AdPlaceholder
        slotName="Professional Drone & Aerial Cinematography Partner (PhotoStudioParadise)"
        format="compact"
      />
    </div>
  );
};
