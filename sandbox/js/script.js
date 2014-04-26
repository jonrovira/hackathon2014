$(document).ready(function() {

	var title = $('title').text();
	var $heading = $('#header ul li:nth-child(2) p')

	if(title == "Log in") {
		$heading.html(title);
	}
	else if(title == "Choose your course") {
		$heading.html(title);
	}
	else if(title == "Feedback") {
		$heading.html(title);
	}

});