import { ParticipantRepository } from '@/application/protocols'
import { Participant } from '@/domain/entities'

export class InMemoryParticipantRepository implements ParticipantRepository {
  public participants: Participant[] = []

  async create(participant: Participant): Promise<void> {
    this.participants.push(participant)
  }

  async createMany(participants: Participant[]): Promise<void> {
    this.participants = this.participants.concat(participants)
  }

  async findManyByBarbecueId(barbecueId: string): Promise<Participant[]> {
    return this.participants.filter(participant => participant.barbecueId.toString() === barbecueId)
  }

  async findById(id: string): Promise<Participant | null> {
    const index = this.participants.findIndex(participant => participant.id.toString() === id)
    return this.participants[index]
  }

  async findMany(): Promise<Participant[]> {
    return this.participants
  }

  async update(participant: Participant): Promise<void> {
    const index = this.participants.findIndex(current => current.id.toString() === participant.id.toString())
    this.participants[index] = participant
  }

  async delete(id: string): Promise<void> {
    const index = this.participants.findIndex(barbecue => barbecue.id.toString() === id)
    this.participants.splice(index, 1)
  }
}
