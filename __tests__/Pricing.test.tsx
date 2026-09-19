import { render, screen, fireEvent } from '@testing-library/react'
import Pricing from '@/components/Pricing'

describe('Pricing', () => {
  it('renders the setup fee', () => {
    render(<Pricing />)
    expect(screen.getByText('₹25,000')).toBeInTheDocument()
  })

  it('renders the monthly fee', () => {
    render(<Pricing />)
    expect(screen.getByText('₹9,999')).toBeInTheDocument()
  })

  it('renders the Implementation & Setup label', () => {
    render(<Pricing />)
    expect(screen.getByText('Implementation & Setup')).toBeInTheDocument()
  })

  it('renders the monthly label', () => {
    render(<Pricing />)
    expect(screen.getByText('Complete AI CRM + Automation')).toBeInTheDocument()
  })

  it('shows third-party section collapsed by default', () => {
    render(<Pricing />)
    // Button should say it is collapsed (aria-expanded false)
    const toggle = screen.getByRole('button', { name: /third-party provider costs/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('expands third-party section when toggled', () => {
    render(<Pricing />)
    const toggle = screen.getByRole('button', { name: /third-party provider costs/i })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByText(/Plivo/i)[0]).toBeInTheDocument()
  })

  it('collapses again when toggled a second time', () => {
    render(<Pricing />)
    const toggle = screen.getByRole('button', { name: /third-party provider costs/i })
    fireEvent.click(toggle)
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders all setup inclusions', () => {
    render(<Pricing />)
    expect(screen.getByText('AI Sales Agents setup')).toBeInTheDocument()
    expect(screen.getByText('Testing and deployment')).toBeInTheDocument()
  })
})
