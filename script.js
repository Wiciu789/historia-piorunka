
// Licznik
const startDate = new Date("2022-07-15T00:00:00");
const timer = document.getElementById("timer");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    timer.innerText = `${days} dni, ${hours} godz, ${minutes} min, ${seconds} sek`;
}
setInterval(updateTimer, 1000);
updateTimer();

// Puzzle
const canvas = document.getElementById("puzzleCanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "piorun_puzzle_resized.jpg";

let pieces = [];
const rows = 4, cols = 4;
const pieceW = canvas.width / cols;
const pieceH = canvas.height / rows;

img.onload = () => {
    shufflePuzzle();
};

function shufflePuzzle() {
    pieces = [];
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            pieces.push({ x, y });
        }
    }
    pieces.sort(() => Math.random() - 0.5);
    drawPuzzle();
}

function drawPuzzle() {
    for (let i = 0; i < pieces.length; i++) {
        const sx = pieces[i].x * pieceW;
        const sy = pieces[i].y * pieceH;
        const dx = (i % cols) * pieceW;
        const dy = Math.floor(i / cols) * pieceH;
        ctx.drawImage(img, sx, sy, pieceW, pieceH, dx, dy, pieceW, pieceH);
    }
}
