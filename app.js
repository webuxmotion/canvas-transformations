const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let image = new Image();
image.src = "example.png";
image.onload = function() {
  // Top left
 ctx.translate(50, 50);
 ctx.drawImage(image, 0, 0, 500, 500, 0, 0, 200, 200);
 // Bottom left
 ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset the transformation matrix
 ctx.translate(50, 450);
 ctx.scale(1, -1);
 ctx.drawImage(image, 0, 0, 500, 500, 0, 0, 200, 200);
 // Bottom right
 ctx.setTransform(1, 0, 0, 1, 0, 0);
 ctx.translate(450, 450);
 ctx.scale(-1, -1);
 ctx.drawImage(image, 0, 0, 500, 500, 0, 0, 200, 200);
 // Top right
 ctx.setTransform(1, 0, 0, 1, 0, 0);
 ctx.translate(450, 50);
 ctx.scale(-1, 1);
 ctx.drawImage(image, 0, 0, 500, 500, 0, 0, 200, 200);
};
