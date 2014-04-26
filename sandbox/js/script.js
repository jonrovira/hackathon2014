$(document).ready(function() {

	var title = $('title').text();
	var $back = $('#header ul li:nth-child(1) a');
	var $heading = $('#header ul li:nth-child(2) p');

	if(title == "Log in") {
		$back.css("opacity", "0.2");
		$back.attr("href", "");
		$heading.html(title);
	}
	else if(title == "Choose your course") {
		$back.attr("href", "/sandbox/login.php");
		$heading.html(title);
		$('#wrapper ul li').click(function() {
			window.location.href = "/sandbox/hub.php";
		});
	}
	else if(title == "Feedback") {
		$back.attr("href", "/sandbox/courses.php");
		$heading.html(title);
		$('#wrapper #ask').click(function() {
			window.location.href = "/sandbox/ask.php";
		});
	}
	else if(title == "Ask a question") {
		$back.attr("href", "/sandbox/hub.php");
		$heading.html(title);
	}
	//Ryan's stupid code w/ divs
	var cvsloc = myCanvas.getBoundingClientRect();
        var div1 = document.createElement('DIV');
            div1.style.position = 'absolute';
            div1.style.top   = cvsloc.top + 51 + 'px';
            div1.style.left  = cvsloc.left + 51 + 'px';
            div1.style.width = '96px';
            div1.style.height = '96px';
            div1.style.borderRadius = '48px';
            div1.style.cursor = 'pointer';
            div1.setAttribute("id", "#lectureTooFast");
            div1.onclick = function (e)
            {
                alert('The green circle has been clicked!');
            }
        document.body.appendChild(div1);
});
