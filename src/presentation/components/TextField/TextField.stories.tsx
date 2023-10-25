import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from '@/presentation/components'

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Form/TextField',
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'change' } }
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: { label: 'Data', name: 'Data', placeholder: 'Data do churras' }
}
