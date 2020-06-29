$(document).ready(function () {
    // Mobile Menu
    const mMenuBtn = $(".m-menu-button");
    const mMenu = $(".m-menu");
    mMenuBtn.on("click", function(){
        mMenu.toggleClass("active");
        $(".support-search-mobile").css("display", "flex");
        $("body").toggleClass("no-scroll");
        // scroll-fix for IPhone
        $(document).on("touchmove",function(event){
            event.preventDefault();
          });
    });

    // Burger Animation
    $(".m-menu-button").click(function () {
        $(this).toggleClass("active");
    });

});