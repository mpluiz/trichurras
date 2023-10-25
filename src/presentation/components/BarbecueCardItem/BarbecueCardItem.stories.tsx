import type { Meta, StoryObj } from '@storybook/react'
import { BarbecueCardItem } from '@/presentation/components'

const meta: Meta<typeof BarbecueCardItem> = {
  component: BarbecueCardItem,
  title: 'Views/BarbecueCardItem',
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof BarbecueCardItem>

export const Default: Story = {
  args: {
    date: new Date(),
    title: 'Final de Ano',
    people: 28,
    contribution: 400
  }
}
