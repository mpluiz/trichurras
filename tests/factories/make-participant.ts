import { Participant, ParticipantProps } from '@/domain/entities'
import { Contribution } from '@/domain/entities/value-objects'
import { makeBarbecue } from '@tests/factories'

export function makeParticipant(override: Partial<ParticipantProps> = {}): Participant {
  const barbecue = makeBarbecue()

  const participant = Participant.create({
    barbecueId: barbecue.id,
    name: 'valid-name',
    contribution: new Contribution(100),
    isPaid: false,
    createdAt: new Date(),
    ...override
  })

  return participant
}
