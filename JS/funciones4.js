let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const statusDisplay = document.getElementById('result');
const gameCells = document.querySelectorAll('.cell');
const turnDisplay = document.getElementById('turnDisplay');
const restartButton = document.getElementById('restartButton');

// Mostrar de quién es el turno
function updateTurnDisplay() {
    turnDisplay.textContent = ` ★ Turno de: ${currentPlayer} !!`;
}

function handleCellClick(clickedCell, clickedCellIndex) {
    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    handleResultValidation();
    if (gameActive) {
        updateTurnDisplay(); // Actualizar el turno solo si el juego sigue activo
    }
}

function handleResultValidation() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }
        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        turnDisplay.textContent = `Jugador ${currentPlayer} ganó ^_< ☆`; // Mostrar quién ha ganado
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        turnDisplay.textContent = 'Ganó el Gato ^_< ☆'; // Mostrar empate
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusDisplay.textContent = '';
    gameCells.forEach(cell => cell.textContent = '');
    updateTurnDisplay(); // Restablecer visualización del turno
}

gameCells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
});

restartButton.addEventListener('click', restartGame);

updateTurnDisplay();