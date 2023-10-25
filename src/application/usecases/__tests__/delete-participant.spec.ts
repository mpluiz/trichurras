import { DeleteParticipantUseCase } from '@/application/usecases'
import { InMemoryParticipantRepository } from '@tests/repositories'
import { makeParticipant } from '@tests/factories'
import { Participant } from '@/domain/entities'

let inMemoryParticipantRepository: InMemoryParticipantRepository
let sut: DeleteParticipantUseCase
let participant: Participant

describe('DeleteParticipantUseCase', () => {
  beforeEach(() => {
    inMemoryParticipantRepository = new InMemoryParticipantRepository()
    sut = new DeleteParticipantUseCase(inMemoryParticipantRepository)
    participant = makeParticipant()
  })

  it('should success to delete a barbecue', async () => {
    inMemoryParticipantRepository.participants = [participant]

    const response = await sut.execute({ id: participant.id.toString() })

    expect(response.isSuccess()).toBe(true)
    expect(inMemoryParticipantRepository.participants).toHaveLength(0)
  })
})
