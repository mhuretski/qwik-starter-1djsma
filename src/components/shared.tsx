import {Slot, component$, useSignal, useComputed$, useOnDocument, $, type Signal, type QRL} from '@builder.io/qwik'
import type {LinkProps} from "@builder.io/qwik-city";
export type ToggleMiniCartEvent = boolean

export const CartIcon = component$<{ class?: string }>(() => {
    return (
        <svg
           width={1}
           height={1}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M35.7747 6.31476C35.4549 5.83543 35.0151 5.83543 34.8554 5.83543H7.71443L7.23485 2.95891C7.11496 2.3996 6.63539 2 6.07581 2H1.15904C0.479557 2 0 2.51946 0 3.15846C0 3.79775 0.519721 4.31691 1.15904 4.31691H5.11634L7.67454 19.6983C7.67454 19.8181 7.71441 19.938 7.75457 20.0179L8.59383 25.2917C8.71373 25.851 9.1933 26.2105 9.75288 26.2105H30.7781C31.4576 26.2105 31.9372 25.6911 31.9372 25.0521C31.9372 24.4128 31.4174 23.8936 30.7781 23.8936H10.7122L10.1925 20.7774H31.4576C31.6973 20.8172 31.9371 20.7375 32.1371 20.6177C32.3768 20.458 32.5768 20.1782 32.6166 19.8987L35.9346 7.31323C36.0545 6.99358 36.0143 6.63409 35.7745 6.31444L35.7747 6.31476ZM33.3765 8.15268L30.6583 18.5002H9.83287L8.11422 8.19264H33.3765V8.15268Z"
                fill="currentColor"
            />
            <path
                d="M12.9105 27.2494C10.792 27.2494 9.0332 28.9672 9.0332 31.1247C9.0332 33.2819 10.7519 35 12.9105 35C15.0688 35 16.7878 33.2822 16.7878 31.1247C16.7878 28.9672 15.0691 27.2494 12.9105 27.2494ZM12.9105 29.5666C13.75 29.5666 14.3894 30.2457 14.3894 31.0848C14.3894 31.9239 13.67 32.603 12.8704 32.603C12.0308 32.603 11.3915 31.9239 11.3915 31.0848C11.3918 30.2856 12.0712 29.5666 12.9105 29.5666Z"
                fill="currentColor"
            />
            <path
                d="M25.6214 27.2494C23.5029 27.2494 21.7441 28.9672 21.7441 31.1247C21.7441 33.2819 23.4628 35 25.6214 35C27.7798 35 29.4987 33.2822 29.4987 31.1247C29.4987 28.9672 27.7798 27.2494 25.6214 27.2494ZM25.5813 29.5666C26.4607 29.5666 27.1003 30.2457 27.1003 31.0848C27.1003 31.9239 26.4208 32.603 25.5813 32.603C24.7417 32.603 24.0623 31.9239 24.0623 31.0848C24.0625 30.2856 24.742 29.5666 25.5813 29.5666Z"
                fill="currentColor"
            />
        </svg>
    )
})

export const TOGGLE_MINI_CART = 'TOGGLE_MINI_CART'


export const A = component$<
    Omit<
        LinkProps,
        'prefetch' | 'reload' | 'replaceState' | 'scroll' | 'link:app'
    >
>((props) => {
    return (
        <a {...props} href={props.href}>
            <Slot />
        </a>
    )
})


export const useCartCounter = () => {
    // const personalizedCookies = usePersonalizedCookies()

    const cartQtySignal = useSignal(0)
    const cartTotalSignal = useSignal(0)
    const cartCurrencySignal = useSignal('USD')

    const priceSignal = useComputed$(() => {
        if (!cartTotalSignal.value) return

        const currency = cartCurrencySignal.value || 'USD'
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency,
            currencyDisplay: 'narrowSymbol',
        }).format(cartTotalSignal.value)
    })

    useOnDocument(
        'CLIENT_GLOBAL',
        $(({ detail }: CustomEvent<any>) => {
            if (detail.cart?.data?.totalQuantity == null) return

            cartQtySignal.value = detail.cart.data.totalQuantity
            cartTotalSignal.value = Number(detail.cart.data.cost.totalAmount.amount)
            cartCurrencySignal.value = detail.cart.data.cost.totalAmount.currencyCode
        })
    )

    return {
        cartQtySignal,
        priceSignal,
        cartTotalSignal,
        cartCurrencySignal,
    }
}


export const useClickOutside = (
    refOrId: Signal<HTMLElement | undefined> | string,
    refTrigger: Signal<HTMLElement | undefined>,
    onClickOut: QRL<(event: Event) => void>
) => {
    useOnDocument(
        'click',
        $((event) => {
            const target = event.target as HTMLElement

            let element
            if (typeof refOrId === 'string') {
                element = document.getElementById(refOrId)
            } else {
                element = refOrId.value
            }

            if (!element || refTrigger.value?.contains(target)) {
                return
            }

            if (!element.contains(target)) {
                void onClickOut(event)
            }
        })
    )
}
