'use client';

import { useEffect, useRef } from 'react';

export default function Collab() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const collaborators = [
    'Mental Health Foundation',
    'Teen Wellness Alliance',
    'Community Care Network',
    'Youth Support Initiative',
    'Peer Mentoring Hub',
  ];

  return (
    <section className="py-16 bg-white border-t border-b border-[rgba(13, 31, 60, 0.08)]">
      <div className="s-inner max-w-[1100px] mx-auto">
        {/* Label */}
        <div className="collab-label text-center text-[0.72rem] font-medium tracking-widest uppercase text-[#8A99AE] mb-9">
          Partnering with trusted organizations
        </div>

        {/* Marquee */}
        <div className="collab-marquee overflow-hidden" style={{
          WebkitMask: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          mask: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        }}>
          <div ref={marqueeRef} className="collab-track flex items-center gap-0 w-max" style={{
            animation: 'marquee 22s linear infinite',
          }}>
            {[...collaborators, ...collaborators].map((org, idx) => (
              <div key={`${org}-${idx}`} className="collab-item flex items-center gap-3 px-9 font-light italic text-[#8A99AE] whitespace-nowrap transition-colors duration-200 hover:text-[#0D1F3C]">
                {org}
                <div className="collab-sep w-1.5 h-1.5 rounded-full bg-[rgba(13, 31, 60, 0.16)] flex-shrink-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
