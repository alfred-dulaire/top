import React from 'react';

export function Hero() {
  return (
    <div id="hero" className="gradient-section min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white text-shadow">
            <span>This unique crypto investment </span>
            <span className="text-emerald-300">OPPORTUNITY</span>
            <br />
            <span className="text-4xl md:text-6xl">is brought to you</span>
          </h1>
          
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl text-white text-shadow opacity-90">
              (and to the other top 100 VCs and fund managers in the world)
            </p>
            
            <p className="text-3xl md:text-5xl font-bold">
              <span className="text-white">by</span>
            </p>
            
            <p className="text-3xl md:text-5xl font-bold">
              <span className="text-emerald-300">The community members</span>
              <span className="text-white"> of RADIX DLT</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}