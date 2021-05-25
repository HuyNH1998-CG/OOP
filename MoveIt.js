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
    switch (event.which) {
        case 37:
            if (hero.left < window.innerWidth - hero.size) {
                hero.moveLeft();

            }
            break;
        case 38:
            if (hero.left < window.innerWidth - hero.size) {
                hero.moveUp();

            }
            break;
        case 39:
            if (hero.left < window.innerWidth - hero.size) {
                hero.moveRight();

            }
            break;
        case 40:
            if (hero.left < window.innerWidth - hero.size) {
                hero.moveDown();
            }
            break;
    }

    setTimeout(start, 500)
}

start()