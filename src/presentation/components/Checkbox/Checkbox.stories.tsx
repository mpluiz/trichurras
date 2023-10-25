import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/presentation/components'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Form/Checkbox',
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    name: 'isPaid',
    isChecked: true
  }
}
