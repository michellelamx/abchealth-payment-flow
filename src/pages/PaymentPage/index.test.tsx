import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { PaymentPage } from '@pages/PaymentPage'
import { describe, expect, it, vi } from 'vitest'

interface CreditCardFormProps {
  onFormSubmit: () => void
  onContinue: () => void
  isFormValid: boolean
}

vi.mock('@components/CreditCardForm', () => ({
  CreditCardForm: ({ onFormSubmit, onContinue, isFormValid }: CreditCardFormProps) => (
    <div>
      <button onClick={onFormSubmit} data-testid='submit-button'>
        Submit
      </button>
      <button onClick={onContinue} data-testid='continue-button'>
        Continue
      </button>
      {isFormValid && <span data-testid='form-valid'>Form is valid</span>}
    </div>
  )
}))

vi.mock('@components/ReviewAndPay', () => ({
  ReviewAndPay: () => <div data-testid='review-and-pay'>Review and Pay Section</div>
}))

describe('PaymentPage', () => {
  const renderComponent = () => {
    render(<PaymentPage />)
  }

  it('renders the initial Payment information section', () => {
    renderComponent()

    expect(screen.getByText(/Payment information/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Continue/i })).toBeInTheDocument()
    expect(screen.queryByTestId('review-and-pay')).not.toBeInTheDocument()
  })

  it('transitions to the Review and pay section when form is valid and continue button is clicked', async () => {
    renderComponent()

    fireEvent.click(screen.getByTestId('submit-button'))
    await waitFor(() => expect(screen.getByTestId('form-valid')).toBeInTheDocument())

    fireEvent.click(screen.getByTestId('continue-button'))
    await waitFor(() => expect(screen.getByTestId('review-and-pay')).toBeInTheDocument())
  })
})
