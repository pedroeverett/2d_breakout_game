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
  var brickRowCount = 3;
  var brickColmCount = 5;
  var brickHeight = 20;
  var brickWidth = 75;
  var brickOffsetLeft = 30;
  var brickOffsetTop = 30;
  var brickPadding = 10;
  
  var bricks = [];
  for(columnNumber = 0; columnNumber < brickColmCount; columnNumber++) {
    bricks[columnNumber] = [];
    for(rowNumber = 0; rowNumber < brickRowCount; rowNumber++) {
      bricks[columnNumber][rowNumber] = {x: 0, y: 0, hit: true};
    }
  }

  var ballHitsBrick = function() {
    for(columnNumber = 0; columnNumber < brickColmCount; columnNumber++) {
      for(rowNumber = 0; rowNumber < brickRowCount; rowNumber++) {
        var b = bricks[columnNumber][rowNumber];
        if(b.hit == true) {
          if(y > b.y && y < b.y + brickHeight + ballSize && x > b.x && x < b.x + brickWidth + ballSize) {
            my = -my;
            b.hit = false;
          }
        }
      }
    }
  }

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


  var drawBricks = function() {
    for(columnNumber = 0; columnNumber < brickColmCount; columnNumber++) {
      for(rowNumber = 0; rowNumber < brickRowCount; rowNumber++) {
        if(bricks[columnNumber][rowNumber].hit == true) {
          var brickX = (columnNumber * (brickWidth + brickPadding)) + brickOffsetLeft;
          var brickY = (rowNumber * (brickHeight + brickPadding)) + brickOffsetTop;
          bricks[columnNumber][rowNumber].x = brickX;
          bricks[columnNumber][rowNumber].y = brickY;
          context.beginPath();
          context.rect(brickX, brickY, brickWidth, brickHeight);
          context.fillStyle = 'green';
          context.fill();
          context.closePath();
        }
      }
    }
  }

  var drawObjects = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    ballHitsBrick();

    if (y + my < ballSize) {
      my = -my;
    } else if (y + my > (canvas.height - paddleHeight) - ballSize) {
      if (x > paddleX - paddleWidth && x < paddleX + paddleWidth) {
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