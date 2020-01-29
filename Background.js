
var canvas;
var c;

function Block(x, y, vx, vy)
{
   this.x = x;
   this.y = y;

   this.vx = vx;
   this.vy = vy;

   this.Draw = function()
   {
      c.fillRect(x += vx, y += vy, 20,20);

      if (y >= canvas.height - 20)
      {
         vy = -Math.random() * 5;
      }
      else if (y < 0)
      {
         vy = Math.random() * 5;
      }

      if (x >= canvas.width - 20)
      {
         vx = -Math.random() * 5;
      }
      else if (x < 0)
      {
         vx = Math.random() * 5;
      }
   }
}

var testBlock = new Block(
   Math.random() * window.innerWidth,
   Math.random() * window.innerHeight,
   10,10);

var testBlock2 = new Block(
   Math.random() * window.innerWidth,
   Math.random() * window.innerHeight,
   10,10);

var testBlock3 = new Block(
   Math.random() * window.innerWidth,
   Math.random() * window.innerHeight,
   10,10);

function UpdateBackground()
{
   requestAnimationFrame(UpdateBackground);
   c.fillStyle="#ffffff";
   c.clearRect(0,0, innerWidth, innerHeight);

   testBlock.Draw();
   testBlock2.Draw();
   testBlock3.Draw();
}

function LoadBackground()
{
   canvas = document.getElementById('background_canvas');
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;

   c = canvas.getContext('2d');
   requestAnimationFrame(UpdateBackground);
}

