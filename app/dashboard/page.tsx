'use client';

import { useState } from 'react';
import Navbar from '@/components/dashboard/Navbar';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardContent from '@/components/dashboard/DashboardContent';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Navbar />
      <div className="flex pt-[65px]">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <DashboardContent activeTab={activeTab} />
      </div>
    </div>
  );
}
