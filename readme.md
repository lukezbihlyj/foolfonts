# FoolFonts

FoolFonts converts your entire website into Comic Sans for one day and one day only - our beloved April 1st. Very lightweight, highly efficient and rather ridiculous are the three Web 6.0 buzzwords that we use to spread propaganda about this product.

![Hacker News with FoolFonts](https://github.com/lukezbihlyj/foolfonts/raw/master/example.png "Hacker News with FoolFonts")

## Usage

```html
<script type="text/javascript" src="foolfonts.js"></script>
```

First, include the library script somewhere on the page. It's a very small file if minified with the rest of your application, so you can integrate it with your compilation process if you wish to do so.

```js
document.addEventListener('DOMContentLoaded', function() {
    foolfonts.init({
        force: true,
        ignore: ['FontAwesome']
    });
});

// Or with jQuery...

$(function() {
    foolfonts.init();
});
```

Now somewhere on your page (probably in the `<head>` section of your document) you need to run `foolfonts.init()`. The optional parameters to pass are listed below.

## Options

| Key            | Format                     |
| -------------- | -------------------------- |
| force | `boolean` - If true, the library will force the parsing process even if it's not April 1st. |
| ignore | `string` or `array` - A single font name to exclude from parsing, or an array of font names. |
