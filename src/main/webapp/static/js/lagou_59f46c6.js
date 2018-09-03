var lg = window.lg || {};
Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
    var g = this.length >>> 0, h = Number(arguments[1]) || 0;
    for (h = 0 > h ? Math.ceil(h) : Math.floor(h), 0 > h && (h += g); g > h; h++) if (h in this && this[h] === a) return h;
    return -1
}), String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "")
}, String.prototype.ltrim = function () {
    return this.replace(/(^\s*)/g, "")
}, String.prototype.rtrim = function () {
    return this.replace(/(\s*$)/g, "")
}), lg.Event = lg.Event || {}, lg.Event._events = {}, lg.Event.on = function (a, g, h) {
    return this._events[a] = this._events[a] || [], this._events[a].push({data: g, func: h}), this
}, lg.Event.un = function (a) {
    var g = this._events;
    if (0 === arguments.length) return this._events = {}, this;
    var h = g[a];
    if (!h) return this;
    if (1 === arguments.length) return delete g[a], this;
    for (var c, i = 0; i < h.length; i++) if (c = h[i], c === listener || c.listener === listener) {
        h.splice(i, 1);
        break
    }
    return this
}, lg.Event.exec = function (a) {
    var g = this._events, h = g[a], c = Array.prototype.slice.call(arguments, 1);
    if (h) {
        h = h.slice(0);
        for (var i = 0, v = h.length; v > i; i++) h[i].apply(this, c)
    }
    return this
}, lg.Cache = lg.Cache || {}, lg.Cache.Views = lg.Cache.Views || {}, lg.Utils = lg.Utils || {}, lg.Utils.isNullObject = function (a) {
    if ("object" == typeof a && !(a instanceof Array)) {
        var g = !1;
        for (var h in a) {
            g = !0;
            break
        }
        return g
    }
}, lg.Widgets = lg.Widgets || {}, lg.Widgets.BaseControl = function (a) {
    if (this._name = "", this._option = {}, this.Event = lg.Event, this._data = {}, this._value = "", this._isDirty = !1, this._isValueField = !0, this._data.valid = this._data.valid || {}, this._data.valid.validResult = {}, this._data.valid._map = {
        require: {
            mode: "require",
            isUse: !1,
            status: !1,
            data: "",
            message: "必填",
            level: "3",
            trigger: []
        },
        re_pwd: {mode: "repeat-password", isUse: !1, status: !1, data: "", message: "", level: "2", trigger: []},
        min_len: {mode: "min-length", isUse: !1, status: !1, data: "", message: "最小长度", level: "1", trigger: []},
        max_len: {mode: "max-length", isUse: !1, status: !1, data: "", message: "最大长度", level: "1", trigger: []},
        pattern: {mode: "pattern", isUse: !1, status: !1, data: "", message: "", level: "2", trigger: []}
    }, $.extend(this._option, a), this._option.validRules) for (var i = 0, g = this._option.validRules.length; g > i; i++) {
        var h = this._option.validRules[i];
        this._data.valid._map[h.mode] ? (this._data.valid._map[h.mode].isUse = !0, this._data.valid._map[h.mode].data = h.data, this._data.valid._map[h.mode].message = h.message, this._data.valid._map[h.mode].level = h.level || this._data.valid._map[h.mode].level) : this._data.valid._map[h.mode] = {
            mode: h.mode,
            isUse: !0,
            status: !1,
            data: h.data,
            message: h.message,
            level: 0
        }, h.trigger ? this._data.valid._map[h.mode].trigger = h.trigger.split(",") : this._data.valid._map[h.mode].trigger.push("blur")
    }
    this._selector = '[data-view="' + this._option.parentName + '"] [data-propertyname="' + this._option.name + '"]', this._element = "string" == typeof this._option.name ? $(this._selector) : this._option.name, "function" == typeof this.init ? this.init() : ""
}, lg.Widgets.BaseControl.prototype.getIsValueField = function () {
    return this._isValueField
}, lg.Widgets.BaseControl.prototype.setIsValueField = function (a) {
    var g = !1;
    a && (g = !0), this._isValueField = g
}, lg.Widgets.BaseControl.prototype.getName = function () {
    return this._option.name
}, lg.Widgets.BaseControl.prototype.getElement = function () {
    return this._element
}, lg.Widgets.BaseControl.prototype.BaseInit = function (a) {
    this.setData(a);
    var g = this, h = !0;
    this._option.isFocusShow || this.getElement().find('input[type="text"],input[type="password"],input[type="checkbox"],input.btn_outline').on("focus", function () {
        g.setValidMessage()
    }), "undefined" == typeof this._option.isVisible ? h : h = !1, this.setVisible(h), this.getElement().find('input[type="text"],input[type="password"]').on("blur keydown change keyup", {control: this}, function (e) {
        var a = e.data.control;
        "keydown" == e.type && (a._isDirty = !0);
        var g = a.getValue(), h = a.getIsValid(g, e.type);
        return a._isDirty && a.getSelfIsValided() && ("keyup" == e.type || "change" == e.type) ? a._option.keyup && (a.execValid(a.getValue()), a._option.keyup.call(this, {
            control: a,
            isValidat: !0,
            parent: lg.Cache.Views[a._option.parentName],
            linkFor: lg.Cache.Views[a._option.parentName].field[a._option.linkFor]
        })) : !a._isDirty || a.getSelfIsValided() || "keyup" != e.type && "change" != e.type || a._option.keyup && (a.execValid(a.getValue()), a._option.keyup.call(this, {
            control: a,
            isValidat: !1,
            parent: lg.Cache.Views[a._option.parentName],
            linkFor: lg.Cache.Views[a._option.parentName].field[a._option.linkFor]
        })), lg.Utils.isNullObject(h) ? void a.setValidMessage(h) : void a.setValidMessage()
    })
}, lg.Widgets.BaseControl.prototype.showMessage = function (a) {
    this.getElement().find("[data-valid-message]").length ? "" : this.getElement().append('<span data-valid-message class="input_tips"></span>');
    {
        var g = this.getElement().find("[data-valid-message]");
        g.html()
    }
    if (lg.Utils.isNullObject(a)) {
        g.empty();
        g.html(a.message), g.show(), this.getElement().find('input[type="text"]').addClass("input_warning"), this.getElement().find('input[type="password"]').addClass("input_warning")
    } else g.remove(), this.getElement().find('input[type="text"]').removeClass("input_warning"), this.getElement().find('input[type="password"]').removeClass("input_warning")
}, lg.Widgets.BaseControl.prototype.setValidMessage = function (a, g) {
    if (this._option.forbidAddMessageBySelf) if ("CollectData" == g) {
        this.getElement().find("[data-valid-message]").length ? "" : this.getElement().append('<span data-valid-message class="input_tips"></span>');
        var h = this.getElement().find("[data-valid-message]")
    } else {
        var h = this.getElement().find("[data-valid-message]");
        if (!h && h.length > 0) return
    } else {
        this.getElement().find("[data-valid-message]").length ? "" : this.getElement().append('<span data-valid-message class="input_tips"></span>');
        var h = this.getElement().find("[data-valid-message]")
    }
    h.html();
    if (lg.Utils.isNullObject(a || {})) {
        h.empty();
        var c = "", v = 0;
        for (var _ in a) "undefined" != typeof a[_].level ? v = v < a[_].level ? a[_].level : v : "";
        for (var _ in a) "undefined" != typeof a[_].level && v == a[_].level && (c = a[_].message);
        h.html(c), h.show(), this.getElement().find('input[type="text"]').addClass("input_warning"), this.getElement().find('input[type="password"]').addClass("input_warning")
    } else h.remove(), this.getElement().find('input[type="text"]').removeClass("input_warning"), this.getElement().find('input[type="password"]').removeClass("input_warning")
}, lg.Widgets.BaseControl.prototype.setData = function (a) {
    for (var g in a) this["set" + g] = a[g]
}, lg.Widgets.BaseControl.prototype.setClear = function () {
    this.getElement().find("input.input_warning").removeClass("input_warning"), this.getElement().find("[data-valid-message]").remove(), this.getElement().find('input[type="text"],input[type="password"]').val(""), this._isDirty = !1, this.getElement().find('input[type="text"],input[type="password"]').blur()
}, lg.Widgets.BaseControl.prototype.getIsReadOnly = function () {
    return this.getElement().attr("readonly") ? !0 : !1
}, lg.Widgets.BaseControl.prototype.setReadOnly = function (a) {
    var g = !1;
    a && (g = !0), g ? this.getElement().attr("readonly", g) : this.getElement().removeAttr("readonly")
}, lg.Widgets.BaseControl.prototype.getIsDisabled = function () {
    return this.getElement().attr("disabled") ? !0 : !1
}, lg.Widgets.BaseControl.prototype.setFocus = function (a) {
    var g = !1;
    a && (g = !0, this.getElement().find('input[type ="text"]').focus())
}, lg.Widgets.BaseControl.prototype.setDisable = function (a) {
    var g = !1;
    a && (g = !0), g ? this.getElement().attr("disabled", g) : this.getElement().removeAttr("disabled"), g ? (this.getElement().attr("disabled", g), this.getElement().find('input[type="button"]').attr("disabled", g)) : (this.getElement().removeAttr("disabled"), this.getElement().find('input[type="button"]').removeAttr("disabled"))
}, lg.Widgets.BaseControl.prototype.getIsVisible = function () {
    return "none" != this.getElement().css("display") ? !0 : !1
}, lg.Widgets.BaseControl.prototype.setVisible = function (a) {
    var g = "none";
    a && (g = "block"), this.getElement().css("display", g)
}, lg.Widgets.BaseControl.prototype.getIsValid = function (a, g) {
    return this.execValid(a, g), this._data.valid.validResult
}, lg.Widgets.BaseControl.prototype.setValid = function (a) {
    for (var g in a) this._data.valid._map[g].is = a[g]
}, lg.Widgets.BaseControl.prototype.getValue = function () {
    return this._value = "undefined" == typeof this.getElement().find('input[type="text"]').val() ? this.getElement().find('input[type="password"]').val() : this.getElement().find('input[type="text"]').val(), this._value = "undefined" == typeof this._value ? "" : this._value, this._value = this._value.trim(), this._value
}, lg.Widgets.BaseControl.prototype.setValue = function (a) {
    this._value = this.getElement().find('input[type="text"]').val(a) || this.getElement().find('input[type="password"]').val(a)
}, lg.Widgets.BaseControl.prototype.execValid = function (val, type) {
    var thisType = type || "blur";
    if ("undefined" != typeof val && this.getIsVisible()) for (var item in this._data.valid._map) if ("object" == typeof this._data.valid._map[item] && this._data.valid._map[item].isUse) {
        if ("require" == this._data.valid._map[item].mode && this.controlValidResult(0 == val.length && this._isDirty && this._data.valid._map[item].trigger.indexOf(thisType) > -1, item, type), "min-len" == this._data.valid._map[item].mode && this.controlValidResult(val.length < this._data.valid._map[item].data && this._isDirty && this._data.valid._map[item].trigger.indexOf(thisType) > -1, item, type), "max-len" == this._data.valid._map[item].mode && this.controlValidResult(val.length > this._data.valid._map[item].data && this._isDirty && this._data.valid._map[item].trigger.indexOf(thisType) > -1, item, type), "repeat-password" == this._data.valid._map[item].mode) {
            var pwd = lg.Cache.Views[this._option.parentName].field[this._option.linkFor].getValue(),
                repwd = this.getValue();
            this.controlValidResult(pwd != repwd && this._isDirty && this._data.valid._map[item].trigger.indexOf(thisType) > -1, item, type)
        }
        if ("pattern" == this._data.valid._map[item].mode) {
            if ("string" == typeof this._data.valid._map[item].data) for (var data = this._data.valid._map[item].data.split("||"), temp = !1, i = 0, len = data.length; len > i; i++) {
                var reg = eval(data[i]);
                temp = temp || reg.test(val)
            } else {
                var data = this._data.valid._map[item].data, temp = !1;
                for (var i in data) "function" != typeof data[i] && (temp = temp || data[i].test(val))
            }
            this.controlValidResult(!temp && this._isDirty && this._data.valid._map[item].trigger.indexOf(thisType) > -1, item, type)
        }
    }
}, lg.Widgets.BaseControl.prototype.getSelfIsValided = function () {
    var value = !0, val = this.getValue();
    if ("undefined" == typeof val) return !1;
    for (var item in this._data.valid._map) if ("object" == typeof this._data.valid._map[item] && this._data.valid._map[item].isUse) {
        if ("require" == this._data.valid._map[item].mode && (value = value && 0 != val.length ? !0 : !1), "min-len" == this._data.valid._map[item].mode && (value = value && val.length > this._data.valid._map[item].data ? !0 : !1), "max-len" == this._data.valid._map[item].mode && (value = value && val.length < this._data.valid._map[item].data ? !0 : !1), "repeat-password" == this._data.valid._map[item].mode) {
            var pwd = lg.Cache.Views[this._option.parentName].field[this._option.linkFor].getValue(),
                repwd = this.getValue();
            value = value && pwd == repwd ? !0 : !1
        }
        if ("pattern" == this._data.valid._map[item].mode) {
            if ("string" == typeof this._data.valid._map[item].data) for (var data = this._data.valid._map[item].data.split("||"), temp = !1, i = 0, len = data.length; len > i; i++) {
                var reg = eval(data[i]);
                temp = temp || reg.test(val)
            } else {
                var data = this._data.valid._map[item].data, temp = !1;
                for (var i in data) "function" != typeof data[i] && (temp = temp || data[i].test(val))
            }
            value = value && temp ? !0 : !1
        }
    }
    return value
}, lg.Widgets.BaseControl.prototype.controlValidResult = function (a, g, h) {
    a ? (this._data.valid.validResult[this._data.valid._map[g].mode] = this._data.valid._map[g], this._data.valid.validResult[this._data.valid._map[g].mode].triggerType = h) : delete this._data.valid.validResult[this._data.valid._map[g].mode]
}, lg.Widgets.Controls = {}, lg.Widgets.Controls.Phone = function (a, g) {
    lg.Widgets.Controls[a] = g(a)
}, lg.Widgets.Controls.Extend = function (a, g) {
    lg.Widgets.Controls[a] = g(a)
}, lg.Widgets.Controls.Extend("Phone", function (a) {
    var g = function (a, g) {
        lg.Widgets.BaseControl.call(this, a, g)
    };
    return g.prototype = new lg.Widgets.BaseControl, g.prototype.controlType = a, g
}), lg.Widgets.Controls.Extend("PhoneVerificationCode", function (a) {
    var g = function (a, g) {
        lg.Widgets.BaseControl.call(this, a, g)
    };
    return g.prototype = new lg.Widgets.BaseControl, g.prototype.controlType = a, g.prototype.getTopTime = function () {
        return this._option.topTime || 60
    }, g.prototype.setTopTime = function (a) {
        this._option.topTime = a
    }, g.prototype.getopCount = function () {
        return this._option.topCount || null
    }, g.prototype.getTotalCount = function () {
        return this._option.totalCount
    }, g.prototype.setTotalTimeTemp = function () {
        this.totalTimeTemp = this.getTopTime()
    }, g.prototype.setTimeLine = function (a) {
        this._option.timeLine = a
    }, g.prototype.getPhoneVerificationCodeUrl = function () {
        return this._option.url
    }, g.prototype.getVerificationButton = function () {
        return this.getElement().find('input[type="button"]')
    }, g.prototype.getVerificationInput = function () {
        return this.getElement().find('input[type="text"]')
    }, g.prototype.getCodeIsDisabled = function () {
        return this.getElement().find('input[type="button"]').hasClass("btn_disabled")
    }, g.prototype.setCodeIsDisabled = function (a) {
        var g = !1;
        return a ? (g = !0, this.getElement().find('input[type="button"]').addClass("btn_disabled"), g) : (this.getElement().find('input[type="button"]').removeClass("btn_disabled"), g)
    }, g.prototype.getLinkFor = function () {
        return lg.Cache.Views[this._option.parentName].field[this._option.linkFor]
    }, g.prototype.init = function () {
        clearInterval(this.timeLine), this.timeLine = null, this.isActive = !1, this.setCodeIsDisabled(this._option.codeIsDisabled);
        var a = lg.Cache.Views[this._option.parentName].field[this._option.linkFor];
        !a.getSelfIsValided() && a._option.keyup ? this.getVerificationButton().val("string" != typeof this._option.postfix ? "获取验证码" : "获取") : a.getSelfIsValided() && a._option.keyup && this.getVerificationButton().removeClass("btn_disabled").val("string" != typeof this._option.postfix ? "获取验证码" : "获取"), this.totalTimeTemp = this.getTopTime(), this.getElement().find('input[type="button"]').one("click", {control: this}, function (e) {
            var a = e.data.control, g = !0, h = lg.Cache.Views[a._option.parentName].field[a._option.linkFor],
                c = lg.Cache.Views[a._option.parentName].field[a._option.verifyCode];
            c.getIsVisible() && (g = c.getSelfIsValided() && g ? !0 : !1), g = h.getSelfIsValided() && g ? !0 : !1, g ? (a.setDisable(!0), !a.getCodeIsDisabled() && a.getIsDisabled() && (a.isActive = !0, a._option.click.call(this, {
                control: a,
                parent: lg.Cache.Views[a._option.parentName],
                linkFor: h
            }))) : (h._isDirty = !0, h.setValidMessage(h.getIsValid(h.getValue()), "CollectData"), c.getIsVisible() && (c._isDirty = !0, c.setValidMessage(c.getIsValid(c.getValue()), "CollectData")), a.init())
        })
    }, g.prototype.getVerificationCode = function () {
    }, g.prototype.setClear = function () {
        this.getElement().find("input.input_warning").removeClass("input_warning"), this.getElement().find("[data-valid-message]").remove(), this.getElement().find('input[type="text"],input[type="password"]').val(""), this._isDirty = !1, this.getElement().find('input[type="text"],input[type="password"]').blur();
        var a = $._data(this.getElement().find('input[type="button"]')[0], "events");
        a && a.click || this.init(), this.timeLine = null, this.setDisable(!1);
        var g = lg.Cache.Views[this._option.parentName].field[this._option.linkFor];
        !g.getSelfIsValided() && g._option.keyup ? this.getVerificationButton().val("string" != typeof this._option.postfix ? "获取验证码" : "获取") : this.getVerificationButton().removeClass("btn_disabled").val("string" != typeof this._option.postfix ? "获取验证码" : "获取")
    }, g.prototype.starttime = function (a, g) {
        a.timeLine || (a.totalTimeTemp = a.getTopTime(), a.timeLine = setInterval(function () {
            var h = lg.Cache.Views[a._option.parentName].field[a.getName()];
            h.totalTimeTemp--;
            var c = "string" != typeof h._option.postfix ? "秒后重试" : h._option.postfix + "s";
            if (h.getVerificationButton().addClass("btn_disabled").val(h.totalTimeTemp + c), -1 == h.totalTimeTemp) {
                clearInterval(h.timeLine), h.timeLine = null, a.setDisable(!1);
                var v = lg.Cache.Views[a._option.parentName].field[a._option.linkFor];
                !v.getSelfIsValided() && v._option.keyup ? (h.init(), h.getVerificationButton().val("string" != typeof h._option.postfix ? "获取验证码" : "获取")) : (h.init(), h.getVerificationButton().removeClass("btn_disabled").val("string" != typeof h._option.postfix ? "获取验证码" : "获取")), "function" == typeof g && g()
            }
        }, 1e3))
    }, g
}), lg.Widgets.Controls.Extend("Password", function (a) {
    var g = function (a) {
        lg.Widgets.BaseControl.call(this, a)
    };
    return g.prototype = new lg.Widgets.BaseControl, g.prototype.controlType = a, g
}), lg.Widgets.Controls.Extend("RepeatPassword", function (a) {
    var g = function (a) {
        lg.Widgets.BaseControl.call(this, a)
    };
    return g.prototype = new lg.Widgets.BaseControl, g.prototype.controlType = a, g
}), lg.Widgets.Controls.Extend("Email", function (a) {
    var g = function (a) {
        lg.Widgets.BaseControl.call(this, a)
    };
    return g.prototype = new lg.Widgets.BaseControl, g.prototype.controlType = a, g
}), lg.Widgets.Controls.Extend("VerifyCode", function (a) {
    var g = function (a) {
        lg.Widgets.BaseControl.call(this, a)
    };
    return g.prototype = new lg.Widgets.BaseControl, g.prototype.controlType = a, g.prototype.init = function () {
        this.getVerifyCodeReflashButton().on("click", {control: this}, function (e) {
            var a = e.data.control.getVerifyCodeUrl(), g = $('<img alt="点击重试" class="yzm" width="98" height="40" />');
            if ("init" == e.data.type) {
                if (e.data.control.getVerifyCodeImg().attr("src")) return;
                g.attr("src", a), $('[data-controltype="VerifyCode"]').find("img").remove(), $('[data-controltype="VerifyCode"]').find("input").after(g)
            } else g.attr("src", a), $('[data-controltype="VerifyCode"]').find("img").remove(), $('[data-controltype="VerifyCode"]').find("input").after(g)
        })
    }, g.prototype.getVerifyCode = function () {
        this.getVerifyCodeReflashButton().trigger("click", {control: this, type: "init"})
    }, g.prototype.getFrom = function () {
        return this._option.from || "register"
    }, g.prototype.getVerifyCodeUrl = function () {
        var a = this._option.url + "?from=" + this.getFrom() + "&refresh=" + (new Date).getTime();
        return a
    }, g.prototype.getVerifyCodeReflashButton = function () {
        return this.getElement().find("a")
    }, g.prototype.getVerifyCodeInput = function () {
        return this.getElement().find("input")
    }, g.prototype.getVerifyCodeImg = function () {
        return this.getElement().find("img")
    }, g
}), lg.Widgets.Controls.Extend("Switch", function (a) {
    var g = function (a) {
        lg.Widgets.BaseControl.call(this, a)
    };
    return g.prototype = new lg.Widgets.BaseControl, g.prototype.controlType = a, g.prototype.getValue = function () {
        return this.getElement().find(".btn_active").attr("data-myvalue") || ""
    }, g
}), lg.Widgets.Controls.Extend("CheckBox", function (a) {
    var g = function (a) {
        lg.Widgets.BaseControl.call(this, a)
    };
    return g.prototype = new lg.Widgets.BaseControl, g.prototype.controlType = a, g.prototype.getValue = function () {
        var a = [];
        return this.getElement().find('input[type="checkbox"]:checked').each(function () {
            a.push($(this).attr("data-myvalue"))
        }), a
    }, g
}), lg.Widgets.Controls.Extend("Button", function (a) {
    var g = function (a) {
        lg.Widgets.BaseControl.call(this, a), this._isValueField = !1
    };
    return g.prototype = new lg.Widgets.BaseControl, g.prototype.controlType = a, g.prototype.init = function () {
        this.isActive = !1, this.getElement().find('[type="button"]').on("click", {control: this}, function (e) {
            var a = e.data.control;
            a.isActive = !0, a._option.click.call(this, {control: a, parent: lg.Cache.Views[a._option.parentName]})
        })
    }, g
}), lg.Views = lg.Views || {}, lg.Views.BaseView = function (a) {
    this._name = "", this._children = [], this._Validation = {}, this._options = {}, this.childrenData = {}, this.field = {}, a && (this._name = a.name), $.extend(this._options, a), this._element = "string" == typeof a.name ? $('[data-view="' + this._name + '"]') : this._name, lg.Cache.Views[this._name] = this, this.init()
}, lg.Views.BaseView.prototype.getElement = function () {
    return this._element
}, lg.Views.BaseView.prototype.setClear = function () {
    for (var a in this.field) this.field[a].setClear()
}, lg.Views.BaseView.prototype.ValidatForm = function () {
    for (var a in this.field) {
        var i = {};
        this.field[a].getIsValueField() && (this.field[a]._isDirty = !0, i = this.field[a].getIsValid(this.field[a].getValue())), lg.Utils.isNullObject(i) ? this._Validation[a] = i : delete this._Validation[a]
    }
    if (lg.Utils.isNullObject(this._Validation)) {
        for (var a in this._Validation) this.field[a].setValidMessage(this._Validation[a], "CollectData");
        return !1
    }
    return !0
}, lg.Views.BaseView.prototype.CollectData = function (a) {
    this.childrenData.isValidate = !0, a || (this.childrenData.isValidate = this.ValidatForm());
    for (var g in this.field) this.field[g].getIsValueField() && (this.childrenData[g] = this.field[g] ? this.field[g].getValue() : "");
    return this.childrenData
}, lg.Views.BaseView.prototype.init = function () {
    this._options, this._options.fields ? this.initControls(this._options.fields) : ""
}, lg.Views.BaseView.prototype.initControls = function (a) {
    for (var i = 0, g = a.length; g > i; i++) a[i].parentName = this._name, this.field[a[i].name] = new lg.Widgets.Controls[a[i].controlType](a[i]), this.field[a[i].name].BaseInit()
}, lg.Views.BaseView.prototype.extend = function (a, g) {
    this[a] = g
}, lg.Models = lg.Models || {}, lg.Models.BaseViewModel = function (a, g) {
    a && (this._name = a), this._name = "", $.extend(this._options, g)
};