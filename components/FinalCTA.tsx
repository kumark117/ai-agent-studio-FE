'use client'

import Icon from './Icon'

interface FinalCTAProps {
  onDemoOpen: () => void
}

export default function FinalCTA({ onDemoOpen }: FinalCTAProps) {
  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
          <Icon name="sparkles" size={13} />
          Ready When You Are
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
          More Qualified Conversations.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            More Appointments.
          </span>
          <br />
          Less Manual Follow-Up.
        </h2>

        <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
          Starting at ₹25,000 setup + ₹9,999/month, backed by a 14-day functionality guarantee.
          Book a demo to see the full system live.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onDemoOpen}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base transition-all duration-200 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Book a Demo
            <Icon name="arrow-right" size={18} />
          </button>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white hover:bg-white/5 font-semibold text-base transition-all duration-200"
          >
            Review Pricing
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
          <span className="flex items-center gap-1.5"><Icon name="shield" size={14} className="text-cyan-500" /> 14-day guarantee</span>
          <span className="flex items-center gap-1.5"><Icon name="zap" size={14} className="text-cyan-500" /> Structured four-step rollout.</span>
          <span className="flex items-center gap-1.5"><Icon name="users" size={14} className="text-cyan-500" /> Expert-led setup</span>
        </div>
      </div>
    </section>
  )
}
