import { CreateParticipantUseCase } from '@/application/usecases'
import { LocalStorageParticipantRepository, StorageClient } from '@/infra/database/local-storage'

export function makeCreateParticipantUseCase(): CreateParticipantUseCase {
  const repository = new LocalStorageParticipantRepository(new StorageClient())
  const usecase = new CreateParticipantUseCase(repository)
  return usecase
}
