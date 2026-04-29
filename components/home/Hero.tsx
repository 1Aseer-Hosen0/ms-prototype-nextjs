'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-white flex items-center px-[5%] pt-[120px] pb-20">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(13, 31, 60, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13, 31, 60, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        ></div>
        {/* Fade grid at edges */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, white 100%)',
          }}
        ></div>
      </div>

      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{
            background: 'rgba(59, 130, 196, 0.07)',
            top: '-150px',
            right: '-100px',
          }}
        ></div>
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{
            background: 'rgba(13, 31, 60, 0.05)',
            bottom: '0',
            left: '-100px',
          }}
        ></div>
      </div>

      {/* Hero Inner Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto w-full">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-medium letter-spacing-wide uppercase text-[#8A99AE] mb-6">
          <div className="flex-1 h-[1px] bg-[rgba(13,31,60,0.16)] min-w-10 max-w-[40px]"></div>
          <span>Welcome to mindsphere</span>
          <div className="flex-1 h-[1px] bg-[rgba(13,31,60,0.16)] min-w-10 max-w-[40px]"></div>
        </div>

        {/* Hero Headline */}
        <div className="relative mb-0">
          <h1 className="font-serif text-[clamp(3.5rem,10vw,9rem)] font-light leading-tight letter-spacing-tight text-[#0D1F3C] mb-0">
            Teens for teens, <em className="italic text-[#3B82C4]">you are not alone</em>
          </h1>
        </div>

        {/* Sub Row */}
        <div className="flex items-center justify-between flex-wrap gap-3 py-5 border-t border-b border-[rgba(13,31,60,0.08)] my-4 md:my-7">
          <span className="text-sm text-[#8A99AE] font-light letter-spacing-wide">
            A supportive community for mental wellness
          </span>
          <div className="flex-1 h-[1px] bg-[rgba(13,31,60,0.08)] min-w-8 max-w-[120px]"></div>
        </div>

        {/* Hero Bottom */}
        <div className="flex items-end justify-between flex-wrap gap-8">
          {/* CTA Group */}
          <div className="max-w-[420px]">
            <p className="font-serif text-[clamp(1rem,2vw,1.3rem)] font-light italic text-[#5A6B84] mb-7 leading-relaxed">
              Connect with peers, share your story, and find support on your mental health journey.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">
              <button className="inline-flex items-center gap-2 text-sm font-medium px-7 py-[13px] bg-[#0D1F3C] text-white rounded-full transition-all hover:translate-y-[-2px] hover:shadow-lg">
                Get Started
                <span>→</span>
              </button>
              <button className="inline-flex items-center gap-2 text-sm font-normal px-7 py-[13px] border border-[rgba(13,31,60,0.16)] text-[#0D1F3C] rounded-full bg-transparent transition-all hover:bg-[#0D1F3C] hover:text-white hover:border-[#0D1F3C]">
                Learn More
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Stat Card */}
          <div
            className="bg-[rgba(255,255,255,0.88)] backdrop-blur-[16px] border border-[rgba(13,31,60,0.08)] rounded-2xl p-7 shadow-md min-w-[200px]"
            style={{
              boxShadow: '0 4px 24px rgba(13, 31, 60, 0.10)',
            }}
          >
            <div className="font-serif text-5xl font-light text-[#0D1F3C] letter-spacing-tight leading-tight mb-2">
              50K+
            </div>
            <div className="text-sm text-[#5A6B84] leading-relaxed font-light mb-3">
              Active members in our community
            </div>
            <div className="text-sm font-medium text-[#0D1F3C] pt-3 border-t border-[rgba(13,31,60,0.08)]">
              Join today
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-xs letter-spacing-wide uppercase text-[#8A99AE] z-10">
        <span>Scroll to explore</span>
        <div
          className="w-[1px] h-10 bg-gradient-to-b from-[#3B82C4] to-transparent"
          style={{
            animation: 'scrollLine 1.8s ease-in-out infinite',
          }}
        ></div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%, 100% {
            transform: scaleY(1);
            opacity: 1;
          }
          50% {
            transform: scaleY(0.5);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  )
}
