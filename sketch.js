let height = 700
let width = 1350
let extraWidth = 140
let extraHeight = 50
let text_align = 0
let color1 = 0
let saturation = 255
let brightness = 200
let pointsArray = []
let myFont1
let dCol = 0.1

//Variables
x = 1
y = 2
z = 1

//Constants
a = 10
b = 28
c = 8/3
dt = 0.01

extraCanvas_origin = 
   {
      x: -extraWidth/2,
      y: -extraHeight/2
   }

function setup() 
{
   angleMode(DEGREES)
   createCanvas(width, height, WEBGL)
   smooth()
   extraCanvas = createGraphics(extraWidth, extraHeight, WEBGL)
   colorMode(HSB)
   createEasyCam(0, 500)
   background(0)
   extraCanvas.background(100)
   extraCanvas.clear()
   
   
}

function draw() 
{  
   background(0)
   
   //Extra canvas:
   image(extraCanvas, -width/2+119,-height/2+60)
  
   extraCanvas.clear()

   
   
   extraCanvas.textFont(myFont1)
   extraCanvas.fill(255,255,250,200)
   extraCanvas.textAlign(CENTER, CENTER, CENTER)
   extraCanvas.textSize(30)
   if(frameCount > 9999)
   {
      text_align = 15
   }
   
   extraCanvas.text(frameCount,extraCanvas_origin.x + 40 + text_align, extraCanvas_origin.y + 20)

   //Main canvas
   dx = (a*(y - x))*dt
   dy = (x*(b - z) - y)*dt
   dz = (x*y - c*z)*dt

   x = x + dx
   y = y + dy
   z = z + dz
   
   vector = createVector(x, y, z)
   pointsArray.push(vector)

   scale(4)
   strokeWeight(0.5)
   color1 = 0
   beginShape()
   noFill()
   for(i = 0; i < pointsArray.length; i++)
   {  
      stroke(color1, saturation, brightness)
      vertex(pointsArray[i].x, pointsArray[i].y, pointsArray[i].z)
      color1 += dCol
      if(color1 > 255 || color1 < 0)
      {
      dCol *= -1
      }
   }
   endShape()
}
function preload()
{
   myFont1 = loadFont('Arial Italic.ttf')
}