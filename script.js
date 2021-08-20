var cardWrapper;

var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        init();
    }    
}, 100)

var init = function() {
    var cardWrapper = document.querySelector(".cards-wrapper");
    var firstCard = document.querySelector("#card-01");
    firstCard.addEventListener('click', function() {
        cardWrapper.classList.add("sorted")
    });

    var cards = document.querySelectorAll(".card");
    cards.forEach(function(card, index) {
        card.addEventListener("click", function(e) {
            toggleCard(card, cards);
        })
    })
};

var toggleCard = function(card, cards) {
    cards.forEach(function(c) {
        c.classList.remove("flipped");
    })
    card.classList.add("flipped");
}