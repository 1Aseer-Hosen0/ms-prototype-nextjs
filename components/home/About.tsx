export default function About() {
  return (
    <section id="about" className="py-[100px_5%] bg-[#F7F9FC]">
      <div className="s-inner max-w-[1100px] mx-auto">
        <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
          {/* Image */}
          <div className="about-img-wrap relative">
            <div className="about-img w-full bg-gradient-to-br from-[#EEF2F7] to-[#EBF3FB] rounded-2xl overflow-hidden border border-[rgba(13, 31, 60, 0.08)] relative" style={{ aspectRatio: '4/3' }}>
              <div className="about-img-placeholder w-full h-full flex flex-col items-center justify-center gap-3 text-[#8A99AE]">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#3B82C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
                  <rect x="6" y="6" width="36" height="36" rx="4"/>
                  <circle cx="17" cy="17" r="3"/>
                  <path d="M42 30L30 18 12 36"/>
                </svg>
                <span className="text-[0.8rem] font-light">Community Photo</span>
              </div>
            </div>

            {/* Float Card */}
            <div className="about-float absolute bottom-[-20px] right-[-20px] bg-white border border-[rgba(13, 31, 60, 0.08)] rounded-2xl p-5 shadow-md flex items-center gap-3 backdrop-blur-[12px]">
              <div className="about-float-icon w-10 h-10 rounded-lg bg-[#EBF3FB] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#3B82C4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 4v12M4 10h12"/>
                </svg>
              </div>
              <div>
                <div className="about-float-num text-[1.4rem] font-normal text-[#0D1F3C] leading-none mb-0.5">2M+</div>
                <div className="about-float-label text-[0.75rem] text-[#5A6B84] font-light">Conversations</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="about-badge inline-flex items-center gap-1.5 bg-[#EBF3FB] text-[#3B82C4] text-[0.75rem] font-medium tracking-wider px-3.5 py-1.5 rounded-full mb-5">
              <span>✓</span> Our Mission
            </div>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-snug text-[#0D1F3C] mb-4">
              Building <em className="italic text-[#3B82C4]">real</em> connections
            </h2>

            <p className="text-base text-[#5A6B84] leading-relaxed font-light mb-7">
              Mindsphere is dedicated to creating a safe, inclusive space where teens can share their experiences, find support, and grow together. We believe that peer support is powerful, and no one should face their mental health challenges alone.
            </p>

            {/* Feature Cards */}
            <div className="feature-cards flex flex-col gap-2.5 mb-8">
              <div className="feature-card flex items-start gap-3.5 p-4 bg-white border border-[rgba(13, 31, 60, 0.08)] rounded-xl transition-all duration-200 cursor-default hover:translate-x-1.5 hover:shadow-sm">
                <div className="fc-icon w-9 h-9 rounded-lg bg-[#EBF3FB] flex items-center justify-center flex-shrink-0">💬</div>
                <div>
                  <div className="fc-title text-sm font-medium text-[#0D1F3C] mb-0.5">Open Conversations</div>
                  <div className="fc-body text-[0.8rem] text-[#5A6B84] font-light leading-relaxed">Share your thoughts and feelings without judgment.</div>
                </div>
              </div>

              <div className="feature-card flex items-start gap-3.5 p-4 bg-white border border-[rgba(13, 31, 60, 0.08)] rounded-xl transition-all duration-200 cursor-default hover:translate-x-1.5 hover:shadow-sm">
                <div className="fc-icon w-9 h-9 rounded-lg bg-[#EBF3FB] flex items-center justify-center flex-shrink-0">🤝</div>
                <div>
                  <div className="fc-title text-sm font-medium text-[#0D1F3C] mb-0.5">Peer Support</div>
                  <div className="fc-body text-[0.8rem] text-[#5A6B84] font-light leading-relaxed">Connect with others who understand your journey.</div>
                </div>
              </div>

              <div className="feature-card flex items-start gap-3.5 p-4 bg-white border border-[rgba(13, 31, 60, 0.08)] rounded-xl transition-all duration-200 cursor-default hover:translate-x-1.5 hover:shadow-sm">
                <div className="fc-icon w-9 h-9 rounded-lg bg-[#EBF3FB] flex items-center justify-center flex-shrink-0">🛡️</div>
                <div>
                  <div className="fc-title text-sm font-medium text-[#0D1F3C] mb-0.5">Safe Community</div>
                  <div className="fc-body text-[0.8rem] text-[#5A6B84] font-light leading-relaxed">A moderated, secure space built on trust and respect.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
