import Icon from './Icon'

const steps = [
  {
    num: '01',
    label: 'Setup',
    icon: 'target',
    color: 'cyan',
    desc: 'Confirm product information, messaging guidelines, qualification criteria, appointment rules, and channel requirements.',
  },
  {
    num: '02',
    label: 'Build',
    icon: 'layers',
    color: 'blue',
    desc: 'Configure all agents, CRM pipeline stages, conversation workflows, follow-up logic, handoff rules, and channel integrations.',
  },
  {
    num: '03',
    label: 'Test',
    icon: 'check-circle',
    color: 'violet',
    desc: 'End-to-end testing of conversations, qualification flows, follow-up triggers, appointment booking, CRM updates, and team handoff.',
  },
  {
    num: '04',
    label: 'Launch',
    icon: 'zap',
    color: 'emerald',
    desc: 'Go live across all channels, monitor early conversations, review pipeline activity, and optimise workflows based on real results.',
  },
]

const clientProvides = [
  'Lead lists or prospect data for outbound calling',
  'Product and business information',
  'FAQs, positioning, and approved messaging',
  'Qualification criteria and scoring rules',
  'Appointment availability and booking rules',
  'Relevant account access (WhatsApp, Instagram, etc.)',
  'Approval of conversation scripts and flows',
  'A point of contact for testing and handoff',
]

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  cyan:    { text: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20' },
  blue:    { text: 'text-blue-400',    bg: 'bg-blue-500/10',    border: 'border-blue-500/20' },
  violet:  { text: 'text-violet-400',  bg: 'bg-violet-500/10',  border: 'border-violet-500/20' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
}

export default function Implementation() {
  return (
    <section id="implementation" className="bg-slate-950 py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            Four-Step Rollout
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From Signed Agreement<br />to Live System
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A structured launch process that gets your AI sales system live without disrupting your business.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-emerald-500/20 pointer-events-none" />

          {steps.map((step) => {
            const c = colorMap[step.color]
            return (
              <div key={step.num} className="relative bg-slate-900 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors">
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                  <Icon name={step.icon} size={20} className={c.text} />
                </div>
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${c.text}`}>{step.num} — {step.label}</div>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>

        {/* What your business provides */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-slate-900 border border-white/8 rounded-2xl p-7">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Icon name="check-circle" size={17} className="text-cyan-400" />
              What your business provides
            </h3>
            <ul className="space-y-2.5">
              {clientProvides.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <Icon name="check" size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-500/5 border border-amber-500/15 rounded-2xl p-7">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Icon name="shield" size={17} className="text-amber-400" />
              Compliance & Consent
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Clients are responsible for managing their own third-party provider accounts and paying usage charges directly. All outreach should follow applicable laws, platform terms, and consent requirements.
              AI Agent Studio configures the system based on information and approvals provided by the client.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
