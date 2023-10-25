import { Participant } from '@/domain/entities'
import { Contribution, UniqueEntityID } from '@/domain/entities/value-objects'

export class LocalStorageParticipantMapper {
  static toDomain(raw: any): Participant {
    return Participant.create({
      barbecueId: new UniqueEntityID(raw.barbecueId),
      name: raw.name,
      contribution: new Contribution(raw.contribution),
      isPaid: raw.isPaid,
      createdAt: raw.createdAt
    }, new UniqueEntityID(raw.id))
  }

  static toPersistence(participant: Participant) {
    const {
      id,
      barbecueId,
      name,
      contribution,
      isPaid,
      createdAt
    } = participant.toValue()

    return {
      id,
      barbecueId: barbecueId.toString(),
      name,
      contribution: contribution.value,
      isPaid,
      createdAt
    }
  }
}
