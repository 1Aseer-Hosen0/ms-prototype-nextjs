'use client';

import Link from 'next/link';
import { SignupForm } from '@/components/auth/SignupForm';
import { AuthPanel } from '@/components/auth/AuthPanel';
import { BackgroundOrbs } from '@/components/auth/BackgroundOrbs';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#F3F6FB] flex items-center justify-center p-5 sm:p-8 relative overflow-hidden">
      <BackgroundOrbs />

      <main className="relative z-10 w-full max-w-[980px] bg-white rounded-[26px] shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-in fade-in zoom-in-95 duration-600">
        {/* Left: Visual Panel - Hidden on mobile */}
        <AuthPanel
          title="Join Mindsphere Today"
          description="A safe space built by teens, for teens. You are never alone on this journey."
          imagePosition="signup"
          className="hidden md:flex md:rounded-l-[26px]"
        />

        {/* Right: Form Section */}
        <section className="p-11 md:p-11 flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-7">
            <div className="w-8.5 h-8.5 bg-[#0D1F3C] rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
              </svg>
            </div>
            <span className="font-[Fraunces] text-[1.05rem] font-normal text-[#0D1F3C] tracking-tight">
              Mind<span className="text-[#3B82C4]">sphere</span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-[Fraunces] text-[1.85rem] font-normal text-[#0D1F3C] tracking-tight leading-tight mb-1.5">
            Create Account
          </h1>
          <p className="text-sm text-[#8A99AE] font-light mb-6.5">Fill in the details below to get started</p>

          {/* Form */}
          <SignupForm />

          {/* Bottom Text */}
          <p className="mt-auto pt-5 text-center text-xs text-[#8A99AE]">
            Already have an account?{' '}
            <Link href="/login" className="text-[#0D1F3C] font-medium hover:text-[#3B82C4] transition-colors">
              Sign In
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
