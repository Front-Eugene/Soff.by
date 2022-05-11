const modalBtn = document.querySelectorAll('.application'),
      modalWindow = document.querySelector('.modal'),
      closeBtn = document.querySelectorAll('.close');

modalBtn.forEach(item => {
    item.addEventListener('click', function() {
        modalWindow.classList.toggle('modal__active')
        document.body.style.overflow = 'hidden'
    })
})

closeBtn.forEach(item => {
    item.addEventListener('click', function() {
        modalWindow.classList.toggle('modal__active')
        document.body.style.overflow = ''
    })
})
