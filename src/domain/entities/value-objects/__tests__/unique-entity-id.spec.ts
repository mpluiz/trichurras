import { v4 as uuid } from 'uuid'
import { UniqueEntityID } from '@/domain/entities/value-objects'

describe('UniqueEntityID', () => {
  it('should generate a random value when not provide a value', () => {
    const sut = new UniqueEntityID()

    expect(sut.toString()).toBeTruthy()
  })

  it('should create an UniqueEntityId when provide a custom value', () => {
    const customId = uuid()
    const sut = new UniqueEntityID(customId)

    expect(sut.toString()).toEqual(customId)
  })
})
