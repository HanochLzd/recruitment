/*!common/widgets/new_login_toolbar/main.js*/
;define("common/widgets/new_login_toolbar/main", ["require", "exports", "module"], function () {
    function c(o, n) {
        $("#loginToolBar ." + o).html(n)
    }

    var a = $("#cc").val(), w = $("#cp").val();
    c("companycount", a), c("positioncount", w);
    var g = 68;
    if ($("#loginToolBar").size() > 0) {
        var v = function () {
            var c = $(window).scrollTop(), a = $(document).height(), w = $(window).height();
            if (c + w >= a - g) {
                var v = g - (a - c - w);
                $("#loginToolBar").css("bottom", v);
                var b = 88 + v;
                $("#backtop").css("bottom", b)
            } else $("#loginToolBar").css("bottom", 0), $("#backtop").css("bottom", 88)
        };
        $(window).scroll(v), $(window).resize(v)
    }
});
/*!common/components/jquery-ui-custom/jquery-ui.custom.js*/
;define("common/components/jquery-ui-custom/jquery-ui.custom", ["require", "exports", "module"], function () {
    !function (a, h) {
        function c(h, c) {
            var g, _, b, y = h.nodeName.toLowerCase();
            return "area" === y ? (g = h.parentNode, _ = g.name, h.href && _ && "map" === g.nodeName.toLowerCase() ? (b = a("img[usemap=#" + _ + "]")[0], !!b && v(b)) : !1) : (/input|select|textarea|button|object/.test(y) ? !h.disabled : "a" === y ? h.href || c : c) && v(h)
        }

        function v(h) {
            return a.expr.filters.visible(h) && !a(h).parents().addBack().filter(function () {
                return "hidden" === a.css(this, "visibility")
            }).length
        }

        var g = 0, _ = /^ui-id-\d+$/;
        a.ui = a.ui || {}, a.extend(a.ui, {
            version: "1.10.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), a.fn.extend({
            focus: function (h) {
                return function (c, v) {
                    return "number" == typeof c ? this.each(function () {
                        var h = this;
                        setTimeout(function () {
                            a(h).focus(), v && v.call(h)
                        }, c)
                    }) : h.apply(this, arguments)
                }
            }(a.fn.focus), scrollParent: function () {
                var h;
                return h = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                    return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function () {
                    return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !h.length ? a(document) : h
            }, zIndex: function (c) {
                if (c !== h) return this.css("zIndex", c);
                if (this.length) for (var v, g, _ = a(this[0]); _.length && _[0] !== document;) {
                    if (v = _.css("position"), ("absolute" === v || "relative" === v || "fixed" === v) && (g = parseInt(_.css("zIndex"), 10), !isNaN(g) && 0 !== g)) return g;
                    _ = _.parent()
                }
                return 0
            }, uniqueId: function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++g)
                })
            }, removeUniqueId: function () {
                return this.each(function () {
                    _.test(this.id) && a(this).removeAttr("id")
                })
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function (h) {
                return function (c) {
                    return !!a.data(c, h)
                }
            }) : function (h, i, c) {
                return !!a.data(h, c[3])
            }, focusable: function (h) {
                return c(h, !isNaN(a.attr(h, "tabindex")))
            }, tabbable: function (h) {
                var v = a.attr(h, "tabindex"), g = isNaN(v);
                return (g || v >= 0) && c(h, !g)
            }
        }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (i, c) {
            function v(h, c, v, _) {
                return a.each(g, function () {
                    c -= parseFloat(a.css(h, "padding" + this)) || 0, v && (c -= parseFloat(a.css(h, "border" + this + "Width")) || 0), _ && (c -= parseFloat(a.css(h, "margin" + this)) || 0)
                }), c
            }

            var g = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"], _ = c.toLowerCase(), b = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
            a.fn["inner" + c] = function (g) {
                return g === h ? b["inner" + c].call(this) : this.each(function () {
                    a(this).css(_, v(this, g) + "px")
                })
            }, a.fn["outer" + c] = function (h, g) {
                return "number" != typeof h ? b["outer" + c].call(this, h) : this.each(function () {
                    a(this).css(_, v(this, h, !0, g) + "px")
                })
            }
        }), a.fn.addBack || (a.fn.addBack = function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (h) {
            return function (c) {
                return arguments.length ? h.call(this, a.camelCase(c)) : h.call(this)
            }
        }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
            disableSelection: function () {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                    a.preventDefault()
                })
            }, enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }
        }), a.extend(a.ui, {
            plugin: {
                add: function (module, h, c) {
                    var i, v = a.ui[module].prototype;
                    for (i in c) v.plugins[i] = v.plugins[i] || [], v.plugins[i].push([h, c[i]])
                }, call: function (a, h, c) {
                    var i, v = a.plugins[h];
                    if (v && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType) for (i = 0; i < v.length; i++) a.options[v[i][0]] && v[i][1].apply(a.element, c)
                }
            }, hasScroll: function (h, c) {
                if ("hidden" === a(h).css("overflow")) return !1;
                var v = c && "left" === c ? "scrollLeft" : "scrollTop", g = !1;
                return h[v] > 0 ? !0 : (h[v] = 1, g = h[v] > 0, h[v] = 0, g)
            }
        })
    }(jQuery), function (a, h) {
        var c = 0, v = Array.prototype.slice, g = a.cleanData;
        a.cleanData = function (h) {
            for (var c, i = 0; null != (c = h[i]); i++) try {
                a(c).triggerHandler("remove")
            } catch (e) {
            }
            g(h)
        }, a.widget = function (h, c, v) {
            var g, _, b, y, w = {}, C = h.split(".")[0];
            h = h.split(".")[1], g = C + "-" + h, v || (v = c, c = a.Widget), a.expr[":"][g.toLowerCase()] = function (h) {
                return !!a.data(h, g)
            }, a[C] = a[C] || {}, _ = a[C][h], b = a[C][h] = function (a, h) {
                return this._createWidget ? void(arguments.length && this._createWidget(a, h)) : new b(a, h)
            }, a.extend(b, _, {
                version: v.version,
                _proto: a.extend({}, v),
                _childConstructors: []
            }), y = new c, y.options = a.widget.extend({}, y.options), a.each(v, function (h, v) {
                return a.isFunction(v) ? void(w[h] = function () {
                    var a = function () {
                        return c.prototype[h].apply(this, arguments)
                    }, g = function (a) {
                        return c.prototype[h].apply(this, a)
                    };
                    return function () {
                        var h, c = this._super, _ = this._superApply;
                        return this._super = a, this._superApply = g, h = v.apply(this, arguments), this._super = c, this._superApply = _, h
                    }
                }()) : void(w[h] = v)
            }), b.prototype = a.widget.extend(y, {widgetEventPrefix: _ ? y.widgetEventPrefix || h : h}, w, {
                constructor: b,
                namespace: C,
                widgetName: h,
                widgetFullName: g
            }), _ ? (a.each(_._childConstructors, function (i, h) {
                var c = h.prototype;
                a.widget(c.namespace + "." + c.widgetName, b, h._proto)
            }), delete _._childConstructors) : c._childConstructors.push(b), a.widget.bridge(h, b)
        }, a.widget.extend = function (c) {
            for (var g, _, b = v.call(arguments, 1), y = 0, w = b.length; w > y; y++) for (g in b[y]) _ = b[y][g], b[y].hasOwnProperty(g) && _ !== h && (c[g] = a.isPlainObject(_) ? a.isPlainObject(c[g]) ? a.widget.extend({}, c[g], _) : a.widget.extend({}, _) : _);
            return c
        }, a.widget.bridge = function (c, g) {
            var _ = g.prototype.widgetFullName || c;
            a.fn[c] = function (b) {
                var y = "string" == typeof b, w = v.call(arguments, 1), C = this;
                return b = !y && w.length ? a.widget.extend.apply(null, [b].concat(w)) : b, this.each(y ? function () {
                    var v, g = a.data(this, _);
                    return g ? a.isFunction(g[b]) && "_" !== b.charAt(0) ? (v = g[b].apply(g, w), v !== g && v !== h ? (C = v && v.jquery ? C.pushStack(v.get()) : v, !1) : void 0) : a.error("no such method '" + b + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + b + "'")
                } : function () {
                    var h = a.data(this, _);
                    h ? h.option(b || {})._init() : a.data(this, _, new g(b, this))
                }), C
            }
        }, a.Widget = function () {
        }, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {disabled: !1, create: null},
            _createWidget: function (h, v) {
                v = a(v || this.defaultElement || this)[0], this.element = a(v), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), h), this.bindings = a(), this.hoverable = a(), this.focusable = a(), v !== this && (a.data(v, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (a) {
                        a.target === v && this.destroy()
                    }
                }), this.document = a(v.style ? v.ownerDocument : v.document || v), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function () {
                return this.element
            },
            option: function (c, v) {
                var g, _, i, b = c;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" == typeof c) if (b = {}, g = c.split("."), c = g.shift(), g.length) {
                    for (_ = b[c] = a.widget.extend({}, this.options[c]), i = 0; i < g.length - 1; i++) _[g[i]] = _[g[i]] || {}, _ = _[g[i]];
                    if (c = g.pop(), 1 === arguments.length) return _[c] === h ? null : _[c];
                    _[c] = v
                } else {
                    if (1 === arguments.length) return this.options[c] === h ? null : this.options[c];
                    b[c] = v
                }
                return this._setOptions(b), this
            },
            _setOptions: function (a) {
                var h;
                for (h in a) this._setOption(h, a[h]);
                return this
            },
            _setOption: function (a, h) {
                return this.options[a] = h, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!h).attr("aria-disabled", h), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function () {
                return this._setOption("disabled", !1)
            },
            disable: function () {
                return this._setOption("disabled", !0)
            },
            _on: function (h, c, v) {
                var g, _ = this;
                "boolean" != typeof h && (v = c, c = h, h = !1), v ? (c = g = a(c), this.bindings = this.bindings.add(c)) : (v = c, c = this.element, g = this.widget()), a.each(v, function (v, b) {
                    function y() {
                        return h || _.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof b ? _[b] : b).apply(_, arguments) : void 0
                    }

                    "string" != typeof b && (y.guid = b.guid = b.guid || y.guid || a.guid++);
                    var w = v.match(/^(\w+)\s*(.*)$/), C = w[1] + _.eventNamespace, D = w[2];
                    D ? g.delegate(D, C, y) : c.bind(C, y)
                })
            },
            _off: function (a, h) {
                h = (h || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(h).undelegate(h)
            },
            _delay: function (a, h) {
                function c() {
                    return ("string" == typeof a ? v[a] : a).apply(v, arguments)
                }

                var v = this;
                return setTimeout(c, h || 0)
            },
            _hoverable: function (h) {
                this.hoverable = this.hoverable.add(h), this._on(h, {
                    mouseenter: function (h) {
                        a(h.currentTarget).addClass("ui-state-hover")
                    }, mouseleave: function (h) {
                        a(h.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (h) {
                this.focusable = this.focusable.add(h), this._on(h, {
                    focusin: function (h) {
                        a(h.currentTarget).addClass("ui-state-focus")
                    }, focusout: function (h) {
                        a(h.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (h, c, v) {
                var g, _, b = this.options[h];
                if (v = v || {}, c = a.Event(c), c.type = (h === this.widgetEventPrefix ? h : this.widgetEventPrefix + h).toLowerCase(), c.target = this.element[0], _ = c.originalEvent) for (g in _) g in c || (c[g] = _[g]);
                return this.element.trigger(c, v), !(a.isFunction(b) && b.apply(this.element[0], [c].concat(v)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({show: "fadeIn", hide: "fadeOut"}, function (h, c) {
            a.Widget.prototype["_" + h] = function (v, g, _) {
                "string" == typeof g && (g = {effect: g});
                var b, y = g ? g === !0 || "number" == typeof g ? c : g.effect || c : h;
                g = g || {}, "number" == typeof g && (g = {duration: g}), b = !a.isEmptyObject(g), g.complete = _, g.delay && v.delay(g.delay), b && a.effects && a.effects.effect[y] ? v[h](g) : y !== h && v[y] ? v[y](g.duration, g.easing, _) : v.queue(function (c) {
                    a(this)[h](), _ && _.call(v[0]), c()
                })
            }
        })
    }(jQuery), function (a) {
        var h = !1;
        a(document).mouseup(function () {
            h = !1
        }), a.widget("ui.mouse", {
            version: "1.10.4",
            options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
            _mouseInit: function () {
                var h = this;
                this.element.bind("mousedown." + this.widgetName, function (a) {
                    return h._mouseDown(a)
                }).bind("click." + this.widgetName, function (c) {
                    return !0 === a.data(c.target, h.widgetName + ".preventClickEvent") ? (a.removeData(c.target, h.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (c) {
                if (!h) {
                    this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                    var v = this, g = 1 === c.which,
                        _ = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                    return g && !_ && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        v.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
                        return v._mouseMove(a)
                    }, this._mouseUpDelegate = function (a) {
                        return v._mouseUp(a)
                    }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), h = !0, !0)) : !0
                }
            },
            _mouseMove: function (h) {
                return a.ui.ie && (!document.documentMode || document.documentMode < 9) && !h.button ? this._mouseUp(h) : this._mouseStarted ? (this._mouseDrag(h), h.preventDefault()) : (this._mouseDistanceMet(h) && this._mouseDelayMet(h) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, h) !== !1, this._mouseStarted ? this._mouseDrag(h) : this._mouseUp(h)), !this._mouseStarted)
            },
            _mouseUp: function (h) {
                return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, h.target === this._mouseDownEvent.target && a.data(h.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(h)), !1
            },
            _mouseDistanceMet: function (a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () {
            },
            _mouseDrag: function () {
            },
            _mouseStop: function () {
            },
            _mouseCapture: function () {
                return !0
            }
        })
    }(jQuery), function (a, h) {
        function c(a, h, c) {
            return [parseFloat(a[0]) * (T.test(a[0]) ? h / 100 : 1), parseFloat(a[1]) * (T.test(a[1]) ? c / 100 : 1)]
        }

        function v(h, c) {
            return parseInt(a.css(h, c), 10) || 0
        }

        function g(h) {
            var c = h[0];
            return 9 === c.nodeType ? {
                width: h.width(),
                height: h.height(),
                offset: {top: 0, left: 0}
            } : a.isWindow(c) ? {
                width: h.width(),
                height: h.height(),
                offset: {top: h.scrollTop(), left: h.scrollLeft()}
            } : c.preventDefault ? {
                width: 0,
                height: 0,
                offset: {top: c.pageY, left: c.pageX}
            } : {width: h.outerWidth(), height: h.outerHeight(), offset: h.offset()}
        }

        a.ui = a.ui || {};
        var _, b = Math.max, y = Math.abs, w = Math.round, C = /left|center|right/, D = /top|center|bottom/,
            E = /[\+\-]\d+(\.[\d]+)?%?/, N = /^\w+/, T = /%$/, k = a.fn.position;
        a.position = {
            scrollbarWidth: function () {
                if (_ !== h) return _;
                var c, v,
                    g = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    b = g.children()[0];
                return a("body").append(g), c = b.offsetWidth, g.css("overflow", "scroll"), v = b.offsetWidth, c === v && (v = g[0].clientWidth), g.remove(), _ = c - v
            }, getScrollInfo: function (h) {
                var c = h.isWindow || h.isDocument ? "" : h.element.css("overflow-x"),
                    v = h.isWindow || h.isDocument ? "" : h.element.css("overflow-y"),
                    g = "scroll" === c || "auto" === c && h.width < h.element[0].scrollWidth,
                    _ = "scroll" === v || "auto" === v && h.height < h.element[0].scrollHeight;
                return {width: _ ? a.position.scrollbarWidth() : 0, height: g ? a.position.scrollbarWidth() : 0}
            }, getWithinInfo: function (h) {
                var c = a(h || window), v = a.isWindow(c[0]), g = !!c[0] && 9 === c[0].nodeType;
                return {
                    element: c,
                    isWindow: v,
                    isDocument: g,
                    offset: c.offset() || {left: 0, top: 0},
                    scrollLeft: c.scrollLeft(),
                    scrollTop: c.scrollTop(),
                    width: v ? c.width() : c.outerWidth(),
                    height: v ? c.height() : c.outerHeight()
                }
            }
        }, a.fn.position = function (h) {
            if (!h || !h.of) return k.apply(this, arguments);
            h = a.extend({}, h);
            var _, T, M, A, W, P, I = a(h.of), S = a.position.getWithinInfo(h.within), H = a.position.getScrollInfo(S),
                L = (h.collision || "flip").split(" "), O = {};
            return P = g(I), I[0].preventDefault && (h.at = "left top"), T = P.width, M = P.height, A = P.offset, W = a.extend({}, A), a.each(["my", "at"], function () {
                var a, c, v = (h[this] || "").split(" ");
                1 === v.length && (v = C.test(v[0]) ? v.concat(["center"]) : D.test(v[0]) ? ["center"].concat(v) : ["center", "center"]), v[0] = C.test(v[0]) ? v[0] : "center", v[1] = D.test(v[1]) ? v[1] : "center", a = E.exec(v[0]), c = E.exec(v[1]), O[this] = [a ? a[0] : 0, c ? c[0] : 0], h[this] = [N.exec(v[0])[0], N.exec(v[1])[0]]
            }), 1 === L.length && (L[1] = L[0]), "right" === h.at[0] ? W.left += T : "center" === h.at[0] && (W.left += T / 2), "bottom" === h.at[1] ? W.top += M : "center" === h.at[1] && (W.top += M / 2), _ = c(O.at, T, M), W.left += _[0], W.top += _[1], this.each(function () {
                var g, C, D = a(this), E = D.outerWidth(), N = D.outerHeight(), k = v(this, "marginLeft"),
                    P = v(this, "marginTop"), F = E + k + v(this, "marginRight") + H.width,
                    U = N + P + v(this, "marginBottom") + H.height, R = a.extend({}, W),
                    j = c(O.my, D.outerWidth(), D.outerHeight());
                "right" === h.my[0] ? R.left -= E : "center" === h.my[0] && (R.left -= E / 2), "bottom" === h.my[1] ? R.top -= N : "center" === h.my[1] && (R.top -= N / 2), R.left += j[0], R.top += j[1], a.support.offsetFractions || (R.left = w(R.left), R.top = w(R.top)), g = {
                    marginLeft: k,
                    marginTop: P
                }, a.each(["left", "top"], function (i, c) {
                    a.ui.position[L[i]] && a.ui.position[L[i]][c](R, {
                        targetWidth: T,
                        targetHeight: M,
                        elemWidth: E,
                        elemHeight: N,
                        collisionPosition: g,
                        collisionWidth: F,
                        collisionHeight: U,
                        offset: [_[0] + j[0], _[1] + j[1]],
                        my: h.my,
                        at: h.at,
                        within: S,
                        elem: D
                    })
                }), h.using && (C = function (a) {
                    var c = A.left - R.left, v = c + T - E, g = A.top - R.top, _ = g + M - N, w = {
                        target: {element: I, left: A.left, top: A.top, width: T, height: M},
                        element: {element: D, left: R.left, top: R.top, width: E, height: N},
                        horizontal: 0 > v ? "left" : c > 0 ? "right" : "center",
                        vertical: 0 > _ ? "top" : g > 0 ? "bottom" : "middle"
                    };
                    E > T && y(c + v) < T && (w.horizontal = "center"), N > M && y(g + _) < M && (w.vertical = "middle"), w.important = b(y(c), y(v)) > b(y(g), y(_)) ? "horizontal" : "vertical", h.using.call(this, a, w)
                }), D.offset(a.extend(R, {using: C}))
            })
        }, a.ui.position = {
            fit: {
                left: function (a, h) {
                    var c, v = h.within, g = v.isWindow ? v.scrollLeft : v.offset.left, _ = v.width,
                        y = a.left - h.collisionPosition.marginLeft, w = g - y, C = y + h.collisionWidth - _ - g;
                    h.collisionWidth > _ ? w > 0 && 0 >= C ? (c = a.left + w + h.collisionWidth - _ - g, a.left += w - c) : a.left = C > 0 && 0 >= w ? g : w > C ? g + _ - h.collisionWidth : g : w > 0 ? a.left += w : C > 0 ? a.left -= C : a.left = b(a.left - y, a.left)
                }, top: function (a, h) {
                    var c, v = h.within, g = v.isWindow ? v.scrollTop : v.offset.top, _ = h.within.height,
                        y = a.top - h.collisionPosition.marginTop, w = g - y, C = y + h.collisionHeight - _ - g;
                    h.collisionHeight > _ ? w > 0 && 0 >= C ? (c = a.top + w + h.collisionHeight - _ - g, a.top += w - c) : a.top = C > 0 && 0 >= w ? g : w > C ? g + _ - h.collisionHeight : g : w > 0 ? a.top += w : C > 0 ? a.top -= C : a.top = b(a.top - y, a.top)
                }
            }, flip: {
                left: function (a, h) {
                    var c, v, g = h.within, _ = g.offset.left + g.scrollLeft, b = g.width,
                        w = g.isWindow ? g.scrollLeft : g.offset.left, C = a.left - h.collisionPosition.marginLeft,
                        D = C - w, E = C + h.collisionWidth - b - w,
                        N = "left" === h.my[0] ? -h.elemWidth : "right" === h.my[0] ? h.elemWidth : 0,
                        T = "left" === h.at[0] ? h.targetWidth : "right" === h.at[0] ? -h.targetWidth : 0,
                        k = -2 * h.offset[0];
                    0 > D ? (c = a.left + N + T + k + h.collisionWidth - b - _, (0 > c || c < y(D)) && (a.left += N + T + k)) : E > 0 && (v = a.left - h.collisionPosition.marginLeft + N + T + k - w, (v > 0 || y(v) < E) && (a.left += N + T + k))
                }, top: function (a, h) {
                    var c, v, g = h.within, _ = g.offset.top + g.scrollTop, b = g.height,
                        w = g.isWindow ? g.scrollTop : g.offset.top, C = a.top - h.collisionPosition.marginTop,
                        D = C - w, E = C + h.collisionHeight - b - w, N = "top" === h.my[1],
                        T = N ? -h.elemHeight : "bottom" === h.my[1] ? h.elemHeight : 0,
                        k = "top" === h.at[1] ? h.targetHeight : "bottom" === h.at[1] ? -h.targetHeight : 0,
                        M = -2 * h.offset[1];
                    0 > D ? (v = a.top + T + k + M + h.collisionHeight - b - _, a.top + T + k + M > D && (0 > v || v < y(D)) && (a.top += T + k + M)) : E > 0 && (c = a.top - h.collisionPosition.marginTop + T + k + M - w, a.top + T + k + M > E && (c > 0 || y(c) < E) && (a.top += T + k + M))
                }
            }, flipfit: {
                left: function () {
                    a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, function () {
            var h, c, v, g, i, _ = document.getElementsByTagName("body")[0], b = document.createElement("div");
            h = document.createElement(_ ? "div" : "body"), v = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, _ && a.extend(v, {position: "absolute", left: "-1000px", top: "-1000px"});
            for (i in v) h.style[i] = v[i];
            h.appendChild(b), c = _ || document.documentElement, c.insertBefore(h, c.firstChild), b.style.cssText = "position: absolute; left: 10.7432222px;", g = a(b).offset().left, a.support.offsetFractions = g > 10 && 11 > g, h.innerHTML = "", c.removeChild(h)
        }()
    }(jQuery), function (a) {
        a.widget("ui.autocomplete", {
            version: "1.10.4",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {my: "left top", at: "left bottom", collision: "none"},
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function () {
                var h, c, v, g = this.element[0].nodeName.toLowerCase(), _ = "textarea" === g, b = "input" === g;
                this.isMultiLine = _ ? !0 : b ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[_ || b ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function (g) {
                        if (this.element.prop("readOnly")) return h = !0, v = !0, void(c = !0);
                        h = !1, v = !1, c = !1;
                        var _ = a.ui.keyCode;
                        switch (g.keyCode) {
                            case _.PAGE_UP:
                                h = !0, this._move("previousPage", g);
                                break;
                            case _.PAGE_DOWN:
                                h = !0, this._move("nextPage", g);
                                break;
                            case _.UP:
                                h = !0, this._keyEvent("previous", g);
                                break;
                            case _.DOWN:
                                h = !0, this._keyEvent("next", g);
                                break;
                            case _.ENTER:
                            case _.NUMPAD_ENTER:
                                this.menu.active && (h = !0, g.preventDefault(), this.menu.select(g));
                                break;
                            case _.TAB:
                                this.menu.active && this.menu.select(g);
                                break;
                            case _.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(g), g.preventDefault());
                                break;
                            default:
                                c = !0, this._searchTimeout(g)
                        }
                    }, keypress: function (v) {
                        if (h) return h = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && v.preventDefault());
                        if (!c) {
                            var g = a.ui.keyCode;
                            switch (v.keyCode) {
                                case g.PAGE_UP:
                                    this._move("previousPage", v);
                                    break;
                                case g.PAGE_DOWN:
                                    this._move("nextPage", v);
                                    break;
                                case g.UP:
                                    this._keyEvent("previous", v);
                                    break;
                                case g.DOWN:
                                    this._keyEvent("next", v)
                            }
                        }
                    }, input: function (a) {
                        return v ? (v = !1, void a.preventDefault()) : void this._searchTimeout(a)
                    }, focus: function () {
                        this.selectedItem = null, this.previous = this._value()
                    }, blur: function (a) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a))
                    }
                }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu"), this._on(this.menu.element, {
                    mousedown: function (h) {
                        h.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                            delete this.cancelBlur
                        });
                        var c = this.menu.element[0];
                        a(h.target).closest(".ui-menu-item").length || this._delay(function () {
                            var h = this;
                            this.document.one("mousedown", function (v) {
                                v.target === h.element[0] || v.target === c || a.contains(c, v.target) || h.close()
                            })
                        })
                    }, menufocus: function (h, ui) {
                        if (this.isNewMenu && (this.isNewMenu = !1, h.originalEvent && /^mouse/.test(h.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function () {
                            a(h.target).trigger(h.originalEvent)
                        });
                        var c = ui.item.data("ui-autocomplete-item");
                        !1 !== this._trigger("focus", h, {item: c}) ? h.originalEvent && /^key/.test(h.originalEvent.type) && this._value(c.value) : this.liveRegion.text(c.value)
                    }, menuselect: function (a, ui) {
                        var h = ui.item.data("ui-autocomplete-item"), c = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = c, this._delay(function () {
                            this.previous = c, this.selectedItem = h
                        })), !1 !== this._trigger("select", a, {item: h}) && this._value(h.value), this.term = this._value(), this.close(a), this.selectedItem = h
                    }
                }), this.liveRegion = a("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function () {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function (a, h) {
                this._super(a, h), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && h && this.xhr && this.xhr.abort()
            },
            _appendTo: function () {
                var h = this.options.appendTo;
                return h && (h = h.jquery || h.nodeType ? a(h) : this.document.find(h).eq(0)), h || (h = this.element.closest(".ui-front")), h.length || (h = this.document[0].body), h
            },
            _initSource: function () {
                var h, c, v = this;
                a.isArray(this.options.source) ? (h = this.options.source, this.source = function (c, v) {
                    v(a.ui.autocomplete.filter(h, c.term))
                }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function (h, g) {
                    v.xhr && v.xhr.abort(), v.xhr = a.ajax({
                        url: c, data: h, dataType: "json", success: function (a) {
                            g(a)
                        }, error: function () {
                            g([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function (a) {
                clearTimeout(this.searching), this.searching = this._delay(function () {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, a))
                }, this.options.delay)
            },
            search: function (a, h) {
                return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(h) : this._trigger("search", h) !== !1 ? this._search(a) : void 0
            },
            _search: function (a) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: a}, this._response())
            },
            _response: function () {
                var h = ++this.requestIndex;
                return a.proxy(function (a) {
                    h === this.requestIndex && this.__response(a), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function (a) {
                a && (a = this._normalize(a)), this._trigger("response", null, {content: a}), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
            },
            close: function (a) {
                this.cancelSearch = !0, this._close(a)
            },
            _close: function (a) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
            },
            _change: function (a) {
                this.previous !== this._value() && this._trigger("change", a, {item: this.selectedItem})
            },
            _normalize: function (h) {
                return h.length && h[0].label && h[0].value ? h : a.map(h, function (h) {
                    return "string" == typeof h ? {label: h, value: h} : a.extend({
                        label: h.label || h.value,
                        value: h.value || h.label
                    }, h)
                })
            },
            _suggest: function (h) {
                var ul = this.menu.element.empty();
                this._renderMenu(ul, h), this.isNewMenu = !0, this.menu.refresh(), ul.show(), this._resizeMenu(), ul.position(a.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function () {
                var ul = this.menu.element;
                ul.outerWidth(Math.max(ul.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function (ul, h) {
                var c = this;
                a.each(h, function (a, h) {
                    c._renderItemData(ul, h)
                })
            },
            _renderItemData: function (ul, a) {
                return this._renderItem(ul, a).data("ui-autocomplete-item", a)
            },
            _renderItem: function (ul, h) {
                return a("<li>").append(a("<a>").text(h.label)).appendTo(ul)
            },
            _move: function (a, h) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this._value(this.term), void this.menu.blur()) : void this.menu[a](h) : void this.search(null, h)
            },
            widget: function () {
                return this.menu.element
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function (a, h) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, h), h.preventDefault())
            }
        }), a.extend(a.ui.autocomplete, {
            escapeRegex: function (a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }, filter: function (h, c) {
                var v = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                return a.grep(h, function (a) {
                    return v.test(a.label || a.value || a)
                })
            }
        }), a.widget("ui.autocomplete", a.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function (a) {
                        return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            }, __response: function (a) {
                var h;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (h = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.text(h))
            }
        })
    }(jQuery), function (a) {
        a.widget("ui.menu", {
            version: "1.10.4",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {submenu: "ui-icon-carat-1-e"},
                menus: "ul",
                position: {my: "left top", at: "right top"},
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, a.proxy(function (a) {
                    this.options.disabled && a.preventDefault()
                }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item > a": function (a) {
                        a.preventDefault()
                    }, "click .ui-state-disabled > a": function (a) {
                        a.preventDefault()
                    }, "click .ui-menu-item:has(a)": function (h) {
                        var c = a(h.target).closest(".ui-menu-item");
                        !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(h), h.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(h) : !this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    }, "mouseenter .ui-menu-item": function (h) {
                        var c = a(h.currentTarget);
                        c.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(h, c)
                    }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (a, h) {
                        var c = this.active || this.element.children(".ui-menu-item").eq(0);
                        h || this.focus(a, c)
                    }, blur: function (h) {
                        this._delay(function () {
                            a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(h)
                        })
                    }, keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function (h) {
                        a(h.target).closest(".ui-menu").length || this.collapseAll(h), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function () {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                    var h = a(this);
                    h.data("ui-menu-submenu-carat") && h.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function (h) {
                function c(a) {
                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }

                var v, g, _, b, y, w = !0;
                switch (h.keyCode) {
                    case a.ui.keyCode.PAGE_UP:
                        this.previousPage(h);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        this.nextPage(h);
                        break;
                    case a.ui.keyCode.HOME:
                        this._move("first", "first", h);
                        break;
                    case a.ui.keyCode.END:
                        this._move("last", "last", h);
                        break;
                    case a.ui.keyCode.UP:
                        this.previous(h);
                        break;
                    case a.ui.keyCode.DOWN:
                        this.next(h);
                        break;
                    case a.ui.keyCode.LEFT:
                        this.collapse(h);
                        break;
                    case a.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(h);
                        break;
                    case a.ui.keyCode.ENTER:
                    case a.ui.keyCode.SPACE:
                        this._activate(h);
                        break;
                    case a.ui.keyCode.ESCAPE:
                        this.collapse(h);
                        break;
                    default:
                        w = !1, g = this.previousFilter || "", _ = String.fromCharCode(h.keyCode), b = !1, clearTimeout(this.filterTimer), _ === g ? b = !0 : _ = g + _, y = new RegExp("^" + c(_), "i"), v = this.activeMenu.children(".ui-menu-item").filter(function () {
                            return y.test(a(this).children("a").text())
                        }), v = b && -1 !== v.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : v, v.length || (_ = String.fromCharCode(h.keyCode), y = new RegExp("^" + c(_), "i"), v = this.activeMenu.children(".ui-menu-item").filter(function () {
                            return y.test(a(this).children("a").text())
                        })), v.length ? (this.focus(h, v), v.length > 1 ? (this.previousFilter = _, this.filterTimer = this._delay(function () {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                w && h.preventDefault()
            },
            _activate: function (a) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
            },
            refresh: function () {
                var h, c = this.options.icons.submenu, v = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), v.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function () {
                    var h = a(this), v = h.prev("a"),
                        g = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
                    v.attr("aria-haspopup", "true").prepend(g), h.attr("aria-labelledby", v.attr("id"))
                }), h = v.add(this.element), h.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), h.children(":not(.ui-menu-item)").each(function () {
                    var h = a(this);
                    /[^\-\u2014\u2013\s]/.test(h.text()) || h.addClass("ui-widget-content ui-menu-divider")
                }), h.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {menu: "menuitem", listbox: "option"}[this.options.role]
            },
            _setOption: function (a, h) {
                "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(h.submenu), this._super(a, h)
            },
            focus: function (a, h) {
                var c, v;
                this.blur(a, a && "focus" === a.type), this._scrollIntoView(h), this.active = h.first(), v = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", v.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function () {
                    this._close()
                }, this.delay), c = h.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = h.parent(), this._trigger("focus", a, {item: h})
            },
            _scrollIntoView: function (h) {
                var c, v, g, _, b, y;
                this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, v = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, g = h.offset().top - this.activeMenu.offset().top - c - v, _ = this.activeMenu.scrollTop(), b = this.activeMenu.height(), y = h.height(), 0 > g ? this.activeMenu.scrollTop(_ + g) : g + y > b && this.activeMenu.scrollTop(_ + g - b + y))
            },
            blur: function (a, h) {
                h || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {item: this.active}))
            },
            _startOpening: function (a) {
                clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function () {
                    this._close(), this._open(a)
                }, this.delay))
            },
            _open: function (h) {
                var c = a.extend({of: this.active}, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(h.parents(".ui-menu")).hide().attr("aria-hidden", "true"), h.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
            },
            collapseAll: function (h, c) {
                clearTimeout(this.timer), this.timer = this._delay(function () {
                    var v = c ? this.element : a(h && h.target).closest(this.element.find(".ui-menu"));
                    v.length || (v = this.element), this._close(v), this.blur(h), this.activeMenu = v
                }, this.delay)
            },
            _close: function (a) {
                a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function (a) {
                var h = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                h && h.length && (this._close(), this.focus(a, h))
            },
            expand: function (a) {
                var h = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                h && h.length && (this._open(h.parent()), this._delay(function () {
                    this.focus(a, h)
                }))
            },
            next: function (a) {
                this._move("next", "first", a)
            },
            previous: function (a) {
                this._move("prev", "last", a)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (a, h, c) {
                var v;
                this.active && (v = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), v && v.length && this.active || (v = this.activeMenu.children(".ui-menu-item")[h]()), this.focus(c, v)
            },
            nextPage: function (h) {
                var c, v, g;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (v = this.active.offset().top, g = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                    return c = a(this), c.offset().top - v - g < 0
                }), this.focus(h, c)) : this.focus(h, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(h)
            },
            previousPage: function (h) {
                var c, v, g;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (v = this.active.offset().top, g = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                    return c = a(this), c.offset().top - v + g > 0
                }), this.focus(h, c)) : this.focus(h, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(h)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (h) {
                this.active = this.active || a(h.target).closest(".ui-menu-item");
                var ui = {item: this.active};
                this.active.has(".ui-menu").length || this.collapseAll(h, !0), this._trigger("select", h, ui)
            }
        })
    }(jQuery)
});
/*!dep/jquery-hoverdir/jquery.hoverdir.js*/
;!function (h) {
    "use strict";
    "function" == typeof define && define.amd ? define("dep/jquery-hoverdir/jquery.hoverdir", ["jquery"], h) : "undefined" != typeof exports ? module.exports = h(require("jquery")) : h(jQuery)
}(function (h) {
    "use strict";

    function a(a, c) {
        this.$el = h(a), this.options = h.extend(!0, {}, this.defaults, c), this.isVisible = !1, this.$hoverElem = this.$el.find(this.options.hoverElem), this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing, this.support = this._supportsTransitions(), this._loadEvents()
    }

    a.prototype = {
        defaults: {speed: 300, easing: "ease", hoverDelay: 0, inverse: !1, hoverElem: "div"},
        constructor: a,
        _supportsTransitions: function () {
            if ("undefined" != typeof Modernizr) return Modernizr.csstransitions;
            var h = document.body || document.documentElement, s = h.style, p = "transition";
            if ("string" == typeof s[p]) return !0;
            var a = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (var i = 0; i < a.length; i++) if ("string" == typeof s[a[i] + p]) return !0;
            return !1
        },
        _loadEvents: function () {
            this.$el.on("mouseenter.hoverdir mouseleave.hoverdir", h.proxy(function (h) {
                this.direction = this._getDir({
                    x: h.pageX,
                    y: h.pageY
                }), "mouseenter" === h.type ? this._showHover() : this._hideHover()
            }, this))
        },
        _showHover: function () {
            var a = this._getStyle(this.direction);
            this.support && this.$hoverElem.css("transition", ""), this.$hoverElem.hide().css(a.from), clearTimeout(this.tmhover), this.tmhover = setTimeout(h.proxy(function () {
                this.$hoverElem.show(0, h.proxy(function () {
                    this.support && this.$hoverElem.css("transition", this.transitionProp), this._applyAnimation(a.to)
                }, this))
            }, this), this.options.hoverDelay), this.isVisible = !0
        },
        _hideHover: function () {
            var h = this._getStyle(this.direction);
            this.support && this.$hoverElem.css("transition", this.transitionProp), clearTimeout(this.tmhover), this._applyAnimation(h.from), this.isVisible = !1
        },
        _getDir: function (h) {
            var a = this.$el.width(), c = this.$el.height(),
                x = (h.x - this.$el.offset().left - a / 2) * (a > c ? c / a : 1),
                v = (h.y - this.$el.offset().top - c / 2) * (c > a ? a / c : 1),
                y = Math.round((Math.atan2(v, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
            return y
        },
        _getStyle: function (h) {
            var a, c, v = {left: "0", top: "-100%"}, y = {left: "0", top: "100%"}, _ = {left: "-100%", top: "0"},
                b = {left: "100%", top: "0"}, $ = {top: "0"}, g = {left: "0"};
            switch (h) {
                case 0:
                case"top":
                    a = this.options.inverse ? y : v, c = $;
                    break;
                case 1:
                case"right":
                    a = this.options.inverse ? _ : b, c = g;
                    break;
                case 2:
                case"bottom":
                    a = this.options.inverse ? v : y, c = $;
                    break;
                case 3:
                case"left":
                    a = this.options.inverse ? b : _, c = g
            }
            return {from: a, to: c}
        },
        _applyAnimation: function (a) {
            h.fn.applyStyle = this.support ? h.fn.css : h.fn.animate, this.$hoverElem.stop().applyStyle(a, h.extend(!0, [], {duration: this.options.speed}))
        },
        show: function (h) {
            this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"), this.isVisible || (this.direction = h || "top", this._showHover())
        },
        hide: function (h) {
            this.rebuild(), this.isVisible && (this.direction = h || "bottom", this._hideHover())
        },
        setOptions: function (a) {
            this.options = h.extend(!0, {}, this.defaults, this.options, a)
        },
        destroy: function () {
            this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"), this.$el.data("hoverdir", null)
        },
        rebuild: function (h) {
            "object" == typeof h && this.setOptions(h), this._loadEvents()
        }
    }, h.fn.hoverdir = function (c, v) {
        return this.each(function () {
            var y = h(this).data("hoverdir"), _ = "object" == typeof c && c;
            y || (y = new a(this, _), h(this).data("hoverdir", y)), "string" == typeof c && (y[c](v), "destroy" === c && h(this).data("hoverdir", !1))
        })
    }, h.fn.hoverdir.Constructor = a
});
/*!index/modules/sub_site/main.js*/
;define("index/modules/sub_site/main", ["require", "exports", "module"], function () {
    function a(a, C) {
        for (var T = "", i = 0, j = C.length; j > i; i++) i % 4 == 3 ? (T += '<li class="last"><a class="tab" href="javascript:void(0);">' + C[i] + "站</a></li>", T += '<li style="display:block;width:auto;float:none;clear:both;"></li>') : T += '<li><a class="tab" href="javascript:void(0);">' + C[i] + "站</a></li>";
        $.colorbox({
            html: '<div id="changeCityBox" class="popup changeCityBox"><div class="changeCity_header"><strong>亲爱的用户您好：</strong><p class="tips">切换城市分站，让我们为您提供更准确的职位信息。</p></div><p class="checkTips">点击进入<a class="tab focus" href="javascript:void(0);">' + a + '站</a>or 切换到以下城市</p><ul class="clearfix">' + T + '</ul><p class="changeCity_footer">其他城市正在开通中，敬请期待～</p></div>',
            title: "切换城市",
            scrolling: !1,
            onClosed: function () {
                global.isLogin ? $.get(GLOBAL_DOMAIN.ctx + "/user/saveCity.json?t=" + Math.random(), {city: global.subSite}, function (a) {
                    "object" != typeof a && (a = JSON.parse(a)), 1 != a.state && alert(a.message)
                }) : $.cookie("index_location_city", global.subSite, {expires: 30, domain: "lagou.com", path: "/"})
            }
        })
    }

    var C = {
        "全国": {
            recommendPositionTjCode: "4m00",
            hotPositionTjCode: "rx00",
            newPositionTjCode: "4q00",
            recommendCompanyTjCode: "4n00",
            hotCompanyTjCode: "vz00",
            newCompanyTjCode: "4r00",
            recommendTabTjCode: "4W00",
            hotTabTjCode: "4X00",
            newTabTjCode: "gD00"
        },
        "北京": {
            recommendPositionTjCode: "rz00",
            hotPositionTjCode: "rG00",
            newPositionTjCode: "rN00",
            recommendCompanyTjCode: "w100",
            hotCompanyTjCode: "w700",
            newCompanyTjCode: "wd00",
            recommendTabTjCode: "wj00",
            hotTabTjCode: "wk00",
            newTabTjCode: "wl00"
        },
        "上海": {
            recommendPositionTjCode: "rA00",
            hotPositionTjCode: "rH00",
            newPositionTjCode: "rO00",
            recommendCompanyTjCode: "w200",
            hotCompanyTjCode: "w800",
            newCompanyTjCode: "we00",
            recommendTabTjCode: "wm00",
            hotTabTjCode: "wn00",
            newTabTjCode: "wo00"
        },
        "杭州": {
            recommendPositionTjCode: "rB00",
            hotPositionTjCode: "rI00",
            newPositionTjCode: "rP00",
            recommendCompanyTjCode: "w300",
            hotCompanyTjCode: "w900",
            newCompanyTjCode: "wf00",
            recommendTabTjCode: "wp00",
            hotTabTjCode: "wq00",
            newTabTjCode: "wr00"
        },
        "广州": {
            recommendPositionTjCode: "rC00",
            hotPositionTjCode: "rJ00",
            newPositionTjCode: "rQ00",
            recommendCompanyTjCode: "w400",
            hotCompanyTjCode: "wa00",
            newCompanyTjCode: "wg00",
            recommendTabTjCode: "ws00",
            hotTabTjCode: "wt00",
            newTabTjCode: "wu00"
        },
        "深圳": {
            recommendPositionTjCode: "rD00",
            hotPositionTjCode: "rK00",
            newPositionTjCode: "rR00",
            recommendCompanyTjCode: "w500",
            hotCompanyTjCode: "wb00",
            newCompanyTjCode: "wh00",
            recommendTabTjCode: "wv00",
            hotTabTjCode: "ww00",
            newTabTjCode: "wx00"
        },
        "成都": {
            recommendPositionTjCode: "rE00",
            hotPositionTjCode: "rL00",
            newPositionTjCode: "rS00",
            recommendCompanyTjCode: "w600",
            hotCompanyTjCode: "wc00",
            newCompanyTjCode: "wi00",
            recommendTabTjCode: "wy00",
            hotTabTjCode: "wz00",
            newTabTjCode: "wA00"
        },
        "武汉": {
            recommendPositionTjCode: "1bug",
            hotPositionTjCode: "1buh",
            newPositionTjCode: "1bui",
            recommendCompanyTjCode: "1buj",
            hotCompanyTjCode: "1buk",
            newCompanyTjCode: "1bum",
            recommendTabTjCode: "1bun",
            hotTabTjCode: "1bup",
            newTabTjCode: "1buq"
        }
    };
    global.subSite && "全国" != global.subSite && C[global.subSite] && ($("#jobTab .recommendTab").attr("data-lg-tj-id", C[global.subSite].recommendTabTjCode), $("#jobTab .hotTab").attr("data-lg-tj-id", C[global.subSite].hotTabTjCode), $("#jobTab .newTab").attr("data-lg-tj-id", C[global.subSite].newTabTjCode), $("#jobList .rec_posHotPosition .position_name a").attr("data-lg-tj-id", C[global.subSite].recommendPositionTjCode), $("#jobList .hot_posHotPosition .position_name a").attr("data-lg-tj-id", C[global.subSite].hotPositionTjCode), $("#jobList .new_posHotPosition .position_name a").attr("data-lg-tj-id", C[global.subSite].newPositionTjCode), $("#jobList .rec_posHotPosition .company_name a").attr("data-lg-tj-id", C[global.subSite].recommendCompanyTjCode), $("#jobList .hot_posHotPosition .company_name a").attr("data-lg-tj-id", C[global.subSite].hotCompanyTjCode), $("#jobList .new_posHotPosition .company_name a").attr("data-lg-tj-id", C[global.subSite].newCompanyTjCode)), global.isFirst && a(global.subSite, global.subSites), $("#changeCity_btn").click(function () {
        a(global.subSite, global.subSites)
    }), global.isLogin ? $(document).on("click", "#changeCityBox a.tab", function () {
        var a = $(this).html().replace("站", "");
        $.cookie("index_location_city", a, {
            expires: 30,
            domain: "lagou.com",
            path: "/"
        }), $.get(GLOBAL_DOMAIN.ctx + "/user/saveCity.json?t=" + Math.random(), {city: a}, function (a) {
            "object" != typeof a && (a = JSON.parse(a)), 1 == a.state ? window.location.reload() : alert(a.message)
        })
    }) : $(document).on("click", "#changeCityBox a.tab", function () {
        var a = $(this).html().replace("站", "");
        $.cookie("index_location_city", a, {
            expires: 30,
            domain: "lagou.com",
            path: "/"
        }), window.location.href = GLOBAL_DOMAIN.ctx
    })
});
/*!index/modules/sidebar/main.js*/
;define("index/modules/sidebar/main", ["require", "exports", "module"], function () {
    !function (a) {
        a.fn.hoverDelay = function (c) {
            var h, v, D = {
                hoverDuring: 200, outDuring: 200, hoverEvent: function () {
                    a.noop()
                }, outEvent: function () {
                    a.noop()
                }
            }, b = a.extend(D, c || {}), E = this;
            return a(this).each(function () {
                a(this).hover(function () {
                    clearTimeout(v), h = setTimeout(function () {
                        b.hoverEvent.apply(E)
                    }, b.hoverDuring)
                }, function () {
                    clearTimeout(h), v = setTimeout(function () {
                        b.outEvent.apply(E)
                    }, b.outDuring)
                })
            })
        }
    }(jQuery), $("#sidebar .menu_box").each(function () {
        $(this).hoverDelay({
            hoverDuring: 200, hoverEvent: function () {
                $(this).addClass("current").children(".menu_sub").css({top: 0}).removeClass("dn")
            }, outEvent: function () {
                $(this).removeClass("current").children(".menu_sub").addClass("dn")
            }
        })
    }), $(".mainNavs a").click(function (e) {
        e.preventDefault();
        var a = $(this), c = a.attr("href");
        window.location.href = c + "?labelWords=label"
    })
});
/*!index/modules/sub_remind/main.js*/
;define("index/modules/sub_remind/main", ["require", "exports", "module"], function () {
    var c = $(".mr_remind");
    $(".mr_del").on("click", function () {
        c.remove(), $.ajax({
            type: "POST",
            data: {},
            url: GLOBAL_DOMAIN.ctx + "/resume/clearShowNoticeInSeesion.json"
        }).done(function () {
        })
    })
});
/*!index/modules/search/main.js*/
;define("index/modules/search/main", ["require", "exports", "module"], function () {
    var a = {};
    $.getJSON(window.location.protocol + "//service.lagou.com/hotword?callback=?", function (c) {
        a = c;
        var h = $("#search_input"), g = h.val(), v = $("#isIndex").val();
        if (g == h.attr("placeholder") && (g = ""), "" != c.hotwords) {
            for (var w, _ = "<dt>热门搜索：</dt>", i = 0; i < c.hotwords.length; i++) w = parseInt(i + 1) < 10 ? "000" + (parseInt(i, 10) + 1) : "00" + parseInt(i + 1), _ += '<dd data-lg-tj-id="27u0" data-lg-tj-no="' + w + '" data-lg-tj-cid="null"><a href="' + c.hotwords[i].url + '"', c.hotwords[i].isHighLight && (_ += ' class="highlight"'), c.hotwords[i].linkTarget && (_ += ' target="' + c.hotwords[i].linkTarget + '"'), _ += ">" + c.hotwords[i].text + "</a></dd>";
            $(".hotSearch").html(_), $(".hotSearch a").click(function () {
                var a = $(this), c = a.attr("href");
                a.attr("href", c + "?labelWords=hot")
            })
        }
        c.recommendSearchWord && "" == g && "true" == v && h.css("color", "#999").val(c.recommendSearchWord.text).focus().blur(), "" != $("#userid").val() && $.ajax({
            url: GLOBAL_DOMAIN.sctx + "/queryrec?userid=" + $("#userid").val(),
            dataType: "jsonp",
            jsonp: "suggestback",
            success: function (a) {
                var c = "";
                if (a.querys.length > 0) {
                    for (var i = 0; i < a.querys.length; i++) c += "<li>" + a.querys[i] + "</li>";
                    $(".guess_wrapper ul").append(c), $(".guess_wrapper ul").on("mousedown", "li", function () {
                        window.location.href = GLOBAL_DOMAIN.ctx + "/jobs/list_" + $(this).text() + "?labelWords=&fromSearch=true&suginput="
                    })
                } else $(".guess_wrapper").hide()
            }
        }), h.on("focus", function () {
            "" === this.value ? "" != $("#userid").val() && $(".guess_wrapper").show() : c.recommendSearchWord && this.value == c.recommendSearchWord.text && (this.value = "", this.style.color = "#333", "" != $("#userid").val() && $(".guess_wrapper").show())
        }).on("blur", function () {
            "" === this.value && (c.recommendSearchWord ? (this.value = c.recommendSearchWord.text, this.style.color = "#999", "" != $("#userid").val() && $(".guess_wrapper").hide()) : "" != $("#userid").val() && $(".guess_wrapper").hide())
        })
    }), $(".ui-autocomplete").css("height", "200px"), $.widget("custom.catcomplete", $.ui.autocomplete, {
        _renderItem: function (ul, a) {
            var c = a.hotness >= 450 ? "大于" : "共";
            return $("<li></li>").data("item.autocomplete", a).append("<a><span class='fl'>" + a.cont + "</span><span class='fr'>" + c + "<i>" + (a.hotness >= 450 ? 450 : a.hotness) + "个</i>职位</span></a>").appendTo(ul)
        }, _renderMenu: function (ul, a) {
            function c(a, c) {
                ul.append("<li class='ui-autocomplete-category'>" + a + "</li>");
                for (var i = 0, l = c.length; l > i; i++) h._renderItemData(ul, c[i])
            }

            var h = this;
            a = a[0], a.POSITION && a.POSITION.length && c("职位", a.POSITION), a.COMPANY && a.COMPANY.length && c("公司", a.COMPANY), ul.find(".ui-autocomplete-category:not(:first-child)").next().css("borderTop", "1px dashed #e5e5e5"), ul.find(".ui-autocomplete-category").first().css("borderTop", "none")
        }
    });
    $("#search_input").catcomplete({
        appendTo: "#search_box", minLength: 0, source: function (a, c) {
            "" != $.trim(a.term) ? $.ajax({
                url: GLOBAL_DOMAIN.sctx + "/suggestion/mix",
                dataType: "jsonp",
                jsonp: "suggestback",
                data: {input: a.term, type: 1, num: 10},
                success: function (a) {
                    if (a) if (a.POSITION && a.POSITION.length || a.COMPANY && a.COMPANY.length) {
                        var h = [];
                        h.push(a), c(h)
                    } else c(""); else c("")
                }
            }) : c("")
        }, focus: function () {
            return !1
        }, select: function (a, ui) {
            return $("#suginput").val($("#search_input").val()), $("#search_input").val(ui.item.cont), $("#labelWords").val("sug"), $("#searchForm").trigger("submit"), !1
        }
    }), $("#searchForm").on("submit", function () {
        var c = $("#isIndex").val(), h = $("#search_input").val(), g = /[\\\/]/g;
        return h = h.replace(g, " "), !a.recommendSearchWord || "" != h && a.recommendSearchWord.text != h || "true" != c ? (h = h.replace(/.html$/, " html").replace(/.jsp$/, " jsp"), h = encodeURIComponent(h), $(this).attr("action", GLOBAL_DOMAIN.ctx + "/jobs/list_" + h), !0) : (window.location.href = a.recommendSearchWord.url, !1)
    }), $("#search_input").on("keyup", function () {
        this.value.length > 64 && (this.value = this.value.substring(0, 64)), "" == this.value && "" != $("#userid").val() ? $(".guess_wrapper").show() : $(".guess_wrapper").hide()
    })
});
/*!index/modules/banner/main.js*/
;define("index/modules/banner/main", ["require", "exports", "module"], function () {
    function c() {
        for (var c = $("#home_banner .banner_bg li a"), i = 0; i < c.length; i++) {
            var a = $(c[i]).attr("href");
            a.search(/^https?\:\/\//) < 0 && $(c[i]).attr("href", $('<a href="' + a + '">').prop("href"))
        }
    }

    function a(c, a) {
        _.stop(!0, !0), _.animate({left: -c * g.LiItemWidth + "px"}, g.duration, function () {
            0 >= c ? (g.currentIndex = g.liLength - 2, _.css("left", -g.LiItemWidth * g.currentIndex)) : c >= g.liLength - 1 ? (g.currentIndex = 1, _.css("left", -g.LiItemWidth * g.currentIndex)) : g.currentIndex = c, $(".banner_control .thumbs li").removeClass("current");
            var h = $(".banner_control .thumbs li").eq(g.currentIndex - 1);
            h.length > 0 && h.addClass("current"), "function" == typeof a && a()
        })
    }

    function h() {
        clearTimeout(g.sliderTimer), a(g.currentIndex + 1, b)
    }

    function b() {
        g.sliderTimer = setTimeout(h, g.timerPeriod || 5e3)
    }

    c();
    var I = $("#home_banner"), _ = $(".banner_bg"), g = {
        liLength: _.find("li").length,
        LiItemWidth: _.find("li").width(),
        currentIndex: 0,
        duration: 300,
        timerPeriod: 5e3,
        sliderTimer: 0
    };
    g.liLength >= 2 && (!function () {
        _.find("li").each(function (i) {
            var c;
            0 === i && (c = $(this).clone(), c.find("a.tj_exposure").removeClass("tj_exposure"), _.append(c), _.css("left", -g.LiItemWidth), g.currentIndex = i + 1), i === g.liLength - 1 && (c = $(this).clone(), c.find("a.tj_exposure").removeClass("tj_exposure"), _.prepend(c))
        }), g.liLength = _.find("li").length, _.css("width", g.LiItemWidth * g.liLength)
    }(), I.hover(function () {
        $(".banner_control .control").removeClass("dn")
    }, function () {
        $(".banner_control .control").addClass("dn")
    }), $(".banner_control").on("click", ".thumbs li", function () {
        var c = ($(this), $(".banner_control .thumbs li").index(this) + 1);
        clearTimeout(g.sliderTimer), a(c, b)
    }), I.on("click", ".banner_control .control", function () {
        var c = $(this), h = c.hasClass("control-right") ? !0 : !1;
        clearTimeout(g.sliderTimer);
        var I = g.currentIndex + (h ? 1 : -1);
        a(I, b)
    }), I.find(".banner_bg li").hover(function () {
        clearTimeout(g.sliderTimer)
    }, function () {
        clearTimeout(g.sliderTimer), b()
    }), b())
});
/*!index/modules/job_list/js/history.js*/
;define("index/modules/job_list/js/history", ["require", "exports", "module"], function () {
    function a(a, c, g, S) {
        var I = !1, O = [], _ = 5, h = a + "," + c + "," + g + "," + S, w = "|", v = h + w,
            T = window.localStorage && localStorage.HISTORY_POSITION || "";
        if (T) {
            O = T.split("|");
            for (var b = "", i = 0, k = O.length; k > i; i++) {
                var y = O[i].split(",")[0];
                if (y == a) {
                    I = !0, b = y;
                    break
                }
            }
            if (I) {
                var R = new RegExp(b + ",.*?\\|"), $ = R.exec(T);
                v = T.replace($, ""), v = $ + v
            } else {
                if (O.length >= _ + 1) {
                    var C = T.lastIndexOf("|", T.length - 2);
                    T = T.substring(0, C + 1)
                }
                v += T
            }
            window.localStorage && (localStorage.HISTORY_POSITION = v)
        } else window.localStorage && (localStorage.HISTORY_POSITION = v)
    }

    $("body").on("click", ".position_list .position_list_item", function (e) {
        var c = e.target ? e.target : e.srcElement, g = $(this), S = g.attr("data-positionid"),
            I = g.attr("data-salary"), O = g.attr("data-company"), _ = g.attr("data-positionname");
        ($(c).hasClass("position_link") || $(c).parents(".position_link").hasClass("position_link")) && (global.userCtx || a(S, I, O, _))
    })
});
/*!index/modules/job_list/main.js*/
;define("index/modules/job_list/main", ["require", "exports", "module", "common/widgets/plat/exposure", "dep/artTemplate/dist/template", "index/modules/job_list/js/history"], function (require) {
    function a(a) {
        var c = [], h = [], j = [], v = $(".position_list").eq(a).find(".position_list_item a.position_link");
        v.each(function (a, _) {
            if ($(_).attr("data-lg-tj-id")) {
                var v = $(_).attr("data-lg-tj-id") || "idnull", g = $(_).attr("data-lg-tj-no") || "idnull",
                    b = $(_).attr("data-lg-tj-cid") || "idnull", w = $(_).attr("data-lg-tj-abt") || "";
                w && "|" != w ? (h.push([v, g, b]), j.push(w)) : c.push([v, g, b])
            }
        }), h.length > 0 && j.length > 0 && _(h, "p", j), c.length > 0 && _(c, "p")
    }

    function c(t, a) {
        var c = encodeURIComponent(document.URL), h = $(".position_list").eq(a).find(".position_list_item"), _ = [];
        h.each(function () {
            var a = $(this).attr("data-jobid");
            _.push(a)
        }), "最新职位" == t ? t = "new" : "热门职位" == t ? t = "hot" : "推荐职位" == t && (t = "recommend");
        {
            var v, g = _.join(",");
            Math.random()
        }
        v = g;
        var b = {t: t, dl: c, jids: v};
        j(b)
    }

    function h(t, a, c) {
        var h = encodeURIComponent(document.URL), _ = Math.random(), v = a.find(".position_list_item"),
            g = a.children("dl"), b = [], w = [];
        if (v.length && !(v.length < 1)) {
            if (v.each(function () {
                var a = $(this).attr(c);
                void 0 != a && b.push(a)
            }), g.each(function () {
                var a = $(this).attr(c);
                w.push(a)
            }), "" == b) var k = w.join(","); else var k = b.join(",");
            var C = k, L = {t: t, dl: h, jids: C, z: _};
            j(L)
        }
    }

    {
        var _ = require("common/widgets/plat/exposure").exposure, j = require("common/widgets/plat/exposure").postoA;
        require("dep/artTemplate/dist/template")
    }
    !function () {
        var a = [], c = [], h = [], j = $(".init_joblist .position_list_item a.position_link");
        j.each(function (_, j) {
            if ($(j).attr("data-lg-tj-id")) {
                var v = $(j).attr("data-lg-tj-id") || "idnull", g = $(j).attr("data-lg-tj-no") || "idnull",
                    b = $(j).attr("data-lg-tj-cid") || "idnull", w = $(j).attr("data-lg-tj-abt") || "";
                w && "|" != w ? (c.push([v, g, b]), h.push(w)) : a.push([v, g, b])
            }
        }), c.length > 0 && h.length > 0 && _(c, "p", h), a.length > 0 && _(a, "p")
    }(), function () {
        var a = $(".init_joblist"), c = "data-jobid", t = $.trim($("#jobTab").children("li:first").text());
        "热门职位" == t ? t = "hot" : "推荐职位" == t && (t = "recommend"), h(t, a, c)
    }();
    var v = $(".recommend_tips"), g = v.find(".re_tips_iknow");
    $.cookie("RECOMMEND_TIP") ? v.addClass("dn") : (v.removeClass("dn"), g.click(function () {
        v.addClass("dn"), $.cookie("RECOMMEND_TIP", !0, {expires: 365})
    })), $("#jobTab li").bind("click", function () {
        $(this).addClass("current").siblings().removeClass("current");
        var h = $(this).index();
        $("#jobList .position_list").each(function () {
            $(this).fadeOut(200)
        }), $("#jobList .position_list").eq(h).fadeIn(200);
        var t = $.trim($(this).text());
        a(h), c(t, h)
    }), $("#jobList").on("click", ".rec_posHotPosition h2 a", function (e) {
        e.preventDefault();
        var a = $(this), c = a.attr("href"), h = a.attr("data-index");
        window.open(c + "?source=home_rec&i=home_rec-" + h)
    }), $("#jobList").on("click", ".hot_posHotPosition h2 a", function (e) {
        e.preventDefault();
        var a = $(this), c = a.attr("href"), h = a.attr("data-index");
        window.open(c + "?source=home_hot&i=home_hot-" + h)
    }), $("#jobList").on("click", ".new_posHotPosition h2 a", function (e) {
        e.preventDefault();
        var a = $(this), c = a.attr("href"), h = a.attr("data-index");
        window.open(c + "?source=home_latest&i=home_latest-" + h)
    }), require("index/modules/job_list/js/history")
});
/*!index/modules/event/promotion180305/slide_banner/main.js*/
;define("index/modules/event/promotion180305/slide_banner/main", ["require", "exports", "module"], function (require) {
    require(["dep/jquery.cookie/jquery.cookie"]);
    var a = $("#serverTime").val();
    if (a) {
        var c = new Date("2018/03/05 00:00:00"), g = new Date("2018/03/21 23:59:59"), h = new Date(parseInt(a)), w = "",
            v = "";
        if (h >= c && g >= h) {
            var k = [{
                linkURL: "https://activity.lagou.com/activi/promotion2018/pages/pc/index.html",
                imgURL: "//www.lgstatic.com/www/static/index/modules/event/promotion180305/img/slider-banner-1_c503e37.png"
            }, {
                linkURL: "https://activity.lagou.com/activi/promotion2018/pages/pc/index.html",
                imgURL: "//www.lgstatic.com/www/static/index/modules/event/promotion180305/img/slider-banner-2_c58fb33.png"
            }, {
                linkURL: "https://activity.lagou.com/activi/promotion2018/pages/pc/index.html",
                imgURL: "//www.lgstatic.com/www/static/index/modules/event/promotion180305/img/slider-banner-3_c66b1d5.png"
            }], b = Math.floor(Math.random() * k.length), w = "hideSliderBanner20180305";
            v = ['<div class="slide_banner" style="background: #2d03e9 url(' + k[b].imgURL + ') center top no-repeat;">', '   <a class="activity_link" href="' + (k[b].linkURL || $("#top_bannerC a").prop("href")) + '" target="_blank" data-lg-tj-id="28M0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">', '       <div class="slide_content">', "           <h3>2018 全民升职季 拉勾·百万OFFER</h3>", '           <span class="close"></span>', "       </div>", "   </a>", "</div>"].join("")
        }
        if (v) {
            var _ = $("#top_bannerC"), D = $(v);
            _.size() > 0 ? function () {
                var a, c;
                _.find("a").addClass("topBanner_link"), _.append(D);
                var g = $("#top_bannerC").height(), h = D.height();
                if (a = function () {
                    _.animate({height: g}, 600, function () {
                        D.fadeOut(300)
                    })
                }, c = function () {
                    D.fadeIn(300, function () {
                        _.animate({height: h}, 600)
                    })
                }, _.on("click", "a.topBanner_link", function (a) {
                    c(), a.preventDefault()
                }), D.on("click", ".close", function (c) {
                    a(), c.preventDefault()
                }), w += "WithTopBannerC", 1 == $.cookie(w) || global.isFirst) D.hide(); else {
                    D.show(), _.size() > 0 && _.height(h);
                    var v = new Date, k = new Date(v.getFullYear(), v.getMonth(), v.getDate() + 1);
                    $.cookie(w, 1, {expires: k, path: "/"}), window.setTimeout(a, 3e3)
                }
            }() : function () {
                var a, c;
                $("#lg_header").append(D);
                var g = D.height();
                if (a = function () {
                    D.animate({height: 0}, 500, function () {
                        D.fadeOut(0)
                    })
                }, c = function () {
                    D.fadeIn(0, function () {
                        D.animate({height: g}, 500)
                    })
                }, w += "Normal", D.on("click", ".close", function (c) {
                    a(), c.preventDefault()
                }), 1 == $.cookie(w) || global.isFirst) D.hide(); else {
                    D.show();
                    var h = new Date, v = new Date(h.getFullYear(), h.getMonth(), h.getDate() + 1);
                    $.cookie(w, 1, {expires: v, path: "/"}), window.setTimeout(a, 5e3)
                }
            }()
        }
    }
});
/*!index/modules/friendlink/main.js*/
;define("index/modules/friendlink/main", ["require", "exports", "module"], function () {
    function a(a, h) {
        h.on("click", function () {
            var k = $(this);
            a.hasClass("show-linkbox") ? (a.removeClass("show-linkbox"), h.html("收起<i></i>"), k.find("i").addClass("i-up")) : (a.addClass("show-linkbox"), h.html("展开<i></i>"), k.find("i").removeClass("i-up"))
        })
    }

    a($("#linkbox"), $("#linkbox .expansion"))
});
/*!dep/jquery-qrcode/jquery.qrcode.min.js*/
;define("dep/jquery-qrcode/jquery.qrcode.min", ["require", "exports", "module"], function () {
    !function (r) {
        r.fn.qrcode = function (a) {
            function u(a) {
                this.mode = s, this.data = a
            }

            function o(a, h) {
                this.typeNumber = a, this.errorCorrectLevel = h, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }

            function q(a, h) {
                if (void 0 == a.length) throw Error(a.length + "/" + h);
                for (var d = 0; d < a.length && 0 == a[d];) d++;
                this.num = Array(a.length - d + h);
                for (var g = 0; g < a.length - d; g++) this.num[g] = a[g + d]
            }

            function p(a, h) {
                this.totalCount = a, this.dataCount = h
            }

            function t() {
                this.buffer = [], this.length = 0
            }

            var s;
            u.prototype = {
                getLength: function () {
                    return this.data.length
                }, write: function (a) {
                    for (var h = 0; h < this.data.length; h++) a.put(this.data.charCodeAt(h), 8)
                }
            }, o.prototype = {
                addData: function (a) {
                    this.dataList.push(new u(a)), this.dataCache = null
                }, isDark: function (a, h) {
                    if (0 > a || this.moduleCount <= a || 0 > h || this.moduleCount <= h) throw Error(a + "," + h);
                    return this.modules[a][h]
                }, getModuleCount: function () {
                    return this.moduleCount
                }, make: function () {
                    if (1 > this.typeNumber) {
                        for (var a = 1, a = 1; 40 > a; a++) {
                            for (var g = p.getRSBlocks(a, this.errorCorrectLevel), d = new t, c = 0, e = 0; e < g.length; e++) c += g[e].dataCount;
                            for (e = 0; e < this.dataList.length; e++) g = this.dataList[e], d.put(g.mode, 4), d.put(g.getLength(), h.getLengthInBits(g.mode, a)), g.write(d);
                            if (d.getLengthInBits() <= 8 * c) break
                        }
                        this.typeNumber = a
                    }
                    this.makeImpl(!1, this.getBestMaskPattern())
                }, makeImpl: function (a, h) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
                    for (var d = 0; d < this.moduleCount; d++) {
                        this.modules[d] = Array(this.moduleCount);
                        for (var g = 0; g < this.moduleCount; g++) this.modules[d][g] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, h), 7 <= this.typeNumber && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, h)
                }, setupPositionProbePattern: function (a, h) {
                    for (var d = -1; 7 >= d; d++) if (!(-1 >= a + d || this.moduleCount <= a + d)) for (var g = -1; 7 >= g; g++) -1 >= h + g || this.moduleCount <= h + g || (this.modules[a + d][h + g] = d >= 0 && 6 >= d && (0 == g || 6 == g) || g >= 0 && 6 >= g && (0 == d || 6 == d) || d >= 2 && 4 >= d && g >= 2 && 4 >= g ? !0 : !1)
                }, getBestMaskPattern: function () {
                    for (var a = 0, g = 0, d = 0; 8 > d; d++) {
                        this.makeImpl(!0, d);
                        var c = h.getLostPoint(this);
                        (0 == d || a > c) && (a = c, g = d)
                    }
                    return g
                }, createMovieClip: function (a, h, d) {
                    for (a = a.createEmptyMovieClip(h, d), this.make(), h = 0; h < this.modules.length; h++) for (var d = 1 * h, g = 0; g < this.modules[h].length; g++) {
                        var e = 1 * g;
                        this.modules[h][g] && (a.beginFill(0, 100), a.moveTo(e, d), a.lineTo(e + 1, d), a.lineTo(e + 1, d + 1), a.lineTo(e, d + 1), a.endFill())
                    }
                    return a
                }, setupTimingPattern: function () {
                    for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
                    for (a = 8; a < this.moduleCount - 8; a++) null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
                }, setupPositionAdjustPattern: function () {
                    for (var a = h.getPatternPosition(this.typeNumber), g = 0; g < a.length; g++) for (var d = 0; d < a.length; d++) {
                        var c = a[g], e = a[d];
                        if (null == this.modules[c][e]) for (var f = -2; 2 >= f; f++) for (var i = -2; 2 >= i; i++) this.modules[c + f][e + i] = -2 == f || 2 == f || -2 == i || 2 == i || 0 == f && 0 == i ? !0 : !1
                    }
                }, setupTypeNumber: function (a) {
                    for (var g = h.getBCHTypeNumber(this.typeNumber), d = 0; 18 > d; d++) {
                        var c = !a && 1 == (g >> d & 1);
                        this.modules[Math.floor(d / 3)][d % 3 + this.moduleCount - 8 - 3] = c
                    }
                    for (d = 0; 18 > d; d++) c = !a && 1 == (g >> d & 1), this.modules[d % 3 + this.moduleCount - 8 - 3][Math.floor(d / 3)] = c
                }, setupTypeInfo: function (a, g) {
                    for (var d = h.getBCHTypeInfo(this.errorCorrectLevel << 3 | g), c = 0; 15 > c; c++) {
                        var e = !a && 1 == (d >> c & 1);
                        6 > c ? this.modules[c][8] = e : 8 > c ? this.modules[c + 1][8] = e : this.modules[this.moduleCount - 15 + c][8] = e
                    }
                    for (c = 0; 15 > c; c++) e = !a && 1 == (d >> c & 1), 8 > c ? this.modules[8][this.moduleCount - c - 1] = e : 9 > c ? this.modules[8][15 - c - 1 + 1] = e : this.modules[8][15 - c - 1] = e;
                    this.modules[this.moduleCount - 8][8] = !a
                }, mapData: function (a, g) {
                    for (var d = -1, c = this.moduleCount - 1, e = 7, f = 0, i = this.moduleCount - 1; i > 0; i -= 2) for (6 == i && i--; ;) {
                        for (var C = 0; 2 > C; C++) if (null == this.modules[c][i - C]) {
                            var n = !1;
                            f < a.length && (n = 1 == (a[f] >>> e & 1)), h.getMask(g, c, i - C) && (n = !n), this.modules[c][i - C] = n, e--, -1 == e && (f++, e = 7)
                        }
                        if (c += d, 0 > c || this.moduleCount <= c) {
                            c -= d, d = -d;
                            break
                        }
                    }
                }
            }, o.PAD0 = 236, o.PAD1 = 17, o.createData = function (a, g, d) {
                for (var g = p.getRSBlocks(a, g), c = new t, e = 0; e < d.length; e++) {
                    var f = d[e];
                    c.put(f.mode, 4), c.put(f.getLength(), h.getLengthInBits(f.mode, a)), f.write(c)
                }
                for (e = a = 0; e < g.length; e++) a += g[e].dataCount;
                if (c.getLengthInBits() > 8 * a) throw Error("code length overflow. (" + c.getLengthInBits() + ">" + 8 * a + ")");
                for (c.getLengthInBits() + 4 <= 8 * a && c.put(0, 4); 0 != c.getLengthInBits() % 8;) c.putBit(!1);
                for (; !(c.getLengthInBits() >= 8 * a) && (c.put(o.PAD0, 8), !(c.getLengthInBits() >= 8 * a));) c.put(o.PAD1, 8);
                return o.createBytes(c, g)
            }, o.createBytes = function (a, g) {
                for (var d = 0, c = 0, e = 0, f = Array(g.length), i = Array(g.length), C = 0; C < g.length; C++) {
                    var n = g[C].dataCount, v = g[C].totalCount - n, c = Math.max(c, n), e = Math.max(e, v);
                    f[C] = Array(n);
                    for (var L = 0; L < f[C].length; L++) f[C][L] = 255 & a.buffer[L + d];
                    for (d += n, L = h.getErrorCorrectPolynomial(v), n = new q(f[C], L.getLength() - 1).mod(L), i[C] = Array(L.getLength() - 1), L = 0; L < i[C].length; L++) v = L + n.getLength() - i[C].length, i[C][L] = v >= 0 ? n.get(v) : 0
                }
                for (L = C = 0; L < g.length; L++) C += g[L].totalCount;
                for (d = Array(C), L = n = 0; c > L; L++) for (C = 0; C < g.length; C++) L < f[C].length && (d[n++] = f[C][L]);
                for (L = 0; e > L; L++) for (C = 0; C < g.length; C++) L < i[C].length && (d[n++] = i[C][L]);
                return d
            }, s = 4;
            for (var h = {
                PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function (a) {
                    for (var g = a << 10; 0 <= h.getBCHDigit(g) - h.getBCHDigit(h.G15);) g ^= h.G15 << h.getBCHDigit(g) - h.getBCHDigit(h.G15);
                    return (a << 10 | g) ^ h.G15_MASK
                },
                getBCHTypeNumber: function (a) {
                    for (var g = a << 12; 0 <= h.getBCHDigit(g) - h.getBCHDigit(h.G18);) g ^= h.G18 << h.getBCHDigit(g) - h.getBCHDigit(h.G18);
                    return a << 12 | g
                },
                getBCHDigit: function (a) {
                    for (var h = 0; 0 != a;) h++, a >>>= 1;
                    return h
                },
                getPatternPosition: function (a) {
                    return h.PATTERN_POSITION_TABLE[a - 1]
                },
                getMask: function (a, h, d) {
                    switch (a) {
                        case 0:
                            return 0 == (h + d) % 2;
                        case 1:
                            return 0 == h % 2;
                        case 2:
                            return 0 == d % 3;
                        case 3:
                            return 0 == (h + d) % 3;
                        case 4:
                            return 0 == (Math.floor(h / 2) + Math.floor(d / 3)) % 2;
                        case 5:
                            return 0 == h * d % 2 + h * d % 3;
                        case 6:
                            return 0 == (h * d % 2 + h * d % 3) % 2;
                        case 7:
                            return 0 == (h * d % 3 + (h + d) % 2) % 2;
                        default:
                            throw Error("bad maskPattern:" + a)
                    }
                },
                getErrorCorrectPolynomial: function (a) {
                    for (var h = new q([1], 0), d = 0; a > d; d++) h = h.multiply(new q([1, l.gexp(d)], 0));
                    return h
                },
                getLengthInBits: function (a, h) {
                    if (h >= 1 && 10 > h) switch (a) {
                        case 1:
                            return 10;
                        case 2:
                            return 9;
                        case s:
                            return 8;
                        case 8:
                            return 8;
                        default:
                            throw Error("mode:" + a)
                    } else if (27 > h) switch (a) {
                        case 1:
                            return 12;
                        case 2:
                            return 11;
                        case s:
                            return 16;
                        case 8:
                            return 10;
                        default:
                            throw Error("mode:" + a)
                    } else {
                        if (!(41 > h)) throw Error("type:" + h);
                        switch (a) {
                            case 1:
                                return 14;
                            case 2:
                                return 13;
                            case s:
                                return 16;
                            case 8:
                                return 12;
                            default:
                                throw Error("mode:" + a)
                        }
                    }
                },
                getLostPoint: function (a) {
                    for (var h = a.getModuleCount(), d = 0, g = 0; h > g; g++) for (var e = 0; h > e; e++) {
                        for (var f = 0, i = a.isDark(g, e), c = -1; 1 >= c; c++) if (!(0 > g + c || g + c >= h)) for (var C = -1; 1 >= C; C++) 0 > e + C || e + C >= h || 0 == c && 0 == C || i == a.isDark(g + c, e + C) && f++;
                        f > 5 && (d += 3 + f - 5)
                    }
                    for (g = 0; h - 1 > g; g++) for (e = 0; h - 1 > e; e++) f = 0, a.isDark(g, e) && f++, a.isDark(g + 1, e) && f++, a.isDark(g, e + 1) && f++, a.isDark(g + 1, e + 1) && f++, (0 == f || 4 == f) && (d += 3);
                    for (g = 0; h > g; g++) for (e = 0; h - 6 > e; e++) a.isDark(g, e) && !a.isDark(g, e + 1) && a.isDark(g, e + 2) && a.isDark(g, e + 3) && a.isDark(g, e + 4) && !a.isDark(g, e + 5) && a.isDark(g, e + 6) && (d += 40);
                    for (e = 0; h > e; e++) for (g = 0; h - 6 > g; g++) a.isDark(g, e) && !a.isDark(g + 1, e) && a.isDark(g + 2, e) && a.isDark(g + 3, e) && a.isDark(g + 4, e) && !a.isDark(g + 5, e) && a.isDark(g + 6, e) && (d += 40);
                    for (e = f = 0; h > e; e++) for (g = 0; h > g; g++) a.isDark(g, e) && f++;
                    return a = Math.abs(100 * f / h / h - 50) / 5, d + 10 * a
                }
            }, l = {
                glog: function (a) {
                    if (1 > a) throw Error("glog(" + a + ")");
                    return l.LOG_TABLE[a]
                }, gexp: function (a) {
                    for (; 0 > a;) a += 255;
                    for (; a >= 256;) a -= 255;
                    return l.EXP_TABLE[a]
                }, EXP_TABLE: Array(256), LOG_TABLE: Array(256)
            }, m = 0; 8 > m; m++) l.EXP_TABLE[m] = 1 << m;
            for (m = 8; 256 > m; m++) l.EXP_TABLE[m] = l.EXP_TABLE[m - 4] ^ l.EXP_TABLE[m - 5] ^ l.EXP_TABLE[m - 6] ^ l.EXP_TABLE[m - 8];
            for (m = 0; 255 > m; m++) l.LOG_TABLE[l.EXP_TABLE[m]] = m;
            return q.prototype = {
                get: function (a) {
                    return this.num[a]
                }, getLength: function () {
                    return this.num.length
                }, multiply: function (a) {
                    for (var h = Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++) for (var g = 0; g < a.getLength(); g++) h[d + g] ^= l.gexp(l.glog(this.get(d)) + l.glog(a.get(g)));
                    return new q(h, 0)
                }, mod: function (a) {
                    if (0 > this.getLength() - a.getLength()) return this;
                    for (var h = l.glog(this.get(0)) - l.glog(a.get(0)), d = Array(this.getLength()), g = 0; g < this.getLength(); g++) d[g] = this.get(g);
                    for (g = 0; g < a.getLength(); g++) d[g] ^= l.gexp(l.glog(a.get(g)) + h);
                    return new q(d, 0).mod(a)
                }
            }, p.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], p.getRSBlocks = function (a, h) {
                var d = p.getRsBlockTable(a, h);
                if (void 0 == d) throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + h);
                for (var g = d.length / 3, e = [], f = 0; g > f; f++) for (var c = d[3 * f + 0], C = d[3 * f + 1], v = d[3 * f + 2], l = 0; c > l; l++) e.push(new p(C, v));
                return e
            }, p.getRsBlockTable = function (a, h) {
                switch (h) {
                    case 1:
                        return p.RS_BLOCK_TABLE[4 * (a - 1) + 0];
                    case 0:
                        return p.RS_BLOCK_TABLE[4 * (a - 1) + 1];
                    case 3:
                        return p.RS_BLOCK_TABLE[4 * (a - 1) + 2];
                    case 2:
                        return p.RS_BLOCK_TABLE[4 * (a - 1) + 3]
                }
            }, t.prototype = {
                get: function (a) {
                    return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
                }, put: function (a, h) {
                    for (var d = 0; h > d; d++) this.putBit(1 == (a >>> h - d - 1 & 1))
                }, getLengthInBits: function () {
                    return this.length
                }, putBit: function (a) {
                    var h = Math.floor(this.length / 8);
                    this.buffer.length <= h && this.buffer.push(0), a && (this.buffer[h] |= 128 >>> this.length % 8), this.length++
                }
            }, "string" == typeof a && (a = {text: a}), a = r.extend({}, {
                render: "canvas",
                width: 256,
                height: 256,
                typeNumber: -1,
                correctLevel: 2,
                background: "#ffffff",
                foreground: "#000000"
            }, a), this.each(function () {
                var h;
                if ("canvas" == a.render) {
                    h = new o(a.typeNumber, a.correctLevel), h.addData(a.text), h.make();
                    var g = document.createElement("canvas");
                    g.width = a.width, g.height = a.height;
                    for (var d = g.getContext("2d"), c = a.width / h.getModuleCount(), e = a.height / h.getModuleCount(), f = 0; f < h.getModuleCount(); f++) for (var i = 0; i < h.getModuleCount(); i++) {
                        d.fillStyle = h.isDark(f, i) ? a.foreground : a.background;
                        var C = Math.ceil((i + 1) * c) - Math.floor(i * c),
                            v = Math.ceil((f + 1) * c) - Math.floor(f * c);
                        d.fillRect(Math.round(i * c), Math.round(f * e), C, v)
                    }
                } else for (h = new o(a.typeNumber, a.correctLevel), h.addData(a.text), h.make(), g = r("<table></table>").css("width", a.width + "px").css("height", a.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", a.background), d = a.width / h.getModuleCount(), c = a.height / h.getModuleCount(), e = 0; e < h.getModuleCount(); e++) for (f = r("<tr></tr>").css("height", c + "px").appendTo(g), i = 0; i < h.getModuleCount(); i++) r("<td></td>").css("width", d + "px").css("background-color", h.isDark(e, i) ? a.foreground : a.background).appendTo(f);
                h = g, jQuery(h).appendTo(this)
            })
        }
    }(jQuery)
});
/*!common/widgets/chat-pop/main.js*/
;define("common/widgets/chat-pop/main", ["require", "exports", "module", "dep/jquery-qrcode/jquery.qrcode.min", "dep/artTemplate/dist/template"], function (require) {
    function a(e) {
        clearTimeout(v);
        var a = $(this);
        if ($(".chat_me").removeClass("active"), !a.find(".chat_pop_up").length) {
            var c = {
                headImg: a.siblings(".hr_portrait").val().replace(/(https?\:)\/\/www\.(?:lgstatic|lagou)\.com\//gi, ""),
                hrName: a.siblings(".hr_name").val(),
                hrPosition: a.siblings(".hr_position").val(),
                hrId: a.siblings(".target_hr").val(),
                pId: a.siblings(".target_position").val(),
                isBriefStyle: 1 == a.attr("data-is-brief-style"),
                index: a.attr("data-index")
            };
            a.append(h.compile(_)({chatData: c, lgsctx: GLOBAL_DOMAIN.lgsctx}));
            var g = a.find(".hr_headpic");
            if (g[0] && "DIV" === g[0].tagName) {
                var b = ("default" + Math.floor(4 * Math.random()), Math.floor(4 * Math.random()));
                b = b > 3 ? 3 : b, g.addClass("default" + b), a.find(".default").text(c.hrName.substr(0, 1))
            }
            var I = GLOBAL_DOMAIN.ctx + "/scanCode/positionChat.html?positionId=" + c.pId + "&publishUserId=" + c.hrId;
            a.find(".chat_qrcode").qrcode({
                width: 116,
                height: 116,
                text: I
            }), c.index % 3 === 2 && a.addClass("shows_on_left")
        }
        a.addClass("active"), a.trigger("click"), e.stopPropagation()
    }

    function c() {
        var a = this;
        v = setTimeout(function () {
            $(a).removeClass("active")
        }, 100)
    }

    require("dep/jquery-qrcode/jquery.qrcode.min");
    var h = require("dep/artTemplate/dist/template");
    h.helper("subStr", function (a, c, h) {
        return a.substr(0, c) + (h || "")
    });
    var v,
        _ = '{{if chatData.isBriefStyle}}\n	<div class="chat_pop_up chat_pop_brief">\n		<span class="arrow"></span>\n		<dl class="chat_main clearfix">\n			<dt><div class="chat_qrcode"></div></dt>\n			<dd class="tips_text">对我发布的职位感兴趣？用拉勾APP扫码，直接和我聊聊吧！</dd>\n		</dl>\n	</div>\n{{else}}\n	<div class="chat_pop_up">\n		<span class="arrow"></span>\n		<dl class="chat_main clearfix">\n			<dt><div class="chat_qrcode"></div></dt>\n			<dd>\n				<dl class="chat_head clearfix">\n					<dt>\n						{{if chatData.headImg}}\n							<img class="hr_headpic" src="{{lgsctx}}/{{chatData.headImg}}" alt="hr头像" width="62" height="62">\n						{{else}}\n							<div class="hr_headpic">{{chatData.hrName | subStr:1}}</div>\n						{{/if}}\n					</dt>\n					<dd>\n						<div class="hr_name">{{chatData.hrName}}</div>\n						<div class="hr_position">{{chatData.hrPosition}}</div>\n					</dd>\n					<dd class="tips_text">Hi，对我发布的职位感兴趣？用拉勾APP扫码，直接和我聊聊吧！</dd>\n				</dl>\n			</dd>\n		</dl>\n	</div>\n{{/if}}\n';
    $(document).on("mouseenter", ".chat_me", a), $(document).on("mouseleave", ".chat_me", c)
});
/*!index/page/index/main.js*/
;define("index/page/index/main", ["require", "exports", "module", "dep/jquery.cookie/jquery.cookie", "common/components/jquery-ui-custom/jquery-ui.custom", "dep/jquery-colorbox/jquery.colorbox", "dep/jquery-hoverdir/jquery.hoverdir", "index/modules/sub_site/main", "index/modules/sidebar/main", "index/modules/sub_remind/main", "index/modules/search/main", "index/modules/banner/main", "index/modules/job_list/main", "common/widgets/plat/poster", "index/modules/event/promotion180305/slide_banner/main", "index/modules/friendlink/main", "common/widgets/chat-pop/main"], function (require) {
    require("dep/jquery.cookie/jquery.cookie"), require("common/components/jquery-ui-custom/jquery-ui.custom"), require("dep/jquery-colorbox/jquery.colorbox"), require("dep/jquery-hoverdir/jquery.hoverdir"), require("index/modules/sub_site/main"), require("index/modules/sidebar/main"), require("index/modules/sub_remind/main"), require("index/modules/search/main"), require("index/modules/banner/main"), require("index/modules/job_list/main"), require("common/widgets/plat/poster"), require("index/modules/event/promotion180305/slide_banner/main"), require("index/modules/friendlink/main"), require("common/widgets/chat-pop/main")
});