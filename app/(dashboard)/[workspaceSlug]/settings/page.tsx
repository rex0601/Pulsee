'use client';

import { useSearchParams } from 'next/navigation';

export default function SettingsPage() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'general';

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h3 className="text-[15px] font-semibold text-gray-900">General</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Workspace Name</label>
              <input defaultValue="Digitalog" className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Slug</label>
              <div className="flex items-center gap-0">
                <span className="h-11 px-3.5 flex items-center bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg text-sm text-gray-400">pulsee.io/s/</span>
                <input defaultValue="digitalog" className="flex-1 h-11 px-3.5 border border-gray-200 rounded-r-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Status Page Title</label>
              <input defaultValue="Digitalog Status" className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Status Page Theme</label>
              <div className="flex gap-3">
                {['light', 'dark'].map((theme) => (
                  <button key={theme} className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${theme === 'dark' ? 'border-brand-500 bg-brand-50 text-brand-600' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <button className="h-11 px-5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-all active-scale shadow-sm shadow-purple-200">
              Save Changes
            </button>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold text-gray-900">Team Members</h3>
              <button className="h-9 px-4 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-all active-scale shadow-sm shadow-purple-200">
                Invite
              </button>
            </div>
            {[
              { name: 'Alex Son', email: 'alex@digitalog.ai', role: 'Owner' },
              { name: 'Demo User', email: 'demo@digitalog.ai', role: 'Admin' },
            ].map((m, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                    <span className="text-[11px] font-bold text-brand-600">{m.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-gray-900">{m.name}</div>
                    <div className="text-[12px] text-gray-400">{m.email}</div>
                  </div>
                </div>
                <span className="text-[12px] font-medium text-gray-500">{m.role}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h3 className="text-[15px] font-semibold text-gray-900">Notifications</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slack Webhook</label>
              <p className="text-[12px] text-gray-400 mb-3">Get notified when incidents are detected or resolved.</p>
              <input placeholder="https://hooks.slack.com/services/..." className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <p className="text-[12px] text-gray-400 mb-3">Send email alerts to your team.</p>
              <input placeholder="team@company.com" className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
            </div>
            <button className="h-11 px-5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-all active-scale shadow-sm shadow-purple-200">
              Save Notifications
            </button>
          </div>
        )}

        {activeTab === 'domain' && (
          <div className="space-y-6">
            <h3 className="text-[15px] font-semibold text-gray-900">Custom Domain</h3>
            <p className="text-sm text-gray-500">Use your own domain for your public status page.</p>
            <input placeholder="status.yourcompany.com" className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
            <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
              <p className="text-[12px] font-semibold text-gray-700 mb-2">DNS Configuration</p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-3 text-[12px]">
                  <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-600">Type</span>
                  <span className="text-gray-500">CNAME</span>
                </div>
                <div className="flex items-center gap-3 text-[12px]">
                  <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-600">Name</span>
                  <span className="text-gray-500">status</span>
                </div>
                <div className="flex items-center gap-3 text-[12px]">
                  <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-600">Value</span>
                  <span className="text-gray-500">cname.vercel-dns.com</span>
                </div>
              </div>
            </div>
            <button className="h-11 px-5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-all active-scale shadow-sm shadow-purple-200">
              Verify Domain
            </button>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="space-y-6">
            <h3 className="text-[15px] font-semibold text-gray-900">Billing</h3>
            <div className="rounded-lg bg-brand-50 border border-brand-100 p-4 flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-brand-700">Pro Plan</span>
                <p className="text-[12px] text-brand-500 mt-0.5">30 monitors &middot; 1 min interval &middot; 30-day retention</p>
              </div>
              <span className="text-lg font-bold text-brand-700">$9/mo</span>
            </div>
            <button className="h-11 px-5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all active-scale">
              Manage Billing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
