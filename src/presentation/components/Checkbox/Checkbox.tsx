import * as RCheckbox from '@radix-ui/react-checkbox'
import '@/presentation/components/Checkbox/Checkbox.scss'

interface CheckboxProps {
  name: string
  isChecked?: boolean
  onChange: (checked: boolean) => void
}

export function Checkbox({ name, isChecked = false, onChange }: CheckboxProps) {
  return (
    <RCheckbox.Root className="checkbox" name={name} checked={isChecked} onCheckedChange={onChange}>
      <RCheckbox.Indicator className="checkbox__indicator"/>
    </RCheckbox.Root>
  )
}
