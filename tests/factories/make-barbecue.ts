import { Barbecue, BarbecueProps } from '@/domain/entities'
import { makeParticipant } from '@tests/factories/make-participant.ts'
import { Money } from '@/domain/entities/value-objects'

export function makeBarbecue(override: Partial<BarbecueProps> = {}): Barbecue {
  const participants = [makeParticipant()]
  const barbecue = Barbecue.create({
    id: '1',
    title: 'valid-title',
    description: 'valid-description',
    notes: 'valid-notes',
    participants,
    suggestedValue: { withDrinks: new Money(50), withoutDrinks: new Money(30) },
    date: new Date(),
    createdAt: new Date(),
    ...override
  })

  return barbecue
}
