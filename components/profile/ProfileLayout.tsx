import { Mail, MapPin, Award } from 'lucide-react';
import ActivityFeed from './ActivityFeed';

export default function ProfileLayout() {
  return (
    <div className="max-w-6xl mx-auto px-5 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-8">
        {/* Sidebar */}
        <div>
          {/* Avatar Card */}
          <div className="bg-white border border-[rgba(13,31,60,0.08)] rounded-2xl p-7 text-center shadow-sm -mt-16 relative z-10">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0D1F3C] to-[#1E4D8C] text-white flex items-center justify-center font-serif text-5xl font-light border-4 border-white shadow-md box-border">
                A
              </div>
            </div>

            <div className="flex justify-center mb-1">
              <div className="w-4.5 h-4.5 rounded-full bg-[#10B981] border-3 border-white absolute bottom-12"></div>
            </div>

            <h2 className="font-serif text-2xl font-normal text-[#0D1F3C] mb-1">
              Anika Sharma
            </h2>
            <p className="text-sm text-[#8A99AE] font-light mb-3.5">
              @anika.sharma
            </p>

            <p className="text-sm text-[#5A6B84] font-light leading-relaxed mb-5 pb-5 border-b border-[rgba(13,31,60,0.08)]">
              Passionate about mental health awareness. Community member & advocate.
            </p>

            {/* Meta Info */}
            <div className="space-y-2.5 mb-5">
              <div className="flex items-center gap-2.5 text-sm text-[#5A6B84] font-light">
                <Mail size={14} className="text-[#8A99AE] flex-shrink-0" />
                anika.sharma@mindsphere.com
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#5A6B84] font-light">
                <MapPin size={14} className="text-[#8A99AE] flex-shrink-0" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#5A6B84] font-light">
                <Award size={14} className="text-[#8A99AE] flex-shrink-0" />
                Ambassador
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}
