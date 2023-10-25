import { EditParticipantUseCase } from '@/application/usecases'
import { LocalStorageParticipantRepository, StorageClient } from '@/infra/database/local-storage'

export function makeEditParticipantUseCase(): EditParticipantUseCase {
  const repository = new LocalStorageParticipantRepository(new StorageClient())
  const usecase = new EditParticipantUseCase(repository)
  return usecase
}
