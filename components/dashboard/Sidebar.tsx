import { BarChart3, MessageSquare, Settings, Bell, HelpCircle, LogOut } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  return (
    <div className="w-[268px] flex-shrink-0 sticky top-0 h-screen overflow-y-auto p-4 pt-24 border-r border-[rgba(13,31,60,0.08)] bg-white flex flex-col gap-1 rounded-t-3xl shadow-sm no-scrollbar">
      {/* User Card */}
      <div className="flex flex-col items-center pb-6 mb-2 border-b border-[rgba(13,31,60,0.08)]">
        <div className="w-16 h-16 rounded-full bg-[#0D1F3C] text-white flex items-center justify-center text-xl font-light font-serif border-4 border-white shadow-md box-border mb-2.5">
          A
        </div>
        <div className="text-sm font-medium text-[#0D1F3C] text-center mb-0.5">
          Anika Sharma
        </div>
        <div className="text-xs text-[#8A99AE] font-light text-center">
          Joined Jan 2024
        </div>
      </div>

      {/* Menu Sections */}
      <div className="flex-1">
        {/* Main Menu */}
        <div className="mb-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.75 rounded-md text-sm font-normal transition-all relative ${
                  isActive
                    ? 'bg-[#EBF3FB] text-[#0D1F3C] font-medium before:content-[""] before:absolute before:left-0 before:top-1/4 before:bottom-1/4 before:w-0.75 before:bg-[#3B82C4] before:rounded-r'
                    : 'text-[#5A6B84] hover:bg-[#F7F9FC] hover:text-[#0D1F3C]'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} strokeWidth={1.8} />
                </div>
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Logout Button */}
      <div className="pt-4 border-t border-[rgba(13,31,60,0.08)]">
        <button className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm text-[#EF4444] hover:bg-[#FEF2F2] transition-all">
          <LogOut size={16} strokeWidth={1.8} />
          Logout
        </button>
      </div>
    </div>
  );
}
