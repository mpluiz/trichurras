import type { Meta, StoryObj } from '@storybook/react'
import { ParticipantListItem } from '@/presentation/components'

const meta: Meta<typeof ParticipantListItem> = {
  component: ParticipantListItem,
  title: 'Views/ParticipantListItem',
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  argTypes: { onRemove: { action: 'clicked' }, onChecking: { action: 'change' } }
}

export default meta
type Story = StoryObj<typeof ParticipantListItem>

export const Default: Story = {
  args: {
    name: 'Alice',
    contribution: 20,
    isPaid: true
  }
}
