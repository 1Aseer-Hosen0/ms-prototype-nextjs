import { Heart, MessageCircle, Share, Flag } from 'lucide-react';

export default function ActivityFeed() {
  return (
    <div className="space-y-5">
      {/* Activity Title */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-xl font-normal text-[#0D1F3C] flex items-center gap-2.5">
          <Heart size={32} className="bg-[#0D1F3C] text-white rounded-lg p-2" />
          Recent Activity
        </h3>
        <a href="#" className="text-sm text-[#5A6B84] font-normal flex items-center gap-1 border-b border-[rgba(13,31,60,0.15)] pb-px hover:text-[#0D1F3C] hover:border-[#0D1F3C]">
          View all →
        </a>
      </div>

      {/* Activity Items */}
      <div className="bg-white border border-[rgba(13,31,60,0.08)] rounded-2xl p-7 shadow-sm">
        <div className="flex gap-3.5 pb-3.5 border-b border-[rgba(13,31,60,0.08)]">
          <div className="w-8.5 h-8.5 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Heart size={14} />
          </div>
          <div className="flex-1">
            <p className="text-sm text-[#0D1F3C] font-light leading-relaxed">
              <strong className="font-medium">You</strong> completed your weekly wellness check-in
            </p>
            <p className="text-xs text-[#8A99AE] font-light mt-0.75">2 days ago</p>
          </div>
        </div>

        <div className="flex gap-3.5 py-3.5 border-b border-[rgba(13,31,60,0.08)]">
          <div className="w-8.5 h-8.5 rounded-full bg-gray-100 text-[#5A6B84] flex items-center justify-center flex-shrink-0 mt-0.5">
            <MessageCircle size={14} />
          </div>
          <div className="flex-1">
            <p className="text-sm text-[#0D1F3C] font-light leading-relaxed">
              <strong className="font-medium">You</strong> commented on a community post
            </p>
            <p className="text-xs text-[#8A99AE] font-light mt-0.75">5 days ago</p>
          </div>
        </div>

        <div className="flex gap-3.5 py-3.5 border-b border-[rgba(13,31,60,0.08)]">
          <div className="w-8.5 h-8.5 rounded-full bg-gray-100 text-[#5A6B84] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Heart size={14} />
          </div>
          <div className="flex-1">
            <p className="text-sm text-[#0D1F3C] font-light leading-relaxed">
              <strong className="font-medium">You</strong> joined the Mindfulness Group
            </p>
            <p className="text-xs text-[#8A99AE] font-light mt-0.75">1 week ago</p>
          </div>
        </div>

        <div className="flex gap-3.5 py-3.5">
          <div className="w-8.5 h-8.5 rounded-full bg-gray-100 text-[#5A6B84] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Share size={14} />
          </div>
          <div className="flex-1">
            <p className="text-sm text-[#0D1F3C] font-light leading-relaxed">
              <strong className="font-medium">You</strong> shared an article with the community
            </p>
            <p className="text-xs text-[#8A99AE] font-light mt-0.75">2 weeks ago</p>
          </div>
        </div>
      </div>

      {/* Report Link */}
      <a href="#" className="inline-flex items-center gap-1.25 text-xs text-[#8A99AE] font-light hover:text-[#EF4444] transition-colors mt-6">
        <Flag size={12} />
        Report profile
      </a>
    </div>
  );
}
