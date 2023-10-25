import { UniqueEntityID } from '@/domain/entities/value-objects'

export abstract class Entity<Props> {
  private readonly _id: UniqueEntityID
  protected props: Props

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }

  get id(): UniqueEntityID {
    return this._id
  }

  toValue(): Props & { id: string } {
    return { id: this.id.toString(), ...this.props }
  }
}
