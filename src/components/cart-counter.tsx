import type { Signal } from '@builder.io/qwik'
import { $, component$, useSignal, useTask$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'

// import { inlineTranslate } from 'qwik-speak'
import {
  A,
  CartIcon,
  TOGGLE_MINI_CART, type ToggleMiniCartEvent,
  useCartCounter,
  useClickOutside,
} from './shared'

function inlineTranslate() {
  return (v: string) => v
}

export const CartCounter = component$<{number: number}>(({number}) => {
  const t = inlineTranslate()
  const cartCounterRef = useSignal<HTMLDivElement>()
  const { cartQtySignal, priceSignal, cartTotalSignal, cartCurrencySignal } =
    useCartCounter()

  const { url } = useLocation()

  const preventNavigation = url.pathname !== '/cart/'

  useTask$(({ track }) => {
    track(() => cartQtySignal.value)

    if (typeof window !== 'undefined') {
      console.log('cart')
      console.log(
        cartQtySignal.value,
        cartTotalSignal.value,
        cartCurrencySignal.value
      )
    }
  })

  const miniCartOpen = useSignal(false)

  const toggleMiniCart$ = $((value: boolean) => {
    console.log('toggleMiniCart$', value)

    miniCartOpen.value = value
    document.dispatchEvent(
      new CustomEvent<ToggleMiniCartEvent>(TOGGLE_MINI_CART, {
        detail: value,
      })
    )
  })

  useClickOutside(
    'mini-cart-inner',
    cartCounterRef,
    $(() => toggleMiniCart$(false))
  )

  return (
    <div ref={cartCounterRef}>
      <A
        href="/cart/"
        role="button"
        class={`relative flex h-19 items-center justify-start ${
          miniCartOpen.value ? 'shadow-underline' : ''
        }`}
        preventdefault:click={preventNavigation}
        onClick$={$(() => {
          console.log('preventNavigation')
          console.log(preventNavigation, miniCartOpen.value)

          alert(`I'm ${number}`)

          if (preventNavigation) {
            void toggleMiniCart$(!miniCartOpen.value)
          }
        })}
        aria-label={t('app.header.myCart@@My Cart')}
      >
        <div class="flex h-12 items-center justify-start gap-2">
          <CartIcon />
          <div class="hidden w-20 self-start 2xl:block">
            <p class="text-left">{number}</p>
            <span class="text-left text-base">{priceSignal.value}</span>
          </div>
          <CartCounterValue
            class="absolute left-5 top-2.5 box-border flex min-w-6 items-center justify-center rounded-full border border-body-text bg-primary px-1 text-sm font-semibold text-primary-button-text"
            value={cartQtySignal}
          />
        </div>
      </A>
    </div>
  )
})

const CartCounterValue = component$<{ value: Signal<number>; class?: string }>(
  ({ value, class: _class }) => {
    console.log('value')
    console.log(value)

    if (!value.value) {
      return null
    }

    return (
      <div class={_class}>
        <span>{value.value}</span>
      </div>
    )
  }
)
