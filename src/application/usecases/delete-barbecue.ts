import { Either, success } from '@/utils/either.ts'
import { BarbecueRepository } from '@/application/protocols'

type DeleteBarbecueUseCaseRequest = { id: string }
type DeleteBarbecueUseCaseResponse = Either<boolean, boolean>

export class DeleteBarbecueUseCase {
  constructor(private barbecueRepository: BarbecueRepository) {}

  async execute({ id }: DeleteBarbecueUseCaseRequest): Promise<DeleteBarbecueUseCaseResponse> {
    await this.barbecueRepository.delete(id)

    return success(true)
  }
}
