import { Entity } from '@/domain/entities/entity.ts'
import { Contribution, UniqueEntityID } from '@/domain/entities/value-objects'

export interface ParticipantProps {
  barbecueId: UniqueEntityID
  name: string
  contribution: Contribution
  isPaid: boolean
  createdAt: Date
}

export class Participant extends Entity<ParticipantProps> {
  static create(props: ParticipantProps, id?: UniqueEntityID): Participant {
    return new Participant(props, id)
  }

  get contribution(): Contribution {
    return this.props.contribution
  }

  get barbecueId(): UniqueEntityID {
    return this.props.barbecueId
  }

  get isPaid(): boolean {
    return this.props.isPaid
  }

  set isPaid(value: boolean) {
    this.props.isPaid = value
  }
}
