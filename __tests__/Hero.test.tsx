import { render, screen, fireEvent } from '@testing-library/react'
import Hero from '@/components/Hero'

const noop = () => {}

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero onDemoOpen={noop} />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('contains "Without More Headcount" in the headline', () => {
    render(<Hero onDemoOpen={noop} />)
    expect(screen.getByText(/Without More Headcount/i)).toBeInTheDocument()
  })

  it('renders the primary Book a Demo CTA', () => {
    render(<Hero onDemoOpen={noop} />)
    const btn = screen.getByRole('button', { name: /book a demo/i })
    expect(btn).toBeInTheDocument()
  })

  it('calls onDemoOpen when the Book a Demo button is clicked', () => {
    const onDemoOpen = jest.fn()
    render(<Hero onDemoOpen={onDemoOpen} />)
    fireEvent.click(screen.getByRole('button', { name: /book a demo/i }))
    expect(onDemoOpen).toHaveBeenCalledTimes(1)
  })

  it('renders the See How It Works secondary CTA link', () => {
    render(<Hero onDemoOpen={noop} />)
    expect(screen.getByRole('link', { name: /see how it works/i })).toBeInTheDocument()
  })

  it('renders all 6 journey stage labels', () => {
    render(<Hero onDemoOpen={noop} />)
    const stages = ['Capture', 'Contact', 'Qualify', 'Follow Up', 'Book', 'Convert']
    stages.forEach((stage) => {
      expect(screen.getAllByText(stage)[0]).toBeInTheDocument()
    })
  })

  it('renders channel labels in the product visual', () => {
    render(<Hero onDemoOpen={noop} />)
    expect(screen.getAllByText(/Website/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/WhatsApp/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Instagram/i)[0]).toBeInTheDocument()
  })
})
