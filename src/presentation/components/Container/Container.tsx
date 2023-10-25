import '@/presentation/components/Container/Container.scss'
import { ComponentProps } from '@/presentation/components'

type ContainerProps = ComponentProps<HTMLDivElement>

export function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>
}
