import { FetchParticipantsByBarbecueIdUseCase } from '@/application/usecases'
import { LocalStorageParticipantRepository, StorageClient } from '@/infra/database/local-storage'

export function makeFetchParticipantsByBarbecueIdUseCase(): FetchParticipantsByBarbecueIdUseCase {
  const repository = new LocalStorageParticipantRepository(new StorageClient())
  const usecase = new FetchParticipantsByBarbecueIdUseCase(repository)
  return usecase
}
