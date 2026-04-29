import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[var(--white)] flex items-center px-[5%] pt-[120px] pb-20">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      >
        {/* Fade grid at edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, var(--white) 100%)",
          }}
        />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none blur-[100px] bg-[rgba(59,130,196,0.07)] -top-[150px] -right-[100px] dark:bg-[rgba(91,155,213,0.1)]" />
      <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none blur-[100px] bg-[rgba(13,31,60,0.05)] bottom-0 -left-[100px] dark:bg-[rgba(30,77,140,0.12)]" />

      {/* Content */}
      <div className="relative z-[1] max-w-[1100px] mx-auto w-full">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[var(--text-muted)] mb-6">
          <span className="flex-1 min-w-[40px] h-px bg-[var(--border-strong)]" />
          Mental Health Support
          <span className="flex-1 min-w-[40px] h-px bg-[var(--border-strong)]" />
        </div>

        {/* Headline */}
        <div className="relative mb-0">
          <h1 className="font-serif text-[clamp(3.5rem,10vw,9rem)] font-light leading-[1] tracking-[-0.04em] text-[var(--text-primary)] mb-0">
            You Are <em className="italic text-[var(--accent)]">Not</em> Alone
          </h1>
        </div>

        {/* Sub Row */}
        <div className="flex items-center justify-between py-5 border-t border-b border-[var(--border)] my-4 mb-7 flex-wrap gap-3">
          <span className="text-[0.82rem] text-[var(--text-muted)] font-light tracking-[0.04em]">
            Teens for Teens
          </span>
          <span className="flex-1 h-px bg-[var(--border)] min-w-[30px] max-w-[120px]" />
          <span className="text-[0.82rem] text-[var(--text-muted)] font-light tracking-[0.04em]">
            Singapore Based
          </span>
          <span className="flex-1 h-px bg-[var(--border)] min-w-[30px] max-w-[120px]" />
          <span className="text-[0.82rem] text-[var(--text-muted)] font-light tracking-[0.04em]">
            Est. 2024
          </span>
        </div>

        {/* Bottom Row */}
        <div className="flex items-end justify-between flex-wrap gap-8">
          {/* CTA Group */}
          <div className="max-w-[420px]">
            <p className="font-serif text-[clamp(1rem,2vw,1.3rem)] font-light italic text-[var(--text-secondary)] mb-7 leading-relaxed">
              A safe space where teens support each other through life&apos;s challenges, together.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/get-involved"
                className="font-sans text-[0.9rem] font-medium py-[13px] px-7 bg-[var(--navy)] text-white rounded-full transition-all duration-250 inline-flex items-center gap-2 hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(13,31,60,0.22)]"
              >
                Get Involved
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#about"
                className="font-sans text-[0.9rem] font-normal py-[13px] px-7 border border-[var(--border-strong)] rounded-full text-[var(--text-primary)] transition-all duration-250 inline-flex items-center gap-2 hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)]"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stat Card */}
          <div className="bg-[var(--glass-strong)] backdrop-blur-[16px] border border-[var(--border)] rounded-[var(--radius-lg)] p-6 px-7 shadow-[var(--shadow-md)] min-w-[200px]">
            <div className="font-serif text-[2.8rem] font-light text-[var(--text-primary)] tracking-[-0.04em] leading-[1] mb-2">
              1 in 3
            </div>
            <p className="text-[0.78rem] text-[var(--text-secondary)] leading-relaxed font-light mb-3">
              Teens experience mental health challenges. We&apos;re here to help.
            </p>
            <div className="text-[0.8rem] font-medium text-[var(--text-primary)] pt-3 border-t border-[var(--border)]">
              — WHO Statistics
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.72rem] tracking-[0.1em] uppercase text-[var(--text-muted)] z-[1]">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent animate-scroll-line" />
      </div>
    </section>
  )
}
