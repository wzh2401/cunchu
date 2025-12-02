import React from 'react';

interface AuroraCapacityProps {
  percentage: number;
  used: string;
  total: string;
}

const AuroraCapacity: React.FC<AuroraCapacityProps> = ({ percentage, used, total }) => {
  return (
    <div className="relative flex flex-col items-center justify-center py-10 overflow-hidden rounded-2xl bg-surface-dark border border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none animate-pulse-slow"></div>
      
      {/* The Face Visual */}
      <div className="relative w-64 h-64 animate-float mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-300 via-blue-600 to-blue-900 opacity-90 shadow-2xl shadow-blue-500/20"></div>
        {/* Mask to create the horizon line effect */}
        <div className="absolute inset-0 rounded-full bg-surface-dark/40 backdrop-blur-[2px]" style={{ clipPath: 'inset(45% 0 0 0)' }}></div>
        
        {/* Face Features */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <svg className="w-24 h-24 text-white drop-shadow-lg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" fill="none" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              {/* Eyes */}
              <line x1="40" x2="60" y1="60" y2="60" />
              <circle cx="50" cy="80" r="10" />
              
              <line x1="140" x2="160" y1="60" y2="60" />
              <circle cx="150" cy="80" r="10" />
              
              {/* Nose/Mouth area */}
              <path d="M100 120 L100 130" strokeWidth="4" />
              <circle cx="100" cy="145" r="8" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>

      <div className="text-center z-10 space-y-2">
        <h2 className="text-2xl font-bold text-white tracking-wide">存储容量</h2>
        <div className="flex items-baseline justify-center">
          <span className="text-6xl font-light text-primary tracking-tighter">{percentage}</span>
          <span className="text-4xl font-light text-primary">%</span>
        </div>
        <p className="text-white/50 text-sm mt-2">已用 {used} / 总计 {total}</p>
      </div>
    </div>
  );
};

export default AuroraCapacity;