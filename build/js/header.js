/**
 * Created by NhanTK on 25-Jun-15.
 */
$( document ).ready(function() {
    //Loading
    $(window).load(function(){
        if ($(this).width() <= 768){
            $(".content-loading").fadeOut();
        }
        else{
            window.setTimeout(show_popup);
        }
    });
    //Hover Tab
    $("ul.tab li").hover(function(){
        $(this).find("span").css("height","100%");
    }, function(){
        $(this).find("span").css("height","0%");
    });
    //Enter icon hover
    $(".bottom").hover(function(){
        $(this).css("max-width","200px");
        $("#enter").delay(500).fadeIn(100);
    }, function(){
        $(this).css("max-width","93px");
        $("#enter").hide();
    });
    //Enter CLick
    $("#enter").click(function(){
        $(".content-loading").fadeOut();
    });

    //Menu Effect
    $(".menu li a").click(function(){
        $(".menu").find("li.li-active").removeClass().addClass("li-normal");
        $(this).parent().removeClass();
        $(this).parent().addClass("li-active");
    });
    //Search
    $("#s-icon").click(
        function(){
            $("#txt-search").slideToggle();
            $("#txt-search").val("");
        });

    //Menu slide
    // Create a new instance of Slidebars
    var controller = new slidebars();

    // Initialize Slidebars
    controller.init();

    /**
     * Control Classes
     */

    // Toggle right
    $( '#res-menu' ).on( 'click', function ( event ) {
        // Stop default behaviour and propagation
        event.preventDefault();
        event.stopPropagation();

        // Toggle Slidebar
        controller.toggle( 'sb-1' );
    } );

});

function show_popup(){
    $("#loader").fadeOut();
    $("ul.tab li").css("height", 3/4 * window.innerHeight);
    $("#1").delay(1000).slideDown();
    $("#2").delay(1300).slideDown();
    $("#3").delay(1500).slideDown();
    $("#4").delay(1800).slideDown();
    $("#icon-enter").delay(2100).fadeIn("slow");
};