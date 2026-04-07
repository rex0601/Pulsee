import Sidebar from '../components/Sidebar';
import { Bell } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center justify-between h-12 px-6 bg-white border-b border-gray-100 flex-shrink-0">
          <h1 className="text-[15px] font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-red-500" />
            </button>
            <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-[10px] font-bold text-gray-600">A</span>
            </div>
          </div>
        </header>
        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-[#F9FAFB] p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
