'use client'

import Icon from './Icon'

interface HeroProps {
  onDemoOpen: () => void
}

const channels = [
  { label: 'Website', icon: 'globe', color: 'text-cyan-400' },
  { label: 'Instagram', icon: 'instagram', color: 'text-pink-400' },
  { label: 'WhatsApp', icon: 'message-circle', color: 'text-green-400' },
  { label: 'Phone', icon: 'phone', color: 'text-violet-400' },
  { label: 'Lead Lists', icon: 'list', color: 'text-amber-400' },
]

export default function Hero({ onDemoOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950 pt-16">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
              <Icon name="sparkles" size={13} />
              AI-Powered Sales Automation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
              Your AI Sales Team{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Just Got Bigger
              </span>
              {' '}<br />
              <span className="text-slate-200">Without More Headcount</span>
            </h1>

            <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Nine connected AI agents capture every enquiry across Website, WhatsApp, Instagram, phone, and lead lists —
              then qualify, follow up, and book appointments while your team focuses on closing.
            </p>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-slate-500">
              <span className="flex items-center gap-1.5"><Icon name="check" size={14} className="text-cyan-400" /> 24/7 automated response</span>
              <span className="flex items-center gap-1.5"><Icon name="check" size={14} className="text-cyan-400" /> One connected CRM</span>
              <span className="flex items-center gap-1.5"><Icon name="check" size={14} className="text-cyan-400" /> 14-day guarantee</span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={onDemoOpen}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base transition-all duration-200 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Try Live Demo
                <Icon name="arrow-right" size={18} />
              </button>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-white hover:bg-white/5 font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Product visual */}
          <div className="relative flex justify-center lg:justify-end" aria-label="AI sales system diagram">
            <div className="relative w-full max-w-md">
              {/* Channels feeding into centre */}
              <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/50">
                {/* Channel inputs */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-3 text-center">Lead Sources</p>
                  <div className="flex justify-center gap-2 flex-wrap">
                    {channels.map((ch) => (
                      <div
                        key={ch.label}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/8 text-xs font-medium text-slate-300"
                      >
                        <Icon name={ch.icon} size={13} className={ch.color} />
                        {ch.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center my-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-6 bg-gradient-to-b from-cyan-500/60 to-transparent" />
                    <Icon name="arrow-down" size={16} className="text-cyan-400" />
                  </div>
                </div>

                {/* AI Layer */}
                <div className="bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-cyan-500/25 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <Icon name="sparkles" size={13} className="text-cyan-400" />
                    </div>
                    <span className="text-sm font-semibold text-white">AI Orchestration Layer</span>
                    <span className="ml-auto w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Qualify', 'Follow Up', 'Book'].map((stage) => (
                      <div key={stage} className="text-center py-1.5 px-2 rounded-lg bg-white/5 border border-white/8">
                        <span className="text-xs text-slate-300 font-medium">{stage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center my-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-6 bg-gradient-to-b from-blue-500/60 to-transparent" />
                    <Icon name="arrow-down" size={16} className="text-blue-400" />
                  </div>
                </div>

                {/* CRM Pipeline */}
                <div className="bg-slate-800/60 border border-white/8 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-white flex items-center gap-1.5">
                      <Icon name="layout-dashboard" size={14} className="text-blue-400" />
                      AI CRM Pipeline
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Priya Sharma', status: 'Qualified', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
                      { name: 'Rahul Mehta', status: 'Contacted', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
                      { name: 'Sneha Patil', status: 'Booked', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
                    ].map((lead) => (
                      <div key={lead.name} className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">{lead.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${lead.color}`}>
                          {lead.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-cyan-500/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Journey stages */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <p className="text-center text-xs text-slate-600 font-medium uppercase tracking-widest mb-6">The Sales Journey</p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-0">
            {['Capture', 'Contact', 'Qualify', 'Follow Up', 'Book', 'Convert'].map((stage, i, arr) => (
              <div key={stage} className="flex items-center">
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-xs font-semibold text-slate-300">
                  {stage}
                </span>
                {i < arr.length - 1 && (
                  <Icon name="arrow-right" size={14} className="text-slate-700 mx-1 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
