//UPPER LEFT CIRCLE
var outerCircle1 = new Path.Circle(new Point(45, 45), 45);
outerCircle1.fillColor = 'black';
var innerCircle1 = new Path.Circle(new Point(45, 45), 40);
innerCircle1.fillColor = 'white';

//goes fom 0 to 1, represents completion % of the circle
var completion1 = 0.0;

//distance from bottom of circle
var yval1 = 85 - (completion1) * 80;
//distance from center of circle (+/-)
var xval1 = Math.sqrt(Math.pow(40,2) - Math.pow((Math.abs(completion1 * 80 - 40)),2));

//left side of the semicircle
var firstPoint1 = new Point(45 - xval1, yval1);

//point on the bottom middle of the circle, never changes
var throughPoint1 = new Point(45, 85);

// The point at which the arc will end on the right side of the circle
var toPoint1 = new Point(45 + xval1, yval1);

// Draw an arc through 'throughPoint' to 'toPoint'
var path1 = new Path.Arc({
    from: [45 - xval1, yval1],
    through: [45, 90],
    to: [45 + xval1, yval1],
    strokeColor: 'red'
});

path1.opacity = 0.5;
//closes off the semicircle
path1.closed = true;
path1.fillColor = 'red';

var hitBox1 = new Path.Circle(new Point(45, 45), 40);
hitBox1.fillColor = 'white';
hitBox1.opacity = 0;

//click on the white circle
hitBox1.onMouseDown = function(event) {
    completion1 += 0.1;
}

//UPPER RIGHT CIRCLE
var outerCircle2 = new Path.Circle(new Point(160, 45), 45);
outerCircle2.fillColor = 'black';
var innerCircle2 = new Path.Circle(new Point(160, 45), 40);
innerCircle2.fillColor = 'white';

//goes fom 0 to 1, represents completion % of the circle
var completion2 = 0.0;

//distance from bottom of circle
var yval2 = 85 - (completion2) * 80;
//distance from center of circle (+/-)
var xval2 = Math.sqrt(Math.pow(40,2) - Math.pow((Math.abs(completion2 * 80 - 40)),2));

//left side of the semicircle
var firstPoint2 = new Point(160 - xval2, yval2);

//point on the bottom middle of the circle, never changes
var throughPoint2 = new Point(160, 85);

// The point at which the arc will end on the right side of the circle
var toPoint2 = new Point(160 + xval2, yval2);

// Draw an arc through 'throughPoint' to 'toPoint'
var path2 = new Path.Arc({
    from: [160 - xval2, yval2],
    through: [160, 85],
    to: [160 + xval2, yval2],
    strokeColor: 'red'
});

path2.opacity = 0.5;
//closes off the semicircle
path2.closed = true;
path2.fillColor = 'red';

var hitBox2 = new Path.Circle(new Point(160, 45), 45);
hitBox2.fillColor = 'white';
hitBox2.opacity = 0;

//click on the white circle
hitBox2.onMouseDown = function(event) {
    completion2 += 0.1;
}

//LOWER LEFT CIRCLE
var outerCircle3 = new Path.Circle(new Point(45, 160), 45);
outerCircle3.fillColor = 'black';
var innerCircle3 = new Path.Circle(new Point(45, 160), 40);
innerCircle3.fillColor = 'white';

//goes fom 0 to 1, represents completion % of the circle
var completion3 = 0.0;

//distance from bottom of circle
var yval3 = 200 - (completion3) * 80;
//distance from center of circle (+/-)
var xval3 = Math.sqrt(Math.pow(40,2) - Math.pow((Math.abs(completion3 * 80 - 40)),2));

//left side of the semicircle
var firstPoint3 = new Point(45 - xval3, yval3);

//point on the bottom middle of the circle, never changes
var throughPoint3 = new Point(45, 200);

// The point at which the arc will end on the right side of the circle
var toPoint3 = new Point(45 + xval3, yval3);

// Draw an arc through 'throughPoint' to 'toPoint'
var path3 = new Path.Arc({
    from: [45 - xval3, yval3],
    through: [45, 200],
    to: [45 + xval3, yval3],
    strokeColor: 'red'
});

path3.opacity = 0.5;
//closes off the semicircle
path3.closed = true;
path3.fillColor = 'red';

var hitBox3 = new Path.Circle(new Point(45, 160), 40);
hitBox3.fillColor = 'white';
hitBox3.opacity = 0;

//click on the white circle
hitBox3.onMouseDown = function(event) {
    completion3 += 0.1;
}

//LOWER RIGHT CIRCLE
var outerCircle4 = new Path.Circle(new Point(160, 160), 45);
outerCircle4.fillColor = 'black';
var innerCircle4 = new Path.Circle(new Point(160, 160), 40);
innerCircle4.fillColor = 'white';

//goes fom 0 to 1, represents completion % of the circle
var completion4 = 0.0;

//distance from bottom of circle
var yval4 = 200 - (completion4) * 80;
//distance from center of circle (+/-)
var xval4 = Math.sqrt(Math.pow(40,2) - Math.pow((Math.abs(completion4 * 80 - 40)),2));

//left side of the semicircle
var firstPoint4 = new Point(160 - xval4, yval4);

//point on the bottom middle of the circle, never changes
var throughPoint4 = new Point(160, 200);

// The point at which the arc will end on the right side of the circle
var toPoint4 = new Point(160 + xval4, yval4);

// Draw an arc through 'throughPoint' to 'toPoint'
var path4 = new Path.Arc({
    from: [160 - xval4, yval4],
    through: [160, 200],
    to: [160 + xval4, yval4],
    strokeColor: 'red'
});

path4.opacity = 0.5;
//closes off the semicircle
path4.closed = true;
path4.fillColor = 'red';

var hitBox4 = new Path.Circle(new Point(160, 160), 45);
hitBox4.fillColor = 'white';
hitBox4.opacity = 0;

//click on the white circle
hitBox4.onMouseDown = function(event) {
    completion4 += 0.1;
}


//every frame: update completion and the semicircle
function onFrame(event) {
    //UPPER LEFT ACTIONS
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	if (completion1 > 1)
    {
        completion1 = 1;
    }
	if (completion1 > 0)
	{
	completion1 -= 0.001;
	}
	//get rid of the old path
	path1.visible = false;
	yval1 = 85 - (completion1) * 80;
    xval1 = Math.sqrt(Math.pow(40,2) - Math.pow((Math.abs(completion1 * 80 - 40)),2));
    path1 = new Path.Arc({
    from: [45 - xval1, yval1],
    through: [45, 85],
    to: [45 + xval1, yval1],
    strokeColor: 'red'
});
    path1.opacity = 0.5;
    path1.closed = true;
    path1.fillColor = 'red';
    var hitBox1 = new Path.Circle(new Point(45, 45), 40);
    hitBox1.fillColor = 'white';
    hitBox1.opacity = 0;
    hitBox1.onMouseDown = function(event) {
    completion1 += 0.1;
}

//UPPER RIGHT ACTIONS
// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	if (completion2 > 1)
    {
        completion2 = 1;
    }
	if (completion2 > 0)
	{
	completion2 -= 0.001;
	}
	//get rid of the old path
	path2.visible = false;
	yval2 = 85 - (completion2) * 80;
    xval2 = Math.sqrt(Math.pow(40,2) - Math.pow((Math.abs(completion2 * 80 - 40)),2));
    path2 = new Path.Arc({
    from: [160 - xval2, yval2],
    through: [160, 85],
    to: [160 + xval2, yval2],
    strokeColor: 'red'
});
    path2.opacity = 0.5;
    path2.closed = true;
    path2.fillColor = 'red';
    var hitBox2 = new Path.Circle(new Point(160, 45), 40);
    hitBox2.fillColor = 'white';
    hitBox2.opacity = 0;
    hitBox2.onMouseDown = function(event) {
    completion2 += 0.1;
}

//LOWER LEFT ACTIONS
// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	if (completion3 > 1)
    {
        completion3 = 1;
    }
	if (completion3 > 0)
	{
	completion3 -= 0.001;
	}
	//get rid of the old path
	path3.visible = false;
	yval3 = 200 - (completion3) * 80;
    xval3 = Math.sqrt(Math.pow(40,2) - Math.pow((Math.abs(completion3 * 80 - 40)),2));
    path3 = new Path.Arc({
    from: [45 - xval3, yval3],
    through: [45, 200],
    to: [45 + xval3, yval3],
    strokeColor: 'red'
});
    path3.opacity = 0.5;
    path3.closed = true;
    path3.fillColor = 'red';
    var hitBox3 = new Path.Circle(new Point(45, 200), 40);
    hitBox3.fillColor = 'white';
    hitBox3.opacity = 0;
    hitBox3.onMouseDown = function(event) {
    completion3 += 0.1;
}

//LOWER RIGHT ACTIONS
// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	if (completion4 > 1)
    {
        completion4 = 1;
    }
	if (completion4 > 0)
	{
	completion4 -= 0.001;
	}
	//get rid of the old path
	path4.visible = false;
	yval4 = 200 - (completion4) * 80;
    xval4 = Math.sqrt(Math.pow(40,2) - Math.pow((Math.abs(completion4 * 80 - 40)),2));
    path4 = new Path.Arc({
    from: [160 - xval4, yval4],
    through: [160, 200],
    to: [160 + xval4, yval4],
    strokeColor: 'red'
});
    path4.opacity = 0.5;
    path4.closed = true;
    path4.fillColor = 'red';
    var hitBox4 = new Path.Circle(new Point(160, 160), 40);
    hitBox4.fillColor = 'white';
    hitBox4.opacity = 0;
    hitBox4.onMouseDown = function(event) {
    completion4 += 0.1;
}



}



