import Icon from './Icon'

const covered = [
  'Configured lead capture flowing into CRM',
  'Approved qualification questions and conversation flows',
  'Approved follow-up sequences across configured channels',
  'Agreed appointment booking and handoff process',
]

const notCovered = [
  'A specific number of leads, appointments, or sales',
  'Revenue or business outcomes',
  'Third-party provider usage charges',
]

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-slate-900/50 py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shield badge */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center shadow-xl shadow-cyan-500/15">
              <Icon name="shield" size={36} className="text-cyan-400" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
                14-Day Guarantee
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                100% Money-Back.{' '}<br />If It Doesn&apos;t Work.
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-lg">
                We're confident in what we build. That's why we back it with a clear, honest guarantee.
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee terms */}
        <div className="bg-slate-950 border border-white/10 rounded-2xl p-7 mb-6">
          <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" style={{ position: 'relative' }} />

          <p className="text-slate-300 leading-relaxed mb-6">
            After your system goes live, you receive a <strong className="text-white">14-day live evaluation period</strong>. If the system does not operate according to the mutually approved implementation scope during those first 14 days, you may request a full refund of AI Agent Studio implementation and monthly solution fees paid.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Icon name="check-circle" size={15} className="text-cyan-400" />
                What &ldquo;working&rdquo; means
              </p>
              <ul className="space-y-2">
                {covered.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                    <Icon name="check" size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Icon name="x" size={15} className="text-slate-500" />
                What it does not guarantee
              </p>
              <ul className="space-y-2">
                {notCovered.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="text-slate-600 mt-0.5 shrink-0 text-base leading-none">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-600 max-w-2xl mx-auto">
          The guarantee applies to agreed functionality and approved workflows as defined in the written implementation scope. Direct third-party provider usage charges are outside the refund. Full terms are detailed in the service agreement.
        </p>
      </div>
    </section>
  )
}
