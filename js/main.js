$(function (){
    var swiper = new Swiper(".swiper", {
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

        $('[data-toggle="tooltip"]').tooltip();

})