'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Settings, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-400 ${
          isScrolled ? 'bg-[#0D1F3C]/90 backdrop-blur-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex items-center justify-between transition-all duration-400 ${
              isScrolled
                ? 'bg-[#0D1F3C]/90 backdrop-blur-2xl rounded-full p-2.5 px-6 shadow-2xl mt-3 mb-3'
                : 'py-3.5 px-7'
            }`}
          >
            {/* Logo */}
            <div className={`font-serif text-lg font-semibold transition-colors ${isScrolled ? 'text-white' : 'text-[#0D1F3C]'}`}>
              Mind<span className="text-[#3B82C4]">sphere</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7 list-none">
              <a href="#" className={`text-sm transition-colors relative group ${isScrolled ? 'text-white/65 hover:text-white' : 'text-[#5A6B84] hover:text-[#0D1F3C]'}`}>
                Dashboard
              </a>
              <a href="#" className={`text-sm transition-colors relative group ${isScrolled ? 'text-white/65 hover:text-white' : 'text-[#5A6B84] hover:text-[#0D1F3C]'}`}>
                Community
              </a>
              <a href="/profile" className={`text-sm transition-colors relative group ${isScrolled ? 'text-white/65 hover:text-white' : 'text-[#5A6B84] hover:text-[#0D1F3C]'}`}>
                Resources
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2.5">
              <button className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${isScrolled ? 'border-white/20 text-white/60' : 'border-[rgba(13,31,60,0.15)] text-[#8A99AE]'}`}>
                <Settings size={20} />
              </button>
              <div className="flex items-center gap-3 ml-2">
                <div className="hidden sm:flex flex-col items-end">
                  <div className={`text-sm font-medium transition-colors ${isScrolled ? 'text-white' : 'text-[#0D1F3C]'}`}>
                    Anika Sharma
                  </div>
                  <div className={`text-xs font-light ${isScrolled ? 'text-white/50' : 'text-[#8A99AE]'}`}>
                    User
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#0D1F3C] text-white flex items-center justify-center font-serif text-sm font-light border-2 border-white shadow-md">
                  A
                </div>
              </div>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D1F3C]/97 backdrop-blur-lg flex flex-col items-center justify-center gap-1.5 mt-16">
          <a href="#" className="font-serif text-3xl font-light text-white/75 hover:text-white py-2.5">
            Dashboard
          </a>
          <a href="#" className="font-serif text-3xl font-light text-white/75 hover:text-white py-2.5">
            Community
          </a>
          <a href="/profile" className="font-serif text-3xl font-light text-white/75 hover:text-white py-2.5">
            Profile
          </a>
          <button className="mt-5 px-9 py-3 bg-[#3B82C4] text-white rounded-full text-base font-medium">
            Settings
          </button>
        </div>
      )}
    </>
  );
}
