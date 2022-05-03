let position = 0,
    sliderTrack = document.querySelector('.slider__track'),
    sliderItems = document.querySelectorAll('.slider__item'),
    sliderWidth = sliderTrack.offsetWidth,
    trackWidth = sliderWidth * (sliderItems.length - 1),
    btnPrev = document.querySelector('.btn__prev'),
    btnNext = document.querySelector('.btn__next'),

    autoScroll = setInterval(() => {
        nextScroll()
    }, 2000),

    nextScroll = () => {
        if (position === -trackWidth) {
            position = 0
            sliderTrack.style.transform = `translateX(${position}px)`
        } else {
            position -= sliderWidth
            sliderTrack.style.transform = `translateX(${position}px)`
        }
    }

btnPrev.addEventListener('click', function () {
    clearInterval(autoScroll)
    if (position === 0) {
        position = -trackWidth
        sliderTrack.style.transform = `translateX(${-trackWidth}px)`
    } else {
        position += sliderWidth
        sliderTrack.style.transform = `translateX(${position}px)`
    }
})

btnNext.addEventListener('click', function () {
    clearInterval(autoScroll)
    nextScroll()
})


