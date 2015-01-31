/**
 * Simple library for setting the font of every element on a page to Comic
 * Sans with minimal effort.
 */
var foolfonts = {
    /**
     * An array of font names to ignore, which will cause the parser to not
     * make them Comic Sans MS. This is useful for icon fonts and logo fonts.
     *
     * @var {array}
     */
    _ignore: [],

    /**
     * Initiate the horrible, horrible process of iterating through each
     * element in the page and checking if it's renderable and doesn't
     * contain an already-ignored font.
     *
     * @param {object} options The options to set for the runtime.
     */
    init: function(options) {
        options = options || {};

        if (!('force' in options && options.force) && !this.isAprilFirst()) {
            return;
        }

        this.ignore('Comic Sans MS');

        if ('ignore' in options && typeof options.ignore === 'string') {
            this.ignore(options.ignore);
        } elseif ('ignore' in options && typeof options.ignore === 'array') {
            for (var i in options.ignore) {
                this.ignore(options.ignore[i]);
            }
        }

        var elements = document.documentElement.getElementsByTagName('*');

        for (var i in elements) {
            var element = elements[i];
            var computed = window.getComputedStyle(element) || element.currentStyle;

            if (computed !== null && typeof computed !== 'undefined') {
                var font = 'fontFamily' in computed && computed.fontFamily;

                if (font !== null && typeof font === 'string') {
                    this.check(element, font);
                }
            }
        }
    },

    /**
     * Check if the element has a font that is on the ignore list, which
     * conveniently includes our beautiful Comic Sans MS font itself.
     *
     * @param {object} element The element to check.
     * @param {string} font The currently applied font names.
     */
    check: function(element, font) {
        var lowercase = font.toLowerCase();

        for (var j in this._ignore) {
            if (lowercase.indexOf(this._ignore[j]) !== -1) {
                return;
            }
        }

        element.style.fontFamily = '"Comic Sans MS", ' + font;
    },

    /**
     * Check if it currently April 1st, otherwise we really shouldn't be
     * destroying these websites...
     */
    isAprilFirst: function() {
        return new Date().getMonth() == 3 && new Date().getDate() == 1; // 3 is April, not 4.
    },

    /**
     * Ignore the specified font, which we cast to lower case for easier
     * comparison later
     *
     * @param {string} font The font name to ignore.
     */
    ignore: function(font) {
        this._ignore.push(font.toLowerCase());
    }
};
