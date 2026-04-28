'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      id: 0,
      q: 'Is my privacy protected on Mindsphere?',
      a: 'Yes, we prioritize your privacy with end-to-end encryption and strict data policies. Your information is never shared without consent.',
    },
    {
      id: 1,
      q: 'Can I be anonymous in the community?',
      a: 'Absolutely! You can create a profile with any name you choose and adjust privacy settings to control who sees your information.',
    },
    {
      id: 2,
      q: 'Are there professional resources available?',
      a: 'Yes, we partner with mental health professionals who provide guidance and crisis resources for members who need additional support.',
    },
    {
      id: 3,
      q: 'How do I report harmful content?',
      a: 'Click the report button on any post or comment. Our moderation team reviews reports within 24 hours to maintain a safe space.',
    },
    {
      id: 4,
      q: 'Is Mindsphere completely free?',
      a: 'Our basic community features are free. We offer optional premium features for enhanced support and exclusive content.',
    },
  ];

  return (
    <section id="faq" className="py-[100px_5%] bg-[#F7F9FC]">
      <div className="s-inner max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="faq-inner-wrap max-w-[680px] mx-auto">
          <div className="faq-header text-center mb-12">
            <h2 className="s-title text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-snug text-[#0D1F3C] mb-2">
              Frequently asked <em className="italic text-[#3B82C4]">questions</em>
            </h2>
            <p className="text-[0.9rem] text-[#8A99AE] font-light leading-relaxed">
              Find answers to common questions about Mindsphere and how to get the most out of our community.
            </p>
          </div>

          {/* FAQ List */}
          <div className="faq-list flex flex-col gap-2.5 mb-10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item overflow-hidden transition-all duration-300 ${openFaq === faq.id ? 'open rounded-2xl' : 'rounded-full'}`}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className={`faq-q w-full flex items-center justify-between gap-4 px-5.5 py-4 bg-[#0D1F3C] text-white cursor-pointer font-normal text-[0.9rem] text-left transition-all duration-200 ${
                    openFaq === faq.id ? 'rounded-t-2xl' : 'rounded-full'
                  }`}
                >
                  {faq.q}
                  <span
                    className="faq-icon w-6.5 h-6.5 rounded-full border-[1.5px] border-[rgba(255,255,255,0.25)] flex items-center justify-center flex-shrink-0 text-base leading-none transition-transform duration-300 text-[rgba(255,255,255,0.7)]"
                    style={{
                      transform: openFaq === faq.id ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                {openFaq === faq.id && (
                  <div className="faq-a max-h-[300px] overflow-hidden transition-all duration-300 bg-white border border-[rgba(13, 31, 60, 0.08)] border-t-0 rounded-b-2xl p-5.5">
                    <div className="faq-a-inner flex items-start gap-3.5">
                      <div className="faq-a-avatar w-8 h-8 rounded-full bg-[#EBF3FB] flex items-center justify-center flex-shrink-0 text-[0.7rem] font-medium text-[#3B82C4]">
                        M
                      </div>
                      <p className="faq-a-text text-[0.875rem] text-[#5A6B84] leading-relaxed font-light">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="faq-footer flex gap-3 justify-center">
            <button className="btn-faq-filled text-[0.875rem] font-medium px-7 py-3 rounded-full bg-[#0D1F3C] text-white transition-all duration-200 hover:opacity-85">
              Browse Help Center
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
