window.addEventListener('load', function() {

  //var canvas = document.querySelector('.gameCanvas');
  var canvas = document.getElementById('gameCanvas');
  var context = canvas.getContext('2d');

  var ballSize = 10;
  var paddleHeight = 10;
  var paddleWeidth = 75;
  var paddleX = (canvas.width - paddleWeidth) / 2;   
  var x = canvas.width / 2;
  var y = canvas.height - 30;
  var mx = 2;
  var my = -2;
  var rightKeyPressed = false;
  var leftKeyPressed = false;

  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyUpHandler, false);

    function keyDownHandler(e) {
    if (e.keyCode == 78) {
      leftKeyPressed = true;
    } else if (e.keyCode == 77) {
      rightKeyPressed = true;
    }
  }
  
    function keyUpHandler(e) {
    if (e.keyCode == 78) {
      leftKeyPressed = false;
    } else if (e.keyCode == 77) {
      rightKeyPressed = false;
    }
  }

  var drawBall = function() {
    context.beginPath();
    context.arc(x, y, ballSize, 0, Math.PI * 2);
    context.fillStyle = 'orange';
    context.fill();
    context.closePath();
  }

  var drawPaddle = function() {
    context.beginPath();
    context.rect(paddleX, canvas.height - paddleHeight, paddleWeidth, paddleHeight);
    context.fillStyle = 'black';
    context.fill();
    context.closePath();
  }

  var drawObjects = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if (y + my < ballSize || y + my > canvas.height - ballSize) {
      my = -my;
    }

    if (x + mx < ballSize || x + mx > canvas.width - ballSize) {
      mx = -mx;
    }

    if (leftKeyPressed && paddleX > 0) {
      paddleX -= 7;
    } else if (rightKeyPressed && paddleX < canvas.width) {
      paddleX += 7;
    }

    x += mx;
    y += my;
  }
  setInterval(drawObjects, 10);

})