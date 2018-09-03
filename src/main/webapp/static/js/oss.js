!function () {
    function loadXMLDoc(e, n, t) {
        function r() {
            if (4 == a.readyState && 200 == a.status) {
                a.responseText
            }
        }

        var o = 1 == n ? "POST" : "GET";
        "undefined" == t && (t = null);
        var a = null;
        window.XMLHttpRequest && (a = new XMLHttpRequest), null != a && (a.onreadystatechange = r, a.open(o, e, !0), a.setRequestHeader("Content-type", "application/json;charset=utf-8"), a.send(t))
    }

    function urlsplit(e) {
        return e.split("?")[0]
    }

    if (window.performance && window.performance.getEntriesByType && window.addEventListener && navigator.userAgent) {
        var Sys = {}, ua = navigator.userAgent.toLowerCase(), s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] : (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0, windows = ua.indexOf("windows", 0) != -1 ? 1 : 0, mac = ua.indexOf("mac", 0) != -1 ? 1 : 0, linux = ua.indexOf("linux", 0) != -1 ? 1 : 0, unix = ua.indexOf("x11", 0) != -1 ? 1 : 0;
        var os = "", bs = "";
        os = windows ? "MS Windows" : mac ? "Apple mac" : linux ? "Linux" : unix ? "Unix" : "other", Sys.ie && (bs = "IE: " + Sys.ie), Sys.firefox && (bs = "Firefox: " + Sys.firefox), Sys.chrome && (bs = "Chrome: " + Sys.chrome), Sys.opera && (bs = "Opera: " + Sys.opera), Sys.safari && (bs = "Safari: " + Sys.safari);
        var errors = 0;
        window.onerror = function (e, n, t, r, o) {
            var a;
            errors += 1;
            try {
                a = o.stack.replace(/\s+/g, " ")
            } catch (e) {
                a = o
            }
            var i = "?u=" + location.pathname + "&em=" + e + "&su=" + n + "&ln=" + t + "&cm=" + r + "&eo=" + a + "&os=" + os + "&bs=" + bs;
            errors < 50 && loadXMLDoc("/upload/ltm/oss.html" + i + "&t=" + +new Date)
        };
        var addError = {};
        window.addEventListener("error", function (e) {
            e.srcElement && (lname = e.srcElement.localName, "script" == lname || "img" == lname ? addError[e.srcElement.src] = e.timeStamp : "link" == lname && (addError[e.srcElement.href] = e.timeStamp))
        }, !0);
        var Ping = function () {
        };
        Ping.prototype.ping = function (e, n) {
            function t() {
                var e = new Date - r;
                "function" == typeof n && n(e)
            }

            this.img = new Image;
            var r = new Date;
            this.img.onload = this.img.onerror = t, this.img.src = e + "?" + +new Date
        }, window.addEventListener("load", function (e) {
            var n = window.performance.timing;
            if (n.domainLookupEnd > 0 && n.domainLookupStart > 0 && n.responseStart > 0 && n.connectStart > 0 && n.responseEnd > 0 && n.domInteractive > 0 && n.domLoading > 0 && n.loadEventStart > 0 && n.domComplete > 0 && n.fetchStart > 0) {
                var t = n.domainLookupEnd - n.domainLookupStart, r = n.responseStart - n.connectStart,
                    o = n.responseEnd - n.connectStart, a = n.domInteractive - n.domLoading,
                    i = n.loadEventStart - n.domInteractive, s = n.domComplete - n.fetchStart;
                if (o = o > 0 ? o : "0", a = a > 0 ? a : "0", r = r > 0 ? r : "0", s > 2e4) {
                    for (var d, c = performance.getEntriesByType("resource"), u = [], p = "", l = Object.keys(addError), m = 0, f = 0, y = c.length; f < y; f++) {
                        d = c[f];
                        var g = d.name, v = (d.initiatorType, d.duration);
                        v = v >= 0 ? v : 0, iscon(l, g) ? (delete addError[g], m = 1) : m = 0, v > 1e3 && v < 1e8 && u.push({
                            n: urlsplit(g),
                            v: v.toFixed(2),
                            err: m
                        })
                    }
                    l = Object.keys(addError);
                    for (var S = 0, h = 0, w = l.length; h < w; h++) S = addError[l[h]] - o, S > 1e3 && S < 1e8 && u.push({
                        n: urlsplit(l[h]),
                        v: S.toFixed(2),
                        err: 1
                    });
                    u.sort(by("v"));
                    var E = u.length;
                    E > 10 && (u = u.slice(E - 10, E)), u.length > 0 && (p = "?u=" + location.pathname + "&d=" + encodeURIComponent(JSON.stringify(u)) + "&os=" + os + "&bs=" + bs + "&l=" + c.length, loadXMLDoc("/upload/ltm/pageload.html" + p + "&t=" + +new Date))
                }
                var x = new Ping;
                x.ping("/upload/edm/image/oss.gif", function (e) {
                    var n = isqn(s, a, r),
                        d = "?u=" + location.pathname + "&q=" + r + "&n=" + o + "&d=" + a + "&l=" + i + "&dns=" + t + "&p=" + s + "&pi=" + e + "&qn=" + n;
                    loadXMLDoc("/upload/ltm/oss.html" + d + "&t=" + +new Date)
                })
            }
        });
        var isqn = function (a, b, c) {
            return parseInt((a - b + c) * eval(function (e, n, t, r, o, a) {
                if (o = function (e) {
                    return (e < n ? "" : o(parseInt(e / n))) + ((e %= n) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
                }, !"".replace(/^/, String)) {
                    for (; t--;) a[o(t)] = r[t] || o(t);
                    r = [function (e) {
                        return a[e]
                    }], o = function () {
                        return "\\w+"
                    }, t = 1
                }
                for (; t--;) r[t] && (e = e.replace(new RegExp("\\b" + o(t) + "\\b", "g"), r[t]));
                return e
            }("0/1", 2, 2, "1905|3005".split("|"), 0, {})))
        }, by = function (e) {
            return function (n, t) {
                var r, o;
                return "object" == typeof n && "object" == typeof t && n && t ? (r = n[e], o = t[e], r === o ? 0 : typeof r == typeof o ? parseInt(r) < parseInt(o) ? -1 : 1 : typeof r < typeof o ? -1 : 1) : 0
            }
        }, iscon = function (e, n) {
            for (var t = 0, r = e.length; t < r; t++) if (e[t] == n) return !0;
            return !1
        }
    }
}();
