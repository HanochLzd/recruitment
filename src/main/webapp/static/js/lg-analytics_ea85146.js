;
/*!/common/static/js/plat_tj.js*/
!function (a) {
    var c = window.Cookies, g = window.Cookies = a();
    g.noConflict = function () {
        return window.Cookies = c, g
    }
}(function () {
    function a() {
        for (var i = 0, a = {}; i < arguments.length; i++) {
            var c = arguments[i];
            for (var g in c) a[g] = c[g]
        }
        return a
    }

    function c(g) {
        function C(c, A, v) {
            var w;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (v = a({path: "/"}, C.defaults, v), "number" == typeof v.expires) {
                        var h = new Date;
                        h.setMilliseconds(h.getMilliseconds() + 864e5 * v.expires), v.expires = h
                    }
                    try {
                        w = JSON.stringify(A), /^[\{\[]/.test(w) && (A = w)
                    } catch (e) {
                    }
                    return A = g.write ? g.write(A, c) : encodeURIComponent(String(A)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), c = encodeURIComponent(String(c)), c = c.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), c = c.replace(/[\(\)]/g, escape), document.cookie = [c, "=", A, v.expires ? "; expires=" + v.expires.toUTCString() : "", v.path ? "; path=" + v.path : "", v.domain ? "; domain=" + v.domain : "", v.secure ? "; secure" : ""].join("")
                }
                c || (w = {});
                for (var b = document.cookie ? document.cookie.split("; ") : [], k = /(%[0-9A-Z]{2})+/g, i = 0; i < b.length; i++) {
                    var j = b[i].split("="), R = j.slice(1).join("=");
                    '"' === R.charAt(0) && (R = R.slice(1, -1));
                    try {
                        var D = j[0].replace(k, decodeURIComponent);
                        if (R = g.read ? g.read(R, D) : g(R, D) || R.replace(k, decodeURIComponent), this.json) try {
                            R = JSON.parse(R)
                        } catch (e) {
                        }
                        if (c === D) {
                            w = R;
                            break
                        }
                        c || (w[D] = R)
                    } catch (e) {
                    }
                }
                return w
            }
        }

        return C.set = C, C.get = function (a) {
            return C.call(C, a)
        }, C.getJSON = function () {
            return C.apply({json: !0}, [].slice.call(arguments))
        }, C.defaults = {}, C.remove = function (c, g) {
            C(c, "", a(g, {expires: -1}))
        }, C.withConverter = c, C
    }

    return c(function () {
    })
}), function () {
    function a(e) {
        for (var a = e.target || e.srcElement, C = []; a && a.getAttribute && !a.getAttribute("data-lg-tj-id") && !a.getAttribute("data-lg-gatj-msg");) a = a.parentNode;
        if (a && a.getAttribute) try {
            A = (a.getAttribute("data-lg-tj-id") || "idnull").trim(), v = (a.getAttribute("data-lg-tj-no") || "idnull").trim(), h = (a.getAttribute("data-lg-tj-cid") || "idnull").trim(), b = g(), k = (a.getAttribute("data-lg-tj-abt") || "").trim();
            for (var I = a; I && I.getAttribute;) {
                if (I.getAttribute("data-lg-tj-track-code")) {
                    var _ = (I.getAttribute("data-lg-tj-track-code") || "").trim(),
                        N = (I.getAttribute("data-lg-tj-track-type") || "0").trim();
                    break
                }
                I = I.parentNode
            }
            Cookies.get("TG-TRACK-CODE") && "" != Cookies.get("TG-TRACK-CODE") ? 1 == N && _ && Cookies.set("TG-TRACK-CODE", _, {path: "/"}) : _ && Cookies.set("TG-TRACK-CODE", _, {path: "/"});
            var U = Cookies.get("TG-TRACK-CODE");
            if (j = (a.getAttribute("data-lg-gatj-method") || "send").trim(), R = (a.getAttribute("data-lg-gatj-msgtype") || "event").trim(), D = (a.getAttribute("data-lg-gatj-msg") || "").trim(), E = parseInt(a.getAttribute("data-lg-gatj-val") || 0), D && "function" == typeof ga && (C.push(j, R), C = C.concat(D.split(",")), !!E && C.push(E), ga.apply(null, C)), "idnull" == A) return;
            var M = {};
            M.v = y, M.t = a.tagName.toLocaleLowerCase(), M.dl = encodeURIComponent(T), M.dr = encodeURIComponent(O), M.dt = S, M.aid = [A, v, w, h, b].join("_"), !!k && "|" != k && (M.abt = k), !!U && "" != U && (M.intrack = U), c(M)
        } catch (e) {
        }
    }

    function c(a) {
        var c = new Image;
        paramsArr = [];
        for (var g in a) "string" == typeof g && paramsArr.push(g + "=" + a[g]);
        c.src = C.server + "?" + paramsArr.join("&")
    }

    function g(a) {
        function c() {
            for (var a = "", i = 0; C > i; i++) {
                var r = Math.floor(10 * Math.random());
                a += r.toString()
            }
            return a.toString()
        }

        window._CASH_RANDOM ? "" : window._CASH_RANDOM = {};
        for (var g = window._CASH_RANDOM || {}, C = a || 4, A = c(); g[A] && (A = c(), g[A]);) ;
        return window._CASH_RANDOM[A] = A, A
    }

    var C = {server: document.location.protocol + "//a.lagou.com/track"}, A = "", v = "", w = 0, h = "", b = "", k = "",
        j = "", R = "", D = "", E = 0, y = 1, T = window.location.href, O = document.referrer, S = document.title,
        I = document;
    I.addEventListener ? I.addEventListener("click", a, !0) : I.attachEvent && I.attachEvent("onclick", a), window._PTJ = window._PTJ || {postEncodingID: a}
}();
;
/*!/common/static/js/analytics.js*/
window.dataHost = "a.lagou.com", function (i, s, o, a, r, c, m) {
    i.LgAnalytics = r, i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date, c = s.createElement(o), m = s.getElementsByTagName(o)[0], c.async = 1, c.src = a, m.parentNode.insertBefore(c, m)
}(window, document, "script", "//a.lagou.com/js/a.js", "gatherer"), gatherer("create", "UA-41268416-1", {alwaysSendReferrer: !0}), gatherer("send", "pageview");
var bd_hmt_key = "4233e74dff0ae5bd0a3d81c6ccf756e6";
"yanzhi.lagou.com" == location.hostname ? bd_hmt_key = "7a53ea85ebffc2dd72e2b7b654bda440" : "easy.lagou.com" == location.hostname && (bd_hmt_key = "bfa5351db2249abae67476f1ec317000");
var _hmt = _hmt || [];
!function () {
    var a = document.createElement("script");
    a.src = "//hm.baidu.com/hm.js?" + bd_hmt_key;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(a, s)
}(), function (i, s, o, a, r, c, m) {
    i.GoogleAnalyticsObject = r, i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date, c = s.createElement(o), m = s.getElementsByTagName(o)[0], c.async = 1, c.src = a, m.parentNode.insertBefore(c, m)
}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-41268416-1", "auto"), ga("require", "displayfeatures"), ga("require", "linker"), ga("send", "pageview");