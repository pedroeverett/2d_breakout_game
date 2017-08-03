window.addEventListener('load', function() {

  //var canvas = document.querySelector('.gameCanvas');
  var canvas = document.getElementById('gameCanvas');
  var context = canvas.getContext('2d');

  // //text draw on canvas
  // context.beginPath();
  // context.rect(60,40,30,30);
  // context.fillStyle = 'orange';
  // context.fill();
  // context.closePath();  
  var x = canvas.width / 2;
  var y = canvas.height - 30;
  var mx = 2;
  var my = -2;

  var drawBall = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fillStyle = 'orange';
    context.fill();
    context.closePath();
    x += mx;
    y += my;
  }
  setInterval(drawBall, 10);

})