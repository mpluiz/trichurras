import { Either, success } from '@/utils/either.ts'
import { ParticipantRepository } from '@/application/protocols'

type DeleteParticipantUseCaseRequest = { id: string }
type DeleteParticipantUseCaseResponse = Either<boolean, boolean>

export class DeleteParticipantUseCase {
  constructor(private participantRepository: ParticipantRepository) {}

  async execute({ id }: DeleteParticipantUseCaseRequest): Promise<DeleteParticipantUseCaseResponse> {
    await this.participantRepository.delete(id)

    return success(true)
  }
}
