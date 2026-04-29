"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#events", label: "Events" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-6 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          hidden ? "-translate-y-[110%]" : "translate-y-0"
        }`}
      >
        <div
          className={`max-w-[1100px] mx-auto flex items-center justify-between transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            scrolled
              ? "bg-[rgba(13,31,60,0.88)] backdrop-blur-[24px] rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(13,31,60,0.25)] mt-3"
              : "px-7 py-[18px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`font-serif text-xl font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-white" : "text-[var(--text-primary)]"
            }`}
          >
            mind<span className="text-[var(--accent)]">sphere</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-normal relative transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1.5px] after:bg-[var(--accent)] after:scale-x-0 after:origin-left after:transition-transform after:duration-250 hover:after:scale-x-100 ${
                    scrolled
                      ? "text-white/70 hover:text-white"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link
              href="/get-involved"
              className={`hidden sm:inline-flex text-[0.85rem] font-medium py-[9px] px-[22px] rounded-full transition-all duration-200 hover:opacity-85 hover:-translate-y-[1px] ${
                scrolled
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--navy)] text-white"
              }`}
            >
              Get Involved
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-full border flex items-center justify-center text-[0.95rem] transition-all duration-200 hover:bg-[var(--soft-grey)] ${
                scrolled
                  ? "border-white/20 text-white/70 hover:text-white"
                  : "border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col gap-[5px] w-9 h-9 items-center justify-center cursor-pointer bg-transparent border-none p-1"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-[22px] h-[2px] rounded-sm transition-all duration-300 origin-center ${
                  scrolled ? "bg-white" : "bg-[var(--text-primary)]"
                } ${mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block w-[22px] h-[2px] rounded-sm transition-all duration-300 origin-center ${
                  scrolled ? "bg-white" : "bg-[var(--text-primary)]"
                } ${mobileMenuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-[22px] h-[2px] rounded-sm transition-all duration-300 origin-center ${
                  scrolled ? "bg-white" : "bg-[var(--text-primary)]"
                } ${mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-[rgba(13,31,60,0.97)] backdrop-blur-[20px] flex flex-col items-center justify-center gap-2 transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-[2rem] font-light text-white/80 py-3 transition-colors duration-200 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/get-involved"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-6 py-[14px] px-10 bg-[var(--accent)] text-white rounded-full text-base font-medium"
        >
          Get Involved
        </Link>
      </div>
    </>
  )
}
