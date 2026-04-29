"use client";

import Link from "next/link";

const eventsList = [
  {
    title: "Open Mic: Mental Health Stories",
    desc: "Teens shared their personal journeys in a safe, supportive environment.",
    date: "March 2025",
    location: "Virtual",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-accent fill-none" strokeWidth={1.5} strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Mindfulness Workshop Series",
    desc: "4-week online workshop on breathing, journaling, and daily routines.",
    date: "January 2025",
    location: "Online",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-accent fill-none" strokeWidth={1.5} strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Peer Support Certification Drive",
    desc: "Training program for teens who want to become certified peer supporters.",
    date: "Nov 2024",
    location: "Online",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-accent fill-none" strokeWidth={1.5} strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function Events() {
  return (
    <section className="bg-off-white py-24 px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-medium tracking-[0.14em] uppercase text-muted mb-3">
            {"What's happening"}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Events & <em className="italic opacity-60">Gatherings</em>
          </h2>
        </div>

        {/* Events Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
          {/* Featured Event */}
          <div className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-md">
            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-navy to-blue relative flex-shrink-0">
              <div className="w-full h-full flex items-center justify-center opacity-30">
                <svg
                  viewBox="0 0 24 24"
                  className="w-16 h-16 stroke-white fill-none"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="absolute top-4 left-4 bg-accent text-white text-[0.68rem] font-medium tracking-[0.08em] uppercase px-3 py-1.5 rounded-full">
                Upcoming
              </div>
            </div>

            {/* Featured Body */}
            <div className="p-7 flex flex-col flex-1">
              <h3 className="font-serif text-2xl font-normal text-foreground mb-2.5 leading-tight">
                Teen Wellness Summit 2025
              </h3>
              <p className="text-sm text-secondary font-light leading-relaxed mb-auto pb-5">
                Our flagship annual event bringing together teens, counselors, and mental
                health advocates for a full day of connection, workshops, and honest conversations about what it means to
                be a teenager today.
              </p>

              {/* Event Meta */}
              <div className="flex items-center gap-3 flex-wrap pt-5 border-t border-border mb-4">
                <div className="flex items-center gap-1.5 text-sm text-muted font-light">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 stroke-current fill-none"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Date TBA, 2025
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted font-light">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 stroke-current fill-none"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Virtual + In-person
                </div>
              </div>

              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-all duration-200 hover:gap-2.5 w-fit"
              >
                Learn more ↗
              </Link>
            </div>
          </div>

          {/* Events List */}
          <div className="flex flex-col gap-0.5">
            {eventsList.map((event, index) => (
              <div
                key={index}
                className="flex items-start gap-5 px-6 py-5 bg-background border border-border rounded-xl transition-all duration-200 cursor-pointer hover:bg-soft-grey hover:translate-x-1 group"
              >
                {/* Event Thumbnail */}
                <div className="w-[72px] h-[60px] rounded-lg bg-gradient-to-br from-soft-grey to-accent-light flex-shrink-0 flex items-center justify-center opacity-50">
                  {event.icon}
                </div>

                {/* Event Content */}
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-[0.95rem] font-normal text-foreground mb-1 truncate">
                    {event.title}
                  </div>
                  <div className="text-xs text-secondary font-light leading-snug mb-2 line-clamp-1">
                    {event.desc}
                  </div>
                  <div className="flex items-center gap-3.5 flex-wrap">
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3 h-3 stroke-current fill-none"
                        strokeWidth={2}
                        strokeLinecap="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3 h-3 stroke-current fill-none"
                        strokeWidth={2}
                        strokeLinecap="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center flex-shrink-0 mt-0.5 text-xs text-muted transition-all duration-200 group-hover:bg-navy group-hover:text-white group-hover:border-navy">
                  ↗
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-9">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border text-foreground text-sm font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:shadow-md"
          >
            See all events →
          </Link>
        </div>
      </div>
    </section>
  );
}
