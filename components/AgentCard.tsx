import Icon from './Icon'
import type { Agent } from '@/data/agents'

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  blue:    { bg: 'bg-blue-500/10',    border: 'border-blue-500/20',    text: 'text-blue-400',    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/25' },
  violet:  { bg: 'bg-violet-500/10',  border: 'border-violet-500/20',  text: 'text-violet-400',  badge: 'bg-violet-500/15 text-violet-300 border-violet-500/25' },
  green:   { bg: 'bg-green-500/10',   border: 'border-green-500/20',   text: 'text-green-400',   badge: 'bg-green-500/15 text-green-300 border-green-500/25' },
  pink:    { bg: 'bg-pink-500/10',    border: 'border-pink-500/20',    text: 'text-pink-400',    badge: 'bg-pink-500/15 text-pink-300 border-pink-500/25' },
  cyan:    { bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20',    text: 'text-cyan-400',    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25' },
  indigo:  { bg: 'bg-indigo-500/10',  border: 'border-indigo-500/20',  text: 'text-indigo-400',  badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25' },
  amber:   { bg: 'bg-amber-500/10',   border: 'border-amber-500/20',   text: 'text-amber-400',   badge: 'bg-amber-500/15 text-amber-300 border-amber-500/25' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25' },
  slate:   { bg: 'bg-slate-500/10',   border: 'border-slate-500/20',   text: 'text-slate-400',   badge: 'bg-slate-500/15 text-slate-300 border-slate-500/25' },
}

interface AgentCardProps {
  agent: Agent
  featured?: boolean
}

export default function AgentCard({ agent, featured = false }: AgentCardProps) {
  const c = colorMap[agent.color] ?? colorMap.blue

  return (
    <div
      className={`group relative flex flex-col bg-slate-900 border rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl ${
        featured
          ? `${c.border} shadow-lg col-span-full sm:col-span-1`
          : 'border-white/8 hover:border-white/15'
      }`}
    >
      {featured && (
        <div className={`absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent ${c.text.replace('text-', 'via-')}/50 to-transparent`} />
      )}

      <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
        <Icon name={agent.icon} size={20} className={c.text} />
      </div>

      <h3 className="text-sm font-bold text-white mb-2 leading-snug">{agent.name}</h3>
      <p className="text-sm text-slate-400 leading-relaxed flex-1">{agent.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {agent.channels.map((ch) => (
          <span key={ch} className={`text-xs px-2 py-0.5 rounded-full border font-medium ${c.badge}`}>
            {ch}
          </span>
        ))}
      </div>
    </div>
  )
}
