'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, LayoutDashboard, Radio, AlertTriangle, Globe, Settings, PanelLeftClose, PanelLeft, ArrowLeft, Bell, CreditCard, Users, Globe2 } from 'lucide-react';

const mainNav = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/demo/dashboard' },
  { icon: Radio, label: 'Monitors', href: '/demo/monitors' },
  { icon: AlertTriangle, label: 'Incidents', href: '/demo/incidents' },
  { icon: Globe, label: 'Status Page', href: '/s/demo' },
];

const settingsNav = [
  { icon: Settings, label: 'General', href: '/demo/settings?tab=general' },
  { icon: Users, label: 'Members', href: '/demo/settings?tab=members' },
  { icon: Bell, label: 'Notifications', href: '/demo/settings?tab=notifications' },
  { icon: Globe2, label: 'Custom Domain', href: '/demo/settings?tab=domain' },
  { icon: CreditCard, label: 'Billing', href: '/demo/settings?tab=billing' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const isSettingsPage = pathname?.includes('/settings');

  return (
    <aside className={`hidden md:flex flex-col h-screen bg-[#fafafa] border-r border-gray-200/60 sidebar-transition flex-shrink-0 ${collapsed ? 'w-[68px]' : 'w-[260px]'}`}>
      {/* Logo + Hamburger */}
      <div className={`flex items-center justify-between h-14 px-4 border-b border-gray-100`}>
        <div className={`flex items-center ${collapsed ? 'justify-center w-full' : 'gap-2.5'}`}>
          <Activity className="w-5 h-5 text-brand-500 shrink-0" />
          {!collapsed && <span className="text-[15px] font-bold tracking-tight">Pulsee</span>}
        </div>
        {!collapsed && (
          <button
            onClick={() => setCollapsed(true)}
            className="p-1.5 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <PanelLeftClose className="w-4 h-4" />
          </button>
        )}
        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            className="absolute left-[68px] top-4 -translate-x-1/2 z-10 p-1 rounded-full bg-white border border-gray-200 shadow-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            <PanelLeft className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Workspace selector */}
      {!isSettingsPage && (
        <div className="p-3">
          <div className={`w-full flex items-center gap-2.5 rounded-lg border border-gray-200/80 px-3 py-2 ${collapsed ? 'justify-center px-0' : ''}`}>
            <div className="w-7 h-7 rounded-md bg-brand-500 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-white">D</span>
            </div>
            {!collapsed && (
              <div className="flex-1 text-left min-w-0">
                <div className="text-[13px] font-semibold text-gray-900 truncate">Digitalog</div>
                <div className="text-[10px] text-gray-400">Pro Plan</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Settings header */}
      {isSettingsPage && !collapsed && (
        <div className="p-3">
          <div className="text-[13px] font-semibold text-gray-900 px-2.5 mb-1">Settings</div>
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto no-scrollbar">
        {isSettingsPage ? (
          /* Settings sub-menu */
          settingsNav.map((item) => {
            const isActive = pathname?.includes('/settings') && item.href.includes(new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '').get('tab') || 'general');
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`w-full flex items-center gap-2.5 h-9 rounded-md transition-all duration-150 ${
                  collapsed ? 'justify-center px-0' : 'px-2.5'
                } ${
                  isActive
                    ? 'bg-brand-500/5 text-brand-500 font-medium'
                    : 'text-gray-500 hover:bg-gray-100/60 hover:text-gray-900'
                }`}
              >
                <item.icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-brand-500' : 'text-gray-400'}`} />
                {!collapsed && <span className="text-[13px]">{item.label}</span>}
              </Link>
            );
          })
        ) : (
          /* Main nav */
          <>
            {mainNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/demo/dashboard' && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`w-full flex items-center gap-2.5 h-9 rounded-md transition-all duration-150 ${
                    collapsed ? 'justify-center px-0' : 'px-2.5'
                  } ${
                    isActive
                      ? 'bg-brand-500/5 text-brand-500 font-medium'
                      : 'text-gray-500 hover:bg-gray-100/60 hover:text-gray-900'
                  }`}
                >
                  <item.icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-brand-500' : 'text-gray-400'}`} />
                  {!collapsed && <span className="text-[13px]">{item.label}</span>}
                </Link>
              );
            })}
          </>
        )}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-gray-100">
        {isSettingsPage ? (
          /* Back button in settings */
          <Link
            href="/demo/dashboard"
            className={`w-full flex items-center gap-2.5 h-9 rounded-md text-gray-500 hover:bg-gray-100/60 hover:text-gray-900 transition-all ${collapsed ? 'justify-center px-0' : 'px-2.5'}`}
          >
            <ArrowLeft className="w-4 h-4 text-gray-400" />
            {!collapsed && <span className="text-[13px]">Back to Dashboard</span>}
          </Link>
        ) : (
          /* Settings button at bottom */
          <Link
            href="/demo/settings"
            className={`w-full flex items-center gap-2.5 h-9 rounded-md transition-all duration-150 ${
              collapsed ? 'justify-center px-0' : 'px-2.5'
            } text-gray-500 hover:bg-gray-100/60 hover:text-gray-900`}
          >
            <Settings className="w-4 h-4 text-gray-400" />
            {!collapsed && <span className="text-[13px]">Settings</span>}
          </Link>
        )}
      </div>
    </aside>
  );
}
