class Player {
    constructor(gameWidth, gameHeight) {
        //width and height of player
        this.width = 50;
        this.height = 50;

        //sets position of player
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight / 2 - this.height / 2,
        }
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this,height)
    }
}