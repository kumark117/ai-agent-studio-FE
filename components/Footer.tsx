import Icon from './Icon'

const links = [
  { href: '#agents', label: 'Agents' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#crm', label: 'CRM' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#guarantee', label: 'Guarantee' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Icon name="sparkles" size={14} className="text-white" />
            </div>
            <span className="font-bold text-white text-base">AI Agent Studio</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600 max-w-2xl mx-auto">
            AI Agent Studio provides AI-powered sales automation software. Results depend on your business, lead quality, and usage.
            Third-party provider costs (voice, messaging, AI) are charged separately by those providers based on actual usage.
            Pricing and service terms are subject to a written agreement.
          </p>
          <p className="text-xs text-slate-700 mt-3">
            © {new Date().getFullYear()} AI Agent Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
