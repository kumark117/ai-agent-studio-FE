import Icon from './Icon'

const channelStories = [
  {
    channel: 'Phone Calls',
    icon: 'phone',
    color: 'violet',
    story: 'Lead list imported → AI makes outbound calls → Conversation logged → Lead qualified → Follow-up scheduled → Appointment booked',
  },
  {
    channel: 'Instagram',
    icon: 'instagram',
    color: 'pink',
    story: 'Relevant comment detected → DM conversation starts → Intent qualified → CRM entry created → Follow-up sent → Demo booked',
  },
  {
    channel: 'WhatsApp',
    icon: 'message-circle',
    color: 'green',
    story: 'Enquiry received → AI responds immediately → Context captured → Qualification complete → Appointment confirmed',
  },
  {
    channel: 'Website',
    icon: 'monitor',
    color: 'cyan',
    story: 'Visitor lands → Chat or voice agent engages → Questions answered → Intent identified → Lead record created → Handed off',
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', dot: 'bg-violet-400' },
  pink:   { bg: 'bg-pink-500/10',   border: 'border-pink-500/20',   text: 'text-pink-400',   dot: 'bg-pink-400' },
  green:  { bg: 'bg-green-500/10',  border: 'border-green-500/20',  text: 'text-green-400',  dot: 'bg-green-400' },
  cyan:   { bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20',   text: 'text-cyan-400',   dot: 'bg-cyan-400' },
}

export default function Channels() {
  return (
    <section id="channels" className="bg-slate-950 py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-4">
            Five Connected Channels
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            All Your Lead Sources.<br />One Connected Pipeline.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Leads don't stop arriving because your team is busy. Each channel flows into the same AI layer — responded to, qualified, and tracked automatically.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {channelStories.map((ch) => {
            const c = colorMap[ch.color]
            const steps = ch.story.split(' → ')
            return (
              <div key={ch.channel} className="bg-slate-900 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <Icon name={ch.icon} size={18} className={c.text} />
                  </div>
                  <h3 className="text-base font-bold text-white">{ch.channel}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-y-2">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-xs text-slate-400 font-medium">{step}</span>
                      {i < steps.length - 1 && (
                        <Icon name="arrow-right" size={11} className="text-slate-700 mx-0.5" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Lead list highlight */}
        <div className="mt-5 bg-gradient-to-r from-amber-500/5 to-transparent border border-amber-500/15 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
            <Icon name="list" size={18} className="text-amber-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">Lead Lists — Outbound Calling at Scale</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Upload a CSV of prospects and the AI Voice Sales Agent calls each contact, explains your offering, qualifies intent, and logs every conversation — turning static lists into active pipeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
