'use client'

export default function HeroAbout() {
  return (
    <section className="min-h-[60vh] flex items-center pt-[140px] pb-20 px-[5%] relative overflow-hidden bg-white">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(13, 31, 60, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 31, 60, 0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, white 100%)',
        }}
      />

      {/* Orbs */}
      <div
        className="absolute -top-[150px] -right-[100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'rgba(59, 130, 196, 0.07)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="absolute bottom-0 -left-[80px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'rgba(13, 31, 60, 0.05)',
          filter: 'blur(90px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[0.78rem] text-[#8A99AE] mb-6">
          <a href="/" className="text-[#5A6B84] hover:text-[#0D1F3C] transition-colors">
            Home
          </a>
          <span className="opacity-40">›</span>
          <span>About</span>
        </div>

        {/* Tag */}
        <div className="inline-flex items-center gap-2 border border-[rgba(13,31,60,0.15)] rounded-full px-4 py-1.5 text-[0.75rem] font-medium text-[#5A6B84] mb-7 bg-[#F7F9FC]">
          <div
            className="w-1.5 h-1.5 rounded-full bg-[#3B82C4]"
            style={{
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          Our Mission
        </div>

        {/* Title */}
        <h1 className="font-serif text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.05] tracking-[-0.04em] text-[#0D1F3C] mb-6">
          About <em className="italic text-[#3B82C4]">Mindsphere</em>
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(1rem,1.4vw,1.1rem)] text-[#5A6B84] max-w-[560px] leading-[1.75] font-light">
          We&apos;re dedicated to creating a supportive community where mental health conversations thrive and individuals find the resources they need.
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.5);
          }
        }
      `}</style>
    </section>
  )
}
