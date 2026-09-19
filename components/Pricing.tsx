'use client'

import { useState } from 'react'
import Icon from './Icon'

const setupIncludes = [
  'AI Sales Agents setup',
  'Business knowledge configuration',
  'Qualification and conversation workflows',
  'CRM pipeline setup',
  'Follow-up automation',
  'Appointment workflow',
  'Channel configuration',
  'Testing and deployment',
]

const monthlyIncludes = [
  'AI Sales Agents suite (all 9 agents)',
  'Central lead CRM and dashboard',
  'Lead qualification engine',
  'Follow-up workflows',
  'Appointment booking workflow',
  'Human handoff',
  'Reporting',
  'Ongoing solution support as agreed',
]

const thirdPartyDetails = [
  { provider: 'Plivo (India voice)', detail: 'Inbound ₹0.38/min · Outbound ₹0.38/min · Number ₹200/month' },
  { provider: 'Sarvam AI speech-to-text', detail: '~₹30/hour (~₹0.50/min); AI model & TTS are usage-based' },
  { provider: 'Meta (WhatsApp & Instagram)', detail: 'Usage-based / applicable platform charges' },
  { provider: 'Google Cloud TTS (optional)', detail: 'First 4M characters/month free, then ~US$4/1M characters' },
]

export default function Pricing() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="pricing" className="bg-slate-950 py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-4">
            Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            One Investment. Full System.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            No hidden tiers. One setup fee to get everything configured, then a monthly subscription to keep it running.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {/* Setup card */}
          <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8">
            <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-4">One-Time</div>
            <div className="text-4xl font-extrabold text-white mb-1">₹25,000</div>
            <div className="text-sm text-slate-400 mb-6">Implementation & Setup</div>
            <ul className="space-y-3">
              {setupIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <Icon name="check" size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Monthly card — highlighted */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-900/80 border border-cyan-500/30 rounded-2xl p-8 shadow-xl shadow-cyan-500/8">
            <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 bg-cyan-500 text-slate-950 text-xs font-bold rounded-full">Monthly Subscription</span>
            </div>
            <div className="mt-2 text-xs text-slate-500 font-semibold uppercase tracking-widest mb-4">Ongoing</div>
            <div className="text-4xl font-extrabold text-white mb-1">₹9,999<span className="text-lg font-semibold text-slate-400">/month</span></div>
            <div className="text-sm text-slate-400 mb-6">Complete AI CRM + Automation</div>
            <ul className="space-y-3">
              {monthlyIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <Icon name="check" size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Third-party disclosure */}
        <div className="max-w-4xl mx-auto bg-amber-500/5 border border-amber-500/15 rounded-2xl overflow-hidden">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-inset"
            aria-expanded={expanded}
          >
            <div className="flex items-center gap-3">
              <Icon name="external-link" size={16} className="text-amber-400 shrink-0" />
              <span className="text-sm font-semibold text-amber-300">Third-Party Provider Costs — Paid Separately</span>
            </div>
            <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={16} className="text-amber-500 shrink-0" />
          </button>

          {expanded && (
            <div className="px-6 pb-6 border-t border-amber-500/10">
              <p className="text-xs text-slate-500 mt-4 mb-4">
                Your business pays these providers directly based on actual usage. The figures below are planning estimates from the proposal — not fixed quotes.
              </p>
              <div className="space-y-3">
                {thirdPartyDetails.map((row) => (
                  <div key={row.provider} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="text-xs font-semibold text-slate-300 sm:w-52 shrink-0">{row.provider}</span>
                    <span className="text-xs text-slate-500">{row.detail}</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-xs text-slate-500">
                    <span className="text-slate-400 font-semibold">Illustrative estimate</span> — 1,000 India calling minutes: Plivo ₹380 + number ₹200/month + Sarvam STT ~₹500 ≈ <span className="text-slate-300">~₹1,080</span> before AI model and TTS usage. Actual usage varies.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
