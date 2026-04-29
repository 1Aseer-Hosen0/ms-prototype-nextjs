"use client";

import Link from "next/link";

const blogPosts = [
  {
    emoji: "🧠",
    likes: 142,
    comments: 38,
    category: "Mental Health",
    title: "Why talking about anxiety is the first step toward healing",
    author: "Anika Sharma",
    initials: "AS",
    avatarBg: "#3B82C4",
    readTime: "5 min read",
  },
  {
    emoji: "🌿",
    likes: 98,
    comments: 21,
    category: "Self-care",
    title: "5 daily habits that genuinely helped my mental wellbeing",
    author: "Riya Patel",
    initials: "RP",
    avatarBg: "#1E4D8C",
    readTime: "4 min read",
  },
  {
    emoji: "💬",
    likes: 203,
    comments: 57,
    category: "Community",
    title: "Finding your people: how peer support changed everything for me",
    author: "Lena Marcus",
    initials: "LM",
    avatarBg: "#2B6CB8",
    readTime: "6 min read",
  },
  {
    emoji: "🌬️",
    likes: 76,
    comments: 14,
    category: "Mindfulness",
    title: "Breathing through the hard moments — a beginner's guide",
    author: "Sam Torres",
    initials: "ST",
    avatarBg: "#3B82C4",
    readTime: "3 min read",
  },
  {
    emoji: "🔥",
    likes: 189,
    comments: 44,
    category: "Awareness",
    title: "Understanding teen burnout and what we can actually do about it",
    author: "Dr. Priya Nair",
    initials: "PN",
    avatarBg: "#0D1F3C",
    readTime: "7 min read",
  },
  {
    emoji: "✨",
    likes: 317,
    comments: 82,
    category: "Stories",
    title: "From feeling invisible to finding a voice — my Mindsphere story",
    author: "Anonymous",
    initials: "AN",
    avatarBg: "#5A6B84",
    readTime: "8 min read",
  },
];

export default function Blog() {
  return (
    <section className="bg-off-white py-24 px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-background border border-border rounded-2xl p-6 md:p-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-accent fill-none"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span className="font-serif text-lg font-light text-foreground">Our Blogs</span>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              View All →
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
              >
                {/* Cover */}
                <div className="aspect-video bg-gradient-to-br from-soft-grey to-accent-light flex items-center justify-center">
                  <span className="text-4xl opacity-30">{post.emoji}</span>
                </div>

                {/* Meta Row */}
                <div className="flex items-center gap-3.5 px-4 pt-2.5">
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 stroke-current fill-none"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                    </svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 stroke-current fill-none"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    {post.comments}
                  </span>
                </div>

                {/* Body */}
                <div className="px-4 py-3 pb-4">
                  <div className="text-[0.68rem] font-medium tracking-[0.08em] uppercase text-accent mb-1.5">
                    {post.category}
                  </div>
                  <div className="font-serif text-[0.95rem] font-normal text-foreground leading-snug mb-3">
                    {post.title}
                  </div>
                  <div className="flex items-center gap-2 pt-2.5 border-t border-border">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[0.65rem] font-medium text-white flex-shrink-0"
                      style={{ backgroundColor: post.avatarBg }}
                    >
                      {post.initials}
                    </div>
                    <div className="text-xs text-secondary font-light">{post.author}</div>
                    <div className="text-xs text-muted ml-auto">{post.readTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
