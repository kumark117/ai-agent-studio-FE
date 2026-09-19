'use client'

import { useState, useEffect } from 'react'
import Icon from './Icon'

const navLinks = [
  { href: '#agents', label: 'Agents' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#crm', label: 'CRM' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#guarantee', label: 'Guarantee' },
]

interface HeaderProps {
  onTryDemo: () => void
  onBookDemo: () => void
}

export default function Header({ onTryDemo, onBookDemo }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="AI Agent Studio home">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Icon name="sparkles" size={16} className="text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              AI Agent Studio
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onTryDemo}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-slate-300 hover:text-white hover:border-white/30 font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Try Live Demo
            </button>
            <button
              onClick={onBookDemo}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Book a Demo
            </button>
            <button
              className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <Icon name={menuOpen ? 'x' : 'menu'} size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-md border-t border-white/5">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onTryDemo() }}
              className="mt-3 w-full py-2.5 px-3 rounded-lg border border-white/15 text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm transition-colors"
            >
              Try Live Demo
            </button>
            <button
              onClick={() => { setMenuOpen(false); onBookDemo() }}
              className="mt-2 w-full py-2.5 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-colors"
            >
              Book a Demo
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
