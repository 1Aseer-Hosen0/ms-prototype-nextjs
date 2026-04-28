import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D1F3C] px-5 py-14">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-lg font-semibold text-white mb-2">
              Mind<span className="text-[#3B82C4]">sphere</span>
            </div>
            <p className="text-xs text-white/40 font-light leading-relaxed max-w-32 mb-4.5">
              Supporting mental health and community wellbeing
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-7.5 h-7.5 rounded-full border border-white/10 flex items-center justify-center text-white/45 hover:border-white/40 hover:text-white transition-all text-xs">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-7.5 h-7.5 rounded-full border border-white/10 flex items-center justify-center text-white/45 hover:border-white/40 hover:text-white transition-all text-xs">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-7.5 h-7.5 rounded-full border border-white/10 flex items-center justify-center text-white/45 hover:border-white/40 hover:text-white transition-all text-xs">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-7.5 h-7.5 rounded-full border border-white/10 flex items-center justify-center text-white/45 hover:border-white/40 hover:text-white transition-all text-xs">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="text-xs font-medium tracking-widest uppercase text-white/30 mb-3">
              Product
            </div>
            <div className="flex flex-col gap-1.75">
              <a href="#" className="text-sm text-white/50 hover:text-white font-light transition-colors">
                Features
              </a>
              <a href="#" className="text-sm text-white/50 hover:text-white font-light transition-colors">
                Pricing
              </a>
              <a href="#" className="text-sm text-white/50 hover:text-white font-light transition-colors">
                Security
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-medium tracking-widest uppercase text-white/30 mb-3">
              Company
            </div>
            <div className="flex flex-col gap-1.75">
              <a href="#" className="text-sm text-white/50 hover:text-white font-light transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-white/50 hover:text-white font-light transition-colors">
                Blog
              </a>
              <a href="#" className="text-sm text-white/50 hover:text-white font-light transition-colors">
                Careers
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <div className="text-xs font-medium tracking-widest uppercase text-white/30 mb-3">
              Support
            </div>
            <div className="flex flex-col gap-1.75">
              <a href="#" className="text-sm text-white/50 hover:text-white font-light transition-colors">
                Help Center
              </a>
              <a href="#" className="text-sm text-white/50 hover:text-white font-light transition-colors">
                Contact
              </a>
              <a href="#" className="text-sm text-white/50 hover:text-white font-light transition-colors">
                Status
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-white/7 flex flex-col md:flex-row items-center justify-between gap-2.5">
          <p className="text-sm text-white/28 font-light">
            © 2024 Mindsphere. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-white/28 hover:text-white/60 font-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/28 hover:text-white/60 font-light transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-white/28 hover:text-white/60 font-light transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
