export class Money {
  protected readonly _value: number

  constructor(value: number) {
    this._value = value
  }

  get value(): number {
    return this._value
  }

  add(amount: Money): Money {
    return new Money(this._value + amount._value)
  }

  subtract(amount: Money): Money {
    return new Money(this._value - amount._value)
  }
}
