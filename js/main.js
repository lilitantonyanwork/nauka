$(function (){
    var swiper = new Swiper(".review-slider.swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
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

        $('[data-toggle="tooltip"]').tooltip();
    Fancybox.bind("[data-fancybox]", {
        caption:false,
        Thumbs: {
            type: "classic",
            axis: 'y'
        },
    });

})