'use client';

import { useEffect, useRef } from 'react';

export default function Testimonials() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      quote: 'This community saved my life. I finally felt understood.',
      author: 'Sarah',
      role: 'Mindsphere Member',
      avatar: 'S',
      stars: 5,
    },
    {
      id: 2,
      quote: 'Finding real support from people who actually get it.',
      author: 'Marcus',
      role: 'Community Leader',
      avatar: 'M',
      stars: 5,
    },
    {
      id: 3,
      quote: 'A safe space where I can be myself without judgment.',
      author: 'Alex',
      role: 'Active Member',
      avatar: 'A',
      stars: 5,
    },
    {
      id: 4,
      quote: 'The resources and support here are genuinely helpful.',
      author: 'Jordan',
      role: 'Peer Mentor',
      avatar: 'J',
      stars: 5,
    },
  ];

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.addEventListener('mouseenter', () => {
        marqueeRef.current?.style.setProperty('animation-play-state', 'paused');
      });
      marqueeRef.current.addEventListener('mouseleave', () => {
        marqueeRef.current?.style.setProperty('animation-play-state', 'running');
      });
    }
  }, []);

  return (
    <section className="py-[100px_5%] bg-white overflow-hidden">
      <div className="s-inner max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="testimonials-header text-center mb-14">
          <span className="s-label text-[0.72rem] font-medium tracking-widest uppercase text-[#3B82C4] block mb-3.5">What they say</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-snug text-[#0D1F3C] mb-4">
            Voices of our <em className="italic text-[#3B82C4]">community</em>
          </h2>
        </div>

        {/* Marquee Row 1 */}
        <div className="marquee-outer relative overflow-hidden" style={{
          WebkitMask: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          mask: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        }}>
          <div ref={marqueeRef} className="marquee-track flex gap-5 w-max" style={{
            animation: 'marquee 30s linear infinite',
          }}>
            {[...testimonials, ...testimonials].map((testi, idx) => (
              <div key={`${testi.id}-${idx}`} className="tcard w-80 flex-shrink-0 bg-[#F7F9FC] border border-[rgba(13, 31, 60, 0.08)] rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-y-0.5">
                {/* Stars */}
                <div className="tcard-stars flex gap-0.5 mb-3">
                  {[...Array(testi.stars)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-[0.8rem]">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="tcard-quote text-[0.95rem] font-light italic text-[#0D1F3C] leading-relaxed mb-5">
                  {testi.quote}
                </p>

                {/* Author */}
                <div className="tcard-author flex items-center gap-2.5">
                  <div className="tcard-avatar w-9 h-9 rounded-full bg-[#1E4D8C] flex items-center justify-center text-[0.72rem] font-medium text-white flex-shrink-0">
                    {testi.avatar}
                  </div>
                  <div>
                    <div className="tcard-name text-[0.85rem] font-medium text-[#0D1F3C]">
                      {testi.author}
                    </div>
                    <div className="tcard-role text-[0.75rem] text-[#8A99AE] font-light">
                      {testi.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="marquee-outer relative overflow-hidden mt-5" style={{
          WebkitMask: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          mask: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        }}>
          <div className="marquee-track flex gap-5 w-max" style={{
            animation: 'marquee 25s linear infinite reverse',
          }}>
            {[...testimonials, ...testimonials].map((testi, idx) => (
              <div key={`rev-${testi.id}-${idx}`} className="tcard w-80 flex-shrink-0 bg-[#F7F9FC] border border-[rgba(13, 31, 60, 0.08)] rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-y-0.5">
                <div className="tcard-stars flex gap-0.5 mb-3">
                  {[...Array(testi.stars)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-[0.8rem]">★</span>
                  ))}
                </div>
                <p className="tcard-quote text-[0.95rem] font-light italic text-[#0D1F3C] leading-relaxed mb-5">
                  {testi.quote}
                </p>
                <div className="tcard-author flex items-center gap-2.5">
                  <div className="tcard-avatar w-9 h-9 rounded-full bg-[#1E4D8C] flex items-center justify-center text-[0.72rem] font-medium text-white flex-shrink-0">
                    {testi.avatar}
                  </div>
                  <div>
                    <div className="tcard-name text-[0.85rem] font-medium text-[#0D1F3C]">
                      {testi.author}
                    </div>
                    <div className="tcard-role text-[0.75rem] text-[#8A99AE] font-light">
                      {testi.role}
                    </div>
                  </div>
                </div>
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
