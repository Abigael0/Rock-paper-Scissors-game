
function playGame(playerMove, button) {
    if (button.classList.contains('flipped')) {
        button.classList.remove('flipped');
        return;
    }

    button.classList.add('flipped');

    const cardInner = button.querySelector('.card-inner');

    cardInner.addEventListener('transitionend', function handler(event) {
        if (event.propertyName !== 'transform') return;

        cardInner.removeEventListener('transitionend', handler);

        const randomNumber = Math.random();
        let computerMove = '';

        if (randomNumber < 1 / 3) {
            computerMove = 'rock';
        } else if (randomNumber < 2 / 3) {
            computerMove = 'paper';
        } else {
            computerMove = 'scissors';
        }

        let result = '';

        if (playerMove === computerMove) {
            result = 'It is a tie!';
        } else if (
            (playerMove === 'rock' && computerMove === 'scissors') ||
            (playerMove === 'paper' && computerMove === 'rock') ||
            (playerMove === 'scissors' && computerMove === 'paper')
        ) {
            result = 'You win!';
        } else {
            result = 'You lose!';
        }

        alert(
            `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`
        );
    });
}

