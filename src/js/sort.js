let catalog = document.querySelector('.catalog'),
    cards = document.querySelectorAll('.card'),
    btnUp = document.querySelector('.up'),
    btnDown = document.querySelector('.down'),
    btnHave = document.querySelector('.have');

btnUp.addEventListener('click', function() {
    let sortUp = [...cards].sort(function(card, nextCard) {
        return card.getAttribute('data-price') - nextCard.getAttribute('data-price');
    });
    catalog.innerHTML = '';

    for( let card of sortUp) {
        catalog.appendChild(card)
    }
})

btnDown.addEventListener('click', function() {
    let sortDown = [...cards].sort(function(card, nextCard) {
        return nextCard.getAttribute('data-price') - card.getAttribute('data-price');
    });

    catalog.innerHTML = '';

    for( let card of sortDown) {
        catalog.appendChild(card)
    }
})

btnHave.addEventListener('click', function() {
    console.log('I see u')
})