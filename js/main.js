//assigns gameScreen to a variable
var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

//clears the canvas of all rectangles
ctx.clearRect(0, 0, 800, 500);

//creates a player variable
var player = new Player(GAME_WIDTH, GAME_HEIGHT);