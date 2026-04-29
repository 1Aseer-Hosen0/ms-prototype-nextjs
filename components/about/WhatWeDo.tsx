'use client'

interface Card {
  tag: string
  title: string
  body: string
  link: string
  num: number
}

const cards: Card[] = [
  {
    num: 1,
    tag: 'COMMUNITY',
    title: 'Foster Connections',
    body: 'Create safe spaces where people can openly discuss their mental health journeys and support one another.',
    link: 'Learn more',
  },
  {
    num: 2,
    tag: 'RESOURCES',
    title: 'Provide Education',
    body: 'Offer evidence-based content, expert guidance, and practical tools for mental wellness.',
    link: 'Learn more',
  },
  {
    num: 3,
    tag: 'SUPPORT',
    title: 'Enable Access',
    body: 'Connect members with professional resources and personalized support when they need it most.',
    link: 'Learn more',
  },
  {
    num: 4,
    tag: 'INNOVATION',
    title: 'Innovate Boldly',
    body: 'Leverage technology to make mental health support more accessible, personalized, and effective.',
    link: 'Learn more',
  },
  {
    num: 5,
    tag: 'ADVOCACY',
    title: 'Advocate Change',
    body: 'Work toward reducing stigma and advocating for better mental health policies and care.',
    link: 'Learn more',
  },
  {
    num: 6,
    tag: 'SUSTAINABILITY',
    title: 'Build Lasting',
    body: 'Create a sustainable model that supports long-term growth and impact for our community.',
    link: 'Learn more',
  },
]

export default function WhatWeDo() {
  return (
    <section className="px-[5%] py-[100px] bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[620px] mx-auto mb-[72px]">
          <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[#3B82C4] mb-3.5">
            Our Approach
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light tracking-[-0.025em] leading-[1.1] text-[#0D1F3C] mb-3.5">
            What we <em className="italic">do</em>
          </h2>
          <p className="text-[0.95rem] text-[#5A6B84] leading-[1.75] font-light">
            We combine community-driven support with professional expertise to create meaningful change in mental health.
          </p>
        </div>

        {/* Cards Grid - Row 1 */}
        <div className="grid grid-cols-3 gap-6 mb-20 relative">
          {cards.slice(0, 3).map((card) => (
            <CardItem key={card.num} card={card} />
          ))}
        </div>

        {/* Cards Grid - Row 2 */}
        <div className="grid grid-cols-3 gap-6 relative">
          {cards.slice(3, 6).map((card) => (
            <CardItem key={card.num} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CardItem({ card }: { card: Card }) {
  return (
    <div className="bg-white border border-[rgba(13,31,60,0.08)] rounded-2xl p-9 relative overflow-hidden transition-all duration-600 hover:shadow-[0_8px_48px_rgba(13,31,60,0.12)]">
      {/* Number background */}
      <div
        className="absolute top-[-16px] right-4 font-serif text-[8rem] font-semibold text-[#0D1F3C] opacity-[0.04] leading-none pointer-events-none select-none tracking-[-0.04em]"
      >
        {card.num}
      </div>

      {/* Tag */}
      <div className="inline-flex text-[0.65rem] font-medium tracking-[0.1em] uppercase text-[#3B82C4] bg-[#EBF3FB] px-2.5 py-1 rounded-full mb-4">
        {card.tag}
      </div>

      {/* Title */}
      <h3 className="font-serif text-[1.3rem] font-normal text-[#0D1F3C] mb-2.5 leading-[1.25]">
        {card.title}
      </h3>

      {/* Body */}
      <p className="text-[0.85rem] text-[#5A6B84] leading-[1.7] font-light mb-6">
        {card.body}
      </p>

      {/* Link */}
      <a
        href="#"
        className="inline-flex items-center gap-2.5 text-[0.82rem] font-medium text-[#5A6B84] hover:text-[#0D1F3C] transition-colors group"
      >
        {card.link}
        <div className="w-7 h-7 rounded-full border border-[rgba(13,31,60,0.15)] flex items-center justify-center text-[0.7rem] text-[#8A99AE] transition-all group-hover:bg-[#0D1F3C] group-hover:text-white group-hover:border-[#0D1F3C]">
          →
        </div>
      </a>
    </div>
  )
}
