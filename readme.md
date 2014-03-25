# FoolFonts

> Making great websites even greater with the use of our beloved Comic Sans exclusively on April 1st!

## Usage

```html
<script type="text/javascript" src="foolfonts.js"></script>
```

First, include the library script somewhere on the page. It's a very small file if minified with the rest of your application, so you can integrate it with your compilation process if you wish to do so.

```js
document.addEventListener("DOMContentLoaded", function() {
    foolfonts.init({
        force: true,
        ignore: ["FontAwesome"]
    });
});

$(function() {
    foolfonts.init();
});
```

Now somewhere on your page (probably in the `<head>` section of your document) you need to run `foolfonts.init()`. The optional parameters to pass are listed below:

| Key            | Format                     |
| -------------- | -------------------------- |
| force | `boolean` - If true, the library will force the parsing process even if it's not April 1st. |
| ignore | `string` or `array` - A single font name to exclude from parsing, or an array of font names. |