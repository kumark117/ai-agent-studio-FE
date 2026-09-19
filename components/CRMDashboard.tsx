import Icon from './Icon'

const kpis = [
  { label: 'New Leads', value: '47', change: '+12 today', icon: 'trending-up', color: 'cyan' },
  { label: 'Qualified', value: '23', change: '49% qualify rate', icon: 'filter', color: 'blue' },
  { label: 'Appointments', value: '8', change: '3 this week', icon: 'calendar', color: 'violet' },
  { label: 'Follow-Ups Due', value: '14', change: 'Auto-scheduled', icon: 'refresh-cw', color: 'amber' },
]

const leads = [
  { name: 'Priya Sharma',  source: 'Website',    status: 'Qualified',         action: 'Book appointment',  statusColor: 'cyan' },
  { name: 'Rahul Mehta',  source: 'Instagram',   status: 'New Lead',          action: 'Start follow-up',   statusColor: 'blue' },
  { name: 'Sneha Patil',  source: 'WhatsApp',    status: 'Interested',        action: 'Send details',       statusColor: 'green' },
  { name: 'Amit Kumar',   source: 'Phone Call',  status: 'Appointment Booked',action: 'Prepare handoff',   statusColor: 'violet' },
  { name: 'Vikram Singh', source: 'Lead List',   status: 'Contacted',         action: 'Await response',    statusColor: 'amber' },
]

const stages = ['New Lead', 'Contacted', 'Interested', 'Qualified', 'Follow Up', 'Booked', 'Converted']

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  cyan:   { bg: 'bg-cyan-500/15',   text: 'text-cyan-300',   border: 'border-cyan-500/30' },
  blue:   { bg: 'bg-blue-500/15',   text: 'text-blue-300',   border: 'border-blue-500/30' },
  green:  { bg: 'bg-green-500/15',  text: 'text-green-300',  border: 'border-green-500/30' },
  violet: { bg: 'bg-violet-500/15', text: 'text-violet-300', border: 'border-violet-500/30' },
  amber:  { bg: 'bg-amber-500/15',  text: 'text-amber-300',  border: 'border-amber-500/30' },
}

const sourceIcons: Record<string, string> = {
  'Website': 'monitor',
  'Instagram': 'instagram',
  'WhatsApp': 'message-circle',
  'Phone Call': 'phone',
  'Lead List': 'list',
}

export default function CRMDashboard() {
  return (
    <section id="crm" className="bg-slate-900/50 py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            AI Lead CRM & Dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Every Lead. Full Context. One View.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A product-grade CRM built around your AI agents — tracking every lead from first touch to closed deal across all channels.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-white/8">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4 py-1 px-3 bg-slate-800 rounded text-xs text-slate-500 font-mono">
              app.aiagentstudio.com/crm/pipeline
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-48 bg-slate-900/80 border-r border-white/5 p-3 gap-1">
              {[
                { icon: 'layout-dashboard', label: 'Dashboard', active: true },
                { icon: 'users', label: 'Leads', active: false },
                { icon: 'calendar', label: 'Appointments', active: false },
                { icon: 'bar-chart', label: 'Reports', active: false },
                { icon: 'layers', label: 'Channels', active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    item.active ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-slate-500'
                  }`}
                >
                  <Icon name={item.icon} size={13} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-5 min-w-0">
              {/* KPI cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {kpis.map((kpi) => {
                  const c = colorMap[kpi.color]
                  return (
                    <div key={kpi.label} className="bg-slate-900 border border-white/8 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-500 font-medium">{kpi.label}</span>
                        <Icon name={kpi.icon} size={13} className={c.text} />
                      </div>
                      <div className={`text-2xl font-bold ${c.text} mb-1`}>{kpi.value}</div>
                      <div className="text-xs text-slate-600">{kpi.change}</div>
                    </div>
                  )
                })}
              </div>

              {/* Pipeline stages */}
              <div className="mb-5">
                <p className="text-xs text-slate-500 font-medium mb-2">Pipeline Overview</p>
                <div className="flex gap-1 overflow-x-auto pb-1">
                  {stages.map((stage, i) => (
                    <div
                      key={stage}
                      className="flex-1 min-w-[72px] px-2 py-1.5 bg-white/3 border border-white/6 rounded-lg text-center"
                      style={{ opacity: 1 - i * 0.08 }}
                    >
                      <div className="text-xs text-slate-400 font-medium leading-tight">{stage}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leads table */}
              <div>
                <p className="text-xs text-slate-500 font-medium mb-2">Recent Leads</p>
                <div className="bg-slate-900 border border-white/8 rounded-xl overflow-hidden">
                  {/* Table header */}
                  <div className="hidden sm:grid grid-cols-4 px-4 py-2.5 border-b border-white/5 text-xs text-slate-600 font-medium uppercase tracking-wider">
                    <span>Lead</span>
                    <span>Source</span>
                    <span>Status</span>
                    <span>Next Action</span>
                  </div>

                  {/* Lead rows */}
                  {leads.map((lead, i) => {
                    const c = colorMap[lead.statusColor]
                    return (
                      <div
                        key={lead.name}
                        className={`flex flex-col sm:grid sm:grid-cols-4 px-4 py-3 gap-1 sm:gap-0 ${
                          i < leads.length - 1 ? 'border-b border-white/5' : ''
                        } hover:bg-white/2 transition-colors`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0">
                            {lead.name[0]}
                          </div>
                          <span className="text-xs font-medium text-white truncate">{lead.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:pl-0 pl-8">
                          <Icon name={sourceIcons[lead.source] ?? 'globe'} size={11} className="text-slate-500" />
                          <span className="text-xs text-slate-500">{lead.source}</span>
                        </div>
                        <div className="pl-8 sm:pl-0">
                          <span className={`inline-block text-xs px-2 py-0.5 rounded-full border font-medium ${c.bg} ${c.text} ${c.border}`}>
                            {lead.status}
                          </span>
                        </div>
                        <div className="pl-8 sm:pl-0">
                          <span className="text-xs text-slate-400">{lead.action}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-700 mt-4">Illustrative dashboard — representative of actual product interface</p>
      </div>
    </section>
  )
}
