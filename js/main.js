
$(function() {
    // Handler for .ready() called.
   
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        // Do something
        if(scroll>0){
            $(".navbar").addClass("bg-white");
            $("#navbarNavDropdown").addClass("navbar-light");

            
        }else{
            $(".navbar").removeClass("bg-white");
            $("#navbarNavDropdown").removeClass("navbar-light");
        }
    });

});