'use client';

import { useState, useEffect, useRef } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { Bell, User, LogOut } from 'lucide-react';

const pageTitles: Record<string, string> = {
  '/demo/dashboard': 'Dashboard',
  '/demo/monitors': 'Monitors',
  '/demo/incidents': 'Incidents',
  '/demo/settings': 'Settings',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const title = pageTitles[pathname || ''] || 'Dashboard';
  const userName = session?.user?.name || 'User';
  const userEmail = session?.user?.email || '';
  const userInitial = userName.charAt(0).toUpperCase();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center justify-between h-12 px-6 bg-white border-b border-gray-100 flex-shrink-0">
          <h1 className="text-[15px] font-semibold text-gray-900">{title}</h1>
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <button className="p-1.5 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-red-500" />
            </button>

            {/* Profile dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center hover:ring-2 hover:ring-brand-200 transition-all"
              >
                <span className="text-[10px] font-bold text-brand-600">{userInitial}</span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  {/* User info */}
                  <div className="px-4 py-2.5 border-b border-gray-100">
                    <div className="text-[13px] font-semibold text-gray-900">{userName}</div>
                    <div className="text-[11px] text-gray-400">{userEmail}</div>
                  </div>

                  {/* Menu items */}
                  <div className="py-1">
                    <Link
                      href="/demo/settings"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-[13px] text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <User className="w-3.5 h-3.5 text-gray-400" />
                      Profile Settings
                    </Link>
                    <button
                      onClick={() => signOut({ callbackUrl: '/login' })}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-[13px] text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5 text-red-400" />
                      Log out
                    </button>
                  </div>
                </div>
              )}
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
