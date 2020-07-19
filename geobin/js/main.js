

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
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
          },
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-previous",
        },
      });


      let className = 'progressbar-item';
      let Swiper2 = new Swiper (workingProcessSwiper, {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 25,
        navigation: {
            nextEl: ".working-button-next",
            prevEl: ".working-button-previous",
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<li class="' + className + ` step-${index+1}` + '">' + ("Step " + (index + 1)) + '</li>';
              },
        }
      });


      
    const progressbarContainer = document.querySelector('.progressbar-container');
    const swiperPaginationBullets = document.querySelectorAll('.swiper-pagination-bullet');

    const clearProgressBar = () => {
        swiperPaginationBullets.forEach(element => {
            element.className = element.className.replace(/\bactive\b/g, "");
        })
    }

    const makeActive = (elementNumber) => {
        clearProgressBar();
        for (let i = 0; i < elementNumber; i++) {
            swiperPaginationBullets[i].classList.add('active');
        }
    }
    


    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            var newVal = $(mutation.target).prop(mutation.attributeName);
            if (mutation.attributeName === "class") {
                if (mutation.target.ariaLabel == "Go to slide 1" && mutation.target.classList.contains("swiper-pagination-bullet-active")){
                    makeActive(0);
                } else if (mutation.target.ariaLabel == "Go to slide 2" && mutation.target.classList.contains("swiper-pagination-bullet-active")){
                        makeActive(1);
                } else if (mutation.target.ariaLabel == "Go to slide 3" && mutation.target.classList.contains("swiper-pagination-bullet-active")){
                        makeActive(2);       
                } else if (mutation.target.ariaLabel == "Go to slide 4" && mutation.target.classList.contains("swiper-pagination-bullet-active")){
                        makeActive(3);
                } else if (mutation.target.ariaLabel == "Go to slide 5" && mutation.target.classList.contains("swiper-pagination-bullet-active")){
                        makeActive(4);
                } 
            }
        });
    });
    swiperPaginationBullets.forEach(element => {
        observer.observe(element, {
            attributes: true,
        })
    });
});


/* To the top */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
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
