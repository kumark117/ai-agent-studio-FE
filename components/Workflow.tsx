'use client'

import { useState } from 'react'
import { workflowSteps, channels } from '@/data/workflow'
import Icon from './Icon'

export default function Workflow() {
  const [active, setActive] = useState(0)
  const step = workflowSteps[active]

  return (
    <section id="workflow" className="bg-slate-900/50 py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
            Six-Stage Lead Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From First Touch to Closed Deal
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Every enquiry moves through a structured pipeline — automated, contextual, and visible at every stage.
          </p>
        </div>

        {/* Channels row */}
        <div className="mb-12">
          <p className="text-center text-xs text-slate-600 uppercase tracking-widest font-medium mb-4">Lead enters from any channel</p>
          <div className="flex flex-wrap justify-center gap-3">
            {channels.map((ch) => (
              <div key={ch.id} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/4 border border-white/8 text-sm font-medium text-slate-300">
                <Icon name={ch.icon} size={15} className={`text-${ch.color}-400`} />
                {ch.label}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Icon name="arrow-down" size={18} className="text-slate-600" />
          </div>
        </div>

        {/* Workflow interactive */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Stage buttons */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {workflowSteps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  active === i
                    ? 'bg-cyan-500/10 border-cyan-500/30 text-white'
                    : 'bg-transparent border-white/6 text-slate-400 hover:text-white hover:border-white/15'
                }`}
                aria-pressed={active === i}
              >
                <span className={`text-xs font-bold tabular-nums ${active === i ? 'text-cyan-400' : 'text-slate-600'}`}>
                  {s.stage}
                </span>
                <span className="text-sm font-semibold">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3 bg-slate-900 border border-white/8 rounded-2xl p-7 min-h-[200px]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Icon name={step.icon} size={22} className="text-cyan-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Stage {step.stage}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{step.label}</h3>
                <p className="text-sm font-medium text-slate-400 mb-3">{step.description}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{step.detail}</p>
              </div>
            </div>

            {/* Step progress */}
            <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                disabled={active === 0}
                className="text-xs text-slate-500 hover:text-white transition-colors disabled:opacity-30 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
              >
                ← Previous
              </button>
              <div className="flex gap-1.5">
                {workflowSteps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === active ? 'bg-cyan-400 w-4' : 'bg-slate-700 hover:bg-slate-500'}`}
                    aria-label={`Go to stage ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActive((a) => Math.min(workflowSteps.length - 1, a + 1))}
                disabled={active === workflowSteps.length - 1}
                className="text-xs text-slate-500 hover:text-white transition-colors disabled:opacity-30 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Human handoff note */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-900 border border-white/8 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
            <Icon name="users" size={18} className="text-blue-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-1">AI does the legwork. People close the deal.</p>
            <p className="text-sm text-slate-500">
              When a prospect is ready, your sales team receives a warm handoff — complete with conversation history, qualification notes, and a recommended next action. No context lost.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
