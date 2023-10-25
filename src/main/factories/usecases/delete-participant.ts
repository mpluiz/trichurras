import { DeleteParticipantUseCase } from '@/application/usecases'
import { LocalStorageParticipantRepository, StorageClient } from '@/infra/database/local-storage'

export function makeDeleteParticipantUseCase(): DeleteParticipantUseCase {
  const repository = new LocalStorageParticipantRepository(new StorageClient())
  const usecase = new DeleteParticipantUseCase(repository)
  return usecase
}
