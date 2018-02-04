// JavaScript source code
// ==UserScript==
// @name    弹窗
// @version      1.0
// @description     简约风格弹窗；注释仅包含第一段，后面三段与第一段内容大致相同，可参照第一段注释
// @author      komo
// @include     *http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==
var pop = function () {


    this.responseVal;
    this.confirm = function (text, func) {
        //设置默认字段
        if ((typeof text) != "string")
            text = '';
        var _isFuncSet = typeof (func) == 'function';
        //添加元素
        $("div.pop").append("<div class='popup' style='overflow:hidden;transition: 0.15s cubic-bezier(0.4, 0, 1, 1);transition-property:all;position:fixed;background-color: white;width:0px;height:0px;border-radius:11px;'><div class='close'>X</div><div class='confirm'><div class='choice'><p class='sel'></p></div></div></div>");
        //高斯模糊处理
        $("body").children().not("div.pop").css('filter', 'blur(5px)');
        //提示内容添加
        $("div.popup div.choice").before("<p class='content' >" + text + "</p>");
        //渲染
        $("div.popup p.sel").append("<span class='ok' >ok</span><span class='cancel' >cancel</span>");

        $("div.choice span").css({
            "line-height": "36px",
            "width": "177.5px",
            "display": "inline-block",
            "text-align": "center",
            "font-size": "20px"
        });


        $("div.popup").offset({ top: $(document).height() / 2, left: $(document).width() / 2 });
        window.onresize = function () {
            $("div.popup").offset({ top: $(document).height() / 2 - 79, left: $(document).width() / 2 - 178.5 });
        }
        //$("div.popup").css({"transform": "scale(357,158)", "transform-origin": "center"});
        $("div.popup").css({ "width": "357px", "height": "158px", "left": $(document).width() / 2 - 178.5 + "px", "top": $(document).height() / 2 - 79 + "px"/*, "transform":"translate(-178.5px,-79px)"*/ });



        $("div.popup div.close").css({
            "height": "31px",
            "width": "42px",
            "float": "right",
            "border-top-right-radius": "11px",
            "text-align": "center",
            "line-height": "31px",
            "font-size": "23px",
            "font-weight": "100",
            "transition": "0.15s all cubic-bezier(0.47,0,0.75,0.72)"
        });
        $("div.popup div.confirm").css("width", "357px");
        $("div.popup p.content").css({
            "position": "absolute",
            "width": "inherit",
            "text-align": "center",
            "top": "39px"
        });
        $("div.popup div.choice").css({
            "width": "inherit",
            "height": "37px",
            "top": "120px",
            "position": "absolute"
        });
        $("div.popup p.sel").css({
            "margin": "0",
            "border-top": "2px solid #9E9E9E",
            "height": "37px"
        });
        $("div.popup span.ok").css({
            "border-right": "1px solid #9E9E9E",
            "border-bottom-left-radius": "11px"
        });
        $("div.popup span.cancel").css({
            "font-size": "20px",
            "border-left": "1px solid #9E9E9E",
            "border-bottom-right-radius": "11px"
        });

        //动态样式添加
        $("div.choice span.cancel").mouseenter(function () {
            $(this).css({ "color": "white", "background-color": "#F44336", "cursor": "pointer" });
        });
        $("div.choice span.ok").mouseout(function () {
            $(this).css({ "background-color": "white", "cursor": "default" });
        });
        $("div.choice span.ok").mouseenter(function () {
            $(this).css({ "background-color": "#2cbd2d", "cursor": "pointer" });
        });
        $("div.choice span.cancel").mouseout(function () {
            $(this).css({ "color": "black", "background-color": "white", "cursor": "default" });
        });
        $("div.close").mouseenter(function () {
            $(this).css({ "background-color": "#F44336", "cursor": "pointer" });
        });
        $("div.close").mouseout(function () {
            $(this).css({ "background-color": "white", "cursor": "default" });
        });
        //点击后处理，恢复原状且callback函数
        $("div.close, span.cancel").click(function () {
            $("div.popup").css({ "transform": "scale(0,0)", "transform-origin": "center" });
            this.responseVal = false;
            $("body").children().not("div.pop").css('filter', 'none');
            $("body div.pop").children().remove();
            if (_isFuncSet)
                func(this.responseVal);
        });
        $("span.ok").click(function () {
            $("div.popup").css({ "transform": "scale(0,0)", "transform-origin": "center" });
            this.responseVal = true;
            $("body").children().not("div.pop").css('filter', 'none');
            $("body div.pop").children().remove();
            if (_isFuncSet)
                func(this.responseVal);
        });
    }
    this.alert = function (text, func) {
        if ((typeof text) != "string")
            text = '';
        var _isFuncSet = typeof (func) == 'function';
        $("div.pop").append("<div class='popup' style='overflow:hidden;transition: 0.15s cubic-bezier(0.4, 0, 1, 1);transition-property:all;position:fixed;background-color: white;width:0px;height:0px;border-radius:11px;'><div class='close'>X</div><div class='confirm'><div class='choice'><p class='sel'></p></div></div></div>");
        $("body").children().not("div.pop").css('filter', 'blur(5px)');
        $("div.popup div.choice").before("<p class='content' >" + text + "</p>");
        $("div.popup p.sel").append("<span class='ok' >ok</span>");

        $("div.choice span").css({
            "line-height": "36px",
            "width": "357px",
            "display": "inline-block",
            "text-align": "center",
            "font-size": "20px"
        });


        $("div.popup").offset({ top: $(document).height() / 2, left: $(document).width() / 2 });
        window.onresize = function () {
            $("div.popup").offset({ top: $(document).height() / 2 - 79, left: $(document).width() / 2 - 178.5 });
        }
        //$("div.popup").css({"transform": "scale(357,158)", "transform-origin": "center"});
        $("div.popup").css({ "width": "357px", "height": "158px", "left": $(document).width() / 2 - 178.5 + "px", "top": $(document).height() / 2 - 79 + "px"/*, "transform":"translate(-178.5px,-79px)"*/ });



        $("div.popup div.close").css({
            "height": "31px",
            "width": "42px",
            "float": "right",
            "border-top-right-radius": "11px",
            "text-align": "center",
            "line-height": "31px",
            "font-size": "23px",
            "font-weight": "100",
            "transition": "0.15s all cubic-bezier(0.47,0,0.75,0.72)"
        });
        $("div.popup div.confirm").css("width", "357px");
        $("div.popup p.content").css({
            "position": "absolute",
            "width": "inherit",
            "text-align": "center",
            "top": "39px"
        });
        $("div.popup div.choice").css({
            "width": "inherit",
            "height": "37px",
            "top": "120px",
            "position": "absolute"
        });
        $("div.popup p.sel").css({
            "margin": "0",
            "border-top": "2px solid #9E9E9E",
            "height": "37px"
        });
        $("div.popup span.ok").css({
            "border-right": "1px solid #9E9E9E",
            "border-bottom-left-radius": "11px"
        });


        $("div.choice span.ok").mouseout(function () {
            $(this).css({ "background-color": "white", "cursor": "default" });
        });
        $("div.choice span.ok").mouseenter(function () {
            $(this).css({ "background-color": "#2cbd2d", "cursor": "pointer" });
        });
        $("div.close").mouseenter(function () {
            $(this).css({ "background-color": "#F44336", "cursor": "pointer" });
        });
        $("div.close").mouseout(function () {
            $(this).css({ "background-color": "white", "cursor": "default" });
        });
        $("div.close").click(function () {
            $("div.popup").css({ "transform": "scale(0,0)", "transform-origin": "center" });
            this.responseVal = false;
            $("body").children().not("div.pop").css('filter', 'none');
            $("body div.pop").children().remove();
            if (_isFuncSet)
                func(this.responseVal);
        });
        $("span.ok").click(function () {
            $("div.popup").css({ "transform": "scale(0,0)", "transform-origin": "center" });
            this.responseVal = true;
            $("body").children().not("div.pop").css('filter', 'none');
            $("body div.pop").children().remove();
            if (_isFuncSet)
                func(this.responseVal);
        });
    }

    this.prompt = function (text,placeholder, func ) {
        if ((typeof text) != "string")
            text = '';
        var _isFuncSet = typeof (func) == 'function';
        console.log(typeof placeholder);
        if ((typeof placeholder) != "string")
            placeholder = '请在该处输入';
        $("div.pop").append("<div class='popup' style='overflow:hidden;transition: 0.15s cubic-bezier(0.4, 0, 1, 1);transition-property:all;position:fixed;background-color: white;width:0px;height:0px;border-radius:11px;'><div class='close'>X</div><div class='confirm'><div class='choice'><p class='sel'></p></div></div></div>");
        $("body").children().not("div.pop").css('filter', 'blur(5px)');
        $("div.popup div.choice").before("<p class='content' >" + text + "</p><p class='input' ><input class='myData' type='text' placeholder='" + placeholder + "'/></p>");
        $("div.popup p.sel").append("<span class='ok' >ok</span>");

        $("div.choice span").css({
            "line-height": "36px",
            "width": "357px",
            "display": "inline-block",
            "text-align": "center",
            "font-size": "20px"
        });


        $("div.popup").offset({ top: $(document).height() / 2, left: $(document).width() / 2 });
        window.onresize = function () {
            $("div.popup").offset({ top: $(document).height() / 2 - 79, left: $(document).width() / 2 - 178.5 });
        }
        //$("div.popup").css({"transform": "scale(357,158)", "transform-origin": "center"});
        $("div.popup").css({ "width": "357px", "height": "158px", "left": $(document).width() / 2 - 178.5 + "px", "top": $(document).height() / 2 - 79 + "px"/*, "transform":"translate(-178.5px,-79px)"*/ });



        $("div.popup div.close").css({
            "height": "31px",
            "width": "42px",
            "float": "right",
            "border-top-right-radius": "11px",
            "text-align": "center",
            "line-height": "31px",
            "font-size": "23px",
            "font-weight": "100",
            "transition": "0.15s all cubic-bezier(0.47,0,0.75,0.72)"
        });
        $("div.popup p.input").css({
            "top": "82px",
            "position": "absolute",
            "margin": "0",
            "left": "31px"
        });
        $("div.popup input.myData").css({
            "width": "289px",
            "height": "23px",
            "text-align": "center",
            "border": "0.3px solid #8d8d8d",
            "border-radius": "5px",
            "outline": "none",
            "background-color": "#80808021"
        });

        $("div.popup div.confirm").css("width", "357px");
        $("div.popup p.content").css({
            "position": "absolute",
            "width": "297px",
            "text-align": "center",
            "top": "34px",
            "margin": "0 30px 0 30px"
        });
        $("div.popup div.choice").css({
            "width": "inherit",
            "height": "37px",
            "top": "120px",
            "position": "absolute"
        });
        $("div.popup p.sel").css({
            "margin": "0",
            "border-top": "2px solid #9E9E9E",
            "height": "37px"
        });
        $("div.popup span.ok").css({
            "border-right": "1px solid #9E9E9E",
            "border-bottom-left-radius": "11px"
        });


        $("div.choice span.ok").mouseout(function () {
            $(this).css({ "background-color": "white", "cursor": "default" });
        });
        $("div.choice span.ok").mouseenter(function () {
            $(this).css({ "background-color": "#2cbd2d", "cursor": "pointer" });
        });
        $("div.close").mouseenter(function () {
            $(this).css({ "background-color": "#F44336", "cursor": "pointer" });
        });
        $("div.close").mouseout(function () {
            $(this).css({ "background-color": "white", "cursor": "default" });
        });
        $("div.close").click(function () {
            $("div.popup").css({ "transform": "scale(0,0)", "transform-origin": "center" });
            this.responseVal = false;
            $("body").children().not("div.pop").css('filter', 'none');
            $("body div.pop").children().remove();
            if (_isFuncSet)
                func(this.responseVal);
        });
        $("div.close, span.ok").click(function () {
            $("div.popup").css({ "transform": "scale(0,0)", "transform-origin": "center" });
            this.responseVal = $("div.popup input.myData").val();
            $("body").children().not("div.pop").css('filter', 'none');
            $("body div.pop").children().remove();
            if (_isFuncSet)
                func(this.responseVal);
        });
    }
    this.password = function (text, func, placeholder) {
        if ((typeof text) != "string")
            text = '';
        var _isFuncSet = typeof (func) == 'function';
        console.log(typeof placeholder);
        if ((typeof placeholder) != "string")
            placeholder = '请输入密码';
        $("div.pop").append("<div class='popup' style='overflow:hidden;transition: 0.15s cubic-bezier(0.4, 0, 1, 1);transition-property:all;position:fixed;background-color: white;width:0px;height:0px;border-radius:11px;'><div class='close'>X</div><div class='confirm'><div class='choice'><p class='sel'></p></div></div></div>");
        $("body").children().not("div.pop").css('filter', 'blur(5px)');
        $("div.popup div.choice").before("<p class='content' >" + text + "</p><p class='input' ><input class='myData' type='password' placeholder='" + placeholder + "'/></p>");
        $("div.popup p.sel").append("<span class='ok' >ok</span>");

        $("div.choice span").css({
            "line-height": "36px",
            "width": "357px",
            "display": "inline-block",
            "text-align": "center",
            "font-size": "20px"
        });


        $("div.popup").offset({ top: $(document).height() / 2, left: $(document).width() / 2 });
        window.onresize = function () {
            $("div.popup").offset({ top: $(document).height() / 2 - 79, left: $(document).width() / 2 - 178.5 });
        }
        //$("div.popup").css({"transform": "scale(357,158)", "transform-origin": "center"});
        $("div.popup").css({ "width": "357px", "height": "158px", "left": $(document).width() / 2 - 178.5 + "px", "top": $(document).height() / 2 - 79 + "px"/*, "transform":"translate(-178.5px,-79px)"*/ });



        $("div.popup div.close").css({
            "height": "31px",
            "width": "42px",
            "float": "right",
            "border-top-right-radius": "11px",
            "text-align": "center",
            "line-height": "31px",
            "font-size": "23px",
            "font-weight": "100",
            "transition": "0.15s all cubic-bezier(0.47,0,0.75,0.72)"
        });
        $("div.popup p.input").css({
            "top": "82px",
            "position": "absolute",
            "margin": "0",
            "left": "31px"
        });
        $("div.popup input.myData").css({
            "width": "289px",
            "height": "23px",
            "text-align": "center",
            "border": "0.3px solid #8d8d8d",
            "border-radius": "5px",
            "outline": "none",
            "background-color": "#80808021"
        });

        $("div.popup div.confirm").css("width", "357px");
        $("div.popup p.content").css({
            "position": "absolute",
            "width": "297px",
            "text-align": "center",
            "top": "34px",
            "margin": "0 30px 0 30px"
        });
        $("div.popup div.choice").css({
            "width": "inherit",
            "height": "37px",
            "top": "120px",
            "position": "absolute"
        });
        $("div.popup p.sel").css({
            "margin": "0",
            "border-top": "2px solid #9E9E9E",
            "height": "37px"
        });
        $("div.popup span.ok").css({
            "border-right": "1px solid #9E9E9E",
            "border-bottom-left-radius": "11px"
        });


        $("div.choice span.ok").mouseout(function () {
            $(this).css({ "background-color": "white", "cursor": "default" });
        });
        $("div.choice span.ok").mouseenter(function () {
            $(this).css({ "background-color": "#2cbd2d", "cursor": "pointer" });
        });
        $("div.close").mouseenter(function () {
            $(this).css({ "background-color": "#F44336", "cursor": "pointer" });
        });
        $("div.close").mouseout(function () {
            $(this).css({ "background-color": "white", "cursor": "default" });
        });
        $("div.close").click(function () {
            $("div.popup").css({ "transform": "scale(0,0)", "transform-origin": "center" });
            this.responseVal = false;
            $("body").children().not("div.pop").css('filter', 'none');
            $("body div.pop").children().remove();
            if (_isFuncSet)
                func(this.responseVal);
        });
        $("div.close, span.ok").click(function () {
            $("div.popup").css({ "transform": "scale(0,0)", "transform-origin": "center" });
            this.responseVal = $("div.popup input.myData").val();
            $("body").children().not("div.pop").css('filter', 'none');
            $("body div.pop").children().remove();
            if (_isFuncSet)
                func(this.responseVal);
        });
    }
}