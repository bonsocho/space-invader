// Get the canvas and context
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

// Define the player
let player = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    width: 50,
    height: 10,
    dx: 2,
};

// Define the invader
let invader = {
    x: Math.random() * canvas.width,
    y: 0,
    width: 30,
    height: 30,
    dy: 1,
};

// Function to draw the player
function drawPlayer() {
    ctx.fillStyle = '#00f';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Function to draw the invader
function drawInvader() {
    ctx.fillStyle = '#f00';
    ctx.fillRect(invader.x, invader.y, invader.width, invader.height);
}

// Function to update the game state
function updateGame() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player and the invader
    drawPlayer();
    drawInvader();

    // Update the player's position
    player.x += player.dx;
    if(player.x + player.width > canvas.width || player.x < 0) {
        player.dx *= -1;
    }

    // Update the invader's position
    invader.y += invader.dy;
    if(invader.y + invader.height > canvas.height) {
        invader.y = 0;
        invader.x = Math.random() * canvas.width;
    }

    requestAnimationFrame(updateGame);
}

// Start the game loop
updateGame();
