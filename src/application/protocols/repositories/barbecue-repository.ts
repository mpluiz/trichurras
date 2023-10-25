import { Barbecue } from '@/domain/entities'

export abstract class BarbecueRepository {
  abstract findById(id: string): Promise<Barbecue | null>
  abstract findMany(): Promise<Barbecue[]>
  abstract create(barbecue: Barbecue): Promise<void>
  abstract update(barbecue: Barbecue): Promise<void>
  abstract delete(id: string): Promise<void>
}
