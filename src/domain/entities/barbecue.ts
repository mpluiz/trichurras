import { Participant, Entity } from '@/domain/entities'
import { Money } from '@/domain/entities/value-objects'

export interface BarbecueProps {
  id: string
  title: string
  description: string
  notes: string
  participants: Participant[]
  suggestedValue: { withDrinks: Money, withoutDrinks: Money }
  date: Date
  createdAt: Date
}

export class Barbecue extends Entity<BarbecueProps> {
  static create(props: BarbecueProps): Barbecue {
    return new Barbecue(props)
  }

  getTotalParticipants(): number {
    return this.props.participants.length
  }

  getTotalContribution(): number {
    return this.props.participants.reduce((acc, cur) => cur.contribution.value + acc, 0)
  }
}
