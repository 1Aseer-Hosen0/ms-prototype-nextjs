'use client'

export default function Story() {
  return (
    <section className="px-[5%] py-[100px] bg-[#F7F9FC]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#EEF2F7] to-[#EBF3FB] rounded-2xl overflow-hidden border border-[rgba(13,31,60,0.08)] relative flex items-center justify-center">
              {/* Placeholder SVG Icon */}
              <div className="flex flex-col items-center gap-2.5 text-[#8A99AE]">
                <svg
                  className="w-11 h-11"
                  stroke="#3B82C4"
                  fill="none"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  opacity={0.4}
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                <span className="text-[0.78rem]">Image Placeholder</span>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute bottom-[-18px] right-[-18px] bg-white border border-[rgba(13,31,60,0.08)] rounded-lg p-3.5 shadow-[0_8px_48px_rgba(13,31,60,0.12)] flex items-center gap-3">
              <div className="w-9.5 h-9.5 rounded-sm bg-[#EBF3FB] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4.5 h-4.5"
                  stroke="#3B82C4"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <div>
                <div className="font-serif text-base font-normal text-[#0D1F3C] leading-none mb-0.5">
                  5M+
                </div>
                <div className="text-[0.7rem] text-[#8A99AE] font-light">Members</div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#EBF3FB] text-[#3B82C4] text-[0.72rem] font-medium px-3 py-1 rounded-full border border-[rgba(59,130,196,0.2)] mb-4.5">
              <span>✓</span> Our Story
            </div>

            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light tracking-[-0.025em] leading-[1.1] text-[#0D1F3C] mb-3.5">
              Building <em className="italic text-[#3B82C4]">connections</em> that heal
            </h2>

            <p className="text-[0.95rem] text-[#5A6B84] leading-[1.75] font-light mb-4">
              Mindsphere was founded on a simple belief: mental health support should be accessible, stigma-free, and community-driven. We started as a small group of passionate individuals dedicated to changing how people talk about mental wellness.
            </p>

            <p className="text-[0.95rem] text-[#5A6B84] leading-[1.75] font-light">
              Today, we&apos;ve grown into a thriving community where thousands of members share experiences, find support, and access professional resources—all in a safe, judgment-free environment.
            </p>

            <div className="flex gap-3 flex-wrap mt-8">
              <button className="text-[0.9rem] font-medium px-7 py-3 bg-[#0D1F3C] text-white rounded-full transition-all hover:translate-y-[-2px] hover:shadow-[0_8px_28px_rgba(13,31,60,0.22)]">
                Read Our Story
              </button>
              <button className="text-[0.9rem] font-normal px-7 py-3 border border-[rgba(13,31,60,0.15)] text-[#0D1F3C] rounded-full transition-all hover:bg-[#0D1F3C] hover:text-white hover:border-[#0D1F3C]">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
