'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 px-6 ${
          isScrolled ? 'scrolled' : ''
        }`}
      >
        <div
          className={`max-w-[1100px] mx-auto flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'bg-[rgba(13,31,60,0.88)] backdrop-blur-[24px] rounded-full px-6 py-3 shadow-lg mt-3'
              : 'px-7 py-[18px]'
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`font-serif text-xl font-semibold letter-spacing-tight transition-colors ${
              isScrolled ? 'text-white' : 'text-[#0D1F3C]'
            }`}>
              Mind<span className="text-[#3B82C4]">sphere</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none">
              {['About', 'Features', 'Blog', 'Community'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm font-normal transition-colors relative group ${
                      isScrolled
                        ? 'text-[rgba(255,255,255,0.7)] hover:text-white'
                        : 'text-[#5A6B84] hover:text-[#0D1F3C]'
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-[-4px] left-0 right-0 h-[1.5px] bg-[#3B82C4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Theme button */}
            <button
              className={`w-9 h-9 rounded-full border flex items-center justify-center text-sm transition-all ${
                isScrolled
                  ? 'border-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.7)] hover:bg-transparent'
                  : 'border-[rgba(13,31,60,0.16)] text-[#5A6B84] hover:bg-[#EEF2F7] hover:text-[#0D1F3C]'
              }`}
            >
              ☀️
            </button>

            {/* Sign in button */}
            <button
              className={`hidden md:block text-sm font-medium px-[22px] py-[9px] rounded-full transition-all ${
                isScrolled
                  ? 'bg-[#3B82C4] text-white'
                  : 'bg-[#0D1F3C] text-white'
              } hover:opacity-85 hover:translate-y-[-1px]`}
            >
              Sign in
            </button>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden flex flex-col gap-[5px] w-9 h-9 items-center justify-center cursor-pointer bg-transparent border-none p-1`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span
                className={`block w-[22px] h-[2px] rounded bg-[#0D1F3C] transition-all transform-origin-center ${
                  isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                } ${isScrolled ? 'bg-white' : ''}`}
              ></span>
              <span
                className={`block w-[22px] h-[2px] rounded bg-[#0D1F3C] transition-all ${
                  isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                } ${isScrolled ? 'bg-white' : ''}`}
              ></span>
              <span
                className={`block w-[22px] h-[2px] rounded bg-[#0D1F3C] transition-all transform-origin-center ${
                  isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                } ${isScrolled ? 'bg-white' : ''}`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-[rgba(13,31,60,0.97)] backdrop-blur-[20px] flex flex-col items-center justify-center gap-2">
          {['About', 'Features', 'Blog', 'Community'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-serif text-4xl font-light text-[rgba(255,255,255,0.8)] py-3 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-6 px-10 py-3 bg-[#3B82C4] text-white rounded-full text-base font-medium hover:opacity-90">
            Sign in
          </button>
        </div>
      )}
    </>
  )
}
