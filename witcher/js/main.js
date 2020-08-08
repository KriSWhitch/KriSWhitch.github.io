$(document).ready(function () {
    // Mobile Menu
    const mButton = document.querySelector('.menu-btn');
    const mMenu = document.querySelector('.header');
    const mMenuBtn = document.querySelector('.menu-btn');
    mButton.addEventListener('click', () => {
        mMenu.classList.toggle('header-active');
        mMenuBtn.classList.toggle('active');
    });

    //slider 
    $('.siries').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: false,
        responsive: [
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
        ]
      });

});


