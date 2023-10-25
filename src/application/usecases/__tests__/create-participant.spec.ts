import { CreateParticipantUseCase } from '@/application/usecases'
import { InMemoryParticipantRepository } from '@tests/repositories'
import { Barbecue, Participant } from '@/domain/entities'
import { UniqueEntityID } from '@/domain/entities/value-objects'
import { makeBarbecue } from '@tests/factories'

let inMemoryParticipantRepository: InMemoryParticipantRepository
let sut: CreateParticipantUseCase
let barbecue: Barbecue

describe('CreateParticipantUseCase', () => {
  beforeEach(() => {
    inMemoryParticipantRepository = new InMemoryParticipantRepository()
    sut = new CreateParticipantUseCase(inMemoryParticipantRepository)
    barbecue = makeBarbecue()
  })

  it('should success to create a participant', async () => {
    const response = await sut.execute({
      barbecueId: barbecue.id.toString(),
      name: 'valid-name',
      contribution: 50,
      isPaid: false
    })

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.participant).toBeInstanceOf(Participant)
    expect(response.value?.participant.id).toBeInstanceOf(UniqueEntityID)
  })
})
