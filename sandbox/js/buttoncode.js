var outerCircle = new Path.Circle(new Point(45, 45), 45);
outerCircle.fillColor = 'black';
var innerCircle = new Path.Circle(new Point(45, 45), 40);
innerCircle.fillColor = 'white';

//goes fom 0 to 1, represents completion % of the circle
var completion = 0.0;

//distance from bottom of circle
var yval = 85 - (completion) * 80;
//distance from center of circle (+/-)
var xval = Math.sqrt(Math.pow(40,2) - Math.pow((Math.abs(completion * 80 - 40)),2));

//left side of the semicircle
var firstPoint = new Point(45 - xval, yval);

//point on the bottom middle of the circle, never changes
var throughPoint = new Point(45, 85);

// The point at which the arc will end on the right side of the circle
var toPoint = new Point(45 + xval, yval);

// Draw an arc through 'throughPoint' to 'toPoint'
var path = new Path.Arc({
    from: [45 - xval, yval],
    through: [45, 90],
    to: [45 + xval, yval],
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
	yval = 85 - (completion) * 80;
    xval = Math.sqrt(Math.pow(40,2) - Math.pow((Math.abs(completion * 80 - 40)),2));
    path = new Path.Arc({
    from: [45 - xval, yval],
    through: [45, 85],
    to: [45 + xval, yval],
    strokeColor: 'red'
});
    path.opacity = 0.5;
    path.closed = true;
    path.fillColor = 'red';
    var hitBox = new Path.Circle(new Point(45, 45), 40);
    hitBox.fillColor = 'white';
    hitBox.opacity = 0;
    hitBox.onMouseDown = function(event) {
    completion += 0.1;
}
}
