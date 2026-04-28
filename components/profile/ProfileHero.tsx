export default function ProfileHero() {
  return (
    <div className="bg-[#F7F9FC] pt-32 pb-24 text-center relative overflow-hidden border-b border-[rgba(13,31,60,0.08)]">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-35 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(13,31,60,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(13,31,60,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Subtle Noise */}
      <div className="absolute inset-0 opacity-[0.018] pointer-events-none mix-blend-overlay" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }}></div>

      {/* Animated Orbs */}
      <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-12 top-0 -right-32 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 196, 0.12) 0%, transparent 70%)',
          animation: 'drift 20s infinite alternate ease-in-out'
        }}></div>
      <div className="absolute w-56 h-56 rounded-full blur-2xl opacity-6 -bottom-20 -left-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(13, 31, 60, 0.06) 0%, transparent 70%)',
          animation: 'drift 15s infinite alternate-reverse ease-in-out'
        }}></div>

      {/* Content */}
      <div className="max-w-3xl mx-auto relative z-10 px-5">
        <div className="inline-flex items-center gap-2 border border-[rgba(13,31,60,0.15)] rounded-full px-4 py-1.5 mb-6 bg-[#F7F9FC]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3B82C4]" style={{ animation: 'pulse 2s ease-in-out infinite' }}></div>
          <span className="text-xs font-medium text-[#5A6B84]">Member since Jan 2024</span>
        </div>

        <h1 className="font-serif text-6xl md:text-7xl font-light text-[#0D1F3C] leading-tight mb-5 -tracking-wider">
          Anika <em className="italic text-[#3B82C4]">Sharma</em>
        </h1>
      </div>
    </div>
  );
}
