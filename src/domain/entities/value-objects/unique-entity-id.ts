import { v4 as uuid } from 'uuid'

export class UniqueEntityID {
  private readonly value: string

  constructor(value?: string) {
    this.value = value ?? uuid()
  }

  toString() {
    return this.value
  }
}
