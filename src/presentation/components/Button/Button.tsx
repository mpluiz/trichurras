import { ComponentProps, Text, Loader } from '@/presentation/components'
import '@/presentation/components/Button/Button.scss'

export interface ButtonProps extends ComponentProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg',
  form?: string
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
}

export function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'lg',
  loading = false,
  disabled = false,
  ...others
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} button--size-${size}`}
      type={type}
      disabled={disabled || loading}
      {...others}
    >
      <Text size="sm" color="white" >{children}</Text>
      {loading && <Loader size={size} />}
    </button>
  )
}
