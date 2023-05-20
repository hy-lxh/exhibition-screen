export function useEvent(
    el: HTMLElement | Window,
    type: keyof HTMLElementEventMap,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
) {
    el.addEventListener(type, listener, options);
    return () => el.removeEventListener(type, listener, options);
}
