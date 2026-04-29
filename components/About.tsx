"use client";

import Link from "next/link";

const features = [
  {
    icon: "🧑‍🤝‍🧑",
    title: "Community Driven",
    body: "Every feature, tool, and decision is shaped by the teens who use it — not a boardroom.",
  },
  {
    icon: "🎯",
    title: "Goal Oriented",
    body: "We build with purpose — every resource, check-in, and tool is designed to create real impact.",
  },
  {
    icon: "💡",
    title: "Innovation Hub",
    body: "Peer support meets modern technology — we're redefining what mental wellness looks like for Gen Z.",
  },
];

export default function About() {
  return (
    <section className="bg-background py-24 px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-soft-grey to-accent-light">
              <div className="w-full h-full flex flex-col items-center justify-center text-muted gap-4">
                <svg
                  viewBox="0 0 24 24"
                  className="w-16 h-16 stroke-current fill-none"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-sm font-light">Team photo — about.png</span>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-4 right-4 lg:right-0 bg-background border border-border rounded-xl shadow-lg px-5 py-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-accent fill-none"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div className="font-serif text-xl font-semibold text-foreground">500+</div>
                <div className="text-xs text-muted font-light">Active members</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-light border border-accent/20 text-accent text-xs font-medium mb-6">
              <svg
                viewBox="0 0 24 24"
                className="w-3 h-3 stroke-current fill-none"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              About our organization
            </div>

            {/* Section Label */}
            <div className="text-xs font-medium tracking-[0.14em] uppercase text-muted mb-3">
              Who we are
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-foreground mb-5">
              Teens For <em className="italic opacity-60">Teens</em>
            </h2>

            {/* Body */}
            <p className="text-secondary text-base font-light leading-relaxed mb-8">
              Mindsphere was built by teenagers who understood that mental health needed a different kind
              of space — one without clinical jargon, without judgment, and without adults speaking for the people who
              actually live this experience every day. We are that space.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-col gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-soft-grey rounded-xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-border-strong"
                >
                  <div className="text-2xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">{feature.title}</div>
                    <div className="text-sm text-secondary font-light leading-relaxed">{feature.body}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3 bg-navy text-white text-sm font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Know More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
