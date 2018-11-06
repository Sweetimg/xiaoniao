        var oScreenBanner = document.getElementsByClassName("screen-banner")[0];
        var oAllScreen = document.getElementsByClassName("all-screen")[0];
        var arrScreen = document.getElementsByClassName("screen-one");
        var screenW, screenH;
        var page = 0;    //定义了索引
        function resize(){
            // 获取屏幕宽高
            screenW = document.documentElement.clientWidth;
            //获取的是html或body
            screenH = document.documentElement.clientHeight;

            // 设置宽高    总轮播图    大盒子    每一屏
            oAllScreen.style.width = oScreenBanner.style.width = screenW + "px";
            //设置一屏的宽度  ，手动加单位
            oScreenBanner.style.height = screenH + "px";
            oAllScreen.style.height = screenH * arrScreen.length + "px";
            for (var i = 0; i < arrScreen.length; i++) {
                arrScreen[i].style.width = screenW + "px";
                arrScreen[i].style.height = screenH + "px";
            }

            oAllScreen.style.top = -page * screenH + "px";
        }
        resize();
        window.onresize = resize;      //窗口在改变时，重新获取一遍

        var isRunning = false; // 儅isRunning 為true  鼠標滾軸不管事
        // 儅isRunning 為false  鼠標滾軸管事
        function scrollUp() {
            if(!isRunning){
                isRunning = true;
                // 設置定時器  儅1秒之後  滾軸繼續可以使用
                setTimeout(function(){
                    isRunning = false;
                },1000);

                if (page > 0) {
                    page--;
                    oAllScreen.style.top = -page * screenH + "px";
                }
            }
        }

        function scrollDown() {
            if(!isRunning) {
                isRunning = true;
                setTimeout(function(){
                    isRunning = false;

                },1000);
                if (page < arrScreen.length - 1) {
                    page++;
                    oAllScreen.style.top = -page * screenH + "px";
                }
            }
        }


// chrome   ie
        addEvent(window, "mousewheel", mouseWheel);
// ff
        addEvent(window, "DOMMouseScroll", mouseWheel);


// 滚轴事件函数     判断往下走还是往上走
        function mouseWheel(ev) {
            var oEvent = window.event || ev;
            if (oEvent.detail) {
                if (oEvent.detail > 0) {
                    scrollDown()
                } else {
                    scrollUp()
                }
            } else if (oEvent.wheelDelta) {
                if (oEvent.wheelDelta > 0) {
                    scrollUp()
                } else {
                    scrollDown()
                }
            }
        }

//事件监听                    元素   事件类型   监听的事件的函数名称
        function addEvent(ele, type, listener) {
            if (ele.addEventListener) {
                ele.addEventListener(type, listener);
            } else {
                ele.attachEvent("on" + type, listener);
            }
        }

/*===============以上是全屏滚动==========*/

        //获取可视宽高
        var sW=$(window).width();
        var sH=$(window).height();
        console.log(sH);
        $("active").css({
            "height":sH+"px"
        });
        $(".content").css({
            "height":sH+"px"
        });

        $(".welcome").slideDown(1000,"linear",function(){
            $(this).find(".cen_img").css({
                "margin-top":"0",
                "transition":"5s"
            });
            $(this).find("#cen_text").delay(1000).slideDown(1000,function(){
                $("#cen_text").addClass("active")
            });
        }).delay(7000).slideUp(1000);


//头部点击效果
        $("#list li").click(function(){
            $("#list .span1").removeClass("active");
            $(this).find(".span1").addClass("active");
        })

//翡翠掌云
        $(".xny_1").click(function(){
            $("#img").addClass("active");
            $(".zy_contz").css({
                transform: "translateX(-900px)",
                transition: "2s"
            })
        });
        $(".xny_0").click(function(){
            $("#img").removeClass("active");
            $(".zy_contz").css({
                transform: "translateX(0px)",
                transition: "2s"
            })
        });

//概述
        $(".gs_z").click(function(){
            $(".lll").css({
                transform:"translateX(0px)",
                transition: "2s"
            })
        })
        $(".gs_y").click(function(){
            $(".lll").css({
                transform:"translateX(-1100px)",
                transition: "2s"
            })
        })


