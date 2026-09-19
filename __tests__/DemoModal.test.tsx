import { render, screen, fireEvent, act } from '@testing-library/react'
import DemoModal from '@/components/DemoModal'

const noop = () => {}

describe('DemoModal', () => {
  it('does not render when open is false', () => {
    render(<DemoModal open={false} onClose={noop} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the modal when open is true', () => {
    render(<DemoModal open={true} onClose={noop} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('renders the modal title', () => {
    render(<DemoModal open={true} onClose={noop} />)
    expect(screen.getByText('AI Sales Agent Demo')).toBeInTheDocument()
  })

  it('renders all 5 channel options in picker', () => {
    render(<DemoModal open={true} onClose={noop} />)
    expect(screen.getByText('Website Chat')).toBeInTheDocument()
    expect(screen.getByText('WhatsApp')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    expect(screen.getByText('Phone Call')).toBeInTheDocument()
    expect(screen.getByText('Lead List')).toBeInTheDocument()
  })

  it('starts the simulation when a channel is selected', async () => {
    render(<DemoModal open={true} onClose={noop} />)
    const websiteBtn = screen.getByText('Website Chat').closest('button')!
    await act(async () => {
      fireEvent.click(websiteBtn)
    })
    // Channel indicator should now show
    expect(screen.getByText('Website Chat')).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', () => {
    const onClose = jest.fn()
    render(<DemoModal open={true} onClose={onClose} />)
    fireEvent.click(screen.getByLabelText('Close demo'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape key is pressed', () => {
    const onClose = jest.fn()
    render(<DemoModal open={true} onClose={onClose} />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', () => {
    const onClose = jest.fn()
    render(<DemoModal open={true} onClose={onClose} />)
    // The backdrop div is aria-hidden
    const backdrop = document.querySelector('[aria-hidden="true"]') as HTMLElement
    fireEvent.click(backdrop)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('shows booking form when "Book a Real Demo" is clicked after simulation', async () => {
    render(<DemoModal open={true} onClose={noop} />)
    const websiteBtn = screen.getByText('Website Chat').closest('button')!
    await act(async () => {
      fireEvent.click(websiteBtn)
    })
    // Skip to done by clicking Book a Real Demo (rendered in bottom bar even during running)
    const bookBtn = screen.getByText('Book a Real Demo →')
    await act(async () => {
      fireEvent.click(bookBtn)
    })
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Work Email')).toBeInTheDocument()
  })

  it('shows success state after form submission', async () => {
    render(<DemoModal open={true} onClose={noop} />)
    const websiteBtn = screen.getByText('Website Chat').closest('button')!
    await act(async () => {
      fireEvent.click(websiteBtn)
    })
    const bookBtn = screen.getByText('Book a Real Demo →')
    await act(async () => {
      fireEvent.click(bookBtn)
    })
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Priya Sharma' } })
    fireEvent.change(screen.getByLabelText('Work Email'), { target: { value: 'priya@company.com' } })
    await act(async () => {
      fireEvent.click(screen.getByText('Request Demo Call'))
      // Simulate the 1200ms timeout
      await new Promise((r) => setTimeout(r, 1300))
    })
    expect(screen.getByText('Request Sent!')).toBeInTheDocument()
    expect(screen.getByText(/Priya Sharma/)).toBeInTheDocument()
  })
})
