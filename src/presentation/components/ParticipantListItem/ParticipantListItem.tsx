import { Checkbox, IconTrash, Text } from '@/presentation/components'
import { currencyFormat } from '@/utils/format.ts'
import '@/presentation/components/ParticipantListItem/ParticipantListItem.scss'

interface ParticipantListItemProps {
  name: string
  contribution: number
  isPaid: boolean
  onRemove: () => void
  onChecking: (checked: boolean) => void
}

export function ParticipantListItem({ name, isPaid, contribution, onRemove, onChecking }: ParticipantListItemProps) {
  return (
    <div className="participant-list-item">
      <div>
        <Checkbox name={name} isChecked={isPaid} onChange={onChecking} />
        <Text weigth="bold">{name}</Text>
      </div>

      <div>
        <Text weigth="bold" decorator={isPaid ? 'line-through' : 'none'}>{currencyFormat(contribution)}</Text>
        <button type="button" onClick={onRemove}><IconTrash size={20} color="red" /></button>
      </div>
    </div>
  )
}
