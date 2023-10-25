export interface BarbecueDTO {
  id?: string
  title: string
  notes?: string
  suggestedValue: { withDrinks: number, withoutDrinks: number }
  date: Date
}
