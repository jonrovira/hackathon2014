$(document).ready(function() {

	var title = $('title').text();
	var $back = $('#header ul li:nth-child(1) a');
	var $heading = $('#header ul li:nth-child(2) p');

	if(title == "Log in") {
		$back.css("opacity", "0.3");
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
	}
	else if(title == "Ask a question") {
		$back.attr("href", "/sandbox/hub.php");
		$heading.html(title);
	}

});