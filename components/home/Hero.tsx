export default function Hero() {
  return (
    <section className="hero min-h-screen relative overflow-hidden bg-white flex items-center px-[5%] py-[120px_5%_80px]">
      {/* Grid Background */}
      <div className="hero-grid absolute inset-0 opacity-60 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(13, 31, 60, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(13, 31, 60, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '72px 72px'
      }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, white 100%)'
        }}></div>
      </div>

      {/* Orbs */}
      <div className="absolute top-[-150px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none" style={{
        background: 'rgba(59, 130, 196, 0.07)',
        filter: 'blur(100px)'
      }}></div>
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none" style={{
        background: 'rgba(13, 31, 60, 0.05)',
        filter: 'blur(100px)'
      }}></div>

      {/* Content */}
      <div className="hero-inner relative z-10 max-w-[1100px] mx-auto w-full">
        {/* Eyebrow */}
        <div className="hero-eyebrow inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#8A99AE] mb-6">
          <span className="flex-1 min-w-10 h-px bg-[rgba(13, 31, 60, 0.16)]"></span>
          For mental wellness
          <span className="flex-1 min-w-10 h-px bg-[rgba(13, 31, 60, 0.16)]"></span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-light leading-none tracking-tighter text-[#0D1F3C] mb-4">
          Teens <em className="italic text-[#3B82C4]">for</em> teens,<br />
          you are <em className="italic text-[#3B82C4]">not</em> alone
        </h1>

        {/* Sub Row */}
        <div className="hero-sub-row flex items-center justify-between py-5 border-t border-b border-[rgba(13, 31, 60, 0.08)] my-4 flex-wrap gap-3">
          <span className="text-[0.82rem] text-[#8A99AE] font-light tracking-wider">Your trusted mental health sanctuary</span>
          <div className="flex-1 h-px bg-[rgba(13, 31, 60, 0.08)] min-w-[30px] max-w-[120px]"></div>
        </div>

        {/* Bottom Section */}
        <div className="hero-bottom flex items-end justify-between flex-wrap gap-8">
          {/* CTA Group */}
          <div className="hero-cta-group max-w-[420px]">
            <p className="hero-tagline text-[clamp(1rem,2vw,1.3rem)] font-light italic text-[#5A6B84] mb-7 leading-relaxed">
              Join a supportive community where your voice matters. Connect, share, and grow with peers who truly understand.
            </p>
            <div className="hero-btns flex gap-3 flex-wrap">
              <a href="/signup" className="btn-primary text-sm font-medium px-7 py-3 bg-[#0D1F3C] text-white rounded-full transition-all duration-200 inline-flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-lg">
                Get Started
              </a>
              <a href="#about" className="btn-outline text-sm font-normal px-7 py-3 border border-[rgba(13, 31, 60, 0.16)] rounded-full text-[#0D1F3C] transition-all duration-200 inline-flex items-center gap-2 bg-transparent hover:bg-[#0D1F3C] hover:text-white hover:border-[#0D1F3C]">
                Learn More
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <div className="hero-stat bg-[rgba(255,255,255,0.88)] backdrop-blur-[16px] border border-[rgba(13, 31, 60, 0.08)] rounded-2xl p-7 shadow-md min-w-[200px]">
            <div className="text-[2.8rem] font-light text-[#0D1F3C] tracking-tighter leading-none mb-2">5.2K+</div>
            <div className="text-[0.78rem] text-[#5A6B84] leading-relaxed font-light mb-3">Active members engaging in supportive conversations</div>
            <div className="text-[0.8rem] font-medium text-[#0D1F3C] pt-3 border-t border-[rgba(13, 31, 60, 0.08)]">Mindsphere Community</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-ind absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.72rem] tracking-widest uppercase text-[#8A99AE] z-10">
        <span>Scroll to explore</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#3B82C4] to-transparent animate-pulse"></div>
      </div>

      <style>{`
        @keyframes pulse-scroll {
          0%, 100% {
            transform: scaleY(1);
            opacity: 1;
          }
          50% {
            transform: scaleY(0.5);
            opacity: 0.4;
          }
        }

        .animate-pulse {
          animation: pulse-scroll 1.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
