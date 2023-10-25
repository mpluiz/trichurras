export function currencyFormat(number: number): string {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(number)
}

export function dateFormat(date: Date): string {
  return new Intl.DateTimeFormat('pt-br', { day: 'numeric', month: 'numeric' }).format(new Date(date))
}
