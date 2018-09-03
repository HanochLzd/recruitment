;
/*!/dep/jquery.cookie/jquery.cookie.js*/
!function (c) {
    "function" == typeof define && define.amd ? define("dep/jquery.cookie/jquery.cookie", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : jQuery)
}(function (c) {
    function a(s) {
        return h.raw ? s : encodeURIComponent(s)
    }

    function k(s) {
        return h.raw ? s : decodeURIComponent(s)
    }

    function j(c) {
        return a(h.json ? JSON.stringify(c) : String(c))
    }

    function v(s) {
        0 === s.indexOf('"') && (s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return s = decodeURIComponent(s.replace(g, " ")), h.json ? JSON.parse(s) : s
        } catch (e) {
        }
    }

    function y(s, a) {
        var k = h.raw ? s : v(s);
        return c.isFunction(a) ? a(k) : k
    }

    var g = /\+/g, h = c.cookie = function (v, g, C) {
        if (void 0 !== g && !c.isFunction(g)) {
            if (C = c.extend({}, h.defaults, C), "number" == typeof C.expires) {
                var w = C.expires, t = C.expires = new Date;
                t.setTime(+t + 864e5 * w)
            }
            return document.cookie = [a(v), "=", j(g), C.expires ? "; expires=" + C.expires.toUTCString() : "", C.path ? "; path=" + C.path : "", C.domain ? "; domain=" + C.domain : "", C.secure ? "; secure" : ""].join("")
        }
        for (var S = v ? void 0 : {}, U = document.cookie ? document.cookie.split("; ") : [], i = 0, l = U.length; l > i; i++) {
            var b = U[i].split("="), I = k(b.shift()), O = b.join("=");
            if (v && v === I) {
                S = y(O, g);
                break
            }
            v || void 0 === (O = y(O)) || (S[I] = O)
        }
        return S
    };
    h.defaults = {}, c.removeCookie = function (a, k) {
        return void 0 === c.cookie(a) ? !1 : (c.cookie(a, "", c.extend({}, k, {expires: -1})), !c.cookie(a))
    }
});
;
/*!/dep/jquery-colorbox/jquery.colorbox.js*/
define("dep/jquery-colorbox/jquery.colorbox", ["require", "exports", "module"], function () {
    !function (h, a, c) {
        function g(c, g, w) {
            var v = a.createElement(c);
            return g && (v.id = ve + g), w && (v.style.cssText = w), h(v)
        }

        function w() {
            return c.innerHeight ? c.innerHeight : h(c).height()
        }

        function v(a, c) {
            c !== Object(c) && (c = {}), this.cache = {}, this.el = a, this.value = function (a) {
                var g;
                return void 0 === this.cache[a] && (g = h(this.el).attr("data-cbox-" + a), void 0 !== g ? this.cache[a] = g : void 0 !== c[a] ? this.cache[a] = c[a] : void 0 !== me[a] && (this.cache[a] = me[a])), this.cache[a]
            }, this.get = function (a) {
                var c = this.value(a);
                return h.isFunction(c) ? c.call(this.el, this) : c
            }
        }

        function y(h) {
            var a = D.length, c = (he + h) % a;
            return 0 > c ? a + c : c
        }

        function b(h, a) {
            return Math.round((/%/.test(h) ? ("x" === a ? N.width() : w()) / 100 : 1) * parseInt(h, 10))
        }

        function T(h, a) {
            return h.get("photo") || h.get("photoRegex").test(a)
        }

        function C(h, a) {
            return h.get("retinaUrl") && c.devicePixelRatio > 1 ? a.replace(h.get("photoRegex"), h.get("retinaSuffix")) : a
        }

        function H(e) {
            "contains" in S[0] && !S[0].contains(e.target) && e.target !== R[0] && (e.stopPropagation(), S.focus())
        }

        function k(h) {
            k.str !== h && (S.add(R).removeClass(k.str).addClass(h), k.str = h)
        }

        function W(a) {
            he = 0, a && a !== !1 && "nofollow" !== a ? (D = h("." + xe).filter(function () {
                var c = h.data(this, we), g = new v(this, c);
                return g.get("rel") === a
            }), he = D.index(Z.el), -1 === he && (D = D.add(Z.el), he = D.length - 1)) : D = h(Z.el)
        }

        function E(c) {
            h(a).trigger(c), We.triggerHandler(c)
        }

        function I(c) {
            var w;
            if (!ge) {
                if (w = h(c).data(we), Z = new v(c, w), W(Z.get("rel")), !se) {
                    se = ce = !0, k(Z.get("className")), S.css({
                        visibility: "hidden",
                        display: "block",
                        opacity: ""
                    }), z = g(Ee, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), P.css({
                        width: "",
                        height: ""
                    }).append(z), te = j.height() + _.height() + P.outerHeight(!0) - P.height(), ee = B.width() + O.width() + P.outerWidth(!0) - P.width(), ie = z.outerHeight(!0), oe = z.outerWidth(!0);
                    var y = b(Z.get("initialWidth"), "x"), T = b(Z.get("initialHeight"), "y"), C = Z.get("maxWidth"),
                        I = Z.get("maxHeight");
                    Z.w = Math.max((C !== !1 ? Math.min(y, b(C, "x")) : y) - oe - ee, 0), Z.h = Math.max((I !== !1 ? Math.min(T, b(I, "y")) : T) - ie - te, 0), z.css({
                        width: "",
                        height: Z.h
                    }), fe.position(), E(ye), Z.get("onOpen"), Y.add($).hide(), S.focus(), Z.get("trapFocus") && a.addEventListener && (a.addEventListener("focus", H, !0), We.one(He, function () {
                        a.removeEventListener("focus", H, !0)
                    })), Z.get("returnFocus") && We.one(He, function () {
                        h(Z.el).focus()
                    })
                }
                var M = parseFloat(Z.get("opacity"));
                R.css({
                    opacity: M === M ? M : "",
                    cursor: Z.get("overlayClose") ? "pointer" : "",
                    visibility: "visible"
                }).show(), Z.get("closeButton") ? X.html(Z.get("close")).appendTo(P) : X.appendTo("<div/>"), F()
            }
        }

        function M() {
            S || (pe = !1, N = h(c), S = g(Ee).attr({
                id: we,
                "class": h.support.opacity === !1 ? ve + "IE" : "",
                role: "dialog",
                tabindex: "-1"
            }).hide(), R = g(Ee, "Overlay").hide(), U = h([g(Ee, "LoadingOverlay")[0], g(Ee, "LoadingGraphic")[0]]), K = g(Ee, "Wrapper"), P = g(Ee, "Content").append($ = g(Ee, "Title"), G = g(Ee, "Current"), V = h('<button type="button"/>').attr({id: ve + "Previous"}), J = h('<button type="button"/>').attr({id: ve + "Next"}), Q = g("button", "Slideshow"), U), X = h('<button type="button"/>').attr({id: ve + "Close"}), K.append(g(Ee).append(g(Ee, "TopLeft"), j = g(Ee, "TopCenter"), g(Ee, "TopRight")), g(Ee, !1, "clear:left").append(B = g(Ee, "MiddleLeft"), P, O = g(Ee, "MiddleRight")), g(Ee, !1, "clear:left").append(g(Ee, "BottomLeft"), _ = g(Ee, "BottomCenter"), g(Ee, "BottomRight"))).find("div div").css({"float": "left"}), A = g(Ee, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), Y = J.add(V).add(G).add(Q)), a.body && !S.parent().length && h(a.body).append(R, S.append(K, A))
        }

        function L() {
            function c(e) {
                e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), I(this))
            }

            return S ? (pe || (pe = !0, J.click(function () {
                fe.next()
            }), V.click(function () {
                fe.prev()
            }), X.click(function () {
                fe.close()
            }), R.click(function () {
                Z.get("overlayClose") && fe.close()
            }), h(a).bind("keydown." + ve, function (e) {
                var h = e.keyCode;
                se && Z.get("escKey") && 27 === h && (e.preventDefault(), fe.close()), se && Z.get("arrowKey") && D[1] && !e.altKey && (37 === h ? (e.preventDefault(), V.click()) : 39 === h && (e.preventDefault(), J.click()))
            }), h.isFunction(h.fn.on) ? h(a).on("click." + ve, "." + xe, c) : h("." + xe).live("click." + ve, c)), !0) : !1
        }

        function F() {
            var a, w, v, y = fe.prep, H = ++Ie;
            if (ce = !0, ae = !1, E(ke), E(be), Z.get("onLoad"), Z.h = Z.get("height") ? b(Z.get("height"), "y") - ie - te : Z.get("innerHeight") && b(Z.get("innerHeight"), "y"), Z.w = Z.get("width") ? b(Z.get("width"), "x") - oe - ee : Z.get("innerWidth") && b(Z.get("innerWidth"), "x"), Z.mw = Z.w, Z.mh = Z.h, Z.get("maxWidth") && (Z.mw = b(Z.get("maxWidth"), "x") - oe - ee, Z.mw = Z.w && Z.w < Z.mw ? Z.w : Z.mw), Z.get("maxHeight") && (Z.mh = b(Z.get("maxHeight"), "y") - ie - te, Z.mh = Z.h && Z.h < Z.mh ? Z.h : Z.mh), a = Z.get("href"), ue = setTimeout(function () {
                U.show()
            }, 100), Z.get("inline")) {
                var k = h(a);
                v = h("<div>").hide().insertBefore(k), We.one(ke, function () {
                    v.replaceWith(k)
                }), y(k)
            } else Z.get("iframe") ? y(" ") : Z.get("html") ? y(Z.get("html")) : T(Z, a) ? (a = C(Z, a), ae = Z.get("createImg"), h(ae).addClass(ve + "Photo").bind("error." + ve, function () {
                y(g(Ee, "Error").html(Z.get("imgError")))
            }).one("load", function () {
                H === Ie && setTimeout(function () {
                    var a;
                    Z.get("retinaImage") && c.devicePixelRatio > 1 && (ae.height = ae.height / c.devicePixelRatio, ae.width = ae.width / c.devicePixelRatio), Z.get("scalePhotos") && (w = function () {
                        ae.height -= ae.height * a, ae.width -= ae.width * a
                    }, Z.mw && ae.width > Z.mw && (a = (ae.width - Z.mw) / ae.width, w()), Z.mh && ae.height > Z.mh && (a = (ae.height - Z.mh) / ae.height, w())), Z.h && (ae.style.marginTop = Math.max(Z.mh - ae.height, 0) / 2 + "px"), D[1] && (Z.get("loop") || D[he + 1]) && (ae.style.cursor = "pointer", h(ae).bind("click." + ve, function () {
                        fe.next()
                    })), ae.style.width = ae.width + "px", ae.style.height = ae.height + "px", y(ae)
                }, 1)
            }), ae.src = a) : a && A.load(a, Z.get("data"), function (a, c) {
                H === Ie && y("error" === c ? g(Ee, "Error").html(Z.get("xhrError")) : h(this).contents())
            })
        }

        var R, S, K, P, j, B, O, _, D, N, z, A, U, $, G, Q, J, V, X, Y, Z, te, ee, ie, oe, he, ae, se, ce, ge, ue, fe,
            pe, me = {
                html: !1,
                photo: !1,
                iframe: !1,
                inline: !1,
                transition: "elastic",
                speed: 300,
                fadeOut: 300,
                width: !1,
                initialWidth: "600",
                innerWidth: !1,
                maxWidth: !1,
                height: !1,
                initialHeight: "450",
                innerHeight: !1,
                maxHeight: !1,
                scalePhotos: !0,
                scrolling: !0,
                opacity: .9,
                preloading: !0,
                className: !1,
                overlayClose: !0,
                escKey: !0,
                arrowKey: !0,
                top: !1,
                bottom: !1,
                left: !1,
                right: !1,
                fixed: !1,
                data: void 0,
                closeButton: !0,
                fastIframe: !0,
                open: !1,
                reposition: !0,
                loop: !0,
                slideshow: !1,
                slideshowAuto: !0,
                slideshowSpeed: 2500,
                slideshowStart: "start slideshow",
                slideshowStop: "stop slideshow",
                photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
                retinaImage: !1,
                retinaUrl: !1,
                retinaSuffix: "@2x.$1",
                current: "image {current} of {total}",
                previous: "previous",
                next: "next",
                close: "close",
                xhrError: "This content failed to load.",
                imgError: "This image failed to load.",
                returnFocus: !0,
                trapFocus: !0,
                onOpen: !1,
                onLoad: !1,
                onComplete: !1,
                onCleanup: !1,
                onClosed: !1,
                rel: function () {
                    return this.rel
                },
                href: function () {
                    return h(this).attr("href")
                },
                title: function () {
                    return this.title
                },
                createImg: function () {
                    var a = new Image, c = h(this).data("cbox-img-attrs");
                    return "object" == typeof c && h.each(c, function (h, c) {
                        a[h] = c
                    }), a
                },
                createIframe: function () {
                    var c = a.createElement("iframe"), g = h(this).data("cbox-iframe-attrs");
                    return "object" == typeof g && h.each(g, function (h, a) {
                        c[h] = a
                    }), "frameBorder" in c && (c.frameBorder = 0), "allowTransparency" in c && (c.allowTransparency = "true"), c.name = (new Date).getTime(), c.allowFullscreen = !0, c
                }
            }, we = "colorbox", ve = "cbox", xe = ve + "Element", ye = ve + "_open", be = ve + "_load",
            Te = ve + "_complete", Ce = ve + "_cleanup", He = ve + "_closed", ke = ve + "_purge", We = h("<a/>"),
            Ee = "div", Ie = 0, Me = {}, Le = function () {
                function h() {
                    clearTimeout(y)
                }

                function a() {
                    (Z.get("loop") || D[he + 1]) && (h(), y = setTimeout(fe.next, Z.get("slideshowSpeed")))
                }

                function c() {
                    Q.html(Z.get("slideshowStop")).unbind(T).one(T, g), We.bind(Te, a).bind(be, h), S.removeClass(b + "off").addClass(b + "on")
                }

                function g() {
                    h(), We.unbind(Te, a).unbind(be, h), Q.html(Z.get("slideshowStart")).unbind(T).one(T, function () {
                        fe.next(), c()
                    }), S.removeClass(b + "on").addClass(b + "off")
                }

                function w() {
                    v = !1, Q.hide(), h(), We.unbind(Te, a).unbind(be, h), S.removeClass(b + "off " + b + "on")
                }

                var v, y, b = ve + "Slideshow_", T = "click." + ve;
                return function () {
                    v ? Z.get("slideshow") || (We.unbind(Ce, w), w()) : Z.get("slideshow") && D[1] && (v = !0, We.one(Ce, w), Z.get("slideshowAuto") ? c() : g(), Q.show())
                }
            }();
        h[we] || (h(M), fe = h.fn[we] = h[we] = function (a, c) {
            var g, w = this;
            return a = a || {}, h.isFunction(w) && (w = h("<a/>"), a.open = !0), w[0] ? (M(), L() && (c && (a.onComplete = c), w.each(function () {
                var c = h.data(this, we) || {};
                h.data(this, we, h.extend(c, a))
            }).addClass(xe), g = new v(w[0], a), g.get("open") && I(w[0])), w) : w
        }, fe.position = function (a, c) {
            function g() {
                j[0].style.width = _[0].style.width = P[0].style.width = parseInt(S[0].style.width, 10) - ee + "px", P[0].style.height = B[0].style.height = O[0].style.height = parseInt(S[0].style.height, 10) - te + "px"
            }

            var v, y, T, C = 0, H = 0, k = S.offset();
            if (N.unbind("resize." + ve), S.css({
                top: -9e4,
                left: -9e4
            }), y = N.scrollTop(), T = N.scrollLeft(), Z.get("fixed") ? (k.top -= y, k.left -= T, S.css({position: "fixed"})) : (C = y, H = T, S.css({position: "absolute"})), H += Z.get("right") !== !1 ? Math.max(N.width() - Z.w - oe - ee - b(Z.get("right"), "x"), 0) : Z.get("left") !== !1 ? b(Z.get("left"), "x") : Math.round(Math.max(N.width() - Z.w - oe - ee, 0) / 2), C += Z.get("bottom") !== !1 ? Math.max(w() - Z.h - ie - te - b(Z.get("bottom"), "y"), 0) : Z.get("top") !== !1 ? b(Z.get("top"), "y") : Math.round(Math.max(w() - Z.h - ie - te, 0) / 2), S.css({
                top: k.top,
                left: k.left,
                visibility: "visible"
            }), K[0].style.width = K[0].style.height = "9999px", v = {
                width: Z.w + oe + ee,
                height: Z.h + ie + te,
                top: C,
                left: H
            }, a) {
                var W = 0;
                h.each(v, function (i) {
                    return v[i] !== Me[i] ? void(W = a) : void 0
                }), a = W
            }
            Me = v, a || S.css(v), S.dequeue().animate(v, {
                duration: a || 0, complete: function () {
                    g(), ce = !1, K[0].style.width = Z.w + oe + ee + "px", K[0].style.height = Z.h + ie + te + "px", Z.get("reposition") && setTimeout(function () {
                        N.bind("resize." + ve, fe.position)
                    }, 1), h.isFunction(c) && c()
                }, step: g
            })
        }, fe.resize = function (h) {
            var a;
            se && (h = h || {}, h.width && (Z.w = b(h.width, "x") - oe - ee), h.innerWidth && (Z.w = b(h.innerWidth, "x")), z.css({width: Z.w}), h.height && (Z.h = b(h.height, "y") - ie - te), h.innerHeight && (Z.h = b(h.innerHeight, "y")), h.innerHeight || h.height || (a = z.scrollTop(), z.css({height: "auto"}), Z.h = z.height()), z.css({height: Z.h}), a && z.scrollTop(a), fe.position("none" === Z.get("transition") ? 0 : Z.get("speed")))
        }, fe.prep = function (c) {
            function w() {
                return Z.w = Z.w || z.width(), Z.w = Z.mw && Z.mw < Z.w ? Z.mw : Z.w, Z.w
            }

            function b() {
                return Z.h = Z.h || z.height(), Z.h = Z.mh && Z.mh < Z.h ? Z.mh : Z.h, Z.h
            }

            if (se) {
                var H, W = "none" === Z.get("transition") ? 0 : Z.get("speed");
                z.remove(), z = g(Ee, "LoadedContent").append(c), z.hide().appendTo(A.show()).css({
                    width: w(),
                    overflow: Z.get("scrolling") ? "auto" : "hidden"
                }).css({height: b()}).prependTo(P), A.hide(), h(ae).css({"float": "none"}), k(Z.get("className")), H = function () {
                    function c() {
                        h.support.opacity === !1 && S[0].style.removeAttribute("filter")
                    }

                    var g, w, b = D.length;
                    se && (w = function () {
                        clearTimeout(ue), U.hide(), E(Te), Z.get("onComplete")
                    }, $.html(Z.get("title")).show(), z.show(), b > 1 ? ("string" == typeof Z.get("current") && G.html(Z.get("current").replace("{current}", he + 1).replace("{total}", b)).show(), J[Z.get("loop") || b - 1 > he ? "show" : "hide"]().html(Z.get("next")), V[Z.get("loop") || he ? "show" : "hide"]().html(Z.get("previous")), Le(), Z.get("preloading") && h.each([y(-1), y(1)], function () {
                        var c, i = D[this], g = new v(i, h.data(i, we)), w = g.get("href");
                        w && T(g, w) && (w = C(g, w), c = a.createElement("img"), c.src = w)
                    })) : Y.hide(), Z.get("iframe") ? (g = Z.get("createIframe"), Z.get("scrolling") || (g.scrolling = "no"), h(g).attr({
                        src: Z.get("href"),
                        "class": ve + "Iframe"
                    }).one("load", w).appendTo(z), We.one(ke, function () {
                        g.src = "//about:blank"
                    }), Z.get("fastIframe") && h(g).trigger("load")) : w(), "fade" === Z.get("transition") ? S.fadeTo(W, 1, c) : c())
                }, "fade" === Z.get("transition") ? S.fadeTo(W, 0, function () {
                    fe.position(0, H)
                }) : fe.position(W, H)
            }
        }, fe.next = function () {
            !ce && D[1] && (Z.get("loop") || D[he + 1]) && (he = y(1), I(D[he]))
        }, fe.prev = function () {
            !ce && D[1] && (Z.get("loop") || he) && (he = y(-1), I(D[he]))
        }, fe.close = function () {
            se && !ge && (ge = !0, se = !1, E(Ce), Z.get("onCleanup"), N.unbind("." + ve), R.fadeTo(Z.get("fadeOut") || 0, 0), S.stop().fadeTo(Z.get("fadeOut") || 0, 0, function () {
                S.hide(), R.hide(), E(ke), z.remove(), setTimeout(function () {
                    ge = !1, E(He), Z.get("onClosed")
                }, 1)
            }))
        }, fe.remove = function () {
            S && (S.stop(), h[we].close(), S.stop(!1, !0).remove(), R.remove(), ge = !1, S = null, h("." + xe).removeData(we).removeClass(xe), h(a).unbind("click." + ve).unbind("keydown." + ve))
        }, fe.element = function () {
            return h(Z.el)
        }, fe.settings = me)
    }(jQuery, document, window)
});
;
/*!/dep/jquery-mousewheel/jquery.mousewheel.js*/
!function (a) {
    "function" == typeof define && define.amd ? define("dep/jquery-mousewheel/jquery.mousewheel", ["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
    function h(h) {
        var M = h || window.event, y = D.call(arguments, 1), X = 0, j = 0, L = 0, O = 0, S = 0, Y = 0;
        if (h = a.event.fix(M), h.type = "mousewheel", "detail" in M && (L = -1 * M.detail), "wheelDelta" in M && (L = M.wheelDelta), "wheelDeltaY" in M && (L = M.wheelDeltaY), "wheelDeltaX" in M && (j = -1 * M.wheelDeltaX), "axis" in M && M.axis === M.HORIZONTAL_AXIS && (j = -1 * L, L = 0), X = 0 === L ? j : L, "deltaY" in M && (L = -1 * M.deltaY, X = L), "deltaX" in M && (j = M.deltaX, 0 === L && (X = -1 * j)), 0 !== L || 0 !== j) {
            if (1 === M.deltaMode) {
                var b = a.data(this, "mousewheel-line-height");
                X *= b, L *= b, j *= b
            } else if (2 === M.deltaMode) {
                var z = a.data(this, "mousewheel-page-height");
                X *= z, L *= z, j *= z
            }
            if (O = Math.max(Math.abs(L), Math.abs(j)), (!v || v > O) && (v = O, g(M, O) && (v /= 40)), g(M, O) && (X /= 40, j /= 40, L /= 40), X = Math[X >= 1 ? "floor" : "ceil"](X / v), j = Math[j >= 1 ? "floor" : "ceil"](j / v), L = Math[L >= 1 ? "floor" : "ceil"](L / v), H.settings.normalizeOffset && this.getBoundingClientRect) {
                var P = this.getBoundingClientRect();
                S = h.clientX - P.left, Y = h.clientY - P.top
            }
            return h.deltaX = j, h.deltaY = L, h.deltaFactor = v, h.offsetX = S, h.offsetY = Y, h.deltaMode = 0, y.unshift(h, X, j, L), w && clearTimeout(w), w = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, y)
        }
    }

    function c() {
        v = null
    }

    function g(a, h) {
        return H.settings.adjustOldDeltas && "mousewheel" === a.type && h % 120 === 0
    }

    var w, v, M = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        y = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        D = Array.prototype.slice;
    if (a.event.fixHooks) for (var i = M.length; i;) a.event.fixHooks[M[--i]] = a.event.mouseHooks;
    var H = a.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener) for (var i = y.length; i;) this.addEventListener(y[--i], h, !1); else this.onmousewheel = h;
            a.data(this, "mousewheel-line-height", H.getLineHeight(this)), a.data(this, "mousewheel-page-height", H.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener) for (var i = y.length; i;) this.removeEventListener(y[--i], h, !1); else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (h) {
            var c = a(h), g = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return g.length || (g = a("body")), parseInt(g.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        }, getPageHeight: function (h) {
            return a(h).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    a.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        }, unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
});
;
/*!/dep/mCustomScrollbar/js/jquery.mCustomScrollbar.js*/
define("dep/mCustomScrollbar/js/jquery.mCustomScrollbar", ["require", "exports", "module"], function () {
    !function (a) {
        var c = {
            init: function (c) {
                var h = {
                    set_width: !1,
                    set_height: !1,
                    horizontalScroll: !1,
                    scrollInertia: 950,
                    mouseWheel: !0,
                    mouseWheelPixels: "auto",
                    autoDraggerLength: !0,
                    autoHideScrollbar: !1,
                    alwaysShowScrollbar: !1,
                    snapAmount: null,
                    snapOffset: 0,
                    scrollButtons: {enable: !1, scrollType: "continuous", scrollSpeed: "auto", scrollAmount: 40},
                    advanced: {
                        updateOnBrowserResize: !0,
                        updateOnContentResize: !1,
                        autoExpandHorizontalScroll: !1,
                        autoScrollOnFocus: !0,
                        normalizeMouseWheelDelta: !1
                    },
                    contentTouchScroll: !0,
                    callbacks: {
                        onScrollStart: function () {
                        }, onScroll: function () {
                        }, onTotalScroll: function () {
                        }, onTotalScrollBack: function () {
                        }, onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, whileScrolling: function () {
                        }
                    },
                    theme: "light"
                }, c = a.extend(!0, h, c);
                return this.each(function () {
                    var h = a(this);
                    if (c.set_width && h.css("width", c.set_width), c.set_height && h.css("height", c.set_height), a(document).data("mCustomScrollbar-index")) {
                        var S = parseInt(a(document).data("mCustomScrollbar-index"));
                        a(document).data("mCustomScrollbar-index", S + 1)
                    } else a(document).data("mCustomScrollbar-index", "1");
                    h.wrapInner("<div class='mCustomScrollBox mCS-" + c.theme + "' id='mCSB_" + a(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + a(document).data("mCustomScrollbar-index"));
                    var b = h.children(".mCustomScrollBox");
                    if (c.horizontalScroll) {
                        b.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                        var g = b.children(".mCSB_h_wrapper");
                        g.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
                            width: g.children().outerWidth(),
                            position: "relative"
                        }).unwrap()
                    } else b.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");
                    var _ = b.children(".mCSB_container");
                    a.support.touch && _.addClass("mCS_touch"), _.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                    var v = b.children(".mCSB_scrollTools"), w = v.children(".mCSB_draggerContainer"),
                        C = w.children(".mCSB_dragger");
                    if (c.horizontalScroll ? C.data("minDraggerWidth", C.width()) : C.data("minDraggerHeight", C.height()), c.scrollButtons.enable && (c.horizontalScroll ? v.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>") : v.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")), b.bind("scroll", function () {
                        h.is(".mCS_disabled") || b.scrollTop(0).scrollLeft(0)
                    }), h.data({
                        mCS_Init: !0,
                        mCustomScrollbarIndex: a(document).data("mCustomScrollbar-index"),
                        horizontalScroll: c.horizontalScroll,
                        scrollInertia: c.scrollInertia,
                        scrollEasing: "mcsEaseOut",
                        mouseWheel: c.mouseWheel,
                        mouseWheelPixels: c.mouseWheelPixels,
                        autoDraggerLength: c.autoDraggerLength,
                        autoHideScrollbar: c.autoHideScrollbar,
                        alwaysShowScrollbar: c.alwaysShowScrollbar,
                        snapAmount: c.snapAmount,
                        snapOffset: c.snapOffset,
                        scrollButtons_enable: c.scrollButtons.enable,
                        scrollButtons_scrollType: c.scrollButtons.scrollType,
                        scrollButtons_scrollSpeed: c.scrollButtons.scrollSpeed,
                        scrollButtons_scrollAmount: c.scrollButtons.scrollAmount,
                        autoExpandHorizontalScroll: c.advanced.autoExpandHorizontalScroll,
                        autoScrollOnFocus: c.advanced.autoScrollOnFocus,
                        normalizeMouseWheelDelta: c.advanced.normalizeMouseWheelDelta,
                        contentTouchScroll: c.contentTouchScroll,
                        onScrollStart_Callback: c.callbacks.onScrollStart,
                        onScroll_Callback: c.callbacks.onScroll,
                        onTotalScroll_Callback: c.callbacks.onTotalScroll,
                        onTotalScrollBack_Callback: c.callbacks.onTotalScrollBack,
                        onTotalScroll_Offset: c.callbacks.onTotalScrollOffset,
                        onTotalScrollBack_Offset: c.callbacks.onTotalScrollBackOffset,
                        whileScrolling_Callback: c.callbacks.whileScrolling,
                        bindEvent_scrollbar_drag: !1,
                        bindEvent_content_touch: !1,
                        bindEvent_scrollbar_click: !1,
                        bindEvent_mousewheel: !1,
                        bindEvent_buttonsContinuous_y: !1,
                        bindEvent_buttonsContinuous_x: !1,
                        bindEvent_buttonsPixels_y: !1,
                        bindEvent_buttonsPixels_x: !1,
                        bindEvent_focusin: !1,
                        bindEvent_autoHideScrollbar: !1,
                        mCSB_buttonScrollRight: !1,
                        mCSB_buttonScrollLeft: !1,
                        mCSB_buttonScrollDown: !1,
                        mCSB_buttonScrollUp: !1
                    }), c.horizontalScroll) "none" !== h.css("max-width") && (c.advanced.updateOnContentResize || (c.advanced.updateOnContentResize = !0)); else if ("none" !== h.css("max-height")) {
                        var B = !1, T = parseInt(h.css("max-height"));
                        h.css("max-height").indexOf("%") >= 0 && (B = T, T = h.parent().height() * B / 100), h.css("overflow", "hidden"), b.css("max-height", T)
                    }
                    if (h.mCustomScrollbar("update"), c.advanced.updateOnBrowserResize) {
                        var E, M = a(window).width(), k = a(window).height();
                        a(window).bind("resize." + h.data("mCustomScrollbarIndex"), function () {
                            E && clearTimeout(E), E = setTimeout(function () {
                                if (!h.is(".mCS_disabled") && !h.is(".mCS_destroyed")) {
                                    var c = a(window).width(), S = a(window).height();
                                    (M !== c || k !== S) && ("none" !== h.css("max-height") && B && b.css("max-height", h.parent().height() * B / 100), h.mCustomScrollbar("update"), M = c, k = S)
                                }
                            }, 150)
                        })
                    }
                    if (c.advanced.updateOnContentResize) {
                        var y;
                        if (c.horizontalScroll) var D = _.outerWidth(); else var D = _.outerHeight();
                        y = setInterval(function () {
                            if (c.horizontalScroll) {
                                c.advanced.autoExpandHorizontalScroll && _.css({
                                    position: "absolute",
                                    width: "auto"
                                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                    width: _.outerWidth(),
                                    position: "relative"
                                }).unwrap();
                                var a = _.outerWidth()
                            } else var a = _.outerHeight();
                            a != D && (h.mCustomScrollbar("update"), D = a)
                        }, 300)
                    }
                })
            }, update: function () {
                var c = a(this), h = c.children(".mCustomScrollBox"), S = h.children(".mCSB_container");
                S.removeClass("mCS_no_scrollbar"), c.removeClass("mCS_disabled mCS_destroyed"), h.scrollTop(0).scrollLeft(0);
                var b = h.children(".mCSB_scrollTools"), g = b.children(".mCSB_draggerContainer"),
                    _ = g.children(".mCSB_dragger");
                if (c.data("horizontalScroll")) {
                    var v = b.children(".mCSB_buttonLeft"), w = b.children(".mCSB_buttonRight"), C = h.width();
                    c.data("autoExpandHorizontalScroll") && S.css({
                        position: "absolute",
                        width: "auto"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: S.outerWidth(),
                        position: "relative"
                    }).unwrap();
                    var B = S.outerWidth()
                } else var T = b.children(".mCSB_buttonUp"), E = b.children(".mCSB_buttonDown"), M = h.height(),
                    k = S.outerHeight();
                if (k > M && !c.data("horizontalScroll")) {
                    b.css("display", "block");
                    var y = g.height();
                    if (c.data("autoDraggerLength")) {
                        var D = Math.round(M / k * y), I = _.data("minDraggerHeight");
                        if (I >= D) _.css({height: I}); else if (D >= y - 10) {
                            var O = y - 10;
                            _.css({height: O})
                        } else _.css({height: D});
                        _.children(".mCSB_dragger_bar").css({"line-height": _.height() + "px"})
                    }
                    var P = _.height(), z = (k - M) / (y - P);
                    c.data("scrollAmount", z).mCustomScrollbar("scrolling", h, S, g, _, T, E, v, w);
                    var A = Math.abs(S.position().top);
                    c.mCustomScrollbar("scrollTo", A, {scrollInertia: 0, trigger: "internal"})
                } else if (B > C && c.data("horizontalScroll")) {
                    b.css("display", "block");
                    var H = g.width();
                    if (c.data("autoDraggerLength")) {
                        var W = Math.round(C / B * H), R = _.data("minDraggerWidth");
                        if (R >= W) _.css({width: R}); else if (W >= H - 10) {
                            var U = H - 10;
                            _.css({width: U})
                        } else _.css({width: W})
                    }
                    var F = _.width(), z = (B - C) / (H - F);
                    c.data("scrollAmount", z).mCustomScrollbar("scrolling", h, S, g, _, T, E, v, w);
                    var A = Math.abs(S.position().left);
                    c.mCustomScrollbar("scrollTo", A, {scrollInertia: 0, trigger: "internal"})
                } else h.unbind("mousewheel focusin"), c.data("horizontalScroll") ? _.add(S).css("left", 0) : _.add(S).css("top", 0), c.data("alwaysShowScrollbar") ? c.data("horizontalScroll") ? c.data("horizontalScroll") && _.css({width: g.width()}) : _.css({height: g.height()}) : (b.css("display", "none"), S.addClass("mCS_no_scrollbar")), c.data({
                    bindEvent_mousewheel: !1,
                    bindEvent_focusin: !1
                })
            }, scrolling: function (c, S, b, g, _, v, w, C) {
                function B(a, c, h, x) {
                    M.data("horizontalScroll") ? M.mCustomScrollbar("scrollTo", g.position().left - c + x, {
                        moveDragger: !0,
                        trigger: "internal"
                    }) : M.mCustomScrollbar("scrollTo", g.position().top - a + h, {
                        moveDragger: !0,
                        trigger: "internal"
                    })
                }

                function T(a) {
                    g.data("preventAction") || (g.data("preventAction", !0), M.mCustomScrollbar("scrollTo", a, {trigger: "internal"}))
                }

                function E() {
                    var a = M.data("scrollButtons_scrollSpeed");
                    return "auto" === M.data("scrollButtons_scrollSpeed") && (a = Math.round((M.data("scrollInertia") + 100) / 40)), a
                }

                var M = a(this);
                if (!M.data("bindEvent_scrollbar_drag")) {
                    var k, y, D, I, O;
                    a.support.pointer ? (D = "pointerdown", I = "pointermove", O = "pointerup") : a.support.msPointer && (D = "MSPointerDown", I = "MSPointerMove", O = "MSPointerUp"), a.support.pointer || a.support.msPointer ? (g.bind(D, function (e) {
                        e.preventDefault(), M.data({on_drag: !0}), g.addClass("mCSB_dragger_onDrag");
                        var c = a(this), h = c.offset(), x = e.originalEvent.pageX - h.left,
                            S = e.originalEvent.pageY - h.top;
                        x < c.width() && x > 0 && S < c.height() && S > 0 && (k = S, y = x)
                    }), a(document).bind(I + "." + M.data("mCustomScrollbarIndex"), function (e) {
                        if (e.preventDefault(), M.data("on_drag")) {
                            var a = g, c = a.offset(), x = e.originalEvent.pageX - c.left,
                                h = e.originalEvent.pageY - c.top;
                            B(k, y, h, x)
                        }
                    }).bind(O + "." + M.data("mCustomScrollbarIndex"), function () {
                        M.data({on_drag: !1}), g.removeClass("mCSB_dragger_onDrag")
                    })) : (g.bind("mousedown touchstart", function (e) {
                        e.preventDefault(), e.stopImmediatePropagation();
                        var x, c, h = a(this), S = h.offset();
                        if ("touchstart" === e.type) {
                            var b = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                            x = b.pageX - S.left, c = b.pageY - S.top
                        } else M.data({on_drag: !0}), g.addClass("mCSB_dragger_onDrag"), x = e.pageX - S.left, c = e.pageY - S.top;
                        x < h.width() && x > 0 && c < h.height() && c > 0 && (k = c, y = x)
                    }).bind("touchmove", function (e) {
                        e.preventDefault(), e.stopImmediatePropagation();
                        var c = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], h = a(this),
                            S = h.offset(), x = c.pageX - S.left, b = c.pageY - S.top;
                        B(k, y, b, x)
                    }), a(document).bind("mousemove." + M.data("mCustomScrollbarIndex"), function (e) {
                        if (M.data("on_drag")) {
                            var a = g, c = a.offset(), x = e.pageX - c.left, h = e.pageY - c.top;
                            B(k, y, h, x)
                        }
                    }).bind("mouseup." + M.data("mCustomScrollbarIndex"), function () {
                        M.data({on_drag: !1}), g.removeClass("mCSB_dragger_onDrag")
                    })), M.data({bindEvent_scrollbar_drag: !0})
                }
                if (a.support.touch && M.data("contentTouchScroll") && !M.data("bindEvent_content_touch")) {
                    var P, z, A, H, x, W, R;
                    S.bind("touchstart", function (e) {
                        e.stopImmediatePropagation(), P = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], z = a(this), A = z.offset(), x = P.pageX - A.left, H = P.pageY - A.top, W = H, R = x
                    }), S.bind("touchmove", function (e) {
                        e.preventDefault(), e.stopImmediatePropagation(), P = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], z = a(this).parent(), A = z.offset(), x = P.pageX - A.left, H = P.pageY - A.top, M.data("horizontalScroll") ? M.mCustomScrollbar("scrollTo", R - x, {trigger: "internal"}) : M.mCustomScrollbar("scrollTo", W - H, {trigger: "internal"})
                    })
                }
                if (M.data("bindEvent_scrollbar_click") || (b.bind("click", function (e) {
                    var c = (e.pageY - b.offset().top) * M.data("scrollAmount"), h = a(e.target);
                    M.data("horizontalScroll") && (c = (e.pageX - b.offset().left) * M.data("scrollAmount")), (h.hasClass("mCSB_draggerContainer") || h.hasClass("mCSB_draggerRail")) && M.mCustomScrollbar("scrollTo", c, {
                        trigger: "internal",
                        scrollEasing: "draggerRailEase"
                    })
                }), M.data({bindEvent_scrollbar_click: !0})), M.data("mouseWheel") && (M.data("bindEvent_mousewheel") || (c.bind("mousewheel", function (e, a) {
                    var c, h = M.data("mouseWheelPixels"), _ = Math.abs(S.position().top), v = g.position().top,
                        w = b.height() - g.height();
                    M.data("normalizeMouseWheelDelta") && (a = 0 > a ? -1 : 1), "auto" === h && (h = 100 + Math.round(M.data("scrollAmount") / 2)), M.data("horizontalScroll") && (v = g.position().left, w = b.width() - g.width(), _ = Math.abs(S.position().left)), (a > 0 && 0 !== v || 0 > a && v !== w) && (e.preventDefault(), e.stopImmediatePropagation()), c = _ - a * h, M.mCustomScrollbar("scrollTo", c, {trigger: "internal"})
                }), M.data({bindEvent_mousewheel: !0}))), M.data("scrollButtons_enable")) if ("pixels" === M.data("scrollButtons_scrollType")) M.data("horizontalScroll") ? (C.add(w).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", U, F), M.data({bindEvent_buttonsContinuous_x: !1}), M.data("bindEvent_buttonsPixels_x") || (C.bind("click", function (e) {
                    e.preventDefault(), T(Math.abs(S.position().left) + M.data("scrollButtons_scrollAmount"))
                }), w.bind("click", function (e) {
                    e.preventDefault(), T(Math.abs(S.position().left) - M.data("scrollButtons_scrollAmount"))
                }), M.data({bindEvent_buttonsPixels_x: !0}))) : (v.add(_).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", U, F), M.data({bindEvent_buttonsContinuous_y: !1}), M.data("bindEvent_buttonsPixels_y") || (v.bind("click", function (e) {
                    e.preventDefault(), T(Math.abs(S.position().top) + M.data("scrollButtons_scrollAmount"))
                }), _.bind("click", function (e) {
                    e.preventDefault(), T(Math.abs(S.position().top) - M.data("scrollButtons_scrollAmount"))
                }), M.data({bindEvent_buttonsPixels_y: !0}))); else if (M.data("horizontalScroll")) {
                    if (C.add(w).unbind("click"), M.data({bindEvent_buttonsPixels_x: !1}), !M.data("bindEvent_buttonsContinuous_x")) {
                        C.bind("mousedown touchstart MSPointerDown pointerdown", function (e) {
                            e.preventDefault();
                            var a = E();
                            M.data({
                                mCSB_buttonScrollRight: setInterval(function () {
                                    M.mCustomScrollbar("scrollTo", Math.abs(S.position().left) + a, {
                                        trigger: "internal",
                                        scrollEasing: "easeOutCirc"
                                    })
                                }, 17)
                            })
                        });
                        var U = function (e) {
                            e.preventDefault(), clearInterval(M.data("mCSB_buttonScrollRight"))
                        };
                        C.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", U), w.bind("mousedown touchstart MSPointerDown pointerdown", function (e) {
                            e.preventDefault();
                            var a = E();
                            M.data({
                                mCSB_buttonScrollLeft: setInterval(function () {
                                    M.mCustomScrollbar("scrollTo", Math.abs(S.position().left) - a, {
                                        trigger: "internal",
                                        scrollEasing: "easeOutCirc"
                                    })
                                }, 17)
                            })
                        });
                        var F = function (e) {
                            e.preventDefault(), clearInterval(M.data("mCSB_buttonScrollLeft"))
                        };
                        w.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", F), M.data({bindEvent_buttonsContinuous_x: !0})
                    }
                } else if (v.add(_).unbind("click"), M.data({bindEvent_buttonsPixels_y: !1}), !M.data("bindEvent_buttonsContinuous_y")) {
                    v.bind("mousedown touchstart MSPointerDown pointerdown", function (e) {
                        e.preventDefault();
                        var a = E();
                        M.data({
                            mCSB_buttonScrollDown: setInterval(function () {
                                M.mCustomScrollbar("scrollTo", Math.abs(S.position().top) + a, {
                                    trigger: "internal",
                                    scrollEasing: "easeOutCirc"
                                })
                            }, 17)
                        })
                    });
                    var L = function (e) {
                        e.preventDefault(), clearInterval(M.data("mCSB_buttonScrollDown"))
                    };
                    v.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", L), _.bind("mousedown touchstart MSPointerDown pointerdown", function (e) {
                        e.preventDefault();
                        var a = E();
                        M.data({
                            mCSB_buttonScrollUp: setInterval(function () {
                                M.mCustomScrollbar("scrollTo", Math.abs(S.position().top) - a, {
                                    trigger: "internal",
                                    scrollEasing: "easeOutCirc"
                                })
                            }, 17)
                        })
                    });
                    var X = function (e) {
                        e.preventDefault(), clearInterval(M.data("mCSB_buttonScrollUp"))
                    };
                    _.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", X), M.data({bindEvent_buttonsContinuous_y: !0})
                }
                M.data("autoScrollOnFocus") && (M.data("bindEvent_focusin") || (c.bind("focusin", function () {
                    c.scrollTop(0).scrollLeft(0);
                    var h = a(document.activeElement);
                    if (h.is("input,textarea,select,button,a[tabindex],area,object")) {
                        var b = S.position().top, g = h.position().top, _ = c.height() - h.outerHeight();
                        M.data("horizontalScroll") && (b = S.position().left, g = h.position().left, _ = c.width() - h.outerWidth()), (0 > b + g || b + g > _) && M.mCustomScrollbar("scrollTo", g, {trigger: "internal"})
                    }
                }), M.data({bindEvent_focusin: !0}))), M.data("autoHideScrollbar") && !M.data("alwaysShowScrollbar") && (M.data("bindEvent_autoHideScrollbar") || (c.bind("mouseenter", function () {
                    c.addClass("mCS-mouse-over"), h.showScrollbar.call(c.children(".mCSB_scrollTools"))
                }).bind("mouseleave touchend", function (e) {
                    c.removeClass("mCS-mouse-over"), "mouseleave" === e.type && h.hideScrollbar.call(c.children(".mCSB_scrollTools"))
                }), M.data({bindEvent_autoHideScrollbar: !0})))
            }, scrollTo: function (c, S) {
                function b(a) {
                    if (B.data("mCustomScrollbarIndex")) switch (this.mcs = {
                        top: M.position().top,
                        left: M.position().left,
                        draggerTop: D.position().top,
                        draggerLeft: D.position().left,
                        topPct: Math.round(100 * Math.abs(M.position().top) / Math.abs(M.outerHeight() - E.height())),
                        leftPct: Math.round(100 * Math.abs(M.position().left) / Math.abs(M.outerWidth() - E.width()))
                    }, a) {
                        case"onScrollStart":
                            B.data("mCS_tweenRunning", !0).data("onScrollStart_Callback").call(B, this.mcs);
                            break;
                        case"whileScrolling":
                            B.data("whileScrolling_Callback").call(B, this.mcs);
                            break;
                        case"onScroll":
                            B.data("onScroll_Callback").call(B, this.mcs);
                            break;
                        case"onTotalScrollBack":
                            B.data("onTotalScrollBack_Callback").call(B, this.mcs);
                            break;
                        case"onTotalScroll":
                            B.data("onTotalScroll_Callback").call(B, this.mcs)
                    }
                }

                var g, _, v, w, C, B = a(this), T = {
                        moveDragger: !1,
                        trigger: "external",
                        callbacks: !0,
                        scrollInertia: B.data("scrollInertia"),
                        scrollEasing: B.data("scrollEasing")
                    }, S = a.extend(T, S), E = B.children(".mCustomScrollBox"), M = E.children(".mCSB_container"),
                    k = E.children(".mCSB_scrollTools"), y = k.children(".mCSB_draggerContainer"),
                    D = y.children(".mCSB_dragger"), I = draggerSpeed = S.scrollInertia;
                if (!M.hasClass("mCS_no_scrollbar") && (B.data({mCS_trigger: S.trigger}), B.data("mCS_Init") && (S.callbacks = !1), c || 0 === c)) {
                    if ("number" == typeof c) S.moveDragger ? (g = c, c = B.data("horizontalScroll") ? D.position().left * B.data("scrollAmount") : D.position().top * B.data("scrollAmount"), draggerSpeed = 0) : g = c / B.data("scrollAmount"); else if ("string" == typeof c) {
                        var O;
                        O = "top" === c ? 0 : "bottom" !== c || B.data("horizontalScroll") ? "left" === c ? 0 : "right" === c && B.data("horizontalScroll") ? M.outerWidth() - E.width() : "first" === c ? B.find(".mCSB_container").find(":first") : "last" === c ? B.find(".mCSB_container").find(":last") : B.find(c) : M.outerHeight() - E.height(), 1 === O.length ? (c = B.data("horizontalScroll") ? O.position().left : O.position().top, g = c / B.data("scrollAmount")) : g = c = O
                    }
                    if (B.data("horizontalScroll")) {
                        B.data("onTotalScrollBack_Offset") && (v = -B.data("onTotalScrollBack_Offset")), B.data("onTotalScroll_Offset") && (C = E.width() - M.outerWidth() + B.data("onTotalScroll_Offset")), 0 > g ? (g = c = 0, clearInterval(B.data("mCSB_buttonScrollLeft")), v || (_ = !0)) : g >= y.width() - D.width() ? (g = y.width() - D.width(), c = E.width() - M.outerWidth(), clearInterval(B.data("mCSB_buttonScrollRight")), C || (w = !0)) : c = -c;
                        var P = B.data("snapAmount");
                        P && (c = Math.round(c / P) * P - B.data("snapOffset")), h.mTweenAxis.call(this, D[0], "left", Math.round(g), draggerSpeed, S.scrollEasing), h.mTweenAxis.call(this, M[0], "left", Math.round(c), I, S.scrollEasing, {
                            onStart: function () {
                                S.callbacks && !B.data("mCS_tweenRunning") && b("onScrollStart"), B.data("autoHideScrollbar") && !B.data("alwaysShowScrollbar") && h.showScrollbar.call(k)
                            }, onUpdate: function () {
                                S.callbacks && b("whileScrolling")
                            }, onComplete: function () {
                                S.callbacks && (b("onScroll"), (_ || v && M.position().left >= v) && b("onTotalScrollBack"), (w || C && M.position().left <= C) && b("onTotalScroll")), D.data("preventAction", !1), B.data("mCS_tweenRunning", !1), B.data("autoHideScrollbar") && !B.data("alwaysShowScrollbar") && (E.hasClass("mCS-mouse-over") || h.hideScrollbar.call(k))
                            }
                        })
                    } else {
                        B.data("onTotalScrollBack_Offset") && (v = -B.data("onTotalScrollBack_Offset")), B.data("onTotalScroll_Offset") && (C = E.height() - M.outerHeight() + B.data("onTotalScroll_Offset")), 0 > g ? (g = c = 0, clearInterval(B.data("mCSB_buttonScrollUp")), v || (_ = !0)) : g >= y.height() - D.height() ? (g = y.height() - D.height(), c = E.height() - M.outerHeight(), clearInterval(B.data("mCSB_buttonScrollDown")), C || (w = !0)) : c = -c;
                        var P = B.data("snapAmount");
                        P && (c = Math.round(c / P) * P - B.data("snapOffset")), h.mTweenAxis.call(this, D[0], "top", Math.round(g), draggerSpeed, S.scrollEasing), h.mTweenAxis.call(this, M[0], "top", Math.round(c), I, S.scrollEasing, {
                            onStart: function () {
                                S.callbacks && !B.data("mCS_tweenRunning") && b("onScrollStart"), B.data("autoHideScrollbar") && !B.data("alwaysShowScrollbar") && h.showScrollbar.call(k)
                            }, onUpdate: function () {
                                S.callbacks && b("whileScrolling")
                            }, onComplete: function () {
                                S.callbacks && (b("onScroll"), (_ || v && M.position().top >= v) && b("onTotalScrollBack"), (w || C && M.position().top <= C) && b("onTotalScroll")), D.data("preventAction", !1), B.data("mCS_tweenRunning", !1), B.data("autoHideScrollbar") && !B.data("alwaysShowScrollbar") && (E.hasClass("mCS-mouse-over") || h.hideScrollbar.call(k))
                            }
                        })
                    }
                    B.data("mCS_Init") && B.data({mCS_Init: !1})
                }
            }, stop: function () {
                var c = a(this), S = c.children().children(".mCSB_container"),
                    b = c.children().children().children().children(".mCSB_dragger");
                h.mTweenAxisStop.call(this, S[0]), h.mTweenAxisStop.call(this, b[0])
            }, disable: function (c) {
                var h = a(this), S = h.children(".mCustomScrollBox"), b = S.children(".mCSB_container"),
                    g = S.children(".mCSB_scrollTools"), _ = g.children().children(".mCSB_dragger");
                S.unbind("mousewheel focusin mouseenter mouseleave touchend"), b.unbind("touchstart touchmove"), c && (h.data("horizontalScroll") ? _.add(b).css("left", 0) : _.add(b).css("top", 0)), g.css("display", "none"), b.addClass("mCS_no_scrollbar"), h.data({
                    bindEvent_mousewheel: !1,
                    bindEvent_focusin: !1,
                    bindEvent_content_touch: !1,
                    bindEvent_autoHideScrollbar: !1
                }).addClass("mCS_disabled")
            }, destroy: function () {
                var c = a(this);
                c.removeClass("mCustomScrollbar _mCS_" + c.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove(), a(document).unbind("mousemove." + c.data("mCustomScrollbarIndex") + " mouseup." + c.data("mCustomScrollbarIndex") + " MSPointerMove." + c.data("mCustomScrollbarIndex") + " MSPointerUp." + c.data("mCustomScrollbarIndex")), a(window).unbind("resize." + c.data("mCustomScrollbarIndex"))
            }
        }, h = {
            showScrollbar: function () {
                this.stop().animate({opacity: 1}, "fast")
            }, hideScrollbar: function () {
                this.stop().animate({opacity: 0}, "fast")
            }, mTweenAxis: function (a, c, h, S, b, g) {
                function _() {
                    return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                }

                function v() {
                    I || M.call(), I = _() - D, w(), I >= a._time && (a._time = I > a._time ? I + E - (I - a._time) : I + E - 1, a._time < I + 1 && (a._time = I + 1)), a._time < S ? a._id = _request(v) : y.call()
                }

                function w() {
                    S > 0 ? (a.currVal = T(a._time, O, z, S, b), P[c] = Math.round(a.currVal) + "px") : P[c] = h + "px", k.call()
                }

                function C() {
                    E = 1e3 / 60, a._time = I + E, _request = window.requestAnimationFrame ? window.requestAnimationFrame : function (f) {
                        return w(), setTimeout(f, .01)
                    }, a._id = _request(v)
                }

                function B() {
                    null != a._id && (window.requestAnimationFrame ? window.cancelAnimationFrame(a._id) : clearTimeout(a._id), a._id = null)
                }

                function T(t, a, c, d, h) {
                    switch (h) {
                        case"linear":
                            return c * t / d + a;
                        case"easeOutQuad":
                            return t /= d, -c * t * (t - 2) + a;
                        case"easeInOutQuad":
                            return t /= d / 2, 1 > t ? c / 2 * t * t + a : (t--, -c / 2 * (t * (t - 2) - 1) + a);
                        case"easeOutCubic":
                            return t /= d, t--, c * (t * t * t + 1) + a;
                        case"easeOutQuart":
                            return t /= d, t--, -c * (t * t * t * t - 1) + a;
                        case"easeOutQuint":
                            return t /= d, t--, c * (t * t * t * t * t + 1) + a;
                        case"easeOutCirc":
                            return t /= d, t--, c * Math.sqrt(1 - t * t) + a;
                        case"easeOutSine":
                            return c * Math.sin(t / d * (Math.PI / 2)) + a;
                        case"easeOutExpo":
                            return c * (-Math.pow(2, -10 * t / d) + 1) + a;
                        case"mcsEaseOut":
                            var ts = (t /= d) * t, S = ts * t;
                            return a + c * (.499999999999997 * S * ts + -2.5 * ts * ts + 5.5 * S + -6.5 * ts + 4 * t);
                        case"draggerRailEase":
                            return t /= d / 2, 1 > t ? c / 2 * t * t * t + a : (t -= 2, c / 2 * (t * t * t + 2) + a)
                    }
                }

                var E, g = g || {}, M = g.onStart || function () {
                }, k = g.onUpdate || function () {
                }, y = g.onComplete || function () {
                }, D = _(), I = 0, O = a.offsetTop, P = a.style;
                "left" === c && (O = a.offsetLeft);
                var z = h - O;
                B(), C()
            }, mTweenAxisStop: function (a) {
                null != a._id && (window.requestAnimationFrame ? window.cancelAnimationFrame(a._id) : clearTimeout(a._id), a._id = null)
            }, rafPolyfill: function () {
                for (var a = ["ms", "moz", "webkit", "o"], i = a.length; --i > -1 && !window.requestAnimationFrame;) window.requestAnimationFrame = window[a[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"]
            }
        };
        h.rafPolyfill.call(), a.support.touch = !!("ontouchstart" in window), a.support.pointer = window.navigator.pointerEnabled, a.support.msPointer = window.navigator.msPointerEnabled;
        "https:" == document.location.protocol ? "https:" : "http:";
        a.event.special.mousewheel || document.write('<script src="//www.lgstatic.com/www/static/dep/jquery-mousewheel/jquery.mousewheel_164aa7c.js"></script>'), a.fn.mCustomScrollbar = function (h) {
            return c[h] ? c[h].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof h && h ? void a.error("Method " + h + " does not exist") : c.init.apply(this, arguments)
        }
    }(jQuery)
});
;
/*!/common/widgets/passport/passport.js*/
define("common/widgets/passport/passport", ["require", "exports", "module", "common/static/js/gt.sense", "dep/rgrove-lazyload/lazyload", "dep/blueimp-md5/js/md5"], function (require) {
    function a(a) {
        var c = top.location,
            v = {protocol: c.protocol.substring(0, c.protocol.length - 1), hostname: c.hostname, port: c.port || "80"},
            g = F.exec(a.url);
        if (g && g.length) {
            var _ = {protocol: g[1], hostname: g[2], port: g[3] || "80"};
            (v.protocol != _.protocol || v.hostname != _.hostname || v.port != _.port) && (a.dataType = "jsonp", a.jsonp = "jsoncallback")
        }
    }

    function c() {
        j.tinfo("Resource Ready!"), L = !0
    }

    function v(a, c) {
        var v = a + "_" + c;
        $("#" + v).remove(), j.tinfo("Iframe " + v + " removed")
    }

    require("common/static/js/gt.sense"), require("dep/rgrove-lazyload/lazyload"), window.md5 = require("dep/blueimp-md5/js/md5");
    var g = !1, _ = "1.0.2", h = 0, y = {remote: {}},
        F = /^(https?):\/\/((?:[\u4E00-\u9FA5a-z0-9.-]|%[0-9A-F]{2}){2,})(?::(\d+))?((?:\/(?:[a-z0-9-._~!$&'()*+,;=:@]|%[0-9A-F]{2})*)*)(?:\?((?:[a-z0-9-._~!$&'()*+,;=:\/?@]|%[0-9A-F]{2})*))?(?:#((?:[a-z0-9-._~!$&'()*+,;=:\/?@]|%[0-9A-F]{2})*))?$/i,
        w = {
            server: "https://passport.lagou.com",
            poplogin: "/login/login.json",
            poptransfer: "/ajaxLogin/frameGrant.html",
            autologin: "/ajaxLogin/login.html"
        }, b = {popup: "//www.lgstatic.com/www/static/common/widgets/passport/css/loginpop_4ea0500.css"}, C = {
            jq: "//www.lgstatic.com/www/static/common/widgets/passport/dep/jquery.min_7506461.js",
            jqv: "//www.lgstatic.com/www/static/common/widgets/passport/dep/jquery.validate.min_f66db7c.js",
            lagou: "//www.lgstatic.com/www/static/common/widgets/passport/js/lagou_59f46c6.js",
            cb: "//www.lgstatic.com/www/static/common/widgets/passport/dep/jquery.colorbox-min_169e500.js",
            jsf: "//www.lgstatic.com/www/static/common/widgets/passport/dep/json2_f94ab06.js"
        }, j = {
            rpc: function (c) {
                if (c.url) {
                    c.type || (c.type = "POST"), c.params || (c.params = {});
                    var v = arguments.callee;
                    j.tinfo("Start passport.rpc: " + c.url);
                    var g = {type: c.type, data: c.params, url: c.url, dataType: "json"};
                    a(g), $.ajax(g).done(function (a, g) {
                        if (j.tinfo("passport.rpc.succ: " + g), "10001" == a.state) {
                            var _ = a.content.data.crossServiceUrl.replace(/^https?\:/i, window.location.protocol);
                            return void PASSPORT.remote(_, function () {
                                j.tinfo("passport.rpc.remote.succ"), v(c)
                            }, function (a) {
                                j.tinfo("passport.rpc.remote.fail"), c.fail && c.fail.apply(null, [a])
                            })
                        }
                        c.succ && c.succ.apply(null, arguments)
                    }).fail(function (a, v) {
                        j.tinfo("passport.rpc.fail: " + v), c.fail && c.fail.apply(null, arguments)
                    })
                }
            }, getTargetUrl: function (a, c) {
                var v = {fl: void 0 != c.fl ? c.fl : !0, service: c.service, osc: c.osc, ofc: c.ofc, pfurl: document.URL};
                return a + "?" + $.param(v)
            }, getCurEncodeUrl: function () {
                return encodeURIComponent(document.URL)
            }, createIframe: function (a, c) {
                var v = '<iframe src="' + c + '" id="' + a + "_" + h + '" style="display:none;"></iframe>';
                $("body").append(v), h++
            }, requester: function (a, c) {
                a.dataType = a.dataType || "json", a.type = a.type || "POST", a.data = a.data || {}, $.ajax(a).done(function (a) {
                    c && c(a)
                })
            }, strFormat: function (a, c) {
                a = String(a);
                var v = Array.prototype.slice.call(arguments, 1), g = Object.prototype.toString;
                return v.length ? (v = 1 == v.length && null !== c && /\[object Array\]|\[object Object\]/.test(g.call(c)) ? c : v, a.replace(/#\{(.+?)\}/g, function (a, c) {
                    var _ = v[c];
                    return "[object Function]" == g.call(_) && (_ = _(c)), "undefined" == typeof _ ? "" : _
                })) : a
            }, tipheader: "Lagou Passport v" + _ + " -> ", tip: function () {
                if (g) {
                    var a = arguments[0], c = Array.prototype.slice.call(arguments, 1);
                    console[a].apply(console, c)
                }
            }, tinfo: function (a) {
                j.tip("info", j.tipheader + a)
            }
        };
    j.tinfo("Enter passport...");
    var k = function () {
        function a() {
        }

        var c = a.prototype;
        return c._getEvents = function () {
            return this._events || (this._events = {}), this._events
        }, c._getMaxListeners = function () {
            return isNaN(this.maxListeners) && (this.maxListeners = 10), this.maxListeners
        }, c.on = function (a, c) {
            var v = this._getEvents(), g = this._getMaxListeners();
            v[a] = v[a] || [];
            var _ = v[a].length;
            if (_ >= g && 0 !== g) throw new RangeError("Warning: possible Emitter memory leak detected. " + _ + " listeners added.");
            return v[a].push(c), this
        }, c.once = function (a, c) {
            function v() {
                g.off(a, v), c.apply(this, arguments)
            }

            var g = this;
            return v.listener = c, this.on(a, v), this
        }, c.off = function (a, c) {
            var v = this._getEvents();
            if (0 === arguments.length) return this._events = {}, this;
            var g = v[a];
            if (!g) return this;
            if (1 === arguments.length) return delete v[a], this;
            for (var _, i = 0; i < g.length; i++) if (_ = g[i], _ === c || _.listener === c) {
                g.splice(i, 1);
                break
            }
            return this
        }, c.emit = function (a) {
            var c = this._getEvents(), v = c[a], g = Array.prototype.slice.call(arguments, 1);
            if (v) {
                v = v.slice(0);
                for (var i = 0, _ = v.length; _ > i; i++) v[i].apply(this, g)
            }
            return this
        }, c.listeners = function (a) {
            var c = this._getEvents();
            return c[a] || []
        }, c.setMaxListeners = function (a) {
            return this.maxListeners = a, this
        }, a.mixin = function (c) {
            for (var v in a.prototype) c[v] = a.prototype[v];
            return c
        }, a
    }(), T = function () {
        var a = !1;
        try {
            a = !(!$ || !jQuery)
        } catch (e) {
            a = !1
        }
        return a
    }(), P = function () {
        return !(!T || !$("body").validate)
    }(), S = function () {
        return !(!T || !$.colorbox)
    }(), V = function () {
        return !!JSON.stringify
    }(), D = function () {
        return !(!D || !lg)
    }();
    j.tinfo("Has$: " + T), j.tinfo("HasValidate: " + P), j.tinfo("HasCb: " + S), j.tinfo("HasLagou: " + D), j.tinfo("HasJsf: " + V);
    var L = !1;
    !function () {
        var a = {};
        !T && (a[C.jq] = !1), !P && (a[C.jqv] = !1), !D && (a[C.lagou] = !1), !S && (a[C.cb] = !1), !V && (a[C.jsf] = !1);
        var v = function () {
            for (var c in a) if (!a[c]) return !1;
            return !0
        }, g = function (g) {
            j.tinfo("Load " + g + "..."), LazyLoad.js(g, function () {
                a[g] = !0, j.tinfo("Load " + g + " success!"), v() && c()
            })
        };
        for (var _ in a) g(_)
    }();
    var A = new k, R = function (a) {
        return function () {
            var c = 70, v = arguments;
            L ? a.apply(null, v) : window.setTimeout(function () {
                v.callee.apply(null, v)
            }, c)
        }
    }, E = !1;
    E || LazyLoad.css(b.popup, function () {
        E = !0, j.tinfo("Load popup style success!")
    });
    var z = function () {
        function a(a) {
            $.ajax({
                type: "GET",
                url: "https://passport.lagou.com/verify/getStyle.json",
                dataType: "jsonp",
                jsonp: "jsoncallback"
            }).done(function (c) {
                a(c.content.data.verifyStyle)
            })
        }

        function c(a, c) {
            for (var v = a; v[0];) {
                if (v.hasClass(c)) return !0;
                v = v.parent()
            }
            return !1
        }

        function v() {
            clearInterval(k), E.setClear(), O.setClear()
        }

        function g(a) {
            var c = {control: E.field.submit, parent: E}, v = c.parent.CollectData(), g = "veenike";
            if (v.isValidate) {
                a && (v.challenge = a), v.password = md5(v.password), v.password = md5(g + v.password + g);
                var _ = $("#remember", $("body #colorbox #login_form_popup"));
                _.val(_.prop("checked") ? 1 : null);
                var y = _.val(), F = void 0 == y || null == y ? !1 : 1 == y ? !0 : !1;
                v.rememberMe = F, $.ajax({
                    data: v,
                    url: w.server + w.poplogin,
                    dataType: "jsonp",
                    jsonp: "jsoncallback"
                }).done(function (a) {
                    if (R[210].message = "请输入有效的手机/邮箱", R[400].message = "帐号和密码不匹配", R[400].linkFor = "password", 1 == a.state) {
                        var v = j.getTargetUrl(w.server + w.poptransfer, {
                            fl: "2",
                            service: document.URL,
                            osc: "PASSPORT._pscb(" + h + ")",
                            ofc: "PASSPORT._pfcb(" + h + ")"
                        });
                        j.createIframe("popup_login_iframe", v)
                    } else 10010 == a.state && (c.parent.field.request_form_verifyCode.getVerifyCode(), c.parent.field.request_form_verifyCode.setVisible(!0), $.colorbox.resize({innerHeight: "424px"})), R[a.state] ? c.parent.field[R[a.state].linkFor].showMessage({message: R[a.state].message}) : c.parent.field.password.showMessage({message: a.message})
                })
            }
        }

        function _(e, a) {
            var c = e;
            (-1 == c.control.totalTimeTemp || c.control.totalTimeTemp == c.control.getTopTime()) && $.ajax({
                url: c.control._option.url,
                data: {
                    challenge: a,
                    countryCode: $('[data-view="codeLogin"] .area_code').text(),
                    phone: c.linkFor.getValue(),
                    type: 0,
                    request_form_verifyCode: lg.Cache.Views[c.control._option.parentName].field.request_form_verifyCode.getValue()
                },
                dataType: "jsonp",
                jsonp: "jsoncallback",
                cache: !1
            }).done(function (a) {
                var v;
                return z[a.state] && c.parent.field[z[a.state].linkFor].showMessage({message: z[a.state].message}), 1 == a.state ? (v = $('[data-propertyname="phoneVerificationCode"]'), $(".verify_tips_main").hide(), void e.control.starttime(e.control, function () {
                    $(".auto_phone").val("语音验证"), $(".verify_tips_main").show(), v.find(".first_child").removeClass("input_warning"), v.children(".input_tips").remove()
                })) : (e.control.init(), c.parent.field.request_form_verifyCode.getVerifyCode(), void e.control.setDisable(!1))
            })
        }

        function y(e, a) {
            var c = e;
            (-1 == c.control.totalTimeTemp || c.control.totalTimeTemp == c.control.getTopTime()) && $.ajax({
                url: c.control._option.url,
                data: {
                    countryCode: $('[data-view="codeLogin"] .area_code').text(),
                    phone: c.linkFor.getValue(),
                    type: 1,
                    request_form_verifyCode: lg.Cache.Views[c.control._option.parentName].field.request_form_verifyCode.getValue(),
                    challenge: a
                },
                dataType: "jsonp",
                jsonp: "jsoncallback",
                cache: !1
            }).done(function (a) {
                var v, g = z[a.state], _ = c.control.getTopTime();
                1 === a.state ? (v = $('[data-propertyname="phoneVerificationCode"]'), v.find(".last_child").addClass("btn_disabled").prop("disabled", !0), clearInterval(k), k = setInterval(function () {
                    --_ < 0 ? (clearInterval(k), v.find(".first_child").removeClass("input_warning"), v.find(".last_child").removeClass("btn_disabled").removeProp("disabled"), $(".auto_phone").removeProp("disabled"), $(".verify_tips_count_down").hide(), $(".verify_tips_main").show(), e.control.init()) : (_ === c.control.getTopTime() - 1 && $(".verify_tips_main").hide(), $(".verify_tips_count_down").html("请留意接收手机来电，" + _ + "秒后可重试…").show())
                }, 1e3)) : (e.control.init(), g && c.parent.field[g.linkFor].showMessage({message: g.message}), c.parent.field.request_form_verifyCode.getVerifyCode()), e.control.setDisable(!1)
            })
        }

        function F(e, a) {
            var c = e, v = c.parent.CollectData();
            v.countryCode = $('[data-view="codeLogin"] .area_code').text(), a && (v.challenge = a), v.isValidate && $.ajax({
                url: w.server + w.poplogin,
                data: v,
                dataType: "jsonp",
                jsonp: "jsoncallback",
                cache: !1
            }).done(function (a) {
                if (R[210].message = "输入号码与归属地不匹配", R[400].message = "帐号和验证码不匹配", R[400].linkFor = "phoneVerificationCode", 1 == a.state) {
                    var v = j.getTargetUrl(w.server + w.poptransfer, {
                        fl: "2",
                        service: document.URL,
                        osc: "PASSPORT._pscb(" + h + ")",
                        ofc: "PASSPORT._pfcb(" + h + ")"
                    });
                    j.createIframe("popup_login_iframe", v)
                } else 10010 == a.state && (c.parent.field.request_form_verifyCode.getVerifyCode(), c.parent.field.request_form_verifyCode.setVisible(!0)), R[a.state] ? c.parent.field[R[a.state].linkFor].showMessage({message: R[a.state].message}) : c.parent.field.phoneVerificationCode.showMessage({message: a.message}), c.parent.field.request_form_verifyCode.getVerifyCode()
            })
        }

        var b = j.getCurEncodeUrl(), C = w.server, k = null;
        $.colorbox({
            html: '<div id="loginPop" class="popup"><div class="login_left fl"><div class="form_head"><ul class="form_head clearfix"><li class="active" data-lg-tj-id="1Us0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">密码登录</li><li data-lg-tj-id="1Ut0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">验证码登录</li></ul><span class="tab_active"></span></div><form class="form_body" action="javascript:;" method="post"  data-view="passwordLogin"><div class="input_item clearfix" data-propertyname="username" data-controltype="Phone"><input class="input input_white" type="text" id="email" name="email" tabindex="1" placeholder="请输入已验证手机/邮箱"></div><div class="input_item clearfix" data-propertyname="password" data-controltype="Password"><input class="input input_white" type="password" id="password" name="password" tabindex="2" placeholder="请输入密码"></div><div class="input_item clearfix"  data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" style="display:none;clear: both;"><div class="input_group clearfix"><input type="text" class="input input_white fl" name="" placeholder="请证明你不是机器人" data-required="required" autocomplete="off" ><img src="" alt="点击重试" class="yzm" width="98" height="40"><a href="javascript:;" class="reflash"></a></div></div><label class="fl" for="remember" style="display:none"><input type="checkbox" id="remember"  value="" checked="checked" name="autoLogin"> 记住我</label><div class="forget_password"><a href="' + C + '/accountPwd/toReset.html">忘记密码？</a></div><div data-propertyname="submit" data-controltype="Botton"><input class="btn_block btn_active" type="button" value="登&nbsp;录" data-lg-tj-id="2i10" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></div></form><form class="form_body" action="javascript:;" data-view="codeLogin"><div class="input_item clearfix" data-propertyname="username" data-controltype="Phone"><!--\n	@require "common/widgets/country-code/main.js"\n	@require "common/widgets/country-code/main.less"\n-->\n<span class="area_code"></span>\n<div class="area_code_list">\n    <dl class="code_list_main"></dl>\n    <p class="tips">如果没有找到您的所在归属地，请拨打客服电话4006282835解决。</p>\n</div>\n<input type="text" class="input input_white" placeholder="请输入常用手机号" data-required="required" autocomplete="off"></div><div class="input_item clearfix" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode"><div class="input_group clearfix"><input type="text" class="input input_white verify_code_input fl" name="" placeholder="请证明你不是机器人" data-required="required" autocomplete="off"><img src="" alt="点击重试" class="yzm" width="98" height="40"><a rel="nofollow" href="javascript:;" class="reflash"></a></div></div><div class="input_item" data-propertyname="phoneVerificationCode" data-controltype="PhoneVerificationCode"><div class="input_group clearfix"><input type="text" class="input input_white first_child" placeholder="请输入验证码" data-required="required" autocomplete="off"><input type="button" class="btn_active last_child" value="获取验证码" data-required="required" data-lg-tj-id="1940" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></div></div><div class="input_item verify_tips" data-propertyname="autoPhoneVerificationCode" data-controltype="PhoneVerificationCode"><div class="verify_tips_main">收不到短信？请使用<input type="button" class="auto_phone" value="语音验证"></div><div class="verify_tips_count_down">语音发送成功</div></div><div class="input_item clearfix" data-propertyname="submit" data-controltype="Botton"><input type="button" class="btn_block btn_active" value="登&nbsp;录" data-lg-tj-id="2i20" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></div></form></div><div class="divider fl"></div><div class="login_right fl"><h5>还没有帐号：</h5><a href="' + C + '/register/register.html" class="registor_now" data-lg-tj-id="1gD0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">立即注册</a><h5 class="login_others">使用以下帐号直接登录:</h5><div class="vender_login"><a href="' + C + "/oauth20/auth_sinaWeiboProvider.html?service=" + b + '" target="_blank" class="vender_icon icon_sina" title="使用新浪微博帐号登录" data-lg-tj-id="1hw0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></a><a href="' + C + "/oauth20/auth_qqProvider.html?service=" + b + '" class="vender_icon icon_tencent" target="_blank" title="使用腾讯QQ帐号登录" data-lg-tj-id="1hx0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></a><a href="' + C + "/oauth20/auth_weixinProvider.html?service=" + b + '" class="vender_icon icon_wechat" target="_blank" title="使用微信帐号登录" data-lg-tj-id="1hy0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></a><a href="' + C + "/oauth20/auth_baiduProvider.html?service=" + b + '" class="vender_icon icon_baidu" target="_blank" title="使用百度帐号登录" data-lg-tj-id="2ij0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></a></div></div></div>',
            title: "登录",
            innerHeight: "360px",
            scrolling: !1,
            onClosed: function () {
                v()
            },
            onComplete: function () {
                T && (P ? $('[data-view="codeLogin"] [data-controltype="VerifyCode"]').hide() : $('[data-view="codeLogin"] [data-controltype="VerifyCode"]').show())
            }
        }), $.ajax({
            url: "https://passport.lagou.com/register/getPhoneCountryCode.json",
            dataType: "jsonp",
            jsonp: "jsoncallback",
            success: function (a) {
                var c = "", v = a.content.rows;
                if (1 === a.state && v) {
                    $(".area_code").text(v[0].countryList[0].code);
                    for (var g = 0, _ = v.length; _ > g; g++) {
                        c += "<dt>" + v[g].name + "</dt>";
                        for (var i = 0, h = v[g].countryList.length; h > i; i++) c += "<dd>" + v[g].countryList[i].name + "<span>" + v[g].countryList[i].code + "</span></dd>"
                    }
                } else c = "请求出错";
                $(".code_list_main").append(c)
            }
        });
        var T, P, S;
        a(function (a) {
            return T = a, "nolagou" == T ? (P = !0, initSense({
                id: "66442f2f720bfc86799932d8ad2eb6c7",
                https: !0,
                onError: function (a) {
                    console.log("gt error", a)
                }
            }, function (a) {
                S = a, S._c_interactive = 0, S.setInfos(function () {
                    return {interactive: S._c_interactive}
                }).onSuccess(function (a) {
                    S._c_onSuccess && S._c_onSuccess(a)
                }).onClose(function () {
                    S.reset(), S._c_onClose && S._c_onClose()
                }).onError(function () {
                    window.location.reload()
                })
            }), void $('[data-view="codeLogin"] [data-controltype="VerifyCode"]').hide()) : void("lagou" == T && (P = !1))
        }), $(document).off("click", ".area_code"), $(document).on("click", ".area_code", function () {
            var a = $(this).next();
            return a.is(":visible") ? ($(this).removeClass("active"), a.hide()) : ($(this).addClass("active"), a.show().scrollTop(0)), !1
        }), $(document).off("click", ".area_code_list dd"), $(document).on("click", ".area_code_list dd", function () {
            var a = $(this).parents(".area_code_list"), c = a.prev();
            return c.text($(this).children("span").text()), c.trigger("click"), !1
        }), $(document).on("click", function (a) {
            var v = $(a.target);
            return c(v, "area_code_list") ? !1 : ($(".area_code").removeClass("active"), void $(".area_code_list").hide())
        });
        var V = $("#loginPop"), D = V.find(".form_body"), L = V.find(".tab_active"), A = V.find(".form_head");
        A.off("click"), A.on("click", "li", function () {
            var a = $(this), c = a.index();
            return 0 === c ? $(".divider").removeClass("code_divider") : $(".divider").addClass("code_divider"), a.addClass("active").siblings().removeClass("active"), L.stop().animate({left: a.offsetParent().context.offsetLeft}, 400), D.eq(c).show().siblings(".form_body").hide(), $.colorbox.resize({innerHeight: 0 === c ? "360px" : "438px"}), v(), !1
        });
        var R = {
            1: {message: "成功", linkFor: "username", level: "info"},
            210: {message: "请输入有效的手机/邮箱", linkFor: "username", level: "error"},
            211: {message: "请输入6-16位密码，字母区分大小写", linkFor: "password", level: "error"},
            220: {message: "请输入已验证手机/邮箱", linkFor: "username", level: "error"},
            241: {message: "请输入密码", linkFor: "password", level: "error"},
            400: {message: "帐号和密码不匹配", linkFor: "password", level: "error"},
            10010: {message: "图形验证码不正确", linkFor: "request_form_verifyCode", level: "error"},
            10011: {
                message: "登录错误次数过多，请稍后再试或<a href='https://passport.lagou.com/accountPwd/toReset.html'>重置密码</a>",
                linkFor: "password",
                level: "error"
            },
            10012: {message: "操作过于频繁，请联系管理员", linkFor: "password", level: "error"}
        }, E = new lg.Views.BaseView({
            name: "passwordLogin",
            fields: [{
                name: "username",
                validRules: [{mode: "require", data: "", message: "请输入已验证手机/邮箱", trigger: "blur"}, {
                    mode: "pattern",
                    isUse: !0,
                    status: !1,
                    data: {
                        phone: /^\d{5,15}$/,
                        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
                    },
                    message: "请输入有效的手机/邮箱"
                }],
                controlType: "Phone"
            }, {
                name: "password",
                validRules: [{mode: "require", data: "", message: "请输入密码"}, {
                    mode: "pattern",
                    data: "/^[\\S\\s]{6,16}$/",
                    message: "请输入6-16位密码，字母区分大小写"
                }],
                controlType: "Password"
            }, {
                name: "request_form_verifyCode",
                isVisible: !1,
                validRules: [],
                from: "register",
                url: "https://passport.lagou.com/vcode/create",
                controlType: "VerifyCode"
            }, {
                name: "submit", validRules: [], controlType: "Button", click: function () {
                    if (!T) return void console.log("初始化中 请稍后");
                    if (P) {
                        if (!S) return;
                        S._c_interactive = 2, S._c_onSuccess = function (a) {
                            g(a.challenge)
                        }, S.sense()
                    } else g()
                }
            }]
        });
        E.field.request_form_verifyCode.getVerifyCode();
        var z = {
            1: {message: "验证码已发送，请查收短信", linkFor: "phoneVerificationCode", level: "info"},
            201: {message: "请输入手机号码", linkFor: "username", level: "error"},
            203: {message: "输入号码与归属地不匹配", linkFor: "username", level: "error"},
            204: {message: "系统错误", linkFor: "phoneVerificationCode", level: "error"},
            205: {message: "输入号码与归属地不匹配", linkFor: "username", level: "error"},
            206: {message: "系统错误", linkFor: "phoneVerificationCode", level: "error"},
            207: {message: "该手机获取验证码已达上限，请明天再试", linkFor: "phoneVerificationCode", level: "error"},
            208: {message: "验证码发送太过频繁，请稍后再试", linkFor: "phoneVerificationCode", level: "error"},
            209: {message: "该手机已被注册，请重新输入或直接登录", linkFor: "username", level: "error"},
            222: {message: "该手机号未注册", linkFor: "username", level: "error"},
            304: {message: "用户未登录", linkFor: "username", level: "error"},
            402: {message: "获取验证码超时，请稍后再试", linkFor: "phoneVerificationCode", level: "error"},
            10010: {message: "图形验证码不正确", linkFor: "request_form_verifyCode", level: "error"},
            10011: {message: "操作过于频繁，请联系管理员", linkFor: "phoneVerificationCode", level: "error"},
            10012: {message: "操作过于频繁，请联系管理员", linkFor: "phoneVerificationCode", level: "error"}
        }, O = new lg.Views.BaseView({
            name: "codeLogin",
            fields: [{
                name: "username",
                validRules: [{mode: "require", data: "", message: "请输入已验证手机", trigger: "blur"}, {
                    mode: "pattern",
                    isUse: !0,
                    status: !1,
                    data: {phone: /^\d{5,11}$/},
                    message: "请输入有效的手机"
                }],
                controlType: "Phone"
            }, {
                name: "request_form_verifyCode",
                validRules: [{mode: "require", data: "", message: "请输入验证码"}, {
                    mode: "pattern",
                    data: "/^[a-zA-Z0-9一-龥]{4,4}$/",
                    message: "请输入正确的验证码"
                }],
                from: "register",
                url: "https://passport.lagou.com/vcode/create",
                controlType: "VerifyCode"
            }, {
                name: "phoneVerificationCode",
                linkFor: "username",
                verifyCode: "request_form_verifyCode",
                totalTips: "该手机获取验证码已达上限，请明天再试",
                validRules: [{mode: "require", data: "", message: "请输入6位数字验证码"}, {
                    mode: "pattern",
                    isUse: !0,
                    status: !1,
                    data: "/^[0-9]{6,6}$/",
                    message: "请输入6位数字验证码"
                }],
                url: C + "/login/sendLoginVerifyCode.json",
                controlType: "PhoneVerificationCode",
                click: function (e) {
                    if (!T) return void console.log("初始化中 请稍后");
                    if (P) {
                        if (!S) return;
                        S._c_interactive = 3, S._c_onSuccess = function (a) {
                            _(e, a.challenge)
                        }, S._c_onClose = function () {
                            e.control.setDisable(!1), e.control.init()
                        }, S.sense()
                    } else _(e)
                }
            }, {
                name: "autoPhoneVerificationCode",
                linkFor: "username",
                verifyCode: "request_form_verifyCode",
                validRules: [],
                url: C + "/login/sendLoginVerifyCode.json",
                controlType: "PhoneVerificationCode",
                click: function (e) {
                    if (!T) return void console.log("初始化中 请稍后");
                    if (P) {
                        if (!S) return;
                        S._c_interactive = 3, S._c_onSuccess = function (a) {
                            y(e, a.challenge)
                        }, S._c_onClose = function () {
                            e.control.setDisable(!1), e.control.init()
                        }, S.sense()
                    } else y(e)
                }
            }, {
                name: "submit", validRules: [], controlType: "Button", click: function (e) {
                    if (!T) return void console.log("初始化中 请稍后");
                    if (P) {
                        if (!S) return;
                        F(e, 111)
                    } else F(e)
                }
            }]
        })
    };
    window.PASSPORT = window.PASSPORT || {
        on: function () {
            A.on.apply(A, arguments)
        }, auto: R(function () {
            var a = j.getTargetUrl(w.server + w.autologin, {
                fl: "1",
                service: document.URL,
                osc: "PASSPORT._ascb(" + h + ")",
                ofc: "PASSPORT._afcb(" + h + ")"
            });
            j.createIframe("auto_login_iframe", a)
        }), _ascb: function (a, c) {
            j.tinfo("Call of PASSPORT._ascb" + a + ": " + c), A.emit("autologin:succ", c), v("auto_login_iframe", a)
        }, _afcb: function (a, c) {
            j.tinfo("Call of PASSPORT._afcb" + a + ": " + c), A.emit("autologin:fail", c), v("auto_login_iframe", a)
        }, popup: R(function () {
            z()
        }), _pscb: function (a, c) {
            j.tinfo("Call of PASSPORT._pscb" + a + ": " + c), A.emit("popuplogin:succ", c), v("popup_login_iframe", a)
        }, _pfcb: function (a, c) {
            j.tinfo("Call of PASSPORT._pfcb" + a + ": " + c), A.emit("popuplogin:fail", c), v("popup_login_iframe", a)
        }, remote: R(function (a, c, v) {
            j.tinfo("Remote request: " + a + " " + c + " " + v), y.remote[h] = {}, c && (y.remote[h].succ = c), v && (y.remote[h].fail = v), j.tinfo("Remote request put into callbacks: " + JSON.stringify(y.remote));
            var g = j.getTargetUrl(w.server + w.autologin, {
                fl: "3",
                service: a,
                osc: "PASSPORT._rscb(" + h + ")",
                ofc: "PASSPORT._rfcb(" + h + ")"
            });
            j.createIframe("remote_login_iframe", g)
        }), _rscb: function (a, c) {
            j.tinfo("Call of PASSPORT._rscb" + a + ": " + c), A.emit("remotelogin:succ", c), v("remote_login_iframe", a), y.remote[a] && y.remote[a].succ && y.remote[a].succ(c)
        }, _rfcb: function (a, c) {
            j.tinfo("Call of PASSPORT._rfcb" + a + ": " + c), A.emit("remotelogin:fail", c), v("remote_login_iframe", a), y.remote[a] && y.remote[a].fail && y.remote[a].fail(c)
        }, util: {rpc: R(j.rpc), tinfo: R(j.tinfo)}
    }
});
;
/*!/common/widgets/plat/exposure.js*/
define("common/widgets/plat/exposure", ["require", "exports", "module"], function (require, exports) {
    function a(a, h, g) {
        for (var j = [], i = 0; i < a.length; i++) j.push(c(a[i][0], a[i][1], a[i][2]));
        var v = new Image, A = {
            lt: "trackshow",
            a: j.join(","),
            t: h || "",
            v: 0,
            dl: encodeURIComponent(window.location.href),
            dr: encodeURIComponent(window.location.protocol + "//" + window.location.hostname),
            time: (new Date).getTime()
        };
        "undefined" != typeof g && (A.abt = g.join(",")), paramsArr = [];
        for (var I in A) paramsArr.push(I + "=" + A[I]);
        v.src = w.jsonURL + "?" + paramsArr.join("&")
    }

    function c(a, c, w) {
        return [$.trim(a), $.trim(c), 0, $.trim(w), Math.round(1e4 * Math.random())].join("_")
    }

    exports.exposure = a;
    var w = {jsonURL: document.location.protocol + "//a.lagou.com/json"};
    exports.postoA = function (a) {
        if (a) {
            var c = [], w = new Image;
            for (var i in a) c.push(i + "=" + a[i]);
            c.push("time=" + (new Date).getTime()), w.src = document.location.protocol + "//a.lagou.com/show?" + c.join("&")
        }
    }
});
;
/*!/common/widgets/plat/poster.js*/
define("common/widgets/plat/poster", ["require", "exports", "module", "common/widgets/plat/exposure"], function (require, exports) {
    function a(a, c) {
        var g = a || ".lgad_container";
        $(g).size() < 1 || $(g).each(function (i, e) {
            var a = $(e).attr("key"), g = $("#keyword").val();
            $(e).data("loadAdAlready") || ($(e).data("loadAdAlready", 1), $.getJSON(document.location.protocol + "//ggservice.lagou.com/promotionSpace/data?callback=?", {
                spaceKey: a,
                keyword: g,
                subsite: $("#subsiteCity").val() || "全国"
            }, function (a) {
                if (a.success && a.data.promotionAds.length > 0) {
                    var g = (a.data.promotionAds[0].img1 || "").replace(/^https?\:\/\/www\.lagou\.com/i, GLOBAL_DOMAIN.lgsctx),
                        v = a.data.promotionAds[0].width || a.data.width,
                        w = a.data.promotionAds[0].height || a.data.height, y = a.data.promotionAds[0].link1,
                        _ = a.data.tgCode, A = a.data.promotionAds[0].id || "idnull";
                    if (!g) return;
                    var k = $('<img src="' + g + '" />');
                    $(e).append(k), v && k.width(v), w && k.height(w), y && (_ ? (k.wrap('<a href="' + y + '" data-lg-tj-id="' + _ + '" data-lg-tj-no="idnull" data-lg-tj-cid="' + A + '" target="_blank" rel="nofollow"></a>'), $(e).hasClass("ad_exposure") && (h([[_, "idnull", A]], "ad"), $(e).removeClass("ad_exposure"))) : k.wrap('<a href="' + y + '" target="_blank" rel="nofollow"></a>')), $(e).removeClass("lgad_container"), c && c(), $(window).trigger("resize")
                } else $(e).remove()
            }))
        })
    }

    function c(a, c) {
        var g = a || ".multi_lgad_container";
        $(g).size() < 1 || $(g).each(function (i, e) {
            var a = $(e).attr("key"), g = $("#keyword").val();
            $(e).data("loadAdAlready") || ($(e).data("loadAdAlready", 1), $.getJSON(document.location.protocol + "//ggservice.lagou.com/promotionSpace/data?callback=?", {
                spaceKey: a,
                keyword: g,
                subsite: $("#subsiteCity").val() || "全国"
            }, function (a) {
                if (a.success && a.data.promotionAds.length > 0) {
                    for (var g = [], v = 0; v < a.data.promotionAds.length; v++) {
                        var w = (a.data.promotionAds[v].img1 || "").replace(/^https?\:\/\/www\.lagou\.com/i, GLOBAL_DOMAIN.lgsctx),
                            y = a.data.promotionAds[v].width || a.data.width,
                            _ = a.data.promotionAds[v].height || a.data.height, A = a.data.promotionAds[v].link1,
                            k = a.data.tgCode, C = "00" + (v + 1 > 9 ? v + 1 : "0" + (v + 1)),
                            j = a.data.promotionAds[v].id || "idnull";
                        if (w) {
                            var K = $('<img src="' + w + '" />');
                            $(e).append(K), y && K.width(y), _ && K.height(_), A && (k ? (K.wrap('<a href="' + A + '" data-lg-tj-id="' + k + '" data-lg-tj-no="' + C + '" data-lg-tj-cid="' + j + '" target="_blank" rel="nofollow"></a>'), g.push([k, C, j])) : K.wrap('<a href="' + A + '" target="_blank" rel="nofollow"></a>')), $(e).removeClass("multi_lgad_container")
                        }
                    }
                    $(e).hasClass("ad_exposure") && g.length > 0 && (h(g, "ad"), $(e).removeClass("ad_exposure")), c && c(), $(window).trigger("resize")
                } else $(e).remove()
            }))
        })
    }

    function g() {
        var a = [];
        $(".tj_exposure").each(function (i, e) {
            if ($(e).attr("data-lg-tj-id")) {
                var c = $(e).attr("data-lg-tj-id") || "idnull", g = $(e).attr("data-lg-tj-no") || "idnull",
                    h = $(e).attr("data-lg-tj-cid") || "idnull";
                a.push([c, g, h]), $(e).removeClass("tj_exposure")
            }
        }), a.length > 0 && h(a, "ad")
    }

    var h = require("common/widgets/plat/exposure").exposure;
    exports.sendStatistics = g, exports.getSingleAd = a, exports.getMultipleAds = c;
    ({jsonURL: document.location.protocol + "//a.lagou.com/json"});
    a(".lgad_jsonp"), c(".multi_lgad_jsonp"), g(), $("div[key^=SPACE_KEY_]").size() > 0 && $("div[key^=SPACE_KEY_]").each(function (i, e) {
        var a = $(e).attr("key").substr(10, 1e3), c = $(e).attr("keywordSelector"),
            g = window.location.protocol + "//ggservice.lagou.com/promotionSpace/haveData?spaceKey=" + a;
        if (c) {
            var h = $(c).val() || $(c).text();
            h = $.trim(h), h && (g += "&keyword=" + encodeURIComponent(h))
        }
        $.ajax({url: g, dataType: "jsonp"}).done(function (a) {
            if (!a.success) return void $("div[key=SPACE_KEY_" + a.spaceKey + "]").remove();
            if (void 0 == a.htmlType || "iframe" == a.htmlType) {
                var c = window.location.protocol + "//ggservice.lagou.com/promotionSpace/htmlPage?spaceKey=" + a.spaceKey;
                a.data && (c += "&keyword=" + encodeURIComponent(a.data));
                var g = $('<iframe frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0"></iframe>').appendTo($("div[key=SPACE_KEY_" + a.spaceKey + "]"));
                g.attr("src", c), g.attr("width", a.width), g.attr("height", a.height), g.css({
                    display: "block",
                    border: "0"
                })
            } else {
                var h = $("div[key=SPACE_KEY_" + a.spaceKey + "]").append("<div></div>");
                h.css({width: a.width + "px", height: a.height + "px", overflow: "hidden"});
                var v = window.location.protocol + "//ggservice.lagou.com/promotionSpace/htmldata?spaceKey=" + a.spaceKey;
                a.data && (v += "&keyword=" + encodeURIComponent(a.data)), $.ajax({
                    url: v,
                    dataType: "jsonp"
                }).done(function (a) {
                    h.html(a.data)
                }).fail(function () {
                    $("div[key=SPACE_KEY_" + a.spaceKey + "]").remove()
                })
            }
        }).fail(function () {
            $("div[key=SPACE_KEY_" + data.spaceKey + "]").remove()
        })
    })
});