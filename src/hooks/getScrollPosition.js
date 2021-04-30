const isBrowser = typeof window !== 'undefined'

export const getScrollPosition = ({ ref, useWindow }) => {
    if ( !isBrowser ) return { x: 0, y: 0 }

    const target = ref ? ref.current : document.body
    const position = target.getBoundingClientRect()

    return useWindow 
        ? { x: window.scrollX, y: window.scrollY }
        : { x: position.left, y: position.top }
}