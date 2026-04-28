'use client';

import { Eye, EyeOff, Toggle2 } from 'lucide-react';
import { useState } from 'react';

interface DashboardContentProps {
  activeTab: string;
}

export default function DashboardContent({ activeTab }: DashboardContentProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="flex-1 min-w-0 px-12 py-11 pb-24 max-w-3xl">
      {/* Page Header */}
      <div className="mb-9">
        <h1 className="font-serif text-5xl font-light text-[#0D1F3C] leading-tight mb-1.5">
          Welcome, <em className="italic text-[#3B82C4]">Anika</em>
        </h1>
        <p className="text-sm text-[#5A6B84] font-light">
          Manage your profile and account settings
        </p>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white border border-[rgba(13,31,60,0.08)] rounded-2xl p-9 shadow-sm">
            <h2 className="font-serif text-xl font-normal text-[#0D1F3C] mb-1.5">
              Account Overview
            </h2>
            <p className="text-sm text-[#8A99AE] font-light mb-6">
              Here's a quick summary of your account
            </p>
            <div className="space-y-4 text-sm text-[#5A6B84]">
              <p>Email: anika.sharma@mindsphere.com</p>
              <p>Member since: January 15, 2024</p>
              <p>Last login: Today at 10:30 AM</p>
            </div>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white border border-[rgba(13,31,60,0.08)] rounded-2xl p-9 shadow-sm">
            <h2 className="font-serif text-xl font-normal text-[#0D1F3C] mb-6">
              Account Settings
            </h2>

            {/* Profile Section */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-[#5A6B84] mb-5">Profile Information</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#5A6B84] mb-1.75">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Anika Sharma"
                    className="w-full px-4 py-3.25 border-2 border-[rgba(13,31,60,0.15)] rounded-2xl text-sm text-[#0D1F3C] bg-white outline-none focus:border-[#3B82C4] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5A6B84] mb-1.75">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="anika.sharma@mindsphere.com"
                    className="w-full px-4 py-3.25 border-2 border-[rgba(13,31,60,0.15)] rounded-2xl text-sm text-[#0D1F3C] bg-white outline-none focus:border-[#3B82C4] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)] transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-[rgba(13,31,60,0.08)] my-6"></div>

            {/* Password Section */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-[#5A6B84] mb-5">Change Password</h3>
              <div className="relative mb-5">
                <label className="block text-sm font-medium text-[#5A6B84] mb-1.75">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="w-full px-4 py-3.25 border-2 border-[rgba(13,31,60,0.15)] rounded-2xl text-sm text-[#0D1F3C] bg-white outline-none focus:border-[#3B82C4] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)] transition-all"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A99AE] hover:text-[#5A6B84] flex items-center p-1"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5A6B84] mb-1.75">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3.25 border-2 border-[rgba(13,31,60,0.15)] rounded-2xl text-sm text-[#0D1F3C] bg-white outline-none focus:border-[#3B82C4] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)] transition-all"
                />
              </div>
            </div>

            <div className="h-px bg-[rgba(13,31,60,0.08)] my-6"></div>

            {/* Preferences Section */}
            <div>
              <h3 className="text-sm font-medium text-[#5A6B84] mb-4">Preferences</h3>
              <div className="flex items-center justify-between py-3.5">
                <div>
                  <div className="text-sm font-medium text-[#0D1F3C] mb-0.5">
                    Email Notifications
                  </div>
                  <div className="text-xs text-[#8A99AE] font-light">
                    Receive updates about your account
                  </div>
                </div>
                <div className="relative w-11 h-6 flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                    className="opacity-0 w-0 h-0 absolute"
                  />
                  <div
                    className={`absolute inset-0 rounded-full cursor-pointer transition-all ${
                      notifications ? 'bg-[#0D1F3C]' : 'bg-[#EEF2F7] border border-[rgba(13,31,60,0.15)]'
                    }`}
                  ></div>
                  <div
                    className={`absolute w-4.5 h-4.5 rounded-full bg-white top-0.5 left-0.5 transition-transform shadow-sm pointer-events-none ${
                      notifications ? 'translate-x-5' : ''
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button className="px-6 py-3 bg-[#0D1F3C] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all">
                Save Changes
              </button>
              <button className="px-6 py-3 border border-[rgba(13,31,60,0.15)] text-[#0D1F3C] rounded-full text-sm font-normal hover:bg-[#EEF2F7] transition-all">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white border border-[rgba(13,31,60,0.08)] rounded-2xl p-9 shadow-sm">
            <h2 className="font-serif text-xl font-normal text-[#0D1F3C] mb-1.5">
              Notification Preferences
            </h2>
            <p className="text-sm text-[#8A99AE] font-light mb-6">
              Control how you receive notifications
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium text-[#0D1F3C]">Email Notifications</div>
                  <div className="text-xs text-[#8A99AE] font-light">Receive email updates</div>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium text-[#0D1F3C]">Push Notifications</div>
                  <div className="text-xs text-[#8A99AE] font-light">Receive push alerts</div>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Help Tab */}
      {activeTab === 'help' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white border border-[rgba(13,31,60,0.08)] rounded-2xl p-9 shadow-sm">
            <h2 className="font-serif text-xl font-normal text-[#0D1F3C] mb-1.5">
              Help & Support
            </h2>
            <p className="text-sm text-[#8A99AE] font-light mb-6">
              Find answers and get help
            </p>
            <div className="space-y-3">
              <p className="text-sm text-[#5A6B84]">For support, contact us at support@mindsphere.com</p>
            </div>
          </div>
        </div>
      )}

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white border border-[rgba(13,31,60,0.08)] rounded-2xl p-9 shadow-sm">
            <h2 className="font-serif text-xl font-normal text-[#0D1F3C] mb-1.5">
              Messages
            </h2>
            <p className="text-sm text-[#8A99AE] font-light">
              No messages at this time
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
