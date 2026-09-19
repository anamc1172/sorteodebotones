const redBtn = document.getElementById('red-btn');
const blueBtn = document.getElementById('blue-btn');
const gameArea = document.getElementById('game-area');
const resultArea = document.getElementById('result-area');
const resultMessage = document.getElementById('result-message');
const resetBtn = document.getElementById('reset-btn');

function playGame() {
    const outcomes = ["Has ganado", "Has perdido"];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    const result = outcomes[randomIndex];

    resultMessage.textContent = result;
    resultMessage.style.color = result === "Has ganado" ? "#2ed573" : "#ff4757";
    
    gameArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
}

redBtn.addEventListener('click', playGame);
blueBtn.addEventListener('click', playGame);

resetBtn.addEventListener('click', () => {
    gameArea.classList.remove('hidden');
    resultArea.classList.add('hidden');
});
