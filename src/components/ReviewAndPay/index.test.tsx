import { render, screen } from '@testing-library/react'
import { ReviewAndPay } from '@components/ReviewAndPay'
import { describe, expect, it } from 'vitest'


describe('ReviewAndPay', () => {
  const renderComponent = () => {
    render(<ReviewAndPay />)
  }

  it('renders the review section with payment details', () => {
    renderComponent()

    expect(screen.getByText(/You're about to make a payment of/i)).toBeInTheDocument()
    expect(screen.getByText('$')).toBeInTheDocument()
  })

  it('renders the payment method with credit card icon and secured card info', () => {
    renderComponent()

    expect(screen.getByTestId('visa-icon')).toBeInTheDocument()
    expect(screen.getByText(/Card ending in ••••/i)).toBeInTheDocument()
  })

  it('renders the pay link', () => {
    renderComponent()

    const payLink = screen.getByRole('link', { name: /Pay \$/i })

    expect(payLink).toBeInTheDocument()
    expect(payLink).toHaveAccessibleName('Pay $')
    expect(payLink).toHaveAttribute('href', '/success')
  })
})
