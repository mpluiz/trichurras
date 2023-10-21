import { Participant, ParticipantProps } from '@/domain/entities'
import { Contribution } from '@/domain/entities/value-objects'

export function makeParticipant(override: Partial<ParticipantProps> = {}): Participant {
  const participant = Participant.create({
    id: '1',
    name: 'valid-name',
    contribution: new Contribution(100),
    isPaid: false,
    createdAt: new Date(),
    ...override
  })

  return participant
}
