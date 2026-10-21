import React from 'react';

interface AdPlaceholderProps {
  slotName?: string;
  format?: 'banner' | 'compact' | 'leaderboard';
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  slotName = 'Sponsored Photography & Equipment Partner',
  format = 'compact',
  className = ''
}) => {
  return (
    <aside
      aria-label="Advertisement Section"
      className={`w-full max-w-6xl mx-auto my-10 px-4 ${className}`}
    >
      <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-neutral-800 text-neutral-400 border border-neutral-700/60">
              Ad
            </span>
            <div className="text-left">
              <p className="text-xs font-medium text-neutral-300">
                {slotName}
              </p>
              <p className="text-[11px] text-neutral-400">
                Premium Cine Lenses, Lighting Kits & Drone Rentals available for PhotoStudioParadise productions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest hidden md:inline">
              728 x 90 Responsive Slot
            </span>
            <span
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-amber-300 border border-neutral-700 transition-colors"
            >
              Partner Directory &rarr;
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
