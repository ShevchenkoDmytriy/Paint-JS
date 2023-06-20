 var canvas = document.getElementById('canvas');
 var ctx = canvas.getContext('2d');
 var imageInput = document.getElementById('image-input');
 var rectangleButton = document.getElementById('rectangle-button');
 var circleButton = document.getElementById('circle-button');
 var isDrawing = false;
 var lastX = 0;
 var lastY = 0;
 canvas.addEventListener('mousedown', startDrawing);
 canvas.addEventListener('mousemove', draw);
 canvas.addEventListener('mouseup', stopDrawing);
 canvas.addEventListener('mouseout', stopDrawing);

 function startDrawing(e) {
     isDrawing = true;
     lastX = e.clientX - canvas.offsetLeft;
     lastY = e.clientY - canvas.offsetTop;
 }
 function draw(e) {
     if (!isDrawing) return;

     var x = e.clientX - canvas.offsetLeft;
     var y = e.clientY - canvas.offsetTop;

     ctx.beginPath();
     ctx.moveTo(lastX, lastY);
     ctx.lineTo(x, y);
     ctx.stroke();

     lastX = x;
     lastY = y;
 }
 function stopDrawing() {
     isDrawing = false;
 }
 imageInput.addEventListener('change', function(e) {
     var file = e.target.files[0];
     var img = new Image();
     img.src = URL.createObjectURL(file);
     img.onload = function() {
         ctx.drawImage(img, 0, 0);
     };
 });
 rectangleButton.addEventListener('click', function() {
     ctx.fillRect(100, 100, 200, 150);
 });
 circleButton.addEventListener('click', function() {
     ctx.beginPath();
     ctx.arc(400, 200, 100, 0, 2 * Math.PI);
     ctx.stroke();
 });