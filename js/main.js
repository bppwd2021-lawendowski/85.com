//assigns gameScreen to a variable
var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext('2d');

var CanvWidth = 800;
var CanvHeight = 500;

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 100, 100);

const Player = require('./player')
const player = new Player(CanvWidth, CanvHeight);
player.draw(ctx);