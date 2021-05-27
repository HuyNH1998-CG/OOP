function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.size = size;
    this.left = left;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width = "' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />'
    }

    this.moveRight = function () {
        this.left += this.speed;
    }
    this.moveLeft = function () {
        this.left -= this.speed;
    }
    this.moveUp = function () {
        this.top -= this.speed;
    }
    this.moveDown = function () {
        this.top += this.speed
    }
}

let hero = new Hero('Furen.jpg', 20, 30, 100, 25);

function start() {
    document.getElementById('game').innerHTML = hero.getHeroElement();

    setTimeout(start, 1)
}
let changing_direction = false
document.addEventListener("keydown", change_direction);
function change_direction(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    if (changing_direction) return;
    changing_direction = true;
    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
}
start()