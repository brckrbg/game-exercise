let firstCard = "";
let secondCard = "";

function showCard(card, emoji) {

    card.innerHTML = emoji;

    if (firstCard == "") {
        firstCard = emoji;
    } else {
        secondCard = emoji;

        if (firstCard == secondCard) {
            alert("Match!");
        } else {
            alert("Try again!");
        }

        firstCard = "";
        secondCard = "";
    }

}