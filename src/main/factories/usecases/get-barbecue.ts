import { GetBarbecueUseCase } from '@/application/usecases'
import { LocalStorageBarbecueRepository, StorageClient } from '@/infra/database/local-storage'

export function makeGetBarbecueUseCase(): GetBarbecueUseCase {
  const repository = new LocalStorageBarbecueRepository(new StorageClient())
  const usecase = new GetBarbecueUseCase(repository)
  return usecase
}
