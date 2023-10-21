import { Money } from '@/domain/entities/value-objects/money.ts'

export class Contribution extends Money {
  constructor(value: number) {
    super(value)
  }
}
