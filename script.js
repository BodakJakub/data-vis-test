var cardWrapper;

var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        init();
    }    
}, 100)

var init = function() {
    var cardWrapper = document.querySelector(".cards-wrapper");
    console.log(cardWrapper)
    var firstCard = document.querySelector("#card-01");
    firstCard.addEventListener('click', function() {
        if (cardWrapper.classList.contains("sorted")) {
            cardWrapper.classList.remove("sorted")
        } else {
            cardWrapper.classList.add("sorted")
        }
    });
};