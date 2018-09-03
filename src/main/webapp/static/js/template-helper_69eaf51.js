define("common/components/artTemplate/template-helper", ["require", "exports", "module", "dep/artTemplate/dist/template"], function (require, exports, module) {
    var a = require("dep/artTemplate/dist/template");
    a.config("escape", !1), a.helper("formatTime", function (a) {
        var g = new Date(a.replace(/-/g, "/")), h = g.getFullYear(), c = g.getMonth() + 1, M = g.getDate(),
            D = g.getHours(), b = g.getMinutes(), T = new Date;
        return h == T.getFullYear() && c == T.getMonth() + 1 && M == T.getDate() ? (10 > D ? "0" + D : D) + ":" + (10 > b ? "0" + b : b) : h + "-" + (10 > c ? "0" + c : c) + "-" + (10 > M ? "0" + M : M)
    }), a.helper("formatTimeV2", function (a) {
        var g = a.split("T"), h = g[0].substr(0, 4), c = g[0].substr(4, 2), M = g[0].substr(6, 2),
            D = g[1].substr(0, 2), b = g[1].substr(2, 2), T = new Date;
        return h == T.getFullYear() && c == T.getMonth() + 1 && M == T.getDate() ? D + ":" + b : h + "-" + c + "-" + M
    }), a.helper("mathFloor", function (a) {
        return Math.floor(parseFloat(a))
    }), a.helper("mathToFloat", function (a) {
        return -1 == a.indexOf(".") && (a += ".0"), a
    }), a.helper("tjnoNoPager", function (a) {
        return 10 > a ? "000" + a : "00" + a
    }), a.helper("tjnoWithPager", function (a, g) {
        return (10 > a ? "0" + a : a) + (10 > g ? "0" + g : g)
    }), a.helper("formatText", function (a, g) {
        return a.length > g ? a.substr(0, g) + "..." : a
    }), a.helper("subDateString", function (a, g) {
        return a.length > g ? a.substr(0, g) : a
    }), a.helper("dateFormat", function (a, g) {
        if ("string" == typeof a) {
            var h = a.match(/(\/Date\((\d+)\)\/)/);
            h && h.length >= 3 && (a = parseInt(h[2]))
        }
        if (a = new Date(a), !a || "Invalid Date" == a.toUTCString()) return "";
        var c = {
            M: a.getMonth() + 1,
            d: a.getDate(),
            h: a.getHours(),
            m: a.getMinutes(),
            s: a.getSeconds(),
            q: Math.floor((a.getMonth() + 3) / 3),
            S: a.getMilliseconds()
        };
        return g || (g = "yyyy-MM-dd hh:mm:ss"), g = g.replace(/([yMdhmsqS])+/g, function (g, t) {
            var h = c[t];
            return void 0 !== h ? (g.length > 1 && (h = "0" + h, h = h.substr(h.length - 2)), h) : "y" === t ? (a.getFullYear() + "").substr(4 - g.length) : g
        })
    }), module.exports = a
});