;
/*!/common/widgets/header_c/modules/emailvalid/main.js*/
define("common/widgets/header_c/modules/emailvalid/main", ["require", "exports", "module", "dep/jquery-colorbox/jquery.colorbox"], function (require) {
    function c(c) {
        return c.getFullYear().toString() + c.getMonth().toString() + c.getDate().toString()
    }

    require("dep/jquery-colorbox/jquery.colorbox"), $("#resend").size() > 0 && $("#resend").click(function () {
        $.ajax({type: "POST", url: GLOBAL_DOMAIN.ctx + "/user/resendActivatedMail"}).done(function (c) {
            c.success ? $.colorbox({inline: !0, href: "#resend_success", title: "验证邮件发送成功"}) : alert(c.msg)
        })
    }), $("#notActive").click(function () {
        $("#remindActive").hide();
        var a = new Date;
        localStorage.setItem("timeStr", c(a))
    });
    var a = new Date, g = c(a);
    localStorage.getItem("timeStr") !== g && (localStorage.removeItem("timeStr"), $("#remindActive").show()), $(".verify").click(function () {
        location.href = $(this).attr("data-url")
    })
});
;
/*!/common/widgets/header_c/layout/main.js*/
define("common/widgets/header_c/layout/main", ["require", "exports", "module", "dep/jquery.cookie/jquery.cookie"], function (require) {
    require("dep/jquery.cookie/jquery.cookie")
});
;
/*!/common/widgets/footer_c/layout/main.js*/
define("common/widgets/footer_c/layout/main", ["require", "exports", "module"], function () {
    function c() {
        $("#backtop").css("background-position-x", "-38px"), $("html, body").animate({scrollTop: 0}, 1e3, function () {
            $("#backtop").css("background-position-x", "0")
        })
    }

    function a(c) {
        $(window).height() - c > $(document.body).height() ? $("#footer").addClass("footer_fix") : $("#footer").removeClass("footer_fix")
    }

    $(".footer_app, .footer_wechat, .footer_mina").hover(function () {
        $("img", this).stop().fadeIn(200)
    }, function () {
        $("img", this).stop().fadeOut(200)
    }), $(window).scroll(function () {
        (document.documentElement.scrollTop || document.body.scrollTop) > 0 ? $("#backtop").show() : $("#backtop").hide()
    }), $("#backtop").click(function () {
        c()
    }), a(0), $(window).resize(function () {
        a($("#footer").hasClass("footer_fix") ? 68 : 0)
    }), $(document).ready(function () {
        $("img[data-delay-src]").each(function () {
            var c = $(this), a = (c.attr("data-delay-src") || "").replace(/https?\:/i, document.location.protocol);
            c.attr("src", a.replace("www.lagou.com", window.GLOBAL_CDN_DOMAIN))
        })
    })
});