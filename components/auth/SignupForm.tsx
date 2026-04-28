'use client';

import { useState, useCallback } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type PasswordStrength = 'weak' | 'fair' | 'strong' | 'none';

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>('none');

  const calculatePasswordStrength = useCallback((pwd: string): PasswordStrength => {
    if (!pwd) return 'none';
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score === 0) return 'weak';
    if (score <= 2) return 'fair';
    return 'strong';
  }, []);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(calculatePasswordStrength(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup
    console.log('Signup:', { fullName, dateOfBirth, email, password, termsAccepted });
  };

  const handleGoogleSignup = () => {
    // Handle Google signup
    console.log('Google signup clicked');
  };

  const strengthColors = {
    none: 'bg-[rgba(13,31,60,0.16)]',
    weak: 'bg-[#ef4444]',
    fair: 'bg-[#f59e0b]',
    strong: 'bg-[#10b981]',
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3.25" noValidate>
        {/* Name + DOB Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Full Name */}
          <div className="flex flex-col gap-0 relative">
            <label htmlFor="fullName" className="text-xs font-medium text-[#5A6B84] tracking-wide mb-1.25 pl-0.5">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
              autoComplete="name"
              required
              aria-label="Full name"
              className="w-full px-4.5 py-3.25 bg-[#EEF2F7] border-[1.5px] border-transparent rounded-[12px] font-normal text-sm text-[#0D1F3C] placeholder-[#8A99AE] outline-none transition-all duration-200 focus:bg-white focus:border-[#3B82C4] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.10)]"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col gap-0 relative">
            <label htmlFor="dob" className="text-xs font-medium text-[#5A6B84] tracking-wide mb-1.25 pl-0.5">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
              aria-label="Date of birth"
              className="w-full px-4.5 py-3.25 bg-[#EEF2F7] border-[1.5px] border-transparent rounded-[12px] font-normal text-sm text-[#0D1F3C] placeholder-[#8A99AE] outline-none transition-all duration-200 focus:bg-white focus:border-[#3B82C4] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.10)]"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-0 relative">
          <label htmlFor="email" className="text-xs font-medium text-[#5A6B84] tracking-wide mb-1.25 pl-0.5">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
            aria-label="Email address"
            className="w-full px-4.5 py-3.25 bg-[#EEF2F7] border-[1.5px] border-transparent rounded-[12px] font-normal text-sm text-[#0D1F3C] placeholder-[#8A99AE] outline-none transition-all duration-200 focus:bg-white focus:border-[#3B82C4] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.10)]"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-0 relative">
          <label htmlFor="password" className="text-xs font-medium text-[#5A6B84] tracking-wide mb-1.25 pl-0.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Create a password"
              autoComplete="new-password"
              required
              aria-label="Password"
              className="w-full px-4.5 py-3.25 pr-12 bg-[#EEF2F7] border-[1.5px] border-transparent rounded-[12px] font-normal text-sm text-[#0D1F3C] placeholder-[#8A99AE] outline-none transition-all duration-200 focus:bg-white focus:border-[#3B82C4] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.10)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A99AE] hover:text-[#5A6B84] transition-colors p-1 flex items-center justify-center"
            >
              {showPassword ? (
                <EyeOff className="w-4.5 h-4.5" />
              ) : (
                <Eye className="w-4.5 h-4.5" />
              )}
            </button>
          </div>

          {/* Password Strength Bar */}
          <div className="flex gap-1 mt-1.5" aria-label="Password strength">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`flex-1 h-0.75 rounded transition-colors duration-300 ${
                  passwordStrength === 'none'
                    ? strengthColors.none
                    : i === 0
                      ? strengthColors[passwordStrength]
                      : i === 1
                        ? ['fair', 'strong'].includes(passwordStrength)
                          ? strengthColors[passwordStrength]
                          : strengthColors.none
                        : passwordStrength === 'strong'
                          ? strengthColors.strong
                          : strengthColors.none
                }`}
              />
            ))}
          </div>
        </div>

        {/* Terms Checkbox */}
        <label className="flex items-start gap-2.5 text-xs text-[#8A99AE] leading-relaxed mt-1">
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
            aria-label="Agree to terms"
            className="w-4 h-4 mt-0.25 accent-[#0D1F3C] cursor-pointer flex-shrink-0"
          />
          <span>
            I agree to the{' '}
            <a href="#" className="text-[#3B82C4] no-underline hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#3B82C4] no-underline hover:underline">
              Privacy Policy
            </a>
          </span>
        </label>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full px-0 py-3.75 bg-[#0D1F3C] text-white rounded-[12px] font-medium text-sm md:text-base tracking-wide cursor-pointer transition-all duration-200 hover:bg-[#1A3560] hover:-translate-y-0.5 hover:shadow-lg active:scale-98"
        >
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3.5" role="separator">
          <div className="flex-1 h-px bg-[rgba(13,31,60,0.16)]" />
          <span className="text-xs text-[#8A99AE] whitespace-nowrap font-normal">or continue</span>
          <div className="flex-1 h-px bg-[rgba(13,31,60,0.16)]" />
        </div>

        {/* Google Signup Button */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full px-4.5 py-3.25 bg-white border-[1.5px] border-[rgba(13,31,60,0.16)] rounded-[12px] font-normal text-sm text-[#0D1F3C] cursor-pointer flex items-center justify-center gap-2.5 transition-all duration-200 hover:bg-[#EEF2F7] hover:-translate-y-0.25 hover:shadow-sm active:scale-99"
        >
          <svg className="w-4.5 h-4.5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Sign up with Google
        </button>
      </form>
    </>
  );
}
