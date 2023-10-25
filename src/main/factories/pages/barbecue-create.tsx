import { BarbecueCreatePage } from '@/presentation/pages'
import { makeCreateBarbecueUseCase, makeCreateManyParticipantsUseCase } from '@/main/factories/usecases'

export function MakeBarbecueCreatePage() {
  const createBarbecueUseCase = makeCreateBarbecueUseCase()
  const createManyParticipantsUseCase = makeCreateManyParticipantsUseCase()
  return <BarbecueCreatePage createBarbecue={createBarbecueUseCase} createManyParticipants={createManyParticipantsUseCase} />
}
