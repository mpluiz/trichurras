import type { Meta, StoryObj } from '@storybook/react'
import { DrinkSelection } from '@/presentation/components'

const meta: Meta<typeof DrinkSelection> = {
  component: DrinkSelection,
  title: 'Form/DrinkSelection',
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof DrinkSelection>

export const Default: Story = {}
