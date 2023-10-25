import { Divider, ParticipantListItem } from '@/presentation/components'
import '@/presentation/components/ParticipantList/ParticipantList.scss'

interface Participant {
  id?: string
  name: string
  contribution: number
  isPaid: boolean
}

interface ParticipantListProps {
  participants: Participant[]
  onRemove: (id: string) => void
  onChecking: (id: string, checked: boolean) => void
}

export function ParticipantList({ participants, onRemove, onChecking }: ParticipantListProps) {
  if (!participants.length) return

  return (
    <div className="participant-list">
      {participants.map((participant, i) => (
        <div className="participant-list__items" key={`participant-item-${i + 1}`}>
          <ParticipantListItem
            name={participant.name}
            contribution={participant.contribution}
            isPaid={participant.isPaid}
            onRemove={() => onRemove(participant.id ?? String(i))}
            onChecking={(checked: boolean) => onChecking(participant.id ?? String(i), checked)}
          />

          <Divider />
        </div>
      ))}
    </div>
  )
}
