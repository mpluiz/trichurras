import { ComponentProps, IconBarbecue, Text } from '@/presentation/components'
import '@/presentation/components/BarbecueCardAdd/BarbecueCardAdd.scss'

type BarbecueCardAddProps = ComponentProps<HTMLDivElement>

export function BarbecueCardAdd({ onClick }: BarbecueCardAddProps) {
  return (
    <div className="barbecue-card-add" onClick={onClick}>
      <div className="barbecue-card-add__image">
        <IconBarbecue size={44} />
      </div>
      <Text size="md" weigth="bold">Adicionar Churras</Text>
    </div>
  )
}
