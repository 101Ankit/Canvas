var Canvas = document.querySelector('Canvas');
Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;
var c = Canvas.getContext('2d'); //Here this c variable wil stand for context;
/*
c.fillStyle = 'rgba(255,255,0,0.5)';
c.fillRect(100, 100, 100,100);
c.fillRect(200, 100, 100,100);//c.fillRect(x, y, width,height)
c.fillRect(300, 100, 100, 100);
c.fillRect(300,200,100,100);
c.fillRect(300, 300, 100,100);
c.fillRect(300, 400, 100,100);
c.fillRect(100, 200, 100,100);
c.fillRect(100, 300, 100,100);
c.fillRect(100, 400, 100,100);
c.fillRect(200, 300, 100,100);
console.log(Canvas); //Made A ;
//Line
c.beginPath();
c.moveTo(50,300);//c.moveTo(x,y) // Going to a point, This will be invisible unless we call the stroke method
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle= "#fa34a3";
c.stroke();
//Arc / Circle
/* syntax /here angles are in radian
c.arc(x:Int, y: Int, r: Int, 
	startAngle:Float, EndAngle:Float
	drawCounterClockwise: Bool (false));
*/

/*
//multiple-circles using for loop
for(let i=0; i< 1000; i++)
{
	var x= Math.random() * window.innerWidth;
    var y= Math. random() * window.innerHeight;
	c.beginPath()
    c.arc(x, y,30, 0, Math.PI * 2,false);
    c.strokeStyle=    'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
    	+ (Math.floor(Math.random() * 256)) + ',' 
    	+ (Math.floor(Math.random() * 256)) + ')';
    c.stroke();
}
*/

function Circle(x,y,dx,dy,radius)
{
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.draw = function(){
      c.beginPath()
c.arc(this.x, this.y,this.radius, 0, Math.PI * 2,false);
c.strokeStyle='blue';
c.stroke();
c.fill();
	}
 this.update = function(){
if(this.x + this.radius >innerWidth || this.x - this.radius < 0)
{
	this.dx=-this.dx;
}
if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
{
	this.dy=-this.dy;
}
this.x+= this.dx;
this.y+=this.dy;
this.draw();
 }
}

   var circleArray=[];
 for(var i=0;i<100;i++)
 {
 	var radius=30;
 	var x=Math.random() * (innerWidth - radius * 2) + radius; //substract the diameter of the circle from the innerWidth of the circle so that it does'nt gets caught up in right side of the screen and add radius so that the same does'nt happen on the other side;
	var y=Math.random() * (innerHeight -radius * 2) + radius; 
    var dx = Math.random()- 0.5 ;//velocity of x;
    var dy=Math.random()-0.5 ;
    
 	circleArray.push(new Circle(x,y,dx,dy,radius));
 }


	
function animate(){

	requestAnimationFrame(animate);
c.clearRect(0,0,innerWidth,innerHeight);
for(var i=0; i < circleArray.length;i++)
{
	circleArray[i].update();
}
}
animate();

