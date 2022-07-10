let instPosition = 0,
    instTrack = document.querySelector('.inst__track'),
    instItems = document.querySelectorAll('.inst__item'),
    instItemWidth = instTrack.offsetWidth,
    instWidth = instItemWidth * (instItems.length - 1),

    Scroll = setInterval(() => {
        if (instPosition === -instWidth) {
            instPosition = 0
            instTrack.style.transform = `translateX(${instPosition}px)`
        } else {
            instPosition -= instItemWidth
            instTrack.style.transform = `translateX(${instPosition}px)`
        }
    }, 4000);
