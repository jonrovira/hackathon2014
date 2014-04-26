var outerCircle = new Path.Circle(new Point(50, 50), 50);
outerCircle.fillColor = 'black';
var innerCircle = new Path.Circle(new Point(50, 50), 45);
innerCircle.fillColor = 'white';

//goes fom 0 to 1, represents completion % of the circle
var completion = 0.0;

//distance from bottom of circle
var yval = 95 - (completion) * 90;
//distance from center of circle (+/-)
var xval = Math.sqrt(Math.pow(45,2) - Math.pow((Math.abs(completion * 90 - 45)),2));

//left side of the semicircle
var firstPoint = new Point(50 - xval, yval);

//point on the bottom middle of the circle, never changes
var throughPoint = new Point(50, 95);

// The point at which the arc will end on the right side of the circle
var toPoint = new Point(70 + xval, yval);

// Draw an arc through 'throughPoint' to 'toPoint'
var path = new Path.Arc({
    from: [70 - xval, yval],
    through: [70, 115],
    to: [70 + xval, yval],
    strokeColor: 'red'
});

path.opacity = 0.5;
//closes off the semicircle
path.closed = true;
path.fillColor = 'red';

var hitBox = new Path.Circle(new Point(50, 50), 45);
hitBox.fillColor = 'white';
hitBox.opacity = 0;

//click on the white circle
hitBox.onMouseDown = function(event) {
    completion += 0.1;
}



//every frame: update completion and the semicircle
function onFrame(event) {
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	if (completion > 1)
    {
        completion = 1;
    }
	if (completion > 0)
	{
	completion -= 0.001;
	}
	//get rid of the old path
	path.visible = false;
	yval = 95 - (completion) * 90;
    xval = Math.sqrt(Math.pow(45,2) - Math.pow((Math.abs(completion * 90 - 45)),2));
    path = new Path.Arc({
    from: [50 - xval, yval],
    through: [50, 95],
    to: [50 + xval, yval],
    strokeColor: 'red'
});
    path.opacity = 0.5;
    path.closed = true;
    path.fillColor = 'red';
    var hitBox = new Path.Circle(new Point(50, 50), 45);
    hitBox.fillColor = 'white';
    hitBox.opacity = 0;
    hitBox.onMouseDown = function(event) {
    completion += 0.1;
}
}
