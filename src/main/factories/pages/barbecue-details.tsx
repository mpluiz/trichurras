import { BarbecueDetailsPage } from '@/presentation/pages'
import {
  makeGetBarbecueUseCase,
  makeFetchParticipantsByBarbecueIdUseCase,
  makeDeleteParticipantUseCase,
  makeEditParticipantUseCase,
  makeCreateParticipantUseCase
} from '@/main/factories/usecases'

export function MakeBarbecueDetailsPage() {
  const getBarbecueUseCase = makeGetBarbecueUseCase()
  const fetchParticipantsByBarbecueId = makeFetchParticipantsByBarbecueIdUseCase()
  const createParticipant = makeCreateParticipantUseCase()
  const editParticipant = makeEditParticipantUseCase()
  const deleteParticipant = makeDeleteParticipantUseCase()
  return (
    <BarbecueDetailsPage
      getBarbecue={getBarbecueUseCase}
      fetchParticipantsByBarbecueId={fetchParticipantsByBarbecueId}
      createParticipant={createParticipant}
      editParticipant={editParticipant}
      deleteParticipant={deleteParticipant}
    />
  )
}
