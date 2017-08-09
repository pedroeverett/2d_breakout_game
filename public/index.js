window.addEventListener('load', function() {

  //var canvas = document.querySelector('.gameCanvas');
  var canvas = document.getElementById('gameCanvas');
  var context = canvas.getContext('2d');

  var ballSize = 10;
  var paddleHeight = 10;
  var paddleWidth = 75;
  var paddleX = (canvas.width - paddleWidth) / 2;   
  var x = canvas.width / 2;
  var y = canvas.height - 30;
  var mx = 2; //ball speed
  var my = -2; //ball speed
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
    context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    context.fillStyle = 'black';
    context.fill();
    context.closePath();
  }

  var drawObjects = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if (y + my < ballSize) {
      my = -my;
    } else if (y + my > canvas.height - ballSize) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      my = -my; //makes ball move faster/slower when hits the paddle
    } else {
        alert("GAME OVER");
        document.location.reload();
    }
    }

    if (x + mx > canvas.width - ballSize || x + mx < ballSize) {
      mx = -mx;
    }


    if (leftKeyPressed && paddleX > 0) {
      paddleX -= 7; //paddle speed left
    } else if (rightKeyPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7; //paddle speed right
    }

    x += mx;
    y += my;
  }
  setInterval(drawObjects, 10); //10 is the time in miliseconds

})