export default function Newsletter() {
  return (
    <section className="py-[100px_5%] bg-[#F7F9FC]">
      <div className="newsletter-inner max-w-[560px] mx-auto text-center">
        <h2 className="s-title text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-snug text-[#0D1F3C] mb-3">
          Stay in the <em className="italic text-[#3B82C4]">loop</em>
        </h2>

        <p className="newsletter-body text-base text-[#5A6B84] font-light leading-relaxed mb-9">
          Get weekly updates on new features, community stories, and wellness tips delivered to your inbox.
        </p>

        <div className="flex items-center gap-3 mb-3.5">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3.5 bg-white border border-[rgba(13, 31, 60, 0.08)] rounded-full text-[0.9rem] text-[#0D1F3C] placeholder-[#8A99AE] focus:outline-none focus:border-[#3B82C4]"
          />
          <button className="newsletter-btn text-[0.95rem] font-medium px-9 py-3.5 bg-[#0D1F3C] text-white rounded-full transition-all duration-200 inline-flex items-center gap-2.5 hover:-translate-y-0.5 hover:shadow-lg flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 8h12M8 2l6 6-6 6"/>
            </svg>
            Subscribe
          </button>
        </div>

        <p className="newsletter-note text-[0.75rem] text-[#8A99AE] font-light">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
