import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/Header'

const noop = () => {}
const defaultProps = { onTryDemo: noop, onBookDemo: noop }

describe('Header', () => {
  it('renders the brand name', () => {
    render(<Header {...defaultProps} />)
    expect(screen.getByText('AI Agent Studio')).toBeInTheDocument()
  })

  it('renders all desktop nav links', () => {
    render(<Header {...defaultProps} />)
    const links = ['Agents', 'Workflow', 'CRM', 'Pricing', 'Guarantee']
    links.forEach((label) => {
      expect(screen.getAllByText(label)[0]).toBeInTheDocument()
    })
  })

  it('renders the Book a Demo and Try Live Demo CTA buttons', () => {
    render(<Header {...defaultProps} />)
    expect(screen.getAllByText('Book a Demo')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Try Live Demo')[0]).toBeInTheDocument()
  })

  it('calls onBookDemo when Book a Demo is clicked', () => {
    const onBookDemo = jest.fn()
    render(<Header onTryDemo={noop} onBookDemo={onBookDemo} />)
    const btn = screen.getAllByText('Book a Demo')[0]
    fireEvent.click(btn)
    expect(onBookDemo).toHaveBeenCalledTimes(1)
  })

  it('calls onTryDemo when Try Live Demo is clicked', () => {
    const onTryDemo = jest.fn()
    render(<Header onTryDemo={onTryDemo} onBookDemo={noop} />)
    const btn = screen.getAllByText('Try Live Demo')[0]
    fireEvent.click(btn)
    expect(onTryDemo).toHaveBeenCalledTimes(1)
  })

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Header {...defaultProps} />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toBeInTheDocument()
    fireEvent.click(toggle)
    const mobileLinks = screen.getAllByText('Agents')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('has accessible aria-expanded on mobile toggle', () => {
    render(<Header {...defaultProps} />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })
})
