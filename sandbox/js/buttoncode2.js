//FIRST CIRCLE
var outerCircle1 = new Path.Circle(new Point(65, 65), 65);
outerCircle1.fillColor = '#193441';
var innerCircle1 = new Path.Circle(new Point(65, 65), 62);
innerCircle1.fillColor = '#3e606f';

//goes fom 0 to 1, represents completion % of the circle
var completion1 = 0.0;

//distance from bottom of circle
var yval1 = 130 - (completion1) * 124;
//distance from center of circle (+/-)
var xval1 = Math.sqrt(Math.pow(62,2) - Math.pow((Math.abs(completion1 * 124 - 62)),2));

//left side of the semicircle
var firstPoint1 = new Point(65 - xval1, yval1);

//point on the bottom middle of the circle, never changes
var throughPoint1 = new Point(65, 127);

// The point at which the arc will end on the right side of the circle
var toPoint1 = new Point(65 + xval1, yval1);

// Draw an arc through 'throughPoint' to 'toPoint'
var path1 = new Path.Arc({
    from: [65 - xval1, yval1],
    through: [65, 127],
    to: [65 + xval1, yval1],
    strokeColor: 'white'
});

path1.opacity = 0.5;
//closes off the semicircle
path1.closed = true;
path1.fillColor = 'white';

var hitBox1 = new Path.Circle(new Point(65, 65), 62);
hitBox1.fillColor = 'white';
hitBox1.opacity = 0;

//click on the white circle
hitBox1.onMouseDown = function(event) {
    if(completion1 <= 0)
    {
    completion1 = 1;
    }
}

//SECOND CIRCLE
var outerCircle2 = new Path.Circle(new Point(65, 210), 65);
outerCircle2.fillColor = '#193441';
var innerCircle2 = new Path.Circle(new Point(65, 210), 62);
innerCircle2.fillColor = '#3e606f';

//goes fom 0 to 1, represents completion % of the circle
var completion2 = 0.0;

//distance from bottom of circle
var yval2 = 272 - (completion2) * 124;
//distance from center of circle (+/-)
var xval2 = Math.sqrt(Math.pow(62,2) - Math.pow((Math.abs(completion2 * 124 - 62)),2));

//left side of the semicircle
var firstPoint2 = new Point(65 - xval2, yval2);

//point on the bottom middle of the circle, never changes
var throughPoint2 = new Point(65, 272);

// The point at which the arc will end on the right side of the circle
var toPoint2 = new Point(65 + xval2, yval2);

// Draw an arc through 'throughPoint' to 'toPoint'
var path2 = new Path.Arc({
    from: [65 - xval2, yval2],
    through: [65, 272],
    to: [65 + xval2, yval2],
    strokeColor: 'white'
});

path2.opacity = 0.5;
//closes off the semicircle
path2.closed = true;
path2.fillColor = 'white';

var hitBox2 = new Path.Circle(new Point(65, 210), 62);
hitBox2.fillColor = 'white';
hitBox2.opacity = 0;

//click on the white circle
hitBox2.onMouseDown = function(event) {
    if(completion2 <= 0)
    {
    completion2 + 1;
    }
}

//THIRD CIRCLE
var outerCircle3 = new Path.Circle(new Point(65, 355), 65);
outerCircle3.fillColor = '#193441';
var innerCircle3 = new Path.Circle(new Point(65, 355), 62);
innerCircle3.fillColor = '#3e606f';

//goes fom 0 to 1, represents completion % of the circle
var completion3 = 0.0;

//distance from bottom of circle
var yval3 = 417 - (completion3) * 124;
//distance from center of circle (+/-)
var xval3 = Math.sqrt(Math.pow(62,2) - Math.pow((Math.abs(completion3 * 124 - 62)),2));

//left side of the semicircle
var firstPoint3 = new Point(65 - xval3, yval3);

//point on the bottom middle of the circle, never changes
var throughPoint3 = new Point(65, 417);

// The point at which the arc will end on the right side of the circle
var toPoint3 = new Point(65 + xval3, yval3);

// Draw an arc through 'throughPoint' to 'toPoint'
var path3 = new Path.Arc({
    from: [65 - xval3, yval3],
    through: [65, 355],
    to: [65 + xval3, yval3],
    strokeColor: 'white'
});

path3.opacity = 0.5;
//closes off the semicircle
path3.closed = true;
path3.fillColor = 'white';

var hitBox3 = new Path.Circle(new Point(65, 355), 62);
hitBox3.fillColor = 'white';
hitBox3.opacity = 0;

//click on the white circle
hitBox3.onMouseDown = function(event) {
    if(completion3 <= 0)
    {
    completion3 = 1;
    }
}

//FOURTH CIRCLE
var outerCircle4 = new Path.Circle(new Point(65, 500), 65);
outerCircle4.fillColor = '#193441';
var innerCircle4 = new Path.Circle(new Point(65, 500), 62);
innerCircle4.fillColor = '#3e606f';

//goes fom 0 to 1, represents completion % of the circle
var completion4 = 0.0;

//distance from bottom of circle
var yval4 = 562 - (completion4) * 124;
//distance from center of circle (+/-)
var xval4 = Math.sqrt(Math.pow(62,2) - Math.pow((Math.abs(completion4 * 124 - 62)),2));

//left side of the semicircle
var firstPoint4 = new Point(65 - xval4, yval4);

//point on the bottom middle of the circle, never changes
var throughPoint4 = new Point(65, 562);

// The point at which the arc will end on the right side of the circle
var toPoint4 = new Point(65 + xval4, yval4);

