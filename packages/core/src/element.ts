import { LitElement } from 'lit-element';

export class FlexibleElement extends LitElement {
  protected debounce(
    func: Function,
    wait: number,
    immediate: boolean,
    context: HTMLElement
  ): EventListenerOrEventListenerObject {
    let timeout = 0;
    return () => {
      const args = arguments;
      const later = () => {
        timeout = 0;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = window.setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }
}
