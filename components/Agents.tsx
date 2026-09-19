import { agents } from '@/data/agents'
import AgentCard from './AgentCard'

export default function Agents() {
  // Split: 8 regular + 1 featured CRM agent spans full width at bottom
  const regular = agents.slice(0, 8)
  const featured = agents[8]

  return (
    <section id="agents" className="bg-slate-950 py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            Nine Specialist AI Agents
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Every Channel. One System.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Each agent is purpose-built for a specific part of the sales journey — working together under one orchestration layer and one CRM.
          </p>
        </div>

        {/* 4-col grid for regular agents */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {regular.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* CRM agent spans full width */}
        {featured && (
          <div className="grid grid-cols-1">
            <div className="group relative bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900 border border-white/10 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-slate-400/20 transition-all">
              <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />
              <div className="w-14 h-14 rounded-xl bg-slate-500/10 border border-slate-500/25 flex items-center justify-center shrink-0">
                <span className="text-2xl">🧠</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-white mb-1">{featured.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{featured.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 shrink-0">
                {featured.channels.map((ch) => (
                  <span key={ch} className="text-xs px-2.5 py-1 rounded-full bg-slate-500/15 border border-slate-500/25 text-slate-300 font-medium">
                    {ch}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AI-human handoff note */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            AI handles the repetitive work — responding, qualifying, following up, and scheduling.{' '}
            <span className="text-slate-300">Your team steps in where expertise, trust, and relationships matter.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
