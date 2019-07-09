# flex-box

| Work in progress

flex-box is a web component container that add styles to the host element using attribute selectors.

For examples usage look in the `examples` directory.

## Usage

Add flex-box to your project:

```
npm i flex-box
```

Import flex-box definition into your HTML page:

```html
<script type="module" src="flex-box/lib/flex-box.js"></script>
```

Or into your module script:

```javascript
import from "flex-box";
```

Use it in your web page:

```html
<flex-box row justify="end">
  <flex-box column shrink>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </flex-box>
  <flex-box column grow>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </flex-box>
  <flex-box column shrink>
    <div>7</div>
    <div>8</div>
    <div>9</div>
  </flex-box>
</flex-box>

<flex-box column align="center">
  <flex-box row>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </flex-box>
  <flex-box row justify="end">
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </flex-box>
  <flex-box row>
    <div>7</div>
    <div grow>8</div>
    <div>9</div>
  </flex-box>
</flex-box>
```

## Attributes

**row** - sets flex-direction to row.
**column** - sets flex-direction to column.
**wrap** - sets flex-wrap to wrap. Default is nowrap.
**grow** - applies to slotted elements - sets flex-grow to 1 and flex-shrink to 0.
**shrink** - applies to slotted elements - sets flex-shrink to 1 and flex-grow to 0.
**align** - [start|end|center|baseline] - sets align-items to value
**align-self** - [start|end|center|baseline] - applies to slotted elements - sets align-self to value.
**align-content** - [start|end|center|space-around|space-between] - sets align-content to value.
**justify** - [start|end|center|space-around|space-between] - sets justify-content to value.
**justify-self** - [start|end|center|baseline] - applies to slotted elements - sets justify-self to value.

## License

[MIT License](https://github.com/bvkimball/flexible/blob/master/LICENSE) (c) Brian Kimball
