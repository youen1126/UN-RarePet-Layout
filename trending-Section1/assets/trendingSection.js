

document.addEventListener('DOMContentLoaded', () => {
    const swiperEl = document.querySelector('.trending-swiper');
    if (!swiperEl) return;

    const trendingSwiper = new Swiper('.trending-swiper', {
        slidesPerView: 1.9,
        spaceBetween: 16,
        loop: true,
        centeredSlides: true,
        // 自動輪播
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        breakpoints: {
            // 平板
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
                centeredSlides: false,
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 24,
                slidesPerGroup: 1,
                centeredSlides: false,
                loop: true,
            },
        },

        // 左右箭頭
        navigation: {
            nextEl: '.trending-swiper .trending-nav--next',
            prevEl: '.trending-swiper .trending-nav--prev',
        },

        grabCursor: true,
        simulateTouch: true,

        on: {
            init(swiper) {
                updateDim(swiper);
            },
            slideChange(swiper) {
                updateDim(swiper);
            },
            resize(swiper) {
                updateDim(swiper);
            },
        },
    });

    function updateDim(swiper) {
        const slides = swiper.slides;
        const total = slides.length;
        const isDesktop = window.innerWidth >= 992;


        slides.forEach(slide => slide.classList.add('is-dim'));

        if (isDesktop) {

            const firstVisible = swiper.activeIndex;


            for (let offset = 1; offset <= 4; offset++) {
                const idx = (firstVisible + offset) % total;
                slides[idx].classList.remove('is-dim');
            }
        } else {

            const active = swiper.activeIndex % total;
            slides[active].classList.remove('is-dim');
        }
    }
});

