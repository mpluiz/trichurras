import { Either, success } from '@/utils/either'
import { Participant } from '@/domain/entities'
import { ParticipantRepository } from '@/application/protocols'

type FetchParticipantsByBarbecueIdUseCaseRequest = { barbecueId: string }
type FetchParticipantsByBarbecueIdUseCaseResponse = Either<any, { participants: Participant[] }>

export class FetchParticipantsByBarbecueIdUseCase {
  constructor(private participantRepository: ParticipantRepository) {}

  async execute({ barbecueId }: FetchParticipantsByBarbecueIdUseCaseRequest): Promise<FetchParticipantsByBarbecueIdUseCaseResponse> {
    const participants = await this.participantRepository.findManyByBarbecueId(barbecueId)

    return success({ participants })
  }
}
