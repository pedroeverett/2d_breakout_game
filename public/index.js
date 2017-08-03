window.addEventListener('load', function() {

  //var canvas = document.querySelector('.gameCanvas');
  var canvas = document.getElementById('gameCanvas');
  var context = canvas.getContext('2d');

  //text draw on canvas
  context.beginPath();
  context.rect(60,40,30,30);
  context.fillStyle = 'orange';
  context.fill();
  context.closePath();  

})