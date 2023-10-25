import { Either, success } from '@/utils/either'
import { Participant } from '@/domain/entities'
import { ParticipantRepository } from '@/application/protocols'
import { Contribution, UniqueEntityID } from '@/domain/entities/value-objects'

interface CreateParticipantUseCaseRequest {
  barbecueId: string
  name: string
  contribution: number
  isPaid: boolean
}

type CreateParticipantUseCaseResponse = Either<null, { participant: Participant }>

export class CreateParticipantUseCase {
  constructor(private participantRepository: ParticipantRepository) {}

  async execute(data: CreateParticipantUseCaseRequest): Promise<CreateParticipantUseCaseResponse> {
    const participant = Participant.create({
      barbecueId: new UniqueEntityID(data.barbecueId),
      name: data.name,
      contribution: new Contribution(data.contribution),
      isPaid: data.isPaid,
      createdAt: new Date()
    }, new UniqueEntityID())

    await this.participantRepository.create(participant)
    return success({ participant })
  }
}
