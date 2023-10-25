import { Either, success } from '@/utils/either'
import { Participant } from '@/domain/entities'
import { ParticipantRepository } from '@/application/protocols'

type FetchParticipantsUseCaseResponse = Either<any, { participants: Participant[] }>

export class FetchParticipantsUseCase {
  constructor(private participantRepository: ParticipantRepository) {}

  async execute(): Promise<FetchParticipantsUseCaseResponse> {
    const participants = await this.participantRepository.findMany()

    return success({ participants })
  }
}
