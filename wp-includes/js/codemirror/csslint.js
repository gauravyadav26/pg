/*!
CSSLint v1.0.4
Copyright (c) 2016 Nicole Sullivan and Nicholas C. Zakas. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var CSSLint = (function(){
  var module = module || {},
      exports = exports || {};

/*!
Parser-Lib
Copyright (c) 2009-2016 Nicholas C. Zakas. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
/* Version v1.1.0, Build time: 6-December-2016 10:31:29 */
var parserlib = (function () {
var require;
require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/* exported Colors */

var Colors = module.exports = {
    __proto__       :null,
    aliceblue       :"#f0f8ff",
    antiquewhite    :"#faebd7",
    aqua            :"#00ffff",
    aquamarine      :"#7fffd4",
    azure           :"#f0ffff",
    beige           :"#f5f5dc",
    bisque          :"#ffe4c4",
    black           :"#000000",
    blanchedalmond  :"#ffebcd",
    blue            :"#0000ff",
    blueviolet      :"#8a2be2",
    brown           :"#a52a2a",
    burlywood       :"#deb887",
    cadetblue       :"#5f9ea0",
    chartreuse      :"#7fff00",
    chocolate       :"#d2691e",
    coral           :"#ff7f50",
    cornflowerblue  :"#6495ed",
    cornsilk        :"#fff8dc",
    crimson         :"#dc143c",
    cyan            :"#00ffff",
    darkblue        :"#00008b",
    darkcyan        :"#008b8b",
    darkgoldenrod   :"#b8860b",
    darkgray        :"#a9a9a9",
    darkgrey        :"#a9a9a9",
    darkgreen       :"#006400",
    darkkhaki       :"#bdb76b",
    darkmagenta     :"#8b008b",
    darkolivegreen  :"#556b2f",
    darkorange      :"#ff8c00",
    darkorchid      :"#9932cc",
    darkred         :"#8b0000",
    darksalmon      :"#e9967a",
    darkseagreen    :"#8fbc8f",
    darkslateblue   :"#483d8b",
    darkslategray   :"#2f4f4f",
    darkslategrey   :"#2f4f4f",
    darkturquoise   :"#00ced1",
    darkviolet      :"#9400d3",
    deeppink        :"#ff1493",
    deepskyblue     :"#00bfff",
    dimgray         :"#696969",
    dimgrey         :"#696969",
    dodgerblue      :"#1e90ff",
    firebrick       :"#b22222",
    floralwhite     :"#fffaf0",
    forestgreen     :"#228b22",
    fuchsia         :"#ff00ff",
    gainsboro       :"#dcdcdc",
    ghostwhite      :"#f8f8ff",
    gold            :"#ffd700",
    goldenrod       :"#daa520",
    gray            :"#808080",
    grey            :"#808080",
    green           :"#008000",
    greenyellow     :"#adff2f",
    honeydew        :"#f0fff0",
    hotpink         :"#ff69b4",
    indianred       :"#cd5c5c",
    indigo          :"#4b0082",
    ivory           :"#fffff0",
    khaki           :"#f0e68c",
    lavender        :"#e6e6fa",
    lavenderblush   :"#fff0f5",
    lawngreen       :"#7cfc00",
    lemonchiffon    :"#fffacd",
    lightblue       :"#add8e6",
    lightcoral      :"#f08080",
    lightcyan       :"#e0ffff",
    lightgoldenrodyellow  :"#fafad2",
    lightgray       :"#d3d3d3",
    lightgrey       :"#d3d3d3",
    lightgreen      :"#90ee90",
    lightpink       :"#ffb6c1",
    lightsalmon     :"#ffa07a",
    lightseagreen   :"#20b2aa",
    lightskyblue    :"#87cefa",
    lightslategray  :"#778899",
    lightslategrey  :"#778899",
    lightsteelblue  :"#b0c4de",
    lightyellow     :"#ffffe0",
    lime            :"#00ff00",
    limegreen       :"#32cd32",
    linen           :"#faf0e6",
    magenta         :"#ff00ff",
    maroon          :"#800000",
    mediumaquamarine:"#66cdaa",
    mediumblue      :"#0000cd",
    mediumorchid    :"#ba55d3",
    mediumpurple    :"#9370d8",
    mediumseagreen  :"#3cb371",
    mediumslateblue :"#7b68ee",
    mediumspringgreen   :"#00fa9a",
    mediumturquoise :"#48d1cc",
    mediumvioletred :"#c71585",
    midnightblue    :"#191970",
    mintcream       :"#f5fffa",
    mistyrose       :"#ffe4e1",
    moccasin        :"#ffe4b5",
    navajowhite     :"#ffdead",
    navy            :"#000080",
    oldlace         :"#fdf5e6",
    olive           :"#808000",
    olivedrab       :"#6b8e23",
    orange          :"#ffa500",
    orangered       :"#ff4500",
    orchid          :"#da70d6",
    palegoldenrod   :"#eee8aa",
    palegreen       :"#98fb98",
    paleturquoise   :"#afeeee",
    palevioletred   :"#d87093",
    papayawhip      :"#ffefd5",
    peachpuff       :"#ffdab9",
    peru            :"#cd853f",
    pink            :"#ffc0cb",
    plum            :"#dda0dd",
    powderblue      :"#b0e0e6",
    purple          :"#800080",
    red             :"#ff0000",
    rosybrown       :"#bc8f8f",
    royalblue       :"#4169e1",
    saddlebrown     :"#8b4513",
    salmon          :"#fa8072",
    sandybrown      :"#f4a460",
    seagreen        :"#2e8b57",
    seashell        :"#fff5ee",
    sienna          :"#a0522d",
    silver          :"#c0c0c0",
    skyblue         :"#87ceeb",
    slateblue       :"#6a5acd",
    slategray       :"#708090",
    slategrey       :"#708090",
    snow            :"#fffafa",
    springgreen     :"#00ff7f",
    steelblue       :"#4682b4",
    tan             :"#d2b48c",
    teal            :"#008080",
    thistle         :"#d8bfd8",
    tomato          :"#ff6347",
    turquoise       :"#40e0d0",
    violet          :"#ee82ee",
    wheat           :"#f5deb3",
    white           :"#ffffff",
    whitesmoke      :"#f5f5f5",
    yellow          :"#ffff00",
    yellowgreen     :"#9acd32",
    //'currentColor' color keyword https://www.w3.org/TR/css3-color/#currentcolor
    currentColor        :"The value of the 'color' property.",
    //CSS2 system colors https://www.w3.org/TR/css3-color/#css2-system
    activeBorder        :"Active window border.",
    activecaption       :"Active window caption.",
    appworkspace        :"Background color of multiple document interface.",
    background          :"Desktop background.",
    buttonface          :"The face background color for 3-D elements that appear 3-D due to one layer of surrounding border.",
    buttonhighlight     :"The color of the border facing the light source for 3-D elements that appear 3-D due to one layer of surrounding border.",
    buttonshadow        :"The color of the border away from the light source for 3-D elements that appear 3-D due to one layer of surrounding border.",
    buttontext          :"Text on push buttons.",
    captiontext         :"Text in caption, size box, and scrollbar arrow box.",
    graytext            :"Grayed (disabled) text. This color is set to #000 if the current display driver does not support a solid gray color.",
    greytext            :"Greyed (disabled) text. This color is set to #000 if the current display driver does not support a solid grey color.",
    highlight           :"Item(s) selected in a control.",
    highlighttext       :"Text of item(s) selected in a control.",
    inactiveborder      :"Inactive window border.",
    inactivecaption     :"Inactive window caption.",
    inactivecaptiontext :"Color of text in an inactive caption.",
    infobackground      :"Background color for tooltip controls.",
    infotext            :"Text color for tooltip controls.",
    menu                :"Menu background.",
    menutext            :"Text in menus.",
    scrollbar           :"Scroll bar gray area.",
    threeddarkshadow    :"The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
    threedface          :"The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
    threedhighlight     :"The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
    threedlightshadow   :"The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
    threedshadow        :"The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
    window              :"Window background.",
    windowframe         :"Window frame.",
    windowtext          :"Text in windows."
};

},{}],2:[function(require,module,exports){
"use strict";

module.exports = Combinator;

var SyntaxUnit = require("../util/SyntaxUnit");

var Parser = require("./Parser");

/**
 * Represents a selector combinator (whitespace, +, >).
 * @namespace parserlib.css
 * @class Combinator
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 * @param {String} text The text representation of the unit.
 * @param {int} line The line of text on which the unit resides.
 * @param {int} col The column of text on which the unit resides.
 */
function Combinator(text, line, col) {

    SyntaxUnit.call(this, text, line, col, Parser.COMBINATOR_TYPE);

    /**
     * The type of modifier.
     * @type String
     * @property type
     */
    this.type = "unknown";

    //pretty simple
    if (/^\s+$/.test(text)) {
        this.type = "descendant";
    } else if (text === ">") {
        this.type = "child";
    } else if (text === "+") {
        this.type = "adjacent-sibling";
    } else if (text === "~") {
        this.type = "sibling";
    }

}

Combinator.prototype = new SyntaxUnit();
Combinator.prototype.constructor = Combinator;


},{"../util/SyntaxUnit":26,"./Parser":6}],3:[function(require,module,exports){
"use strict";

module.exports = Matcher;

var StringReader = require("../util/StringReader");
var SyntaxError = require("../util/SyntaxError");

/**
 * This class implements a combinator library for matcher functions.
 * The combinators are described at:
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax#Component_value_combinators
 */
function Matcher(matchFunc, toString) {
    this.match = function(expression) {
        // Save/restore marks to ensure that failed matches always restore
        // the original location in the expression.
        var result;
        expression.mark();
        result = matchFunc(expression);
        if (result) {
            expression.drop();
        } else {
            expression.restore();
        }
        return result;
    };
    this.toString = typeof toString === "function" ? toString : function() {
        return toString;
    };
}

/** Precedence table of combinators. */
Matcher.prec = {
    MOD:    5,
    SEQ:    4,
    ANDAND: 3,
    OROR:   2,
    ALT:    1
};

/** Simple recursive-descent grammar to build matchers from strings. */
Matcher.parse = function(str) {
    var reader, eat, expr, oror, andand, seq, mod, term, result;
    reader = new StringReader(str);
    eat = function(matcher) {
        var result = reader.readMatch(matcher);
        if (result === null) {
            throw new SyntaxError(
                "Expected "+matcher, reader.getLine(), reader.getCol());
        }
        return result;
    };
    expr = function() {
        // expr = oror (" | " oror)*
        var m = [ oror() ];
        while (reader.readMatch(" | ") !== null) {
            m.push(oror());
        }
        return m.length === 1 ? m[0] : Matcher.alt.apply(Matcher, m);
    };
    oror = function() {
        // oror = andand ( " || " andand)*
        var m = [ andand() ];
        while (reader.readMatch(" || ") !== null) {
            m.push(andand());
        }
        return m.length === 1 ? m[0] : Matcher.oror.apply(Matcher, m);
    };
    andand = function() {
        // andand = seq ( " && " seq)*
        var m = [ seq() ];
        while (reader.readMatch(" && ") !== null) {
            m.push(seq());
        }
        return m.length === 1 ? m[0] : Matcher.andand.apply(Matcher, m);
    };
    seq = function() {
        // seq = mod ( " " mod)*
        var m = [ mod() ];
        while (reader.readMatch(/^ (?![&|\]])/) !== null) {
            m.push(mod());
        }
        return m.length === 1 ? m[0] : Matcher.seq.apply(Matcher, m);
    };
    mod = function() {
        // mod = term ( "?" | "*" | "+" | "#" | "{<num>,<num>}" )?
        var m = term();
        if (reader.readMatch("?") !== null) {
            return m.question();
        } else if (reader.readMatch("*") !== null) {
            return m.star();
        } else if (reader.readMatch("+") !== null) {
            return m.plus();
        } else if (reader.readMatch("#") !== null) {
            return m.hash();
        } else if (reader.readMatch(/^\{\s*/) !== null) {
            var min = eat(/^\d+/);
            eat(/^\s*,\s*/);
            var max = eat(/^\d+/);
            eat(/^\s*\}/);
            return m.braces(+min, +max);
        }
        return m;
    };
    term = function() {
        // term = <nt> | literal | "[ " expression " ]"
        if (reader.readMatch("[ ") !== null) {
            var m = expr();
            eat(" ]");
            return m;
        }
        return Matcher.fromType(eat(/^[^ ?*+#{]+/));
    };
    result = expr();
    if (!reader.eof()) {
        throw new SyntaxError(
            "Expected end of string", reader.getLine(), reader.getCol());
    }
    return result;
};

/**
 * Convert a string to a matcher (parsing simple alternations),
 * or do nothing if the argument is already a matcher.
 */
Matcher.cast = function(m) {
    if (m instanceof Matcher) {
        return m;
    }
    return Matcher.parse(m);
};

/**
 * Create a matcher for a single type.
 */
Matcher.fromType = function(type) {
    // Late require of ValidationTypes to break a dependency cycle.
    var ValidationTypes = require("./ValidationTypes");
    return new Matcher(function(expression) {
        return expression.hasNext() && ValidationTypes.isType(expression, type);
    }, type);
};

/**
 * Create a matcher for one or more juxtaposed words, which all must
 * occur, in the given order.
 */
Matcher.seq = function() {
    var ms = Array.prototype.slice.call(arguments).map(Matcher.cast);
    if (ms.length === 1) {
        return ms[0];
    }
    return new Matcher(function(expression) {
        var i, result = true;
        for (i = 0; result && i < ms.length; i++) {
            result = ms[i].match(expression);
        }
        return result;
    }, function(prec) {
        var p = Matcher.prec.SEQ;
        var s = ms.map(function(m) {
            return m.toString(p);
        }).join(" ");
        if (prec > p) {
            s = "[ " + s + " ]";
        }
        return s;
    });
};

/**
 * Create a matcher for one or more alternatives, where exactly one
 * must occur.
 */
Matcher.alt = function() {
    var ms = Array.prototype.slice.call(arguments).map(Matcher.cast);
    if (ms.length === 1) {
        return ms[0];
    }
    return new Matcher(function(expression) {
        var i, result = false;
        for (i = 0; !result && i < ms.length; i++) {
            result = ms[i].match(expression);
        }
        return result;
    }, function(prec) {
        var p = Matcher.prec.ALT;
        var s = ms.map(function(m) {
            return m.toString(p);
        }).join(" | ");
        if (prec > p) {
            s = "[ " + s + " ]";
        }
        return s;
    });
};

/**
 * Create a matcher for two or more options.  This implements the
 * double bar (||) and double ampersand (&&) operators, as well as
 * variants of && where some of the alternatives are optional.
 * This will backtrack through even successful matches to try to
 * maximize the number of items matched.
 */
Matcher.many = function(required) {
    var ms = Array.prototype.slice.call(arguments, 1).reduce(function(acc, v) {
        if (v.expand) {
            // Insert all of the options for the given complex rule as
            // individual options.
            var ValidationTypes = require("./ValidationTypes");
            acc.push.apply(acc, ValidationTypes.complex[v.expand].options);
        } else {
            acc.push(Matcher.cast(v));
        }
        return acc;
    }, []);

    if (required === true) {
        required = ms.map(function() {
            return true;
        });
    }

    var result = new Matcher(function(expression) {
        var seen = [], max = 0, pass = 0;
        var success = function(matchCount) {
            if (pass === 0) {
                max = Math.max(matchCount, max);
                return matchCount === ms.length;
            } else {
                return matchCount === max;
            }
        };
        var tryMatch = function(matchCount) {
            for (var i = 0; i < ms.length; i++) {
                if (seen[i]) {
                    continue;
                }
                expression.mark();
                if (ms[i].match(expression)) {
                    seen[i] = true;
                    // Increase matchCount iff this was a required element
                    // (or if all the elements are optional)
                    if (tryMatch(matchCount + ((required === false || required[i]) ? 1 : 0))) {
                        expression.drop();
                        return true;
                    }
                    // Backtrack: try *not* matching using this rule, and
                    // let's see if it leads to a better overall match.
                    expression.restore();
                    seen[i] = false;
                } else {
                    expression.drop();
                }
            }
            return success(matchCount);
        };
        if (!tryMatch(0)) {
            // Couldn't get a complete match, retrace our steps to make the
            // match with the maximum # of required elements.
            pass++;
            tryMatch(0);
        }

        if (required === false) {
            return max > 0;
        }
        // Use finer-grained specification of which matchers are required.
        for (var i = 0; i < ms.length; i++) {
            if (required[i] && !seen[i]) {
                return false;
            }
        }
        return true;
    }, function(prec) {
        var p = required === false ? Matcher.prec.OROR : Matcher.prec.ANDAND;
        var s = ms.map(function(m, i) {
            if (required !== false && !required[i]) {
                return m.toString(Matcher.prec.MOD) + "?";
            }
            return m.toString(p);
        }).join(required === false ? " || " : " && ");
        if (prec > p) {
            s = "[ " + s + " ]";
        }
        return s;
    });
    result.options = ms;
    return result;
};

/**
 * Create a matcher for two or more options, where all options are
 * mandatory but they may appear in any order.
 */
Matcher.andand = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(true);
    return Matcher.many.apply(Matcher, args);
};

/**
 * Create a matcher for two or more options, where options are
 * optional and may appear in any order, but at least one must be
 * present.
 */
Matcher.oror = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(false);
    return Matcher.many.apply(Matcher, args);
};

/** Instance methods on Matchers. */
Matcher.prototype = {
    constructor: Matcher,
    // These are expected to be overridden in every instance.
    match: function() { throw new Error("unimplemented"); },
    toString: function() { throw new Error("unimplemented"); },
    // This returns a standalone function to do the matching.
    func: function() { return this.match.bind(this); },
    // Basic combinators
    then: function(m) { return Matcher.seq(this, m); },
    or: function(m) { return Matcher.alt(this, m); },
    andand: function(m) { return Matcher.many(true, this, m); },
    oror: function(m) { return Matcher.many(false, this, m); },
    // Component value multipliers
    star: function() { return this.braces(0, Infinity, "*"); },
    plus: function() { return this.braces(1, Infinity, "+"); },
    question: function() { return this.braces(0, 1, "?"); },
    hash: function() {
        return this.braces(1, Infinity, "#", Matcher.cast(","));
    },
    braces: function(min, max, marker, optSep) {
        var m1 = this, m2 = optSep ? optSep.then(this) : this;
        if (!marker) {
            marker = "{" + min + "," + max + "}";
        }
        return new Matcher(function(expression) {
            var result = true, i;
            for (i = 0; i < max; i++) {
                if (i > 0 && optSep) {
                    result = m2.match(expression);
                } else {
                    result = m1.match(expression);
                }
                if (!result) {
                    break;
                }
            }
            return i >= min;
        }, function() {
            return m1.toString(Matcher.prec.MOD) + marker;
        });
    }
};

},{"../util/StringReader":24,"../util/SyntaxError":25,"./ValidationTypes":21}],4:[function(require,module,exports){
"use strict";

module.exports = MediaFeature;

var SyntaxUnit = require("../util/SyntaxUnit");

var Parser = require("./Parser");

/**
 * Represents a media feature, such as max-width:500.
 * @namespace parserlib.css
 * @class MediaFeature
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 * @param {SyntaxUnit} name The name of the feature.
 * @param {SyntaxUnit} value The value of the feature or null if none.
 */
function MediaFeature(name, value) {

    SyntaxUnit.call(this, "(" + name + (value !== null ? ":" + value : "") + ")", name.startLine, name.startCol, Parser.MEDIA_FEATURE_TYPE);

    /**
     * The name of the media feature
     * @type String
     * @property name
     */
    this.name = name;

    /**
     * The value for the feature or null if there is none.
     * @type SyntaxUnit
     * @property value
     */
    this.value = value;
}

MediaFeature.prototype = new SyntaxUnit();
MediaFeature.prototype.constructor = MediaFeature;


},{"../util/SyntaxUnit":26,"./Parser":6}],5:[function(require,module,exports){
"use strict";

module.exports = MediaQuery;

var SyntaxUnit = require("../util/SyntaxUnit");

var Parser = require("./Parser");

/**
 * Represents an individual media query.
 * @namespace parserlib.css
 * @class MediaQuery
 * @extends parserlib.util.SyntaxUnit