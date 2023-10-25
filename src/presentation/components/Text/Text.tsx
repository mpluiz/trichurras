import { ComponentProps } from '@/presentation/components'
import '@/presentation/components/Text/Text.scss'

interface TextProps extends ComponentProps<HTMLParagraphElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  textStyle?: 'normal' | 'italic'
  weigth?: 'regular' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold'
  color?: 'white' | 'black'
  decorator?: 'none' | 'line-through'
}

export function Text({
  children,
  size = 'md',
  weigth = 'regular',
  color = 'black',
  textStyle = 'normal',
  decorator = 'none',
  ...params
}: TextProps) {
  return (
    <p
      className={`text text--size-${size} text--weight-${weigth} text--color-${color} text--style-${textStyle} text--decorator-${decorator}`}
      {...params}
    >
      {children}
    </p>
  )
}
