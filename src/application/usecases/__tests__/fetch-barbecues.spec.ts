import { Barbecue } from '@/domain/entities'
import { InMemoryBarbecueRepository } from '@tests/repositories'
import { FetchBarbecuesUseCase } from '@/application/usecases'
import { makeBarbecue } from '@tests/factories'

let inMemoryBarbecueRepository: InMemoryBarbecueRepository
let sut: FetchBarbecuesUseCase
let barbecue: Barbecue

describe('FetchBarbecuesUseCase', () => {
  beforeEach(() => {
    inMemoryBarbecueRepository = new InMemoryBarbecueRepository()
    sut = new FetchBarbecuesUseCase(inMemoryBarbecueRepository)
    barbecue = makeBarbecue()
  })

  it('should success to fetch barbecues', async () => {
    inMemoryBarbecueRepository.barbecues = [barbecue]
    const response = await sut.execute()

    expect(response.isSuccess()).toBe(true)
    expect(response.value?.barbecues).toHaveLength(1)
    expect(response.value?.barbecues[0]).toBeInstanceOf(Barbecue)
  })
})
