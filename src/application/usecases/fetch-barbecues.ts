import { BarbecueRepository } from '@/application/protocols'
import { Either, success } from '@/utils/either.ts'
import { Barbecue } from '@/domain/entities'

type FetchBarbecuesUseCaseResponse = Either<null, { barbecues: Barbecue[] }>

export class FetchBarbecuesUseCase {
  constructor(private barbecueRepository: BarbecueRepository) {}

  async execute(): Promise<FetchBarbecuesUseCaseResponse> {
    const barbecues = await this.barbecueRepository.findMany()

    return success({ barbecues })
  }
}
