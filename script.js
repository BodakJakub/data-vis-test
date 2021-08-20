var cardWrapper;
var sorted = false;

var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        init();
    }    
}, 100)

var init = function() {
    var cardWrapper = document.querySelector(".cards-wrapper");
    cardWrapper.addEventListener('click', function() {
        cardWrapper.classList.add("sorted");
        sorted = true;
    });

    var cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        card.addEventListener("click", function(e) {
            toggleCard(card, cards);
        })

    });
    
    var cardContents = document.querySelectorAll(".card-side__content");
    cardContents.forEach(function(cardContent) {
        cardContent.addEventListener("scroll", function() {
            
            if( cardContent.scrollTop === (cardContent.scrollHeight - cardContent.offsetHeight)) {
                cardContent.classList.add("scrolled");
            } else {
                cardContent.classList.remove("scrolled");
            }
        });
    })
};

var toggleCard = function(card, cards) {
    if (sorted) {
        if (card.classList.contains("flipped")) {
            card.classList.remove("flipped");
        } else {
            cards.forEach(function(c) {
                c.classList.remove("flipped");
            })
            card.classList.add("flipped");
        }
    }
}