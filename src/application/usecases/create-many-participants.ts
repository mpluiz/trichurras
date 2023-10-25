import { Either, failure, success } from '@/utils/either'
import { Participant } from '@/domain/entities'
import { ParticipantDTO, ParticipantRepository } from '@/application/protocols'
import { Contribution, UniqueEntityID } from '@/domain/entities/value-objects'

type CreateManyParticipantsUseCaseRequest = { participants: ParticipantDTO[] }
type CreateManyParticipantsUseCaseResponse = Either<any, { participants: Participant[] }>

export class CreateManyParticipantsUseCase {
  constructor(private participantRepository: ParticipantRepository) {}

  async execute(data: CreateManyParticipantsUseCaseRequest): Promise<CreateManyParticipantsUseCaseResponse> {
    try {
      const participants = data.participants.map(participant => (
        Participant.create({
          barbecueId: new UniqueEntityID(participant.barbecueId),
          name: participant.name,
          contribution: new Contribution(participant.contribution),
          isPaid: participant.isPaid,
          createdAt: new Date()
        }, new UniqueEntityID())
      ))

      await this.participantRepository.createMany(participants)

      return success({ participants })
    } catch (error) {
      return failure(error)
    }
  }
}
