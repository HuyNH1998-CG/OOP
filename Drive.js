let gameBoardWidth = 500;
let gameBoardHeight = 500;

let orientationLeft = "left";
let orientationRight = "right";
let orientationUp = "up";
let orientationDown = "down";

let carWidth = 60;
let carHeight = 90;

let defaultCarXPosition = 250;
let defaultCarYPostion = 250;
let defaultCarOrientation = orientationUp;
let defaultCarSpeed = 20;

function Car() {
    this.xPosition = defaultCarXPosition;
    this.yPosition = defaultCarYPostion;
    this.orientation = orientationUp
    this.speed = defaultCarSpeed;
    this.buildImage = function () {
        this.image = this.orientation + '.png';
    };
    this.buildImage();
    // this.move = function () {
    //     switch (this.orientation) {
    //         case orientationDown:
    //             this.yPosition += this.speed;
    //             break;
    //         case orientationUp:
    //             this.yPosition -= this.speed;
    //             break;
    //         case orientationLeft:
    //             this.xPosition -= this.speed;
    //             break;
    //         case orientationRight:
    //             this.xPosition += this.speed;
    //             break;
    //     }
    //     this.buildImage()
    };
    this.turn = function (orientation) {
        this.orientation = orientation;
        this.buildImage();
    };
    this.show = function (ctx) {
        let image = new Image();
        let xPosition = this.xPosition;
        let yPosition = this.yPosition;
        image.onload = function () {
            ctx.drawImage(image, xPosition, yPosition);
        };
        image.src = this.image
    }
}

// function Gameboard() {
//     this.car = new Car();
//     this.ctx = undefined;
//     this.start = function () {
//         this.ctx = document.getElementById('gameCanvas').getContext('2d');
//         this.car.show(this.ctx);
//     };
//     this.render = function () {
//         this.ctx.clearRect(0, 0, gameBoardWidth, gameBoardHeight);
//         this.car.show(this.ctx);
//     };
//     this.moveCar = function (event) {
//         let orientation = 0
//         switch (event.which) {
//             case 37:
//                 orientation = orientationLeft;
//                 break;
//             case 38:
//                 orientation = orientationUp;
//                 break;
//             case 39:
//                 orientation = orientationRight;
//                 break;
//             case 40:
//                 orientation = orientationDown;
//                 break;
//         }
//         if (orientation) {
//             if (this.car.orientation !== orientation) {
//                 this.car.orientation = orientation;
//             } else {
//                 this.car.move();
//             }
//             this.render()
//         }
//     }
//     this.hasGameEnded = function () {
//         const hitLeftWall = car.x < 0
//         const hitRightWall = car.x > ctx.width - 10;
//         const hitTopWall = car.y < 0;
//         const hitBottomWall = car.y > ctx.height - 10;
//         return hitLeftWall || hitRightWall || hitBottomWall || hitTopWall
//     }
//     if (this.hasGameEnded()) return
// }
//
// let gameBoard = new Gameboard();
// gameBoard.start()
