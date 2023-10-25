import { FetchParticipantsUseCase } from '@/application/usecases'
import { LocalStorageParticipantRepository, StorageClient } from '@/infra/database/local-storage'

export function makeFetchParticipantsUseCase(): FetchParticipantsUseCase {
  const repository = new LocalStorageParticipantRepository(new StorageClient())
  const usecase = new FetchParticipantsUseCase(repository)
  return usecase
}
