"use client";

import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900">
      <div className="flex items-center justify-center w-full h-full">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 border-4 border-transparent border-t-blue-500 border-r-blue-300 rounded-full animate-spin">
          </div>
          
          {/* Inner ring - subtle accent */}
          <div className="absolute top-1/2 left-1/2 w-12 h-12 border-2 border-transparent border-b-white border-l-white rounded-full animate-spin -translate-x-1/2 -translate-y-1/2">
          </div>
          
      
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;