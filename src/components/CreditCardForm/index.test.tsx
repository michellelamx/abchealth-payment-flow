import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { CreditCardForm } from '@components/CreditCardForm'
import { describe, expect, it, vi } from 'vitest'
import { useForm } from 'react-hook-form'

interface InputProps {
  id: string
  label: string
  register: ReturnType<typeof useForm>['register']
  error?: string
}

vi.mock('@components/Input', () => ({
  Input: ({ id, label, register, error }: InputProps) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register} />
      {error && <span role='alert'>{error}</span>}
    </div>
  )
}))

describe('CreditCardForm', () => {
  const onFormSubmit = vi.fn()
  const onContinue = vi.fn()

  const renderForm = (isFormValid: boolean) => {
    render(
      <CreditCardForm
        onFormSubmit={onFormSubmit}
        onContinue={onContinue}
        isFormValid={isFormValid}
      />
    )
  }

  it('renders the form with initial states (empty)', () => {
    renderForm(false)

    expect(screen.getByLabelText(/Card number/i)).toHaveValue('')
    expect(screen.getByLabelText(/Expires \(MM\/YY\)/i)).toHaveValue('')
    expect(screen.getByLabelText(/Security code \(CVV\)/i)).toHaveValue('')
    expect(screen.getByLabelText(/Name on card/i)).toHaveValue('')
    expect(screen.getByLabelText(/Zip code/i)).toHaveValue('')
  })

  it('shows validation errors if user submits form while fields are empty', async () => {
    renderForm(false)

    fireEvent.submit(screen.getByRole('button', { name: /Continue/i }))

    await waitFor(() => {
      expect(screen.getByText(/This field is required/i)).toBeInTheDocument()
    })
  })

  it('shows validation error for invalid card number', async () => {
    renderForm(false)

    fireEvent.input(screen.getByLabelText(/Card number/i), {
      target: { value: '123' },
    })
    fireEvent.submit(screen.getByRole('button', { name: /Continue/i }))

    await waitFor(() => {
      expect(screen.getByText(/Card number must be 16 digits/i)).toBeInTheDocument()
    })
  })

  it('submits the form when all fields are valid', async () => {
    renderForm(false)

    fireEvent.input(screen.getByLabelText(/Card number/i), {
      target: { value: '1234567812345678' },
    })
    fireEvent.input(screen.getByLabelText(/Expires \(MM\/YY\)/i), {
      target: { value: '12/24' },
    })
    fireEvent.input(screen.getByLabelText(/Security code \(CVV\)/i), {
      target: { value: '123' },
    })
    fireEvent.input(screen.getByLabelText(/Name on card/i), {
      target: { value: 'John Doe' },
    })
    fireEvent.input(screen.getByLabelText(/Zip code/i), {
      target: { value: '12345' },
    })

    fireEvent.submit(screen.getByRole('button', { name: /Continue/i }))

    await waitFor(() => {
      expect(onFormSubmit).toHaveBeenCalled()
    })
  })

  it('calls onContinue when form is valid', () => {
    renderForm(true)

    fireEvent.click(screen.getByRole('button', { name: /Continue/i }))

    expect(onContinue).toHaveBeenCalled()
  })
})
