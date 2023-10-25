import { CreateBarbecueUseCase } from '@/application/usecases'
import { LocalStorageBarbecueRepository, StorageClient } from '@/infra/database/local-storage'

export function makeCreateBarbecueUseCase(): CreateBarbecueUseCase {
  const repository = new LocalStorageBarbecueRepository(new StorageClient())
  const usecase = new CreateBarbecueUseCase(repository)
  return usecase
}
