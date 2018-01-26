var Canvas = document.querySelector('Canvas');
Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;
var c = Canvas.getContext('2d'); //Here this c variable wil stand for context;
var mouse = {
	x: undefined,
	y:undefined,
}
var maxRadius = 40;
//var minRadius = 2;
var colorArray =[
'#292C44',
'#FF5349',
'#F0F0F1',
'#18CDCA',
'#4F80E1',
];
window.addEventListener('mousemove', function(event){
	mouse.x=event.x;
	mouse.y=event.y;
})
window.addEventListener('resize', function(resize){
	Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;
init();
})
function Circle(x,y,dx,dy,radius)
{
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.minRadius = radius;
	this.color=colorArray[Math.floor(Math.random() * colorArray.length)]
	this.draw = function(){
      c.beginPath()
c.arc(this.x, this.y,this.radius, 0, Math.PI * 2,false);
c.fillStyle = this.color;
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
//interactivity
if(mouse.x - this.x < 50 && mouse.x -this.x >-50 
&& mouse.y - this.y< 50 && mouse.y -this.y > -50 ) {
if(this.radius < maxRadius) {
	this.radius += 1;
}
} 

else if(this.radius > this.minRadius) {
this.radius -= 1;
}

this.draw();
 }
}
var circleArray=[];
function init()
{
	 circleArray=[];
 for(var i=0;i<900;i++)
 {
 	var radius=Math.random() * 3 + 1;
 	var x=Math.random() * (innerWidth - radius * 2) + radius; //substract the diameter of the circle from the innerWidth of the circle so that it does'nt gets caught up in right side of the screen and add radius so that the same does'nt happen on the other side;
	var y=Math.random() * (innerHeight -radius * 2) + radius; 
    var dx = Math.random()- 0.5 ;//velocity of x;
    var dy=Math.random()-0.5 ;
    
 	circleArray.push(new Circle(x,y,dx,dy,radius));
 }
}	

function animate(){

	requestAnimationFrame(animate);
c.clearRect(0,0,innerWidth,innerHeight);
for(var i=0; i < circleArray.length;i++)
{
	circleArray[i].update();
}
}
init();
animate();

