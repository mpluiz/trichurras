import { Either, success } from '@/utils/either'
import { Barbecue } from '@/domain/entities'
import { BarbecueDTO, BarbecueRepository } from '@/application/protocols'
import { Money, UniqueEntityID } from '@/domain/entities/value-objects'

type CreateBarbecueUseCaseRequest = BarbecueDTO
type CreateBarbecueUseCaseResponse = Either<null, { barbecue: Barbecue }>

export class CreateBarbecueUseCase {
  constructor(private barbecueRepository: BarbecueRepository) {}

  async execute(data: CreateBarbecueUseCaseRequest): Promise<CreateBarbecueUseCaseResponse> {
    const barbecue = Barbecue.create({
      title: data.title,
      notes: data.notes,
      suggestedValue: {
        withDrinks: new Money(data.suggestedValue.withDrinks),
        withoutDrinks: new Money(data.suggestedValue.withoutDrinks)
      },
      date: data.date,
      createdAt: new Date()
    }, new UniqueEntityID())

    await this.barbecueRepository.create(barbecue)

    return success({ barbecue })
  }
}
