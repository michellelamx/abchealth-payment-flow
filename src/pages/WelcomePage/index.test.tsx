import { render, screen } from '@testing-library/react'
import { WelcomePage } from '@pages/WelcomePage'
import { describe, expect, it } from 'vitest'

describe('WelcomePage', () => {
  const renderComponent = () => {
    render(<WelcomePage />)
  }

  it('renders the welcome message', () => {
    renderComponent()

    expect(screen.getByText(/Hi,/i)).toBeInTheDocument()
    expect(screen.getByText(/medical bills ready from ABC Health System/i)).toBeInTheDocument()
    expect(screen.getByText(/You can pay your bills here or verify your identity to view full bill details/i)).toBeInTheDocument()
  })

  it('renders the total due amount', () => {
    renderComponent()

    expect(screen.getByText(/Total due/i)).toBeInTheDocument()
    expect(screen.getByText(/\$/i)).toBeInTheDocument()
  })

  it('renders the Pay Total link', () => {
    renderComponent()

    const payLink = screen.getByRole('link', { name: /Pay total/i })
    expect(payLink).toBeInTheDocument()
    expect(payLink).toHaveAttribute('href', '/payment')
  })
})
