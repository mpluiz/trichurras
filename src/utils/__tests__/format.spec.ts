import { currencyFormat } from '@/utils/format.ts'

describe('Utils Format', () => {
  it ('should format number to brl currency', () => {
    const formattedNumber = currencyFormat(200)

    expect(formattedNumber).toEqual('R$ 200,00')
  })
})
