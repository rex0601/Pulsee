'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Activity, LayoutDashboard, Radio, AlertTriangle, Globe, Settings, ChevronLeft, ChevronRight, LogOut, ChevronDown } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/demo/dashboard' },
  { icon: Radio, label: 'Monitors', href: '/demo/monitors' },
  { icon: AlertTriangle, label: 'Incidents', href: '/demo/incidents' },
  { icon: Globe, label: 'Status Page', href: '/s/demo' },
  { icon: Settings, label: 'Settings', href: '/demo/settings' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const active = '/demo/dashboard';

  return (
    <aside className={`hidden md:flex flex-col h-screen bg-[#fafafa] border-r border-gray-200/60 sidebar-transition flex-shrink-0 ${collapsed ? 'w-[68px]' : 'w-[260px]'}`}>
      {/* Logo */}
      <div className={`flex items-center h-14 px-4 border-b border-gray-100 ${collapsed ? 'justify-center' : 'gap-2.5'}`}>
        <Activity className="w-5 h-5 text-brand-500 shrink-0" />
        {!collapsed && <span className="text-[15px] font-bold tracking-tight">Pulsee</span>}
      </div>

      {/* Workspace selector */}
      <div className="p-3">
        <button className={`w-full flex items-center gap-2.5 rounded-lg border border-gray-200/80 px-3 py-2 hover:bg-gray-100/60 transition-all ${collapsed ? 'justify-center px-0' : ''}`}>
          <div className="w-7 h-7 rounded-md bg-brand-500 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-white">D</span>
          </div>
          {!collapsed && (
            <>
              <div className="flex-1 text-left min-w-0">
                <div className="text-[13px] font-semibold text-gray-900 truncate">Digitalog</div>
                <div className="text-[10px] text-gray-400">Pro Plan</div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            </>
          )}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = active === item.href;
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
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-gray-100 space-y-1">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`w-full flex items-center gap-2.5 h-9 rounded-md text-gray-500 hover:bg-gray-100/60 hover:text-gray-900 transition-all ${collapsed ? 'justify-center px-0' : 'px-2.5'}`}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          {!collapsed && <span className="text-[13px]">Collapse</span>}
        </button>
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className={`w-full flex items-center gap-2.5 h-9 rounded-md text-gray-500 hover:bg-gray-100/60 hover:text-gray-900 transition-all ${collapsed ? 'justify-center px-0' : 'px-2.5'}`}
        >
          <LogOut className="w-4 h-4 text-gray-400" />
          {!collapsed && <span className="text-[13px]">Log out</span>}
        </button>
      </div>
    </aside>
  );
}
