import { Barbecue, Participant } from '@/domain/entities'
import { InMemoryParticipantRepository } from '@tests/repositories'
import { FetchParticipantsByBarbecueIdUseCase } from '@/application/usecases'
import { makeBarbecue, makeParticipant } from '@tests/factories'

let inMemoryParticipantRepository: InMemoryParticipantRepository
let sut: FetchParticipantsByBarbecueIdUseCase
let participant: Participant
let barbecue: Barbecue

describe('FetchParticipantsByBarbecueIdUseCase', () => {
  beforeEach(() => {
    inMemoryParticipantRepository = new InMemoryParticipantRepository()
    sut = new FetchParticipantsByBarbecueIdUseCase(inMemoryParticipantRepository)
    barbecue = makeBarbecue()
    participant = makeParticipant({ barbecueId: barbecue.id })
  })

  it('should success to fetch participants by barbecueId', async () => {
    inMemoryParticipantRepository.participants = [participant, makeParticipant()]
    const response = await sut.execute({ barbecueId: barbecue.id.toString() })

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.participants).toHaveLength(1)
    expect(response.value?.participants[0]).toBeInstanceOf(Participant)
  })
})
