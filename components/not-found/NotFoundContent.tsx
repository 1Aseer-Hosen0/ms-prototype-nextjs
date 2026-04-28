'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Heart,
  Users,
  BookOpen,
  Newspaper,
  Info,
  Plus,
  Home,
  ArrowRight,
} from 'lucide-react';

export default function NotFoundContent() {
  const [clickCount, setClickCount] = useState(0);

  const msgs = ['🌱', '💙', '✨', '🤝', '💬', '🧘', '🌿', '😌'];
  const currentEmoji = msgs[clickCount % msgs.length];

  const handleBrainClick = () => {
    setClickCount((prev) => prev + 1);
  };

  const quickLinks = [
    { href: '/support', label: 'Support', icon: Heart },
    { href: '/community', label: 'Community', icon: Users },
    { href: '/resources', label: 'Resources', icon: BookOpen },
    { href: '/blog', label: 'Blog', icon: Newspaper },
    { href: '/about', label: 'About', icon: Info },
    { href: '/get-involved', label: 'Get Involved', icon: Plus },
  ];

  return (
    <main className="flex-1 flex items-center justify-center px-[5%] py-[100px] pb-[60px] relative z-1 min-h-screen">
      <div className="max-w-[680px] w-full flex flex-col items-center text-center animate-fadeUp">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-navy/15 dark:border-white/13 rounded-full px-4 py-1.5 mb-5 bg-white dark:bg-slate-950 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-medium text-navy/70 dark:text-white/50">
            Error 404 · Page not found
          </span>
        </div>

        {/* Big 404 */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="font-serif text-[clamp(9rem,22vw,16rem)] font-light tracking-[-0.06em] leading-none text-transparent [-webkit-text-stroke:1.5px] [-webkit-text-stroke-color:rgba(13,31,60,.15)] dark:[-webkit-text-stroke-color:rgba(255,255,255,.13)] relative animate-fadeUp animation-delay-100">
            4
            <span className="font-serif [-webkit-text-stroke-color:rgb(59,130,196)] dark:[-webkit-text-stroke-color:rgb(91,155,213)] italic">
              0
              <span
                onClick={handleBrainClick}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[48%] text-[clamp(2rem,5vw,4rem)] font-normal [-webkit-text-stroke:0] text-blue-500 cursor-pointer select-none transition-transform duration-250"
                style={{
                  transform: `translate(-50%, -48%) ${
                    clickCount > 0
                      ? 'scale(1.4)'
                      : ''
                  }`,
                }}
              >
                {currentEmoji}
              </span>
            </span>
            4
          </div>
          <div className="absolute h-0.5 w-[105%] bg-gradient-to-r from-transparent via-navy/15 dark:via-white/13 to-transparent top-1/2 left-[-2.5%] animate-fadeUp animation-delay-300" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-light tracking-[-0.03em] leading-tight text-navy dark:text-white mb-3.5 animate-fadeUp animation-delay-400">
          Looks like you've <em className="italic text-blue-500">wandered off</em>
          <br />
          the beaten path.
        </h1>

        {/* Subtext */}
        <p className="text-base text-navy/70 dark:text-white/50 font-light leading-7 max-w-[460px] mx-auto mb-10 animate-fadeUp animation-delay-500">
          The page you&apos;re looking for doesn&apos;t exist — it may have been moved, deleted, or maybe it never existed in the first place. It happens to everyone.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center flex-wrap mb-12 animate-fadeUp animation-delay-600">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy dark:bg-white text-white dark:text-navy font-medium text-sm rounded-full transition-all duration-250 hover:-translate-y-0.5 shadow-lg hover:shadow-2xl"
          >
            <Home size={16} />
            Take me home
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-navy/15 dark:border-white/13 text-navy dark:text-white font-normal text-sm rounded-full transition-all duration-250 hover:bg-navy dark:hover:bg-white hover:text-white dark:hover:text-navy"
          >
            <Heart size={16} />
            Go to Support
          </Link>
        </div>

        {/* Quick Links Label */}
        <div className="text-xs font-medium letter-spacing-[0.12em] uppercase text-navy/53 dark:text-white/42 mb-4 animate-fadeUp animation-delay-700">
          Or jump to
        </div>

        {/* Quick Links Grid */}
        <div className="flex flex-wrap gap-2 justify-center animate-fadeUp animation-delay-750">
          {quickLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-white dark:bg-slate-950 border border-navy/8 dark:border-white/7 text-navy/70 dark:text-white/50 text-sm font-normal rounded-[16px] transition-all duration-220 hover:-translate-y-0.5 hover:border-navy/15 dark:hover:border-white/13 hover:text-navy dark:hover:text-white shadow-sm hover:shadow-md"
            >
              <div className="w-7 h-7 rounded-[12px] bg-soft dark:bg-slate-900 flex items-center justify-center group-hover:bg-navy group-hover:text-white">
                <Icon size={13} strokeWidth={1.8} />
              </div>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
