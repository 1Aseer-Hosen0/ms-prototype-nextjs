export default function JoinCTA() {
  return (
    <section className="py-[100px_5%] bg-[#0D1F3C] relative overflow-hidden">
      {/* Orb */}
      <div className="join-orb absolute w-[500px] h-[500px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{
        background: 'rgba(59, 130, 196, 0.15)',
        filter: 'blur(90px)'
      }}></div>

      {/* Content */}
      <div className="join-inner max-w-[700px] mx-auto text-center relative z-10">
        {/* Label */}
        <div className="join-label inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-widest uppercase text-[rgba(255,255,255,0.45)] mb-5">
          <span>→</span> Ready to join?
        </div>

        {/* Title */}
        <h2 className="join-title text-[clamp(2rem,5vw,3.5rem)] font-light tracking-tight leading-tight text-white mb-4">
          Start your <em className="italic opacity-60">wellness</em> journey today
        </h2>

        {/* Body */}
        <p className="join-body text-base text-[rgba(255,255,255,0.55)] leading-relaxed font-light mb-10 max-w-[500px] mx-auto">
          Connect with thousands of teens who understand your journey. Find support, share stories, and grow together in a safe community.
        </p>

        {/* Buttons */}
        <div className="join-btns flex gap-3.5 justify-center flex-wrap">
          <a href="/signup" className="btn-white text-[0.95rem] font-medium px-9 py-3.5 bg-white text-[#0D1F3C] rounded-full transition-all duration-200 inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-lg">
            Join Now
          </a>
          <a href="#about" className="btn-ghost-white text-[0.95rem] font-normal px-7 py-3.5 border border-[rgba(255,255,255,0.2)] rounded-full text-[rgba(255,255,255,0.65)] transition-all duration-200 bg-transparent hover:border-[rgba(255,255,255,0.5)] hover:text-white">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
