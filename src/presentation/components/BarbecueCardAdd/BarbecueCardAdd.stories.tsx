import type { Meta, StoryObj } from '@storybook/react'
import { BarbecueCardAdd } from '@/presentation/components'

const meta: Meta<typeof BarbecueCardAdd> = {
  component: BarbecueCardAdd,
  title: 'Views/BarbecueCardAdd',
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof BarbecueCardAdd>

export const Default: Story = {}
