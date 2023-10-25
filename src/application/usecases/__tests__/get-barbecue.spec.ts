import { GetBarbecueUseCase } from '@/application/usecases'
import { InMemoryBarbecueRepository } from '@tests/repositories'
import { makeBarbecue } from '@tests/factories'
import { Barbecue } from '@/domain/entities'

let inMemoryBarbecueRepository: InMemoryBarbecueRepository
let sut: GetBarbecueUseCase

describe('GetBarbecueUseCase', () => {
  beforeEach(() => {
    inMemoryBarbecueRepository = new InMemoryBarbecueRepository()
    sut = new GetBarbecueUseCase(inMemoryBarbecueRepository)
  })

  it('should success to get a barbecue when provide a valid id', async () => {
    const barbecueMock = makeBarbecue()
    inMemoryBarbecueRepository.barbecues = [barbecueMock]

    const response = await sut.execute({ id: barbecueMock.id.toString() })
    const barbecue = response.value?.barbecue

    expect(response.isSuccess()).toBe(true)
    expect(barbecue).toBeInstanceOf(Barbecue)
    expect(barbecue?.id).toEqual(barbecueMock.id)
  })
})
