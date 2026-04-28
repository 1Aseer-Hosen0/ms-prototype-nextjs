import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Blog from '@/components/home/Blog';
import Events from '@/components/home/Events';
import Testimonials from '@/components/home/Testimonials';
import JoinCTA from '@/components/home/JoinCTA';
import FAQ from '@/components/home/FAQ';
import Collab from '@/components/home/Collab';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/home/Footer';

export const metadata = {
  title: 'Mindsphere — Teens for teens, you are not alone',
  description: 'Join a supportive community where every teen\'s voice matters. Connect, share, and grow with peers who truly understand.',
};

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Events />
      <Testimonials />
      <JoinCTA />
      <FAQ />
      <Collab />
      <Newsletter />
      <Footer />
    </main>
  );
}
