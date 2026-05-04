export {};

declare global {
  interface Window {
    initRv?: () => void;
    magnet?: (el: HTMLElement, e: MouseEvent, strength?: number) => void;
    magnetReset?: (el: HTMLElement | null) => void;
  }
}
