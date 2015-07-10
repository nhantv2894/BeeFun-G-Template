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
            $("#test").text(bar1Off + " va " + (-featureOff/2) +" and "+ c);
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