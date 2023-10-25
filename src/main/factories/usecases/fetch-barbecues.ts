import { FetchBarbecuesUseCase } from '@/application/usecases'
import { LocalStorageBarbecueRepository, StorageClient } from '@/infra/database/local-storage'

export function makeFetchBarbecuesUseCase(): FetchBarbecuesUseCase {
  const repository = new LocalStorageBarbecueRepository(new StorageClient())
  const usecase = new FetchBarbecuesUseCase(repository)
  return usecase
}
