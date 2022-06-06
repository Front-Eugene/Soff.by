let screen = document.querySelector('.gallery__screen');
    img = document.querySelectorAll('.gallery__item');

    img.forEach(item => {
        item.addEventListener('click', function() {
            screen.innerHTML = '<img' +  item.getAttribute('data-link') + ' alt="sofa">';
        })
    });
