import { DeleteBarbecueUseCase } from '@/application/usecases'
import { LocalStorageBarbecueRepository, StorageClient } from '@/infra/database/local-storage'

export function makeDeleteBarbecueUseCase(): DeleteBarbecueUseCase {
  const repository = new LocalStorageBarbecueRepository(new StorageClient())
  const usecase = new DeleteBarbecueUseCase(repository)
  return usecase
}
