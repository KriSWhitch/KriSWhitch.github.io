

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

    

//swiper

    const mainSwiper = document.querySelector('.swiper-container');
    const workingProcessSwiper = document.querySelector('.working-swiper-container');

    let Swiper1 = new Swiper (mainSwiper, {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 25,
        breakpoints:{
            320: {
                navigation: {
                    nextEl: ".button-next",
                    prevEl: ".button-previous",
                },
            },
        }
      });

      let Swiper2 = new Swiper (workingProcessSwiper, {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 25,
        breakpoints:{
            320: {
                navigation: {
                    nextEl: ".working-button-next",
                    prevEl: ".working-button-previous",
                },
            },
        }
      });

});


/* To the top */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100 && height < 5800) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});

$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});