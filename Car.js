const boardBorder = 'black';
const boardBackground = 'green';
let orientationLeft = "left";
let orientationRight = "right";
let orientationUp = "up";
let orientationDown = "down";
let score = 0
let dx = 10;
let dy = 0
let carX = 250;
let carY = 250;
let speed = 20
let changeDirection = false;
const gameboard = document.getElementById("gameCanvas");
const gameboard_ctx = gameboard.getContext("2d");
Start();
genReward();
genObstacle();
document.addEventListener("keydown", changeDirection)
class Car {
    constructor() {
        this.x = carX;
        this.y = carY;
        this.speed = speed;
        this.orientation = orientationUp
    }
    buildImage() {
        this.image = this.orientation + '.png';
    }
}



function clear_board() {
    gameboard_ctx.fillStyle = boardBackground;
    gameboard_ctx.strokestyle = boardBorder;
    gameboard_ctx.fillRect( 0,0);
    gameboard_ctx.strokeRect(0,0);
}
