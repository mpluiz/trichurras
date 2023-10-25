import { BarbecueRepository } from '@/application/protocols'
import { Barbecue } from '@/domain/entities'

export class InMemoryBarbecueRepository implements BarbecueRepository {
  public barbecues: Barbecue[] = []

  async create(barbecue: Barbecue): Promise<void> {
    this.barbecues.push(barbecue)
  }

  async findById(id: string): Promise<Barbecue | null> {
    const index = this.barbecues.findIndex(barbecue => barbecue.id.toString() === id)
    return this.barbecues[index]
  }

  async findMany(): Promise<Barbecue[]> {
    return this.barbecues
  }

  async update(barbecue: Barbecue): Promise<void> {
    const index = this.barbecues.findIndex(current => current.id.toString() === barbecue.id.toString())
    this.barbecues[index] = barbecue
  }

  async delete(id: string): Promise<void> {
    const index = this.barbecues.findIndex(barbecue => barbecue.id.toString() === id)
    this.barbecues.splice(index, 1)
  }
}
