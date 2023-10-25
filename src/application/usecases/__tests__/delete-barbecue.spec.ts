import { DeleteBarbecueUseCase } from '@/application/usecases'
import { InMemoryBarbecueRepository } from '@tests/repositories'
import { makeBarbecue } from '@tests/factories'
import { Barbecue } from '@/domain/entities'

let inMemoryBarbecueRepository: InMemoryBarbecueRepository
let sut: DeleteBarbecueUseCase
let barbecue: Barbecue

describe('DeleteBarbecueUseCase', () => {
  beforeEach(() => {
    inMemoryBarbecueRepository = new InMemoryBarbecueRepository()
    sut = new DeleteBarbecueUseCase(inMemoryBarbecueRepository)
    barbecue = makeBarbecue()
  })

  it('should success to delete a barbecue', async () => {
    inMemoryBarbecueRepository.barbecues = [barbecue]

    const response = await sut.execute({ id: barbecue.id.toString() })

    expect(response.isSuccess()).toBe(true)
    expect(inMemoryBarbecueRepository.barbecues).toHaveLength(0)
  })
})
