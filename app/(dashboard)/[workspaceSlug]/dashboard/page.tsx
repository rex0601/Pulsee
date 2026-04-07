import { CheckCircle, XCircle, AlertTriangle, Clock } from 'lucide-react';

const mockMonitors = [
  { name: 'Conma Website', url: 'https://conma.ai', status: 'up', uptime: '99.98%', latency: '124ms' },
  { name: 'Conma API', url: 'https://conma.ai/api/health', status: 'up', uptime: '99.95%', latency: '89ms' },
  { name: 'Chaton Website', url: 'https://chaton.kr', status: 'down', uptime: '98.20%', latency: '—' },
  { name: 'Marcomm Dashboard', url: 'https://marcomm.digitalog.ai', status: 'up', uptime: '100%', latency: '201ms' },
  { name: 'Messageon API', url: 'https://api.messageon.io', status: 'degraded', uptime: '99.50%', latency: '4200ms' },
];

function StatusDot({ status }: { status: string }) {
  const colors = { up: 'bg-green-500', down: 'bg-red-500', degraded: 'bg-amber-500' };
  return <span className={`w-2.5 h-2.5 rounded-full ${colors[status as keyof typeof colors] || 'bg-gray-400'}`} />;
}

function UptimeBar() {
  const days = Array.from({ length: 30 }, () => Math.random() > 0.05 ? 'up' : Math.random() > 0.5 ? 'degraded' : 'down');
  return (
    <div className="flex gap-px h-8">
      {days.map((d, i) => (
        <div
          key={i}
          className={`flex-1 rounded-[2px] uptime-bar ${d === 'up' ? 'bg-green-400' : d === 'degraded' ? 'bg-amber-400' : 'bg-red-400'}`}
          title={`Day ${30 - i}: ${d}`}
        />
      ))}
    </div>
  );
}

export default function DashboardPage() {
  const upCount = mockMonitors.filter((m) => m.status === 'up').length;
  const downCount = mockMonitors.filter((m) => m.status === 'down').length;
  const degradedCount = mockMonitors.filter((m) => m.status === 'degraded').length;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Monitors', value: mockMonitors.length, icon: Clock, color: 'text-gray-600' },
          { label: 'Operational', value: upCount, icon: CheckCircle, color: 'text-green-600' },
          { label: 'Degraded', value: degradedCount, icon: AlertTriangle, color: 'text-amber-600' },
          { label: 'Down', value: downCount, icon: XCircle, color: 'text-red-600' },
        ].map((s, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-2">
              <s.icon className={`w-4 h-4 ${s.color}`} />
              <span className="text-[12px] font-medium text-gray-500">{s.label}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Monitor List */}
      <div className="space-y-3">
        <h2 className="text-[15px] font-semibold text-gray-900">Monitors</h2>
        {mockMonitors.map((m, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-5 hover:border-gray-300 transition-all cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3 min-w-0">
                <StatusDot status={m.status} />
                <div className="min-w-0">
                  <div className="text-[15px] font-semibold text-gray-900">{m.name}</div>
                  <div className="text-[12px] text-gray-400 truncate">{m.url}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <div className="text-right">
                  <div className={`text-sm font-bold ${m.status === 'up' ? 'text-green-600' : m.status === 'degraded' ? 'text-amber-600' : 'text-red-600'}`}>
                    {m.uptime}
                  </div>
                  <div className="text-[11px] text-gray-400">uptime</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-700">{m.latency}</div>
                  <div className="text-[11px] text-gray-400">latency</div>
                </div>
              </div>
            </div>
            <UptimeBar />
          </div>
        ))}
      </div>

      {/* Recent Incidents */}
      <div className="space-y-3">
        <h2 className="text-[15px] font-semibold text-gray-900">Recent Incidents</h2>
        <div className="rounded-lg border border-gray-200 bg-white divide-y divide-gray-100">
          {[
            { title: 'Chaton Website Down', status: 'Investigating', time: '5 minutes ago', color: 'bg-red-100 text-red-700' },
            { title: 'Messageon API High Latency', status: 'Monitoring', time: '2 hours ago', color: 'bg-amber-100 text-amber-700' },
            { title: 'Conma API Degraded Performance', status: 'Resolved', time: '1 day ago', color: 'bg-green-100 text-green-700' },
          ].map((inc, i) => (
            <div key={i} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div>
                <div className="text-[14px] font-medium text-gray-900">{inc.title}</div>
                <div className="text-[12px] text-gray-400 mt-0.5">{inc.time}</div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${inc.color}`}>
                {inc.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
