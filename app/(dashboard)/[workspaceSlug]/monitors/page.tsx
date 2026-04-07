import { Plus, Search } from 'lucide-react';

const monitors = [
  { name: 'Conma Website', url: 'https://conma.ai', status: 'up', uptime: '99.98%', interval: '1m', lastChecked: '12s ago' },
  { name: 'Conma API', url: 'https://conma.ai/api/health', status: 'up', uptime: '99.95%', interval: '1m', lastChecked: '8s ago' },
  { name: 'Chaton Website', url: 'https://chaton.kr', status: 'down', uptime: '98.20%', interval: '1m', lastChecked: '3s ago' },
  { name: 'Marcomm Dashboard', url: 'https://marcomm.digitalog.ai', status: 'up', uptime: '100%', interval: '3m', lastChecked: '1m ago' },
  { name: 'Messageon API', url: 'https://api.messageon.io', status: 'degraded', uptime: '99.50%', interval: '1m', lastChecked: '15s ago' },
];

export default function MonitorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Monitors</h2>
        <button className="flex items-center gap-2 h-9 px-4 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-all active-scale shadow-sm shadow-purple-200">
          <Plus className="w-4 h-4" /> Add Monitor
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input placeholder="Search monitors..." className="w-full h-10 pl-10 pr-4 border border-gray-200 rounded-lg text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 transition-all" />
      </div>

      {/* Table */}
      <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Monitor</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Uptime</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Interval</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Last Check</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {monitors.map((m, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors cursor-pointer">
                <td className="px-5 py-4">
                  <div className="text-[14px] font-medium text-gray-900">{m.name}</div>
                  <div className="text-[12px] text-gray-400">{m.url}</div>
                </td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                    m.status === 'up' ? 'bg-green-100 text-green-700' :
                    m.status === 'degraded' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      m.status === 'up' ? 'bg-green-500' : m.status === 'degraded' ? 'bg-amber-500' : 'bg-red-500'
                    }`} />
                    {m.status === 'up' ? 'Operational' : m.status === 'degraded' ? 'Degraded' : 'Down'}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm font-medium text-gray-700">{m.uptime}</td>
                <td className="px-5 py-4 text-sm text-gray-500">{m.interval}</td>
                <td className="px-5 py-4 text-sm text-gray-400">{m.lastChecked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
