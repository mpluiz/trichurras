import { Barbecue, BarbecueProps } from '@/domain/entities'
import { Money } from '@/domain/entities/value-objects'

export function makeBarbecue(override: Partial<BarbecueProps> = {}): Barbecue {
  const barbecue = Barbecue.create({
    title: 'valid-title',
    notes: 'valid-notes',
    suggestedValue: { withDrinks: new Money(50), withoutDrinks: new Money(30) },
    date: new Date(),
    createdAt: new Date(),
    ...override
  })

  return barbecue
}
