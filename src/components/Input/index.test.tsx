import { render, screen } from '@testing-library/react'
import { Input } from '@components/Input'
import { describe, expect, it, vi } from 'vitest'
import { UseFormRegisterReturn } from 'react-hook-form'


vi.mock('@components/Svg/checkIcon', () => ({
  CheckIcon: () => <svg data-testid='check-icon' />
}))

vi.mock('@components/Svg/alertIcon', () => ({
  AlertIcon: () => <svg data-testid='alert-icon' />
}))

describe('Input', () => {
  const mockRegister = {
    name: 'test-input',
    onBlur: vi.fn(),
    onChange: vi.fn(),
    ref: vi.fn(),
  } as unknown as UseFormRegisterReturn

  it('renders an input with label', () => {
    render(
      <Input
        id='test-input'
        label='Test Label'
        register={mockRegister}
        isFormValid={false}
      />
    )

    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument()
  })

  it('shows error message and alert icon when there is an error', () => {
    render(
      <Input
        id='test-input'
        label='Test Label'
        register={mockRegister}
        error='Test error message'
        isFormValid={false}
      />
    )

    expect(screen.getByText(/Test error message/i)).toBeInTheDocument()
    expect(screen.getByTestId('alert-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('check-icon')).not.toBeInTheDocument()
  })

  it('shows check icon when the form is valid and no error', () => {
    render(
      <Input
        id='test-input'
        label='Test Label'
        register={mockRegister}
        isFormValid={true}
      />
    )

    expect(screen.getByTestId('check-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('alert-icon')).not.toBeInTheDocument()
  })

  it('does not show any icon when there is no error and the form is not validated', () => {
    render(
      <Input
        id='test-input'
        label='Test Label'
        register={mockRegister}
        isFormValid={false}
      />
    )

    expect(screen.queryByTestId('alert-icon')).not.toBeInTheDocument()
    expect(screen.queryByTestId('check-icon')).not.toBeInTheDocument()
  })
})
