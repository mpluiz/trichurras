import { CreateManyParticipantsUseCase } from '@/application/usecases'
import { InMemoryParticipantRepository } from '@tests/repositories'
import { Barbecue } from '@/domain/entities'
import { makeBarbecue, makeParticipant } from '@tests/factories'

let inMemoryParticipantRepository: InMemoryParticipantRepository
let sut: CreateManyParticipantsUseCase
let barbecue: Barbecue

describe('CreateManyParticipantsUseCase', () => {
  beforeEach(() => {
    inMemoryParticipantRepository = new InMemoryParticipantRepository()
    sut = new CreateManyParticipantsUseCase(inMemoryParticipantRepository)
    barbecue = makeBarbecue()
  })

  it('should success to create a many participants', async () => {
    inMemoryParticipantRepository.participants = [makeParticipant()]
    expect(inMemoryParticipantRepository.participants).toHaveLength(1)

    const response = await sut.execute({
      participants: [{
        barbecueId: barbecue.id.toString(),
        name: 'new-participant',
        contribution: 50,
        isPaid: false
      }]
    })

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.participants).toHaveLength(1)
    expect(inMemoryParticipantRepository.participants).toHaveLength(2)
  })
})
