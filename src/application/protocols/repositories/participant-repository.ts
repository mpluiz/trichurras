import { Participant } from '@/domain/entities'

export abstract class ParticipantRepository {
  abstract findById(id: string): Promise<Participant | null>
  abstract findMany(): Promise<Participant[]>
  abstract findManyByBarbecueId(barbecueId: string): Promise<Participant[]>
  abstract create(participant: Participant): Promise<void>
  abstract createMany(participants: Participant[]): Promise<void>
  abstract update(participant: Participant): Promise<void>
  abstract delete(id: string): Promise<void>
}
