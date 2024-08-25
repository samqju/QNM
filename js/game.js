// Initialize and manage game logic
let gameInterval;
const gameDuration = 10000; // 10 seconds

// Example function to start the game
function startGame() {
    // Clear previous interval if any
    if (gameInterval) clearInterval(gameInterval);

    // Reset game state
    resetGame();

    // Start the game timer
    gameInterval = setInterval(() => {
        // Timer logic here
    }, 1000);
}

// Function to reset game state
function resetGame() {
    // Reset timer and buttons
    document.getElementById('timer-container').textContent = '10';
    document.querySelectorAll('#prediction-buttons button').forEach(button => {
        button.disabled = false;
    });
}

// Example function to handle prediction
function makePrediction(prediction) {
    // Disable buttons after prediction
    document.querySelectorAll('#prediction-buttons button').forEach(button => {
        button.disabled = true;
    });

    // Simulate prediction logic and results
    setTimeout(() => {
        showResult(Math.random() > 0.5); // Simulate 50% chance of winning
    }, 2000); // Simulate result delay
}

// Example function to show results
function showResult(isCorrect) {
    const resultOverlay = document.getElementById('result-overlay');
    const message = isCorrect ? 'Bravo!! You won' : 'Sorry, you lost';
    
    resultOverlay.innerHTML = `
        <h1>${message}</h1>
        <div class="${isCorrect ? 'confetti' : 'sad-animation'}"></div>
    `;
    resultOverlay.style.display = 'flex';

    setTimeout(() => {
        resultOverlay.style.display = 'none';
        startGame(); // Restart game after showing result
    }, 2000); // Show result for 2 seconds
}

// Add event listeners for prediction buttons
document.querySelectorAll('#prediction-buttons button').forEach(button => {
    button.addEventListener('click', (event) => {
        makePrediction(event.target.dataset.prediction);
    });
});

// Start the game when the page loads
window.onload = startGame;
