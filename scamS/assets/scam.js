


const scamSwiper = new Swiper('.scam-swiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay: 20000,
    },
    pagination: {
        el: '.scam-pagination',
        clickable: true,
    },
});