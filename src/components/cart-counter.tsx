import {$, component$, useSignal} from '@builder.io/qwik'

export const CartCounter = component$<{number: number}>(({number}) => {
  const counter = useSignal(0)

  return (
    <button onClick$={$(() => {
      counter.value += counter.value + number
    })}>
      {`${number} ${counter.value}`}
    </button>
  )
})
