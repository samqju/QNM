// confetti.js
function createConfetti(x, y) {
    const confettiColors = ['#ff0', '#0f0', '#f00', '#00f', '#0ff', '#f0f'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        confetti.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 2000); // Remove confetti after 2 seconds
    }
}

// Example function to trigger confetti
function triggerConfetti() {
    const gameContainer = document.getElementById('game-container');
    const rect = gameContainer.getBoundingClientRect();
    createConfetti(rect.width / 2, rect.height / 2);
}
