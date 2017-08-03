window.addEventListener('load', function() {

  //var canvas = document.querySelector('.gameCanvas');
  var canvas = document.getElementById('gameCanvas');
  var context = canvas.getContext('2d');
 
  var ballSize = 10;
  var x = canvas.width / 2;
  var y = canvas.height - 30;
  var mx = 2;
  var my = -2;

  var drawBall = function() {
    context.beginPath();
    context.arc(x, y, ballSize, 0, Math.PI * 2);
    context.fillStyle = 'orange';
    context.fill();
    context.closePath();
  }

  var drawObjects = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += mx;
    y += my;

    if (y + my < ballSize || y + my > canvas.height - ballSize) {
      my = -my;
    }


    if (x + mx < ballSize || x + mx > canvas.width - ballSize) {
      mx = -mx;
    }
  }
  setInterval(drawObjects, 10);

})