'use client'

interface Stat {
  number: string
  label: string
}

const stats: Stat[] = [
  { number: '5M+', label: 'Active Members' },
  { number: '150K+', label: 'Daily Conversations' },
  { number: '98%', label: 'Member Satisfaction' },
  { number: '45+', label: 'Countries Served' },
]

export default function ImpactStats() {
  return (
    <section className="bg-[#0D1F3C] px-[5%] py-20 relative overflow-hidden">
      {/* Orb */}
      <div
        className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'rgba(59, 130, 196, 0.15)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-[60px] items-center mb-14">
          {/* Left: Title */}
          <div>
            <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[#3B82C4] mb-3.5">
              Our Impact
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light tracking-[-0.025em] leading-[1.1] text-white">
              Making a <em className="italic">meaningful</em> difference
            </h2>
          </div>

          {/* Right: Description */}
          <p className="text-[0.95rem] text-[rgba(255,255,255,0.7)] leading-[1.75] font-light">
            Our collective efforts have transformed thousands of lives and created a movement toward destigmatizing mental health conversations globally.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 border border-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur-sm"
            >
              <div className="font-serif text-[2.5rem] font-normal text-[#3B82C4] leading-none mb-2">
                {stat.number}
              </div>
              <div className="text-[0.85rem] text-[rgba(255,255,255,0.65)] font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
