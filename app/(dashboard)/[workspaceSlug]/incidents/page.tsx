import { Plus, AlertTriangle } from 'lucide-react';

const incidents = [
  { title: 'Chaton Website Down', monitor: 'Chaton Website', status: 'Investigating', started: '2026-03-30 15:23', resolved: null, color: 'bg-red-100 text-red-700' },
  { title: 'Messageon API High Latency', monitor: 'Messageon API', status: 'Monitoring', started: '2026-03-30 13:05', resolved: null, color: 'bg-amber-100 text-amber-700' },
  { title: 'Conma API Degraded', monitor: 'Conma API', status: 'Resolved', started: '2026-03-29 09:12', resolved: '2026-03-29 09:24', color: 'bg-green-100 text-green-700' },
  { title: 'Marcomm Dashboard 502', monitor: 'Marcomm Dashboard', status: 'Resolved', started: '2026-03-28 22:45', resolved: '2026-03-28 22:51', color: 'bg-green-100 text-green-700' },
];

export default function IncidentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Incidents</h2>
        <button className="flex items-center gap-2 h-9 px-4 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-all active-scale shadow-sm shadow-purple-200">
          <Plus className="w-4 h-4" /> Report Incident
        </button>
      </div>

      {/* Active Incidents */}
      <div className="space-y-3">
        <h3 className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider">Active</h3>
        {incidents.filter(i => i.status !== 'Resolved').map((inc, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-5 hover:border-gray-300 transition-all cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <AlertTriangle className={`w-4 h-4 mt-0.5 ${inc.status === 'Investigating' ? 'text-red-500' : 'text-amber-500'}`} />
                <div>
                  <div className="text-[14px] font-semibold text-gray-900">{inc.title}</div>
                  <div className="text-[12px] text-gray-400 mt-0.5">Affecting: {inc.monitor} &middot; Started: {inc.started}</div>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${inc.color}`}>{inc.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Resolved */}
      <div className="space-y-3">
        <h3 className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider">Resolved</h3>
        {incidents.filter(i => i.status === 'Resolved').map((inc, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-5 hover:border-gray-300 transition-all cursor-pointer opacity-70">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[14px] font-medium text-gray-700">{inc.title}</div>
                <div className="text-[12px] text-gray-400 mt-0.5">{inc.monitor} &middot; {inc.started} — {inc.resolved}</div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${inc.color}`}>{inc.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
