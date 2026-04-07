import { Activity, CheckCircle } from 'lucide-react';

const mockMonitors = [
  { name: 'Website', uptime: '99.98%', status: 'up' },
  { name: 'API', uptime: '99.95%', status: 'up' },
  { name: 'Dashboard', uptime: '100%', status: 'up' },
  { name: 'Email Service', uptime: '99.90%', status: 'up' },
  { name: 'Webhooks', uptime: '100%', status: 'up' },
];

const incidents = [
  { date: 'Mar 30', title: 'API Latency Spike', status: 'Resolved', duration: '12 minutes' },
  { date: 'Mar 28', title: 'Scheduled Maintenance', status: 'Completed', duration: '30 minutes' },
];

function UptimeBar() {
  const days = Array.from({ length: 30 }, () => Math.random() > 0.03 ? 'up' : 'degraded');
  return (
    <div className="flex gap-[2px] h-8">
      {days.map((d, i) => (
        <div key={i} className={`flex-1 rounded-[2px] uptime-bar ${d === 'up' ? 'bg-green-500' : 'bg-amber-500'}`} />
      ))}
    </div>
  );
}

export default function PublicStatusPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 pt-12 pb-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">Digitalog Status</span>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-zinc-400 border border-zinc-800 rounded-lg hover:bg-zinc-900 hover:text-white transition-all">
          Subscribe
        </button>
      </header>

      {/* Overall Status */}
      <div className="max-w-3xl mx-auto px-6 mb-10">
        <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-6 flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-400" />
          <div>
            <div className="text-lg font-bold text-green-400">All Systems Operational</div>
            <div className="text-sm text-zinc-500 mt-0.5">We&apos;re not aware of any issues affecting our systems.</div>
          </div>
        </div>
      </div>

      {/* Monitors */}
      <div className="max-w-3xl mx-auto px-6 space-y-4 mb-16">
        {mockMonitors.map((m, i) => (
          <div key={i} className="rounded-lg bg-[#161618] border border-zinc-800 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[14px] font-medium text-zinc-200">{m.name}</span>
              </div>
              <span className="text-sm font-bold text-green-400">{m.uptime}</span>
            </div>
            <UptimeBar />
            <div className="flex justify-between mt-2 text-[10px] text-zinc-600">
              <span>30 days ago</span>
              <span>Today</span>
            </div>
          </div>
        ))}
      </div>

      {/* Incident History */}
      <div className="max-w-3xl mx-auto px-6 mb-16">
        <h2 className="text-lg font-bold text-zinc-200 mb-6">Incident History</h2>
        <div className="space-y-4">
          {incidents.map((inc, i) => (
            <div key={i} className="rounded-lg bg-[#161618] border border-zinc-800 p-5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[14px] font-medium text-zinc-200">{inc.title}</span>
                <span className="text-[11px] font-semibold text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full">{inc.status}</span>
              </div>
              <div className="text-[12px] text-zinc-500">{inc.date} &middot; Duration: {inc.duration}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-zinc-800/60">
        <div className="flex items-center justify-between text-[12px] text-zinc-600">
          <div className="flex items-center gap-1.5">
            Powered by <Activity className="w-3 h-3" /> <span className="font-semibold text-zinc-500">Pulsee</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
