import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/presentation/components'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Form/Button',
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } }
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: { children: 'valid-text' }
}

export const Loading: Story = {
  args: { children: 'valid-text', loading: true }
}
