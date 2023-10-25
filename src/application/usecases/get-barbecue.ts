import { BarbecueRepository } from '@/application/protocols'
import { Either, success } from '@/utils/either.ts'
import { Barbecue } from '@/domain/entities'

type GetBarbecueUseCaseRequest = { id: string }
type GetBarbecueUseCaseResponse = Either<null, { barbecue: Barbecue | null }>

export class GetBarbecueUseCase {
  constructor(private barbecueRepository: BarbecueRepository) {}

  async execute({ id }: GetBarbecueUseCaseRequest): Promise<GetBarbecueUseCaseResponse> {
    const barbecue = await this.barbecueRepository.findById(id)

    return success({ barbecue })
  }
}
