import { EditParticipantUseCase } from '@/application/usecases'
import { InMemoryParticipantRepository } from '@tests/repositories'
import { Participant } from '@/domain/entities'
import { makeParticipant } from '@tests/factories'

let inMemoryParticipantRepository: InMemoryParticipantRepository
let sut: EditParticipantUseCase
let participant: Participant

describe('EditParticipantUseCase', () => {
  beforeEach(() => {
    inMemoryParticipantRepository = new InMemoryParticipantRepository()
    sut = new EditParticipantUseCase(inMemoryParticipantRepository)
    participant = makeParticipant({ isPaid: false })
  })

  it('should success to edit the isPaid value of participant', async () => {
    inMemoryParticipantRepository.participants = [participant]

    const response = await sut.execute({
      id: participant.id.toString(),
      data: { isPaid: true }
    })

    expect(response.isSuccess()).toBe(true)
    expect(inMemoryParticipantRepository.participants[0].id).toEqual(participant.id)
    expect(inMemoryParticipantRepository.participants[0].isPaid).toBe(true)
  })
})
