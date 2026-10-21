import React from 'react';
import { Play, Volume2, Maximize2 } from 'lucide-react';

interface YouTubePlaceholderProps {
  title?: string;
  duration?: string;
  caption?: string;
  aspectRatio?: '16:9' | '4:3' | '21:9';
  className?: string;
}

export const YouTubePlaceholder: React.FC<YouTubePlaceholderProps> = ({
  title = 'PhotoStudioParadise Official Walkthrough & Cinematic Pre-Wedding Highlights',
  duration = '04:18',
  caption = 'Studio Overview Video Reel (Blank Video Player Placeholder)',
  aspectRatio = '16:9',
  className = ''
}) => {
  const aspectClass = aspectRatio === '16:9' ? 'aspect-video' : aspectRatio === '21:9' ? 'aspect-[21/9]' : 'aspect-[4/3]';

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* 16:9 Video Canvas Frame */}
      <div
        className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl flex flex-col justify-between`}
        aria-label={title}
      >
        {/* Top Video Header Bar */}
        <div className="absolute top-0 inset-x-0 z-10 p-4 sm:p-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-600/90 flex items-center justify-center text-white shadow-lg font-bold text-xs">
              ▶
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate max-w-xs sm:max-w-md">
                {title}
              </h4>
              <p className="text-[10px] text-neutral-300">PhotoStudioParadise Official Channel</p>
            </div>
          </div>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-black/60 text-neutral-300 border border-white/10">
            HD 1080p
          </span>
        </div>

        {/* Blank Central Player Stage */}
        <div className="relative flex-1 flex flex-col items-center justify-center p-6 text-center z-0 bg-neutral-900/60">
          {/* Subtle grid backdrop for blank player aesthetic */}
          <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

          {/* Central Play Button */}
          <div className="relative group cursor-pointer my-auto flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 transform group-hover:scale-105 border-2 border-white/20">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
            </div>
            <span className="mt-3 text-xs sm:text-sm font-medium text-neutral-300 tracking-wide">
              Click to preview film highlights
            </span>
          </div>

          <div className="z-10 mt-auto pb-1 text-center">
            <p className="text-[11px] text-neutral-300 italic">{caption}</p>
          </div>
        </div>

        {/* Bottom Playback Scrubber Bar */}
        <div className="relative z-10 px-4 py-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <Play className="w-4 h-4 text-white fill-white cursor-pointer" />
            <Volume2 className="w-4 h-4 text-neutral-300 hover:text-white cursor-pointer" />
            <span className="text-[11px] font-mono text-neutral-300">
              0:00 / {duration}
            </span>
          </div>

          {/* Progress bar placeholder */}
          <div className="flex-1 mx-4 h-1 bg-white/20 rounded-full overflow-hidden relative">
            <div className="w-1/3 h-full bg-red-600 rounded-full" />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold text-neutral-400">1080p60</span>
            <Maximize2 className="w-4 h-4 text-neutral-300 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
