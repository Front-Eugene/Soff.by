let screen = document.querySelector('.gallery__screen'),
    img = document.querySelectorAll('.gallery__item'),
    gallerySlider = document.querySelector('.gallery__slider'),
    btnClose = document.querySelector('.btn__close'),


    images = document.querySelectorAll('.gallery__slider .slider__line img'),
    sliderLine = document.querySelector('.slider__line'),
    btnPrev = document.querySelector('.btn__prev'),
    btnNext = document.querySelector('.btn__next'),
    count = 0,
    width;

    img.forEach(item => {
        item.addEventListener('click', function() {
            screen.innerHTML = '<img' +  item.getAttribute('data-link') + '>';
        })
    });

    screen.addEventListener('click', function() {
        gallerySlider.classList.toggle('active')
        document.body.style.overflow = 'hidden'
    })

    btnClose.addEventListener('click', function() {
        gallerySlider.classList.toggle('active')
        document.body.style.overflow = ''
    })



    function init() {
        width = document.querySelector('.gallery__slider').offsetWidth;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
        })
        scrollSlider();
    }

    window.addEventListener('resize', init);
    init();

    btnNext.addEventListener('click', function() {
        count++;
        if(count >= images.length) {
            count = 0;
        }
        scrollSlider();
    })

    btnPrev.addEventListener('click', function() {
        count--;
        if(count < 0) {
            count = images.length - 1;
        }
        scrollSlider();
    })

    function scrollSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }