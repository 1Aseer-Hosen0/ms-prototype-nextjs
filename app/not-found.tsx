import Background from '@/components/not-found/Background';
import Navbar from '@/components/not-found/Navbar';
import NotFoundContent from '@/components/not-found/NotFoundContent';
import Footer from '@/components/not-found/Footer';

export const metadata = {
  title: 'Page Not Found — Mindsphere',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col bg-soft dark:bg-slate-950 text-navy dark:text-white overflow-x-hidden transition-colors duration-300">
      <Background />
      <Navbar />
      <NotFoundContent />
      <Footer />
    </div>
  );
}
