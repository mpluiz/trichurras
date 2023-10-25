import { Either, failure, success } from '@/utils/either'
import { ParticipantRepository } from '@/application/protocols'

type EditParticipantUseCaseRequest = { id: string, data: { isPaid: boolean } }
type EditParticipantUseCaseResponse = Either<boolean, boolean>

export class EditParticipantUseCase {
  constructor(private participantRepository: ParticipantRepository) {}

  async execute({ id, data }: EditParticipantUseCaseRequest): Promise<EditParticipantUseCaseResponse> {
    const participant = await this.participantRepository.findById(id)

    if (!participant) {
      return failure(true)
    }

    participant.isPaid = data.isPaid
    await this.participantRepository.update(participant)

    return success(true)
  }
}
