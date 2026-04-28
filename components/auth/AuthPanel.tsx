'use client';

import { useState } from 'react';

interface AuthPanelProps {
  title: string;
  description: string;
  imagePosition: 'login' | 'signup';
  className?: string;
}

export function AuthPanel({ title, description, imagePosition, className = '' }: AuthPanelProps) {
  const [activeSlide] = useState(0);

  return (
    <aside
      className={`bg-[#111827] flex flex-col items-center justify-center relative overflow-hidden p-10 md:p-11 ${
        imagePosition === 'login'
          ? 'rounded-r-[26px]'
          : 'rounded-l-[26px]'
      } ${className}`}
      aria-label="Feature illustration"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.022) 30px, rgba(255,255,255,0.022) 31px),
            repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.022) 30px, rgba(255,255,255,0.022) 31px)
          `,
        }}
        aria-hidden="true"
      />

      {/* Hex shapes */}
      <div
        className="absolute border pointer-events-none"
        style={{
          borderColor: 'rgba(255,255,255,0.06)',
          width: imagePosition === 'login' ? '200px' : '200px',
          height: imagePosition === 'login' ? '200px' : '200px',
          borderRadius: '30px',
          transform: imagePosition === 'login' ? 'rotate(15deg)' : 'rotate(-15deg)',
          top: imagePosition === 'login' ? '-40px' : 'auto',
          right: imagePosition === 'login' ? '-40px' : 'auto',
          bottom: imagePosition === 'login' ? 'auto' : '-40px',
          left: imagePosition === 'login' ? 'auto' : '-40px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute border pointer-events-none"
        style={{
          borderColor: 'rgba(255,255,255,0.04)',
          width: '120px',
          height: '120px',
          borderRadius: '20px',
          transform: imagePosition === 'login' ? 'rotate(15deg)' : 'rotate(-15deg)',
          top: imagePosition === 'login' ? '10px' : 'auto',
          right: imagePosition === 'login' ? '10px' : 'auto',
          bottom: imagePosition === 'login' ? 'auto' : '10px',
          left: imagePosition === 'login' ? 'auto' : '10px',
        }}
        aria-hidden="true"
      />

      {/* Glow effect */}
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(20,184,166,0.10) 0%, rgba(59,130,196,0.06) 50%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -58%)',
        }}
        aria-hidden="true"
      />

      {/* Floating accents */}
      <div
        className="absolute w-8 h-8 rounded animate-float"
        style={{
          background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
          transform: imagePosition === 'login' ? 'rotate(12deg)' : 'rotate(-12deg)',
          top: imagePosition === 'login' ? '52px' : '56px',
          left: imagePosition === 'login' ? '46%' : 'auto',
          right: imagePosition === 'login' ? 'auto' : '48%',
          opacity: 0.85,
        }}
        aria-hidden="true"
      />

      {/* Triangle accent */}
      <div
        className="absolute animate-float"
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: '9px',
          borderRightWidth: '9px',
          borderBottomWidth: '16px',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'rgba(251,191,36,0.7)',
          bottom: imagePosition === 'login' ? '130px' : '128px',
          right: imagePosition === 'login' ? 'auto' : '38px',
          left: imagePosition === 'login' ? '36px' : 'auto',
          animation: 'float-reverse 5s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      {/* Circle accent */}
      <div
        className="absolute w-9 h-9 rounded-full flex items-center justify-center animate-float"
        style={{
          background: 'linear-gradient(135deg, #10b981, #34d399)',
          bottom: imagePosition === 'login' ? '118px' : '116px',
          right: imagePosition === 'login' ? '44px' : 'auto',
          left: imagePosition === 'login' ? 'auto' : '40px',
        }}
        aria-hidden="true"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {imagePosition === 'login' ? (
            <>
              <path d="M12 2a10 10 0 0 1 0 20c-3 0-5.5-1.3-7.3-3.3" />
              <path d="M12 6v6l4 2" />
            </>
          ) : (
            <>
              <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
              <path d="M8 12l3 3 5-5" />
            </>
          )}
        </svg>
      </div>

      {/* Illustration placeholder */}
      <div
        className="relative z-10 w-full max-w-xs aspect-square object-contain mb-2 filter drop-shadow-2xl animate-float"
        style={{
          width: imagePosition === 'login' ? '340px' : '320px',
          height: imagePosition === 'login' ? '340px' : '320px',
        }}
        role="img"
        aria-label="3D character illustration"
      >
        <svg viewBox="0 0 140 140" fill="none" className="w-full h-full">
          <ellipse cx="70" cy="70" rx="60" ry="60" fill="rgba(59,130,196,0.08)" stroke="rgba(59,130,196,0.2)" strokeWidth="1.5" />
          <rect x="35" y="55" width="70" height="46" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <rect x="42" y="63" width="56" height="30" rx="3" fill="rgba(59,130,196,0.15)" />
          <circle cx="70" cy="36" r="16" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <path d="M60 50 Q70 60 80 50" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Text content */}
      <div className="relative z-10 text-center max-w-xs">
        <h2 className="font-[Fraunces] text-xl md:text-[1.35rem] font-normal text-white/92 tracking-tight leading-snug mb-2.5">
          {title}
        </h2>
        <p className="text-xs md:text-sm text-white/58 leading-relaxed font-light">{description}</p>
      </div>

      {/* Carousel dots */}
      <div className="relative z-10 flex gap-1.75 mt-5.5 justify-center" role="tablist" aria-label="Feature slides">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            role="tab"
            aria-selected={i === activeSlide}
            tabIndex={i === activeSlide ? 0 : -1}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 cursor-pointer rounded ${
              i === activeSlide
                ? 'w-5 h-1.75 bg-white/85 rounded'
                : 'w-1.75 h-1.75 bg-white/25 rounded-full'
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </aside>
  );
}
