

$(document).ready(function () {
    // Mobile Menu
    const mMenuBtn = $(".m-menu-button");
    const mMenu = $(".m-menu");
    mMenuBtn.on("click", function(){
        mMenu.toggleClass("active");
        $("body").toggleClass("no-scroll");
        $(document).on("touchmove",function(event){
            event.preventDefault();
          });
        $(".swiper-container").toggleClass("hidden");
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

    var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 25,
        breakpoints:{
            992: {
                slidesPerView: 4,
            },
            780: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".button-next",
                },
            },
        }
      })

});


