import { IconMoney, IconPeople, Text } from '@/presentation/components'
import { currencyFormat, dateFormat } from '@/utils/format.ts'
import '@/presentation/components/BarbecueCardItem/BarbecueCardItem.scss'

interface BarbecueCardItemProps {
  date: Date
  title: string
  people: number
  contribution: number
  onClick: () => void
}

export function BarbecueCardItem({ date, title, people, contribution, onClick }: BarbecueCardItemProps) {
  return (
    <div className="barbecue-card-item" onClick={onClick}>
      <div className="barbecue-card-item__header">
        <Text size="lg" weigth="extra-bold">{dateFormat(date)}</Text>
        <Text weigth="bold">{title}</Text>
      </div>

      <div className="barbecue-card-item__footer">
        <Text><IconPeople size={20} color="var(--color-yellow)"/> {people}</Text>
        <Text><IconMoney size={20} color="var(--color-yellow)"/> {currencyFormat(contribution)}</Text>
      </div>
    </div>
  )
}
