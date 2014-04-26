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
	}
	else if(title == "Feedback") {
		$heading.html(title);
	}
	else if(title == "Ask a question") {
		$heading.html(title);
	}

});