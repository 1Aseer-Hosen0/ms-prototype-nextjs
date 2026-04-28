export default function Events() {
  const events = [
    { id: 1, title: 'Mindfulness Workshop', date: 'Apr 15', time: '3:00 PM', attendees: 24 },
    { id: 2, title: 'Creative Expression Circle', date: 'Apr 18', time: '4:30 PM', attendees: 18 },
    { id: 3, title: 'Peer Mentoring Session', date: 'Apr 22', time: '2:00 PM', attendees: 12 },
  ];

  return (
    <section id="events" className="py-[100px_5%] bg-[#F7F9FC]">
      <div className="s-inner max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="events-header text-center mb-12">
          <span className="s-label text-[0.72rem] font-medium tracking-widest uppercase text-[#3B82C4] block mb-3.5">Upcoming</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-snug text-[#0D1F3C] mb-4">
            Connect at our <em className="italic text-[#3B82C4]">events</em>
          </h2>
        </div>

        {/* Events Layout */}
        <div className="events-layout grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
          {/* Featured Event */}
          <div className="event-featured bg-white border border-[rgba(13, 31, 60, 0.08)] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md">
            {/* Image */}
            <div className="event-featured-img bg-gradient-to-br from-[#0D1F3C] to-[#1E4D8C] relative overflow-hidden flex items-center justify-center flex-shrink-0" style={{ aspectRatio: '16/9' }}>
              <div className="event-featured-img-inner flex items-center justify-center opacity-30 w-full h-full">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="32" r="28"/>
                  <path d="M32 16v32M16 32h32"/>
                </svg>
              </div>
              <div className="event-badge absolute top-4 left-4 bg-[#0D1F3C] text-white text-[0.68rem] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full">
                Featured
              </div>
            </div>

            {/* Body */}
            <div className="event-featured-body p-7 flex-1 flex flex-col">
              <h3 className="event-featured-title text-[1.5rem] font-normal text-[#0D1F3C] mb-2.5 leading-tight">
                Mental Health Awareness Summit
              </h3>
              <p className="event-featured-desc text-[0.875rem] text-[#5A6B84] leading-relaxed font-light mb-auto pb-5">
                Join us for a transformative day of talks, workshops, and community connection. Learn from experts and connect with peers who share your journey.
              </p>

              {/* Meta */}
              <div className="event-meta flex items-center gap-5 pt-5 border-t border-[rgba(13, 31, 60, 0.08)] mb-4 flex-wrap gap-3">
                <div className="event-meta-item flex items-center gap-1.5 text-[0.8rem] text-[#8A99AE] font-light">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="2" y="2" width="10" height="10" rx="1"/>
                    <path d="M2 6h10"/>
                  </svg>
                  May 10, 2024
                </div>
                <div className="event-meta-item flex items-center gap-1.5 text-[0.8rem] text-[#8A99AE] font-light">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="7" cy="7" r="5"/>
                    <path d="M7 4v3l2 2"/>
                  </svg>
                  10:00 AM
                </div>
              </div>

              <a href="#" className="event-learn inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-[#0D1F3C] transition-all duration-200 hover:gap-2.5">
                Learn More
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Events List */}
          <div className="events-list flex flex-col gap-0.5">
            {events.map((event) => (
              <div key={event.id} className="event-row flex items-start gap-5 p-[22px_24px] bg-white border border-[rgba(13, 31, 60, 0.08)] rounded-2xl transition-all duration-200 cursor-pointer hover:bg-[#EEF2F7] hover:translate-x-1">
                {/* Image */}
                <div className="event-row-img w-[72px] h-[60px] rounded-lg bg-gradient-to-br from-[#EEF2F7] to-[#EBF3FB] flex-shrink-0 overflow-hidden flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82C4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 7v5l4 2"/>
                  </svg>
                </div>

                {/* Content */}
                <div className="event-row-content flex-1 min-w-0">
                  <div className="event-row-title font-normal text-[0.95rem] text-[#0D1F3C] mb-1 truncate">
                    {event.title}
                  </div>
                  <div className="event-row-desc text-[0.78rem] text-[#5A6B84] leading-relaxed font-light mb-2 line-clamp-1">
                    Join us for an engaging session
                  </div>
                  <div className="event-row-meta flex items-center gap-3.5 flex-wrap">
                    <span className="flex items-center gap-1 text-[0.72rem] text-[#8A99AE]">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <rect x="1" y="1" width="9" height="9" rx="1"/>
                      </svg>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1 text-[0.72rem] text-[#8A99AE]">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="5.5" cy="5.5" r="4"/>
                        <path d="M5.5 3v2.5l2 1"/>
                      </svg>
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="event-row-arrow w-7 h-7 rounded-full border border-[rgba(13, 31, 60, 0.08)] flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 text-[0.7rem] text-[#8A99AE]">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="events-footer text-center mt-9">
          <a href="#" className="text-[0.85rem] font-medium text-[#5A6B84] inline-flex items-center gap-1 border-b border-[rgba(13, 31, 60, 0.08)] pb-0.5 transition-all duration-200 hover:text-[#0D1F3C] hover:border-[#0D1F3C]">
            View all events →
          </a>
        </div>
      </div>
    </section>
  );
}
