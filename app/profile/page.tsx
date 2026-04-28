'use client';

import Navbar from '@/components/profile/Navbar';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileLayout from '@/components/profile/ProfileLayout';
import Footer from '@/components/profile/Footer';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Navbar />
      <ProfileHero />
      <ProfileLayout />
      <Footer />
    </div>
  );
}
