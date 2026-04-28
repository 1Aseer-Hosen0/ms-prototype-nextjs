export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: 'Wellness',
      title: 'Managing Anxiety in Your Daily Routine',
      author: 'Alex',
      avatar: 'A',
      readTime: '5 min',
      reactions: 28,
    },
    {
      id: 2,
      category: 'Stories',
      title: 'How I Found My Voice in the Community',
      author: 'Jordan',
      avatar: 'J',
      readTime: '8 min',
      reactions: 45,
    },
    {
      id: 3,
      category: 'Tips',
      title: 'Self-Care Practices That Actually Work',
      author: 'Casey',
      avatar: 'C',
      readTime: '6 min',
      reactions: 32,
    },
  ];

  return (
    <section id="blog" className="py-[100px_5%] bg-white">
      <div className="s-inner max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="s-label text-[0.72rem] font-medium tracking-widest uppercase text-[#3B82C4] block mb-3.5">Community Voices</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-snug text-[#0D1F3C] mb-4">
            Latest insights and <em className="italic text-[#3B82C4]">stories</em>
          </h2>
        </div>

        {/* Blog Wrap */}
        <div className="blog-wrap bg-[#F7F9FC] rounded-2xl p-12 border border-[rgba(13, 31, 60, 0.08)]">
          {/* Blog Head */}
          <div className="blog-head flex items-center justify-between mb-9 flex-wrap gap-4">
            <div className="blog-head-left flex items-center gap-2.5">
              <div className="blog-head-icon w-9 h-9 rounded-lg bg-[#0D1F3C] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4h12M2 8h12M2 12h12"/>
                </svg>
              </div>
              <h3 className="text-[1.3rem] font-normal text-[#0D1F3C]">Featured Articles</h3>
            </div>
            <a href="#" className="text-[0.85rem] font-medium text-[#5A6B84] inline-flex items-center gap-1 border-b border-[rgba(13, 31, 60, 0.08)] pb-0.5 transition-all duration-200 hover:text-[#0D1F3C] hover:border-[#0D1F3C]">
              View all →
            </a>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card bg-white border border-[rgba(13, 31, 60, 0.08)] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
                {/* Cover */}
                <div className="blog-cover bg-gradient-to-br from-[#EEF2F7] to-[#EBF3FB] overflow-hidden relative flex items-center justify-center" style={{ aspectRatio: '16/9' }}>
                  <div className="text-4xl opacity-30">📝</div>
                </div>

                {/* Body */}
                <div className="blog-body pt-3 px-4 pb-4">
                  {/* Reactions */}
                  <div className="blog-meta-row flex items-center gap-3.5 p-2.5 pt-0">
                    <div className="blog-react flex items-center gap-1 text-[0.75rem] text-[#8A99AE]">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6.5 1.5v10M1.5 6.5h10"/>
                      </svg>
                      {post.reactions}
                    </div>
                  </div>

                  {/* Category */}
                  <div className="blog-category text-[0.68rem] font-medium tracking-widest uppercase text-[#3B82C4] mb-1.5">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h4 className="blog-title font-normal text-[0.95rem] text-[#0D1F3C] leading-relaxed mb-3">
                    {post.title}
                  </h4>

                  {/* Author */}
                  <div className="blog-author flex items-center gap-2 pt-2.5 border-t border-[rgba(13, 31, 60, 0.08)]">
                    <div className="blog-avatar w-6.5 h-6.5 rounded-full bg-[#1E4D8C] flex items-center justify-center text-[0.65rem] font-medium text-white flex-shrink-0">
                      {post.avatar}
                    </div>
                    <div className="blog-author-name text-[0.75rem] text-[#5A6B84] font-light">
                      {post.author}
                    </div>
                    <div className="blog-read-time text-[0.72rem] text-[#8A99AE] ml-auto">
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
