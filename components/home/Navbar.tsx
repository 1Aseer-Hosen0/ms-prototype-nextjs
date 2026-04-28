'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
          isScrolled ? 'scrolled' : ''
        }`}
      >
        <div
          className={`nav-inner max-w-[1100px] mx-auto flex items-center justify-between px-7 py-[18px] transition-all duration-300 ${
            isScrolled
              ? 'bg-[rgba(13,31,60,0.88)] backdrop-blur-[24px] rounded-full px-6 py-3 shadow-lg mt-3'
              : ''
          }`}
        >
          {/* Logo */}
          <a href="#" className="nav-logo text-xl font-semibold text-[#0D1F3C] transition-colors duration-300">
            Mind<span className="text-[#3B82C4]">sphere</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links hidden md:flex items-center gap-8 list-none">
            <li>
              <a href="#about" className="text-sm font-normal text-[#5A6B84] transition-colors duration-200 relative">
                About
              </a>
            </li>
            <li>
              <a href="#blog" className="text-sm font-normal text-[#5A6B84] transition-colors duration-200 relative">
                Blog
              </a>
            </li>
            <li>
              <a href="#events" className="text-sm font-normal text-[#5A6B84] transition-colors duration-200 relative">
                Events
              </a>
            </li>
            <li>
              <a href="#faq" className="text-sm font-normal text-[#5A6B84] transition-colors duration-200 relative">
                FAQ
              </a>
            </li>
          </ul>

          {/* Right Actions */}
          <div className="nav-right flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-btn w-9 h-9 rounded-full border border-[rgba(13,31,60,0.16)] flex items-center justify-center text-[#5A6B84] transition-all duration-200"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hamburger md:hidden flex flex-col gap-1 w-9 h-9 items-center justify-center p-1"
            >
              <span className="block w-[22px] h-0.5 bg-[#0D1F3C] rounded transition-all duration-300"></span>
              <span className="block w-[22px] h-0.5 bg-[#0D1F3C] rounded transition-all duration-300"></span>
              <span className="block w-[22px] h-0.5 bg-[#0D1F3C] rounded transition-all duration-300"></span>
            </button>

            {/* Login Button */}
            <Link
              href="/login"
              className="btn-nav text-sm font-medium px-[22px] py-[9px] bg-[#0D1F3C] text-white rounded-full transition-all duration-200 hidden sm:inline-block"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-0 z-40 bg-[rgba(13,31,60,0.97)] backdrop-blur-[20px] flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <a href="#about" className="text-2xl font-light text-[rgba(255,255,255,0.8)] py-3">
          About
        </a>
        <a href="#blog" className="text-2xl font-light text-[rgba(255,255,255,0.8)] py-3">
          Blog
        </a>
        <a href="#events" className="text-2xl font-light text-[rgba(255,255,255,0.8)] py-3">
          Events
        </a>
        <a href="#faq" className="text-2xl font-light text-[rgba(255,255,255,0.8)] py-3">
          FAQ
        </a>
        <Link
          href="/login"
          className="mob-btn mt-6 px-10 py-3.5 bg-[#3B82C4] text-white rounded-full text-base font-medium"
        >
          Sign In
        </Link>
      </div>

      <style>{`
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 1.5px;
          background: #3B82C4;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s;
        }

        .nav-links a:hover::after {
          transform: scaleX(1);
        }

        .nav-links a:hover {
          color: #0D1F3C;
        }

        #navbar.scrolled .nav-logo {
          color: #fff;
        }

        #navbar.scrolled .nav-links a {
          color: rgba(255, 255, 255, 0.7);
        }

        #navbar.scrolled .nav-links a:hover {
          color: #fff;
        }

        #navbar.scrolled .btn-nav {
          background: #3B82C4;
        }

        #navbar.scrolled .theme-btn {
          border-color: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.7);
        }

        .theme-btn:hover {
          background: #EEF2F7;
          color: #0D1F3C;
        }

        #navbar.scrolled .hamburger span {
          background: #fff;
        }
      `}</style>
    </>
  );
}
