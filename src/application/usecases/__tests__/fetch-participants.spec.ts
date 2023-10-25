import { Participant } from '@/domain/entities'
import { InMemoryParticipantRepository } from '@tests/repositories'
import { FetchParticipantsUseCase } from '@/application/usecases'
import { makeParticipant } from '@tests/factories'

let inMemoryParticipantRepository: InMemoryParticipantRepository
let sut: FetchParticipantsUseCase
let participant: Participant

describe('FetchParticipantsUseCase', () => {
  beforeEach(() => {
    inMemoryParticipantRepository = new InMemoryParticipantRepository()
    sut = new FetchParticipantsUseCase(inMemoryParticipantRepository)
    participant = makeParticipant()
  })

  it('should success to fetch participants', async () => {
    inMemoryParticipantRepository.participants = [participant]
    const response = await sut.execute()

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.participants).toHaveLength(1)
    expect(response.value?.participants[0]).toBeInstanceOf(Participant)
  })
})
