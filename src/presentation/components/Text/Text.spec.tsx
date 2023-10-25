import { screen, render } from '@testing-library/react'
import { Text } from '@/presentation/components'

describe('Text', () => {
  it('should render component with correct modifiers', () => {
    render(<Text>valid-text</Text>)
    const sut = screen.getByText('valid-text')

    expect(sut).toBeTruthy()
    expect(sut.className).toContain('text text--size-md text--weight-regular text--color-black')
  })
})
