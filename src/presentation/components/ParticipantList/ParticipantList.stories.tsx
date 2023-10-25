import type { Meta, StoryObj } from '@storybook/react'
import { ParticipantList } from '@/presentation/components'

const meta: Meta<typeof ParticipantList> = {
  component: ParticipantList,
  title: 'Views/ParticipantList',
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}

export default meta
type Story = StoryObj<typeof ParticipantList>

export const Default: Story = {
  args: {
    participants: [
      { name: 'Alice', contribution: 20, isPaid: false },
      { name: 'Beto', contribution: 10, isPaid: true },
      { name: 'Diego B.', contribution: 20, isPaid: false }
    ]
  }
}
