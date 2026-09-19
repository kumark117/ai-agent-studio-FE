import Icon from './Icon'

const pains = [
  { icon: 'layers', title: 'Enquiries everywhere', text: 'Leads arrive across Instagram DMs, WhatsApp, your website, and phone — with no single place to track them.' },
  { icon: 'refresh-cw', title: 'Slow, inconsistent replies', text: 'Manual responses mean hours-long delays. Prospects move on before your team gets back to them.' },
  { icon: 'filter', title: 'Follow-up breaks down', text: 'Without automation, interested leads are forgotten. High-intent prospects slip through without a second touch.' },
  { icon: 'layers', title: 'Context gets lost', text: 'When leads reach your team, conversation history, qualification details, and intent signals are scattered or missing.' },
]

const outcomes = [
  { icon: 'check-circle', title: 'Every enquiry enters one workflow', text: 'All lead sources feed into a single, structured pipeline — no manual sorting required.' },
  { icon: 'check-circle', title: 'AI identifies intent and readiness', text: 'Structured questions and AI analysis score each lead and surface the highest-priority opportunities.' },
  { icon: 'check-circle', title: 'High-intent prospects move forward', text: 'Qualified leads are guided toward appointments and handed to your team with full context and recommended next actions.' },
]

export default function Problem() {
  return (
    <section id="problem" className="bg-slate-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Hidden Cost of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Fragmented Lead Management</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Most growing businesses lose qualified leads not because of bad products, but because of how enquiries are handled after they arrive.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {pains.map((pain) => (
            <div key={pain.title} className="bg-slate-900/60 border border-white/6 rounded-xl p-5 hover:border-rose-500/20 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 group-hover:bg-rose-500/15 transition-colors">
                <Icon name={pain.icon} size={18} className="text-rose-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{pain.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>

        {/* Divider arrow */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-slate-600 uppercase tracking-widest font-medium">AI Sales Agents changes this</p>
            <Icon name="arrow-down" size={20} className="text-cyan-500 animate-bounce" />
          </div>
        </div>

        {/* Outcomes */}
        <div className="grid sm:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <div key={outcome.title} className="relative bg-gradient-to-b from-slate-900 to-slate-900/50 border border-white/8 rounded-2xl p-7 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
                <Icon name="check-circle" size={20} className="text-cyan-400" />
              </div>
              <div className="text-xs text-cyan-500 font-semibold uppercase tracking-widest mb-2">0{i + 1}</div>
              <h3 className="text-base font-bold text-white mb-3">{outcome.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{outcome.text}</p>
            </div>
          ))}
        </div>

        {/* Benefits strip */}
        <div className="mt-16 grid sm:grid-cols-4 gap-3">
          {[
            { icon: 'zap', label: 'Faster responses', desc: 'AI replies within seconds, 24/7' },
            { icon: 'trending-up', label: 'Consistent conversations', desc: 'Every lead gets the same quality experience' },
            { icon: 'check', label: 'Fewer missed follow-ups', desc: 'Automated sequences keep no lead cold' },
            { icon: 'users', label: 'More productive sales team', desc: 'Human effort goes to high-intent prospects only' },
          ].map((b) => (
            <div key={b.label} className="flex gap-3 items-start p-4 rounded-xl bg-white/3 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                <Icon name={b.icon} size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{b.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
