'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light';
    setTheme(currentTheme);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 px-6 transition-all duration-400 ${
        scrolled
          ? 'bg-white/92 dark:bg-slate-950/92 backdrop-blur-[12px] border-b border-navy/8 dark:border-white/7'
          : ''
      }`}
      style={{
        background: scrolled ? 'rgba(247, 249, 252, 0.92)' : '',
        backdropFilter: scrolled ? 'blur(12px)' : '',
        borderBottom: scrolled ? '1px solid rgba(13, 31, 60, 0.08)' : '',
      }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between py-[18px]">
        <Link href="/" className="font-serif text-lg font-semibold text-navy dark:text-white tracking-tight">
          Mind<span className="text-blue-500">sphere</span>
        </Link>
        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-navy/15 dark:border-white/13 hover:bg-soft dark:hover:bg-slate-900 flex items-center justify-center text-sm text-navy/53 dark:text-white/42 transition-all duration-200"
          >
            {theme === 'light' ? '☀' : '☾'}
          </button>
          <Link
            href="/"
            className="text-sm font-medium px-[22px] py-[9px] bg-navy dark:bg-white text-white dark:text-navy rounded-full transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
          >
            Go Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
