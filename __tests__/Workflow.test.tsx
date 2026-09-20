import { render, screen, fireEvent } from '@testing-library/react'
import Workflow from '@/components/Workflow'
import { workflowSteps } from '@/data/workflow'

describe('Workflow', () => {
  it('renders the section heading', () => {
    render(<Workflow />)
    expect(screen.getByRole('heading', { name: /from first touch to sales-ready handoff/i })).toBeInTheDocument()
  })

  it('renders all 6 stage buttons', () => {
    render(<Workflow />)
    workflowSteps.forEach((step) => {
      expect(screen.getByRole('button', { name: new RegExp(step.label, 'i') })).toBeInTheDocument()
    })
  })

  it('shows the first stage detail by default', () => {
    render(<Workflow />)
    expect(screen.getByText(workflowSteps[0].detail)).toBeInTheDocument()
  })

  it('switches to the clicked stage detail', () => {
    render(<Workflow />)
    const qualifyBtn = screen.getByRole('button', { name: /03.*qualify/i })
    fireEvent.click(qualifyBtn)
    expect(screen.getByText(workflowSteps[2].detail)).toBeInTheDocument()
  })

  it('marks the active stage button with aria-pressed true', () => {
    render(<Workflow />)
    const firstBtn = screen.getByRole('button', { name: /01.*capture/i })
    expect(firstBtn).toHaveAttribute('aria-pressed', 'true')
  })

  it('updates aria-pressed when a different stage is selected', () => {
    render(<Workflow />)
    const bookBtn = screen.getByRole('button', { name: /05.*book/i })
    fireEvent.click(bookBtn)
    expect(bookBtn).toHaveAttribute('aria-pressed', 'true')
  })

  it('navigates forward with the Next button', () => {
    render(<Workflow />)
    const nextBtn = screen.getByText(/Next →/i)
    fireEvent.click(nextBtn)
    expect(screen.getByText(workflowSteps[1].detail)).toBeInTheDocument()
  })
})
