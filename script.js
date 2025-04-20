
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 280, y: 180, size: 20 };

function drawPlayer() {
  ctx.fillStyle = "cyan";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
}

function move(dx, dy) {
  player.x += dx;
  player.y += dy;
  draw();
}

// Keyboard movement
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "w") move(0, -10);
  if (e.key === "ArrowDown" || e.key === "s") move(0, 10);
  if (e.key === "ArrowLeft" || e.key === "a") move(-10, 0);
  if (e.key === "ArrowRight" || e.key === "d") move(10, 0);
});

// Touch controls
document.getElementById("upBtn").addEventListener("click", () => move(0, -10));
document.getElementById("downBtn").addEventListener("click", () => move(0, 10));
document.getElementById("leftBtn").addEventListener("click", () => move(-10, 0));
document.getElementById("rightBtn").addEventListener("click", () => move(10, 0));

draw();
