export default function Footer() {
  return (
    <footer className="bg-[#0D1F3C] px-[5%] py-[72px_5%_32px]">
      <div className="footer-grid max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 mb-14">
        {/* Brand */}
        <div className="footer-brand">
          <h3 className="footer-logo text-xl font-semibold text-white mb-3 tracking-tight">
            Mind<span className="text-[#3B82C4]">sphere</span>
          </h3>
          <p className="footer-tagline text-[0.82rem] text-[rgba(255,255,255,0.45)] font-light leading-relaxed max-w-[220px] mb-6">
            A supportive community where every teen&apos;s voice matters and mental wellness is a priority.
          </p>
          <div className="footer-social flex gap-2">
            <a href="#" className="footer-social-icon w-9 h-9 rounded-lg bg-[rgba(59,130,196,0.1)] flex items-center justify-center text-[#3B82C4] hover:bg-[#3B82C4] hover:text-white transition-all duration-200">
              f
            </a>
            <a href="#" className="footer-social-icon w-9 h-9 rounded-lg bg-[rgba(59,130,196,0.1)] flex items-center justify-center text-[#3B82C4] hover:bg-[#3B82C4] hover:text-white transition-all duration-200">
              𝕏
            </a>
            <a href="#" className="footer-social-icon w-9 h-9 rounded-lg bg-[rgba(59,130,196,0.1)] flex items-center justify-center text-[#3B82C4] hover:bg-[#3B82C4] hover:text-white transition-all duration-200">
              in
            </a>
          </div>
        </div>

        {/* Links - Product */}
        <div>
          <h4 className="footer-col-title text-sm font-medium text-white mb-5">Product</h4>
          <ul className="space-y-3">
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Security</a></li>
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Roadmap</a></li>
          </ul>
        </div>

        {/* Links - Company */}
        <div>
          <h4 className="footer-col-title text-sm font-medium text-white mb-5">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Links - Legal */}
        <div>
          <h4 className="footer-col-title text-sm font-medium text-white mb-5">Legal</h4>
          <ul className="space-y-3">
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Privacy</a></li>
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Terms</a></li>
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Cookies</a></li>
            <li><a href="#" className="footer-link text-[0.85rem] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Accessibility</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom max-w-[1100px] mx-auto pt-8 border-t border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="footer-copy text-[0.8rem] text-[rgba(255,255,255,0.35)]">
            © 2024 Mindsphere. All rights reserved.
          </p>
          <div className="footer-bottom-links flex gap-6">
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.35)] hover:text-white transition-colors">Status</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.35)] hover:text-white transition-colors">Changelog</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
