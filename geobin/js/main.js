

$(document).ready(function () {
    // Mobile Menu
    const mMenuBtn = $(".m-menu-button");
    const mMenu = $(".m-menu");
    mMenuBtn.on("click", function(){
        mMenu.toggleClass("active");
        $("body").toggleClass("no-scroll");
        // scroll-fix for IPhone
        $(document).on("touchmove",function(event){
            event.preventDefault();
          });
        //swiper-fix for mobile menu
        $(".swiper-container").toggleClass("hidden");
        //search-button hidden
        $(".search-button").toggleClass("hidden");
    });

    // Burger Animation
    $(".m-menu-button").click(function () {
        $(this).toggleClass("active");
    });

    

    const tab = $(".tab");

    tab.on("click", function(){
        tab.removeClass("active");
        $(this).toggleClass("active");
        let activeTabContent = $(this).attr("data-target");
        $(".tabs-content").removeClass("visible");
        $(activeTabContent).toggleClass("visible");
    });

    let mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 25,
        breakpoints:{
            320: {
                navigation: {
                    nextEl: ".button-next",
                },
            },
        }
      })

});


