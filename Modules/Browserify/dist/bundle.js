(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a)return a(o, !0);
                if (i)return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {exports: {}};
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }

    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)s(r[o]);
    return s
})({
    1: [function (require, module, exports) {
        const random = require('./random');

        const changeBgColor = function () {
            const r = random.getIntInclusive(0, 255);
            const g = random.getIntInclusive(0, 255);
            const b = random.getIntInclusive(0, 255);
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        };

        changeBgColor();
        setTimeout(changeBgColor, 1000);

    }, {"./random": 2}], 2: [function (require, module, exports) {
        'use strict';

        const getRandom = function () {
            return Math.random();
        };

        const getRandomArbitrary = function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };

        const getRandomInt = function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        };

        const getRandomIntInclusive = function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        module.exports.get = getRandom;
        module.exports.getArbitrary = getRandomArbitrary;
        module.exports.getInt = getRandomInt;
        module.exports.getIntInclusive = getRandomIntInclusive;
    }, {}]
}, {}, [1]);
