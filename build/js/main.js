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
                $(".bar-item").css({"transform":"none", "opacity": "1"});
            }
        //Service
            var bar2Off = $(".bar-2").offset().top;
            var serviceOff = $("#service_").offset().top;
            $("#test").text(bar2Off + " va " + (-serviceOff/2) +" and "+ c);
            if (bar2Off < (-serviceOff/2)) {
                $("#blt_1").css({"transform":"none", "opacity": "1"});
                $("#blt_2").delay(4000).css({"transform":"none", "opacity": "1"});
                $("#blt_3").css({"transform":"none", "opacity": "1"});
            }
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