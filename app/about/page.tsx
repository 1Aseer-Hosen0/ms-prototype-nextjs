import Navbar from '@/components/home/Navbar'
import HeroAbout from '@/components/about/HeroAbout'
import Story from '@/components/about/Story'
import WhatWeDo from '@/components/about/WhatWeDo'
import ImpactStats from '@/components/about/ImpactStats'

export const metadata = {
  title: 'About — Mindsphere',
  description: 'Learn about Mindsphere\'s mission to create a supportive mental health community',
}

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroAbout />
      <Story />
      <WhatWeDo />
      <ImpactStats />
    </div>
  )
}
