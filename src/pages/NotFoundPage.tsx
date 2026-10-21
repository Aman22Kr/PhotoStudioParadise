import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Home, Layers, Calendar, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-neutral-950 text-neutral-100 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center shadow-xl">
          <Camera className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold font-mono text-amber-400">404</span>
          <h1 className="text-2xl font-bold font-display text-white">Backdrop Set Not Found</h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            The studio page or resource you are looking for has been moved or does not exist. Explore our accessible studio pages below.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/sets"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Layers className="w-4 h-4" />
            <span>Browse 50+ Sets</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
