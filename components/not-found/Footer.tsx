import Link from 'next/link';

export default function Footer() {
  return (
    <div className="relative z-1 text-center px-[5%] py-5 pb-8 text-xs text-navy/53 dark:text-white/42 font-light">
      © 2025 Mindsphere &nbsp;·&nbsp;
      <Link href="/privacy" className="text-navy/70 dark:text-white/50 transition-colors duration-200 hover:text-navy dark:hover:text-white">
        Privacy
      </Link>
      &nbsp;·&nbsp;
      <Link href="/terms" className="text-navy/70 dark:text-white/50 transition-colors duration-200 hover:text-navy dark:hover:text-white">
        Terms
      </Link>
      &nbsp;·&nbsp;
      <Link href="/get-involved" className="text-navy/70 dark:text-white/50 transition-colors duration-200 hover:text-navy dark:hover:text-white">
        Contact
      </Link>
    </div>
  );
}
