$(document).ready(function() {

	var title = $('title').text();
	if(title == "Log in") {
		$('#header ul p').innerHTML = "Log in";
	}
	else if(title == "Feedback") {
		$('#header ul p').innerHTML = "Feedback";
	}

});