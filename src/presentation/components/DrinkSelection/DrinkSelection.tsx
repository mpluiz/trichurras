import { useState } from 'react'
import { IconBeer, IconBlockedBeer } from '@/presentation/components'
import '@/presentation/components/DrinkSelection/DrinkSelection.scss'

export function DrinkSelection() {
  const [option, setOption] = useState('withDrinks')
  const isChecked = (value: string) => option === value

  return (
    <div className="drink-selection">
      <div className="with-drinks" data-active={isChecked('withDrinks')} onClick={() => setOption('withDrinks')}>
        <IconBeer size={24}/>
      </div>
      <div className="without-drinks" data-active={isChecked('withoutDrinks')} onClick={() => setOption('withoutDrinks')}>
        <IconBlockedBeer size={32}/>
      </div>
      <input
        type="radio"
        name="drink"
        value="withDrinks"
        onChange={(event) => setOption(event.currentTarget.value)}
        checked={isChecked('withDrinks')}
        hidden
      />
      <input
        type="radio"
        name="drink"
        value="withoutDrinks"
        onChange={(event) => setOption(event.currentTarget.value)}
        checked={isChecked('withoutDrinks')}
        hidden
      />
    </div>
  )
}
