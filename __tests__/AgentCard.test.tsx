import { render, screen } from '@testing-library/react'
import AgentCard from '@/components/AgentCard'
import { agents } from '@/data/agents'

describe('AgentCard', () => {
  const agent = agents[0] // AI Lead Qualifier Agent

  it('renders the agent name', () => {
    render(<AgentCard agent={agent} />)
    expect(screen.getByText(agent.name)).toBeInTheDocument()
  })

  it('renders the agent description', () => {
    render(<AgentCard agent={agent} />)
    expect(screen.getByText(agent.description)).toBeInTheDocument()
  })

  it('renders channel badges', () => {
    render(<AgentCard agent={agent} />)
    agent.channels.forEach((ch) => {
      expect(screen.getByText(ch)).toBeInTheDocument()
    })
  })

  it('renders all 9 agents correctly', () => {
    agents.forEach((a) => {
      const { unmount } = render(<AgentCard agent={a} />)
      expect(screen.getByText(a.name)).toBeInTheDocument()
      unmount()
    })
  })

  it('applies featured styling when featured prop is true', () => {
    const { container } = render(<AgentCard agent={agent} featured />)
    // featured cards get a col-span-full or colored border class
    expect(container.firstChild).toHaveClass('bg-slate-900')
  })
})
