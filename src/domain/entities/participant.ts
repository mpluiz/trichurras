import { Entity } from '@/domain/entities/entity.ts'
import { Contribution } from '@/domain/entities/value-objects'

export interface ParticipantProps {
  id: string
  name: string
  contribution: Contribution
  isPaid: boolean
  createdAt: Date
}

export class Participant extends Entity<ParticipantProps> {
  static create(props: ParticipantProps): Participant {
    return new Participant(props)
  }

  get contribution(): Contribution {
    return this.props.contribution
  }
}
