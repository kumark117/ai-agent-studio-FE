'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { demoScenarios, type Channel } from '@/data/demo'
import Icon from './Icon'

interface DemoModalProps {
  open: boolean
  onClose: () => void
}

type Phase = 'pick' | 'running' | 'done' | 'booked'

const channelOptions: { id: Channel; label: string; icon: string; color: string; desc: string }[] = [
  { id: 'website',   label: 'Website Chat',  icon: 'monitor',        color: 'cyan',   desc: 'Website visitor qualifies via chat agent' },
  { id: 'whatsapp',  label: 'WhatsApp',      icon: 'message-circle', color: 'green',  desc: 'WhatsApp enquiry flows into pipeline' },
  { id: 'instagram', label: 'Instagram',     icon: 'instagram',      color: 'pink',   desc: 'Comment & DM converted to qualified lead' },
  { id: 'phone',     label: 'Phone Call',    icon: 'phone',          color: 'violet', desc: 'AI voice agent calls a prospect' },
  { id: 'leads',     label: 'Lead List',     icon: 'list',           color: 'amber',  desc: 'Outbound call from uploaded CSV list' },
]

const colorMap: Record<string, { bg: string; border: string; text: string; ring: string; badge: string }> = {
  cyan:   { bg: 'bg-cyan-500/10',   border: 'border-cyan-500/30',   text: 'text-cyan-400',   ring: 'ring-cyan-400',   badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
  green:  { bg: 'bg-green-500/10',  border: 'border-green-500/30',  text: 'text-green-400',  ring: 'ring-green-400',  badge: 'bg-green-500/20 text-green-300 border-green-500/30' },
  pink:   { bg: 'bg-pink-500/10',   border: 'border-pink-500/30',   text: 'text-pink-400',   ring: 'ring-pink-400',   badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-400', ring: 'ring-violet-400', badge: 'bg-violet-500/20 text-violet-300 border-violet-500/30' },
  amber:  { bg: 'bg-amber-500/10',  border: 'border-amber-500/30',  text: 'text-amber-400',  ring: 'ring-amber-400',  badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
}

const stageOrder = ['Capture', 'Contact', 'Qualify', 'Follow Up', 'Book', 'Convert']

export default function DemoModal({ open, onClose }: DemoModalProps) {
  const [channel, setChannel] = useState<Channel | null>(null)
  const [phase, setPhase] = useState<Phase>('pick')
  const [visibleCount, setVisibleCount] = useState(0)
  const [currentStage, setCurrentStage] = useState('')
  const [typingIdx, setTypingIdx] = useState<number | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success'>('idle')
  const [runKey, setRunKey] = useState(0)
  const startFromRef = useRef(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scenario = channel ? demoScenarios[channel] : null
  const c = channel ? colorMap[scenario!.color] : colorMap.cyan

  const reset = useCallback(() => {
    setChannel(null)
    setPhase('pick')
    setVisibleCount(0)
    setCurrentStage('')
    setTypingIdx(null)
    setName('')
    setEmail('')
    setSubmitState('idle')
    startFromRef.current = 0
  }, [])

  const handleClose = useCallback(() => {
    reset()
    onClose()
  }, [reset, onClose])

  // Escape to close
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, handleClose])

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Message reveal sequence — single async effect; cancelled flag handles cleanup cleanly
  // runKey increments to restart the effect without changing phase
  useEffect(() => {
    if (phase !== 'running' || !scenario) return

    const from = startFromRef.current
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((res) => setTimeout(res, ms))

    ;(async () => {
      for (let i = from; i < scenario.messages.length; i++) {
        if (cancelled) return
        const msg = scenario.messages[i]

        if (msg.role === 'ai') {
          setTypingIdx(i)
          await sleep(msg.delay)
          if (cancelled) return
          setTypingIdx(null)
        } else {
          await sleep(Math.round(msg.delay * 0.6))
          if (cancelled) return
        }

        setVisibleCount(i + 1)
        if (msg.stage) setCurrentStage(msg.stage)
      }

      if (!cancelled) setPhase('done')
    })()

    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, scenario, runKey])

  // Auto-scroll — scrollTo not available in all environments (e.g. jsdom)
  useEffect(() => {
    const el = scrollRef.current
    if (el && typeof el.scrollTo === 'function') {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }
  }, [visibleCount, typingIdx])

  const startDemo = (ch: Channel) => {
    startFromRef.current = 0
    setChannel(ch)
    setPhase('running')
    setVisibleCount(0)
  }

  const skipToStage = useCallback((stageName: string) => {
    if (!scenario || (phase !== 'running' && phase !== 'done')) return

    const targetIdx = stageOrder.indexOf(stageName)

    // Find the first message tagged with this stage or later
    let firstMsgIdx = scenario.messages.length
    for (let i = 0; i < scenario.messages.length; i++) {
      const msg = scenario.messages[i]
      if (msg.stage && stageOrder.indexOf(msg.stage) >= targetIdx) {
        firstMsgIdx = i
        break
      }
    }

    setTypingIdx(null)
    setCurrentStage(stageName)

    if (firstMsgIdx >= scenario.messages.length) {
      // Past all messages — jump to done
      setVisibleCount(scenario.messages.length)
      setPhase('done')
    } else {
      setVisibleCount(firstMsgIdx)
      startFromRef.current = firstMsgIdx
      setRunKey((k) => k + 1)
      if (phase === 'done') setPhase('running')
    }
  }, [scenario, phase])

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSubmitState('sending')
    setTimeout(() => {
      setSubmitState('success')
      setPhase('booked')
    }, 1200)
  }

  if (!open) return null

  const displayed = scenario ? scenario.messages.slice(0, visibleCount) : []

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="AI Sales Agent Live Demo"
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full sm:max-w-2xl bg-slate-950 border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl shadow-black/60 flex flex-col max-h-[92dvh] sm:max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Icon name="sparkles" size={14} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-none">AI Sales Agent Demo</p>
              <p className="text-xs text-slate-500 mt-0.5">Watch a real conversation unfold</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-slate-500 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Close demo"
          >
            <Icon name="x" size={18} />
          </button>
        </div>

        {/* Channel picker */}
        {phase === 'pick' && (
          <div className="flex-1 overflow-y-auto p-5">
            <p className="text-sm text-slate-400 mb-4 text-center">
              Choose a channel — the AI agent will run a <strong className="text-white">live simulation</strong> of capturing, qualifying, and booking a lead.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {channelOptions.map((opt) => {
                const oc = colorMap[opt.color]
                return (
                  <button
                    key={opt.id}
                    onClick={() => startDemo(opt.id)}
                    className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 hover:scale-[1.01] focus:outline-none focus:ring-2 ${oc.ring} focus:ring-offset-2 focus:ring-offset-slate-950 ${oc.bg} ${oc.border}`}
                  >
                    <div className={`w-9 h-9 rounded-lg bg-white/5 border ${oc.border} flex items-center justify-center shrink-0`}>
                      <Icon name={opt.icon} size={17} className={oc.text} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{opt.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{opt.desc}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Simulation */}
        {(phase === 'running' || phase === 'done') && scenario && (
          <>
            {/* Channel + stage indicator */}
            <div className="flex items-center justify-between px-5 py-2.5 bg-slate-900/60 border-b border-white/5 shrink-0">
              <div className="flex items-center gap-2">
                <Icon name={scenario.icon} size={14} className={c.text} />
                <span className="text-xs font-semibold text-slate-300">{scenario.channelLabel}</span>
              </div>
              <div className="flex items-center gap-1">
                {stageOrder.map((s) => {
                  const activeIdx = stageOrder.indexOf(currentStage)
                  const thisIdx = stageOrder.indexOf(s)
                  const isCurrent = s === currentStage
                  const isNext = phase === 'running' && thisIdx === activeIdx + 1
                  if (isNext) {
                    return (
                      <button
                        key={s}
                        onClick={() => skipToStage(s)}
                        title={`Skip to ${s}`}
                        className="text-xs px-2 py-0.5 rounded-full border font-medium transition-all text-slate-500 border-slate-700/60 hover:text-slate-200 hover:border-slate-400 cursor-pointer focus:outline-none focus:ring-1 focus:ring-slate-400"
                      >
                        {s} ›
                      </button>
                    )
                  }
                  return (
                    <span
                      key={s}
                      className={`text-xs px-2 py-0.5 rounded-full border font-medium transition-all ${
                        isCurrent ? `${c.badge} border` : 'text-slate-700 border-transparent'
                      }`}
                    >
                      {s}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Chat */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {displayed.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'ai'
                        ? 'bg-slate-800 border border-white/8 text-slate-200 rounded-tl-sm'
                        : 'bg-cyan-500/20 border border-cyan-500/25 text-cyan-100 rounded-tr-sm'
                    }`}
                  >
                    {msg.role === 'ai' && (
                      <span className="text-xs font-semibold text-cyan-400 block mb-1">AI Agent</span>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typingIdx !== null && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-white/8 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                    <span className="text-xs text-slate-500 mr-1">AI Agent</span>
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"
                        style={{ animationDelay: `${dot * 150}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CRM update panel — shown on done */}
            {phase === 'done' && (
              <div className={`mx-5 mb-4 p-4 rounded-xl border ${c.border} ${c.bg}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${c.text}`}>CRM Updated</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {[
                    { k: 'Name', v: scenario.crmEntry.name },
                    { k: 'Source', v: scenario.crmEntry.source },
                    { k: 'Status', v: scenario.crmEntry.status },
                    { k: 'Next Action', v: scenario.crmEntry.action },
                  ].map(({ k, v }) => (
                    <div key={k}>
                      <span className="text-xs text-slate-500">{k}: </span>
                      <span className="text-xs font-semibold text-white">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom actions */}
            <div className="px-5 pb-4 pt-2 border-t border-white/5 shrink-0 flex gap-2">
              {phase === 'done' && (
                <button
                  onClick={reset}
                  className="flex-1 py-2.5 rounded-xl border border-white/10 text-sm text-slate-300 hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  Try another channel
                </button>
              )}
              <button
                onClick={() => setPhase('booked')}
                className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Book a Real Demo →
              </button>
            </div>
          </>
        )}

        {/* Booking form */}
        {phase === 'booked' && submitState !== 'success' && (
          <div className="flex-1 overflow-y-auto p-5">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center mx-auto mb-3">
                <Icon name="calendar" size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Book Your Demo Call</h3>
              <p className="text-sm text-slate-400">30 minutes. See the full AI system live, configured for your business.</p>
            </div>
            <form onSubmit={handleBook} className="space-y-4">
              <div>
                <label htmlFor="demo-name" className="block text-xs font-semibold text-slate-400 mb-1.5">Your Name</label>
                <input
                  id="demo-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  required
                  className="w-full px-4 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="demo-email" className="block text-xs font-semibold text-slate-400 mb-1.5">Work Email</label>
                <input
                  id="demo-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full px-4 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={submitState === 'sending'}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-slate-950 font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                {submitState === 'sending' ? 'Sending…' : 'Request Demo Call'}
              </button>
              <p className="text-center text-xs text-slate-600">
                This is a demonstration form.{' '}
                {/* Configure NEXT_PUBLIC_BOOKING_URL in .env.local to wire a real booking endpoint or Calendly link */}
                Connect your booking URL or endpoint in <code className="font-mono">lib/config.ts</code>.
              </p>
            </form>
          </div>
        )}

        {/* Success state */}
        {phase === 'booked' && submitState === 'success' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-4">
              <Icon name="check" size={28} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Request Sent!</h3>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">
              Thanks, <strong className="text-white">{name}</strong>. We&apos;ll be in touch at <strong className="text-white">{email}</strong> to confirm your demo slot.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-white/8 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
