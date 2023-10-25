import { screen, render } from '@testing-library/react'
import { Button } from '@/presentation/components'

describe('Button', () => {
  it('should render component with correct modifiers', () => {
    render(<Button>valid-text</Button>)
    const sut = screen.getByRole('button')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('button button--primary')
  })

  it('should render component with loading status', () => {
    render(<Button loading>valid-text</Button>)
    const sut = screen.getByRole('status')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('loader')
  })

  it('should render component with correct variant', () => {
    render(<Button variant="secondary">valid-text</Button>)
    const sut = screen.getByRole('button')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('button button--secondary')
  })
})
