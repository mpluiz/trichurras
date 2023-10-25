import { CreateBarbecueUseCase } from '@/application/usecases'
import { InMemoryBarbecueRepository } from '@tests/repositories'
import { Barbecue } from '@/domain/entities'
import { UniqueEntityID } from '@/domain/entities/value-objects'

let inMemoryBarbecueRepository: InMemoryBarbecueRepository
let sut: CreateBarbecueUseCase

describe('CreateBarbecueUseCase', () => {
  beforeEach(() => {
    inMemoryBarbecueRepository = new InMemoryBarbecueRepository()
    sut = new CreateBarbecueUseCase(inMemoryBarbecueRepository)
  })

  it('should success to create a barbecue', async () => {
    const response = await sut.execute({
      title: 'valid-title',
      notes: 'valid-notes',
      suggestedValue: {
        withDrinks: 50,
        withoutDrinks: 35
      },
      date: new Date()
    })

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.barbecue).toBeInstanceOf(Barbecue)
    expect(response.value?.barbecue.id).toBeInstanceOf(UniqueEntityID)
  })
})
