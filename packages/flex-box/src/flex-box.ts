import {
  FlexibleElement,
  customElement,
  TemplateResult,
  html,
  css,
  CSSResult
} from 'flexible-core';

@customElement('flex-box')
export class FlexBoxElement extends FlexibleElement {
  static get styles(): CSSResult {
    return css`
      :host {
        display: flex;
        flex: 1 1 auto;
        flex-wrap: nowrap;
        min-width: 0;
      }

      :host([wrap]) {
        flex-wrap: wrap;
      }

      :host([row]) {
        flex-direction: row;
      }

      [row][reverse] {
        flex-direction: row-reverse;
      }

      :host([column]) {
        flex-direction: column;
      }

      [column][reverse] {
        flex-direction: row-reverse;
      }

      ::slotted([flex]),
      :host > * {
        flex: 1 1 auto;
        max-width: 100%;
      }

      :host([align="start"]) {
        align-items: flex-start;
      }
      :host([align="end"]) {
        align-items: flex-end;
      }
      :host([align="center"]) {
        align-items: center;
      }
      :host([align="baseline"]) {
        align-items: baseline;
      }

      ::slotted([align-self="start"]) {
        align-self: flex-start;
      }

      ::slotted([align-self="end"]) {
        align-self: flex-end;
      }

      ::slotted([align-self="center"]) {
        align-self: center;
      }

      ::slotted([align-self="baseline"]) {
        align-self: baseline;
      }

      :host([align-content="start"]) {
        align-content: flex-start;
      }

      :host([align-content="end"]) {
        align-content: flex-end;
      }

      :host([align-content="center"]) {
        align-content: center;
      }

      :host([align-content="space-between"]) {
        align-content: space-between;
      }

      :host([align-content="space-around"]) {
        align-content: space-around;
      }

      :host([justify="start"]) {
        justify-content: flex-start;
      }

      :host([justify="end"]) {
        justify-content: flex-end;
      }

      :host([justify="center"]) {
        justify-content: center;
      }

      :host([justify="space-around"]) {
        justify-content: space-around;
      }

      :host([justify="space-between"]) {
        justify-content: space-between;
      }

      ::slotted([justify-self="start"]) {
        justify-self: flex-start;
      }

      ::slotted([justify-self="end"]) {
        justify-self: flex-end;
      }

      ::slotted([justify-self="center"]) {
        justify-self: center;
      }

      ::slotted([justify-self="baseline"]) {
        justify-self: baseline;
      }

      ::slotted([grow]) {
        flex-grow: 1 !important;
        flex-shrink: 0 !important;
      }

      ::slotted([shrink]) {
        flex-grow: 0 !important;
        flex-shrink: 1 !important;
      }

      ::slotted([scroll-y]) {
        overflow-y: auto;
      }

      ::slotted([fill-height]) {
        height: 100%;
      }

      ::slotted([hide-overflow]) {
        overflow: hidden !important;
      }

      ::slotted([show-overflow]) {
        overflow: visible !important;
      }

      ::slotted([no-wrap]) {
        white-space: nowrap;
      }

      ::slotted([ellipsis]) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}
