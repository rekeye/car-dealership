import { useLayoutEffect, useRef } from 'react'
import { getScrollPosition } from './getScrollPosition'

export const useScrollPosition = ( effect, deps, el, useWindow, wait ) => {
    const position = useRef( getScrollPosition({ useWindow }) )
    let throttleTimeout = null

    const callback = () => {
        const curPosition = getScrollPosition({ el, useWindow })

        effect({ prevPosition: position.current, curPosition: curPosition });
        position.current = curPosition;
        throttleTimeout = null;
    }

    useLayoutEffect(() => {
        const scrollHandler = () => {
            wait && !throttleTimeout
                ? throttleTimeout = setTimeout( callback, wait )
                : callback()
        }

        window.addEventListener( 'scroll', scrollHandler )

        return () => window.removeEventListener( 'scroll', scrollHandler )
    }, deps)
}