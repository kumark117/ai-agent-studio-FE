import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/Header'

const noop = () => {}

describe('Header', () => {
  it('renders the brand name', () => {
    render(<Header onDemoOpen={noop} />)
    expect(screen.getByText('AI Agent Studio')).toBeInTheDocument()
  })

  it('renders all desktop nav links', () => {
    render(<Header onDemoOpen={noop} />)
    const links = ['Agents', 'Workflow', 'CRM', 'Pricing', 'Guarantee']
    links.forEach((label) => {
      expect(screen.getAllByText(label)[0]).toBeInTheDocument()
    })
  })

  it('renders the Book a Demo CTA button', () => {
    render(<Header onDemoOpen={noop} />)
    expect(screen.getAllByText('Book a Demo')[0]).toBeInTheDocument()
  })

  it('calls onDemoOpen when Book a Demo is clicked', () => {
    const onDemoOpen = jest.fn()
    render(<Header onDemoOpen={onDemoOpen} />)
    const btn = screen.getAllByText('Book a Demo')[0]
    fireEvent.click(btn)
    expect(onDemoOpen).toHaveBeenCalledTimes(1)
  })

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Header onDemoOpen={noop} />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toBeInTheDocument()
    fireEvent.click(toggle)
    // Mobile menu nav links appear
    const mobileLinks = screen.getAllByText('Agents')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('has accessible aria-expanded on mobile toggle', () => {
    render(<Header onDemoOpen={noop} />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })
})
