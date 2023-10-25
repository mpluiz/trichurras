import { CreateManyParticipantsUseCase } from '@/application/usecases'
import { LocalStorageParticipantRepository, StorageClient } from '@/infra/database/local-storage'

export function makeCreateManyParticipantsUseCase(): CreateManyParticipantsUseCase {
  const repository = new LocalStorageParticipantRepository(new StorageClient())
  const usecase = new CreateManyParticipantsUseCase(repository)
  return usecase
}