// Draw an arc through 'throughPoint' to 'toPoint'
var path4 = new Path.Arc({
    from: [65 - xval4, yval4],
    through: [65, 562],
    to: [65 + xval4, yval4],
    strokeColor: 'white'
});

path4.opacity = 0.5;
//closes off the semicircle
path4.closed = true;
path4.fillColor = 'white';

var hitBox4 = new Path.Circle(new Point(65, 500), 62);
hitBox4.fillColor = 'white';
hitBox4.opacity = 0;

//click on the white circle
hitBox4.onMouseDown = function(event) {
    if(completion4 <= 0)
    {
    completion4 = 1;
    }
}

//ALL TEXT
var faster = new PointText(new Point(65, 71));
faster.fillColor = '#eee';
faster.justification = 'center';
faster.fontSize = 20;
faster.content = 'Go Faster';

var slower = new PointText(new Point(65, 214));
slower.fillColor = '#eee';
slower.justification = 'center';
slower.fontSize = 20;
slower.content = 'Go Slower';

var understand = new PointText(new Point(65, 345));
understand.fillColor = '#eee';
understand.justification = 'center';
understand.fontSize = 20;
understand.content = 'I Don\'t\nUnderstand';

var example = new PointText(new Point(65, 492));
example.fillColor = '#eee';
example.justification = 'center';
example.fontSize = 20;
example.content = 'Give An\nExample';


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
	completion1 -= 0.0015;
	}
	//get rid of the old path
	path1.visible = false;
	yval1 = 127 - (completion1) * 124;
    xval1 = Math.sqrt(Math.pow(62,2) - Math.pow((Math.abs(completion1 * 124 - 62)),2));
    path1 = new Path.Arc({
    from: [65 - xval1, yval1],
    through: [65, 127],
    to: [65 + xval1, yval1],
    strokeColor: 'white'
});
    path1.opacity = 0.5;
    path1.closed = true;
    path1.fillColor = 'white';
    var hitBox1 = new Path.Circle(new Point(65, 65), 62);
    hitBox1.id = '#lecturetoofast';
    hitBox1.fillColor = 'white';
    hitBox1.opacity = 0;
    hitBox1.onMouseDown = function(event) {
        if(completion1 <= 0)
        {
    completion1 = 1;
    // Create the event
var event1 = new CustomEvent("lectureTooFast", { "detail": "The lecture is too fast" });

// Dispatch/Trigger/Fire the event
document.dispatchEvent(event1);
        }
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
	completion2 -= 0.0015;
	}
	//get rid of the old path
	path2.visible = false;
	yval2 = 272 - (completion2) * 124;
    xval2 = Math.sqrt(Math.pow(62,2) - Math.pow((Math.abs(completion2 * 124 - 62)),2));
    path2 = new Path.Arc({
    from: [65 - xval2, yval2],
    through: [65, 272],
    to: [65 + xval2, yval2],
    strokeColor: 'white'
});
    path2.opacity = 0.5;
    path2.closed = true;
    path2.fillColor = 'white';
    var hitBox2 = new Path.Circle(new Point(65, 210), 62);
    hitBox2.fillColor = 'white';
    hitBox2.opacity = 0;
    hitBox2.onMouseDown = function(event) {
        if(completion2 <= 0)
        {
    completion2 = 1;
        // Create the event
var event2 = new CustomEvent("lectureTooSlow", { "detail": "The lecture is too slow" });

// Dispatch/Trigger/Fire the event
document.dispatchEvent(event2);
        }
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
	completion3 -= 0.0015;
	}
	//get rid of the old path
	path3.visible = false;
	yval3 = 417 - (completion3) * 124;
    xval3 = Math.sqrt(Math.pow(62,2) - Math.pow((Math.abs(completion3 * 124 - 62)),2));
    path3 = new Path.Arc({
    from: [65 - xval3, yval3],
    through: [65, 417],
    to: [65 + xval3, yval3],
    strokeColor: 'white'
});
    path3.opacity = 0.5;
    path3.closed = true;
    path3.fillColor = 'white';
    var hitBox3 = new Path.Circle(new Point(65, 355), 62);
    hitBox3.fillColor = 'white';
    hitBox3.opacity = 0;
    hitBox3.onMouseDown = function(event) {
        if(completion3 <= 0)
        {
    completion3 = 1;
        // Create the event
var event3 = new CustomEvent("goBackSlide", { "detail": "Go back one slide" });

// Dispatch/Trigger/Fire the event
document.dispatchEvent(event3);
        }
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
	completion4 -= 0.0015;
	}
	//get rid of the old path
	path4.visible = false;
	yval4 = 562 - (completion4) * 124;
    xval4 = Math.sqrt(Math.pow(62,2) - Math.pow((Math.abs(completion4 * 124 - 62)),2));
    path4 = new Path.Arc({
    from: [65 - xval4, yval4],
    through: [65, 562],
    to: [65 + xval4, yval4],
    strokeColor: 'white'
});
    path4.opacity = 0.5;
    path4.closed = true;
    path4.fillColor = 'white';
    var hitBox4 = new Path.Circle(new Point(65, 500), 62);
    hitBox4.fillColor = 'white';
    hitBox4.opacity = 0;
    hitBox4.onMouseDown = function(event) {
        if(completion4 <= 0)
        {
    completion4 = 1;
        // Create the event
var event4 = new CustomEvent("dontUnderstand", { "detail": "This is confusing" });

// Dispatch/Trigger/Fire the event
document.dispatchEvent(event4);
        }
}



}



