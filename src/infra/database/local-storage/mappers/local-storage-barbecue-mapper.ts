import { Barbecue } from '@/domain/entities'
import { Money, UniqueEntityID } from '@/domain/entities/value-objects'

export class LocalStorageBarbecueMapper {
  static toDomain(raw: any): Barbecue {
    return Barbecue.create({
      title: raw.title,
      notes: raw.notes,
      suggestedValue: {
        withDrinks: new Money(raw.suggestedValue.withDrinks),
        withoutDrinks: new Money(raw.suggestedValue.withoutDrinks)
      },
      date: raw.date,
      createdAt: raw.createdAt
    }, new UniqueEntityID(raw.id))
  }

  static toPersistence(barbecue: Barbecue) {
    const {
      id,
      title,
      notes,
      suggestedValue,
      date,
      createdAt
    } = barbecue.toValue()

    return {
      id,
      title,
      notes,
      date,
      createdAt,
      suggestedValue: {
        withDrinks: suggestedValue.withDrinks.value,
        withoutDrinks: suggestedValue.withoutDrinks.value
      }
    }
  }
}
