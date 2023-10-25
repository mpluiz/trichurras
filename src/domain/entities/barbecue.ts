import { Entity } from '@/domain/entities'
import { Money, UniqueEntityID } from '@/domain/entities/value-objects'

export interface BarbecueProps {
  title: string
  notes?: string
  suggestedValue: { withDrinks: Money, withoutDrinks: Money }
  date: Date
  createdAt: Date
}

export class Barbecue extends Entity<BarbecueProps> {
  static create(props: BarbecueProps, id?: UniqueEntityID): Barbecue {
    return new Barbecue(props, id)
  }

  get suggestedValue() {
    return this.props.suggestedValue
  }
}
