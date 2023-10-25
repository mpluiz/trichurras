import { ParticipantRepository } from '@/application/protocols'
import { Participant } from '@/domain/entities'
import { StorageClient, LocalStorageParticipantMapper } from '@/infra/database/local-storage'

export class LocalStorageParticipantRepository implements ParticipantRepository {
  constructor(private storage: StorageClient) {}

  async findById(id: string): Promise<Participant | null> {
    const participants = this.storage.get('participants')
    const index = participants.findIndex((participant: { id: string }) => participant.id === id)
    return LocalStorageParticipantMapper.toDomain(participants[index])
  }

  async findManyByBarbecueId(barbecueId: string): Promise<Participant[]> {
    const participants = this.storage.get('participants')
    if (!participants) return []

    return participants
      .filter((participant: { barbecueId: string }) => participant.barbecueId === barbecueId)
      .map(LocalStorageParticipantMapper.toDomain)
  }

  async findMany(): Promise<Participant[]> {
    const participants = this.storage.get('participants')
    if (!participants) return []
    return participants.map(LocalStorageParticipantMapper.toDomain)
  }

  async create(participant: Participant): Promise<void> {
    const data = LocalStorageParticipantMapper.toPersistence(participant)
    const participants = this.storage.get('participants')

    if (!participants) return this.storage.set('participants', [data])

    participants.push(data)
    this.storage.set('participants', participants)
  }

  async createMany(participants: Participant[]): Promise<void> {
    const data = participants.map(LocalStorageParticipantMapper.toPersistence)
    const storage = this.storage.get('participants')

    if (!storage) return this.storage.set('participants', data)
    this.storage.set('participants', storage.concat(data))
  }

  async update(participant: Participant): Promise<void> {
    const data = LocalStorageParticipantMapper.toPersistence(participant)
    const participants = this.storage.get('participants')
    const index = participants.findIndex((participant: { id: string }) => participant.id === data.id)
    participants[index] = data
    this.storage.remove('participants')
    this.storage.set('participants', participants)
  }

  async delete(id: string): Promise<void> {
    const participants = this.storage.get('participants')
    const index = participants.findIndex((participant: { id: string }) => participant.id === id)
    participants.splice(index, 1)
    this.storage.remove('participants')
    this.storage.set('participants', participants)
  }
}
