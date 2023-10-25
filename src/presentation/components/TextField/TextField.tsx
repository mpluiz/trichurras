import { ComponentProps, Text } from '@/presentation/components'
import '@/presentation/components/TextField/TextField.scss'

interface TextFieldProps extends ComponentProps<HTMLInputElement> {
  label: string
  name: string
  type?: string
  id?: string
  value?: string | ReadonlyArray<string> | number | undefined;
  maxLength?: number
  required?: boolean
}

export function TextField({ label, name, ...others }: TextFieldProps) {
  return (
    <div className="text-field">
      <label htmlFor={name}><Text weigth="bold">{label}</Text></label>
      <input className="text-field__input" name={name} {...others} />
    </div>
  )
}
