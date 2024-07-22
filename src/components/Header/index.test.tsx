import { render, screen } from '@testing-library/react'
import { Header } from '@components/Header'
import { describe, expect, it } from 'vitest'


describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)

    const logo = screen.getByTestId('abc-logo')
    expect(logo).toBeInTheDocument()
  })
})
