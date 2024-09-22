$(function (){
    var swiper = new Swiper(".review-slider.swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        allowTouchMove: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
        breakpoints: {
            // mobile + tablet - 320-990
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // desktop >= 991
            991: {
                slidesPerView: 2
            }
        }
    });
    var product_swiper = new Swiper(".swiper-slider", {
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
    //
    //     $('[data-toggle="tooltip"]').tooltip();
    // Fancybox.bind("[data-fancybox]", {
    //     caption:false,
    //     Thumbs: {
    //         type: "classic",
    //         axis: 'y'
    //     },
    // });
    $('#sidebarCollapse').on('click', function () {
        console.log('aaa')
        $('#sidebar').toggleClass('active');
        $('.sidebar-overlay').toggleClass('active');
        $('body').toggleClass('hide-scrollbar');
    });

})