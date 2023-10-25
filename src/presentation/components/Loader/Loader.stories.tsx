import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from '@/presentation/components'

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Feedback/Loader',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'black'
    }
  }
}

export default meta
type Story = StoryObj<typeof Loader>

export const Default: Story = {}
