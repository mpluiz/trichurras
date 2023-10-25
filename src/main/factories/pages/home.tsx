import { HomePage } from '@/presentation/pages'
import { makeFetchBarbecuesUseCase, makeFetchParticipantsUseCase } from '@/main/factories/usecases'

export function MakeHomePage() {
  const fetchBarbecues = makeFetchBarbecuesUseCase()
  const fetchParticipants = makeFetchParticipantsUseCase()
  return <HomePage fetchBarbecues={fetchBarbecues} fetchParticipants={fetchParticipants} />
}
