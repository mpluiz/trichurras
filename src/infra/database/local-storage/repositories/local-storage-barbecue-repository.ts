import { BarbecueRepository } from '@/application/protocols'
import { Barbecue } from '@/domain/entities'
import { StorageClient, LocalStorageBarbecueMapper } from '@/infra/database/local-storage'

export class LocalStorageBarbecueRepository implements BarbecueRepository {
  constructor(private storage: StorageClient) {}

  async findById(id: string): Promise<Barbecue | null> {
    const barbecues = this.storage.get('barbecues')
    const index = barbecues.findIndex((barbecue: { id: string }) => barbecue.id === id)
    return LocalStorageBarbecueMapper.toDomain(barbecues[index])
  }

  async findMany(): Promise<Barbecue[]> {
    const barbecues = this.storage.get('barbecues')
    if (!barbecues) return []
    return barbecues.map(LocalStorageBarbecueMapper.toDomain)
  }

  async create(barbecue: Barbecue): Promise<void> {
    const data = LocalStorageBarbecueMapper.toPersistence(barbecue)
    const barbecues = this.storage.get('barbecues')

    if (!barbecues) return this.storage.set('barbecues', [data])

    barbecues.push(data)
    this.storage.set('barbecues', barbecues)
  }

  async update(barbecue: Barbecue): Promise<void> {
    const data = LocalStorageBarbecueMapper.toPersistence(barbecue)
    const barbecues = this.storage.get('barbecues')
    const index = barbecues.findIndex((barbecue: { id: string }) => barbecue.id === data.id)
    barbecues[index] = data
    this.storage.remove('barbecues')
    this.storage.set('barbecues', barbecues)
  }

  async delete(id: string): Promise<void> {
    const barbecues = this.storage.get('barbecues')
    const index = barbecues.findIndex((barbecue: { id: string }) => barbecue.id === id)
    barbecues.splice(index, 1)
    this.storage.remove('barbecues')
    this.storage.set('barbecues', barbecues)
  }
}
