$( document ).ready(function() {
    //Scroll back ground
    $(".close-any").scroll(function() {
        //Slide
        slowBg_V($(".slide"));
        //Space_1
        slowBg_H($(".space_1"));
        //Space_2
        slowBg_V($(".space_2"));
        //Space_4
        slowBg_H($(".space_4"));

        //loader
            var c = $(this).scrollTop();
        //Feature
            var bar1Off = $(".bar-1").offset().top;
            var featureOff = $("#feature_").offset().top;

            if (bar1Off < (-featureOff/2)) {
                setTimeout(function(){
                    $("#b_1").css({"transform":"none", "opacity": "1"});
                },100);
                setTimeout(function(){
                    $("#b_2").css({"transform":"none", "opacity": "1"});
                },500);
                setTimeout(function(){
                    $("#b_3").css({"transform":"none", "opacity": "1"});
                },900);
            }
        //Service
            var bar2Off = $(".bar-2").offset().top;
            var serviceOff = $("#service_").offset().top;

            if (bar2Off < (-serviceOff/2)) {
                setTimeout(function(){
                    $("#blt_1").css({"transform":"none", "opacity": "1"});
                },200);
                setTimeout(function(){
                    $("#blt_2").css({"transform":"none", "opacity": "1"});
                },2000);
                setTimeout(function(){
                    $("#blt_3").css({"transform":"none", "opacity": "1"});
                },4000);
            }
    });
    $("span.arrDown").click(function(){
        var $elScroll = $(".close-any");
        $elScroll.animate({ scrollTop: ($elScroll.scrollTop() + 600) }, 2000);
    });
    //SLIDE
    $(function(){
        // Xác định số lượng hình của slide
        var count = $('.slide-image').length;

        // Thêm số nút điều khiển bằng với số hình của slide
        for(x=0; x < count ;x++){
            $('.slide-pager ul').prepend("<li class='slide-pager-slot'></li>");
        }

        $('.slide-pager-slot:first-child,.slide-image:first-child').addClass('focus');

        // Khai báo biến dùng để đồng bộ hóa giữa hình ảnh và điều khiển
        var eindex=0;

        // Click vào điều khiển sẽ hiện hình tương ứng
        $('.slide-pager-slot').click(function(){
            eindex = $('.slide-pager-slot').index(this);
            $('.slide-image').stop().removeClass('focus').animate({opacity:0});
            $('.slide-image:eq(' + eindex + ')').show().stop().animate({opacity:1},function(){
                $('.slide-image').hide();
                $('.slide-image:eq(' + eindex + ')').show().addClass('focus');
            });
            $('.slide-pager-slot').removeClass('focus');
            $(this).addClass('focus');
        });

        // Function xử lý hiển thị cho hình slide và các nút điều khiển tương ứng với eindex
        // Được dùng lại một số lần ở các đoạn code bên dưới
        function setimagefocus(){
            $('.slide-pager-slot').removeClass('focus');
            $('.slide-pager-slot:eq(' + eindex + ')').addClass('focus');
            $('.slide-image.focus').stop().animate({opacity:0});
            $('.slide-image:eq(' + eindex + ')').show().stop().animate({opacity:1},function(){
                $('.slide-image.focus').hide().removeClass('focus');
                $('.slide-image:eq(' + eindex + ')').addClass('focus');
            });

        }

        // function xử lý quay vòng hình ảnh
        function slideswap(){
            // Nếu vị trí hiện tại đã là hình cuối cùng của slide thì sẽ chuyển eindex về -1
            // để sau eindex++ thì eindex sẽ là 0, tương ứng với hình slide đầu tiên
            if(eindex==count-1){eindex=-1;}
            eindex++;
            setimagefocus();
        }

        start_slideswap();
        // Thay đổi giá trị biến timeinterval bên dưới để thay đổi thời gian chuyển đổi giữa 2 hình
        function start_slideswap(){
            timeinterval = 4000;
            play = setInterval(slideswap,timeinterval);
        }

        // Xử lý khi đưa chuột vào slide thì dừng lại quá trình tự động chuyển hình
        $(".slide-container").hover(function() {
            clearInterval(play);
        }, function(){
            start_slideswap();
        });

        // Xử lý khi click nút next và prev
        $('.slide-control-prev').click(function(){
            eindex--;
            // Nếu vị trí hiện tại đã là hình đầu tiên của slide thì sẽ chuyển eindex về hình cuối
            if(eindex==-1){eindex=count-1;}
            setimagefocus();
        });
        $('.slide-control-next').click(function(){
            eindex++;
            // Nếu vị trí hiện tại đã là hình đầu tiên của slide thì sẽ chuyển eindex về hình cuối
            if(eindex==count){eindex=0;}
            setimagefocus();
        });

    })
    //END SLIDE

});
function slowBg_V($this){
    var bgScroll = -(($(window).scrollTop() - $this.offset().top)/ 5);
    var bgPosition = 'center '+ bgScroll + 'px';
    $this.css({ backgroundPosition: bgPosition });
}

function slowBg_H($this){
    var bgScroll = -(($(window).scrollTop() - $this.offset().top)/ 20) - 30;
    var bgPosition = bgScroll + 'px' + ' center';
    $this.css({ backgroundPosition: bgPosition });
}
function toTop(){
    $(".close-any").animate({ scrollTop: 0 }, 2000);
}
