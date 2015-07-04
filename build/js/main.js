$( document ).ready(function() {
    //Scroll back ground
    $(".close-any").scroll(function() {
        //Slide
        slowBg_V($(".slide"));
        //Space_1
        slowBg_H($(".space_1"));
        //Space_2
        slowBg_V($(".space_2"));
    });


});
function slowBg_V($this){
    var bgScroll = -(($(window).scrollTop() - $this.offset().top)/ 5);
    var bgPosition = 'center '+ bgScroll + 'px';
    $this.css({ backgroundPosition: bgPosition });
}

function slowBg_H($this){
    var bgScroll = -(($(window).scrollTop() - $this.offset().top)/ 10) - 30;
    var bgPosition = bgScroll + 'px' + ' center';
    $this.css({ backgroundPosition: bgPosition });
}