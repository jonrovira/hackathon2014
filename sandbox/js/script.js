$(document).ready(function() {

	$(window).resize(function() {
		console.log('resize called');
		var width = $(window).width();
		if(width >= 1024) {
			$('#header ul li a i').removeClass('fa-2x').addClass('fa-4x');
		}
		else {
			$('#header ul li a i').removeClass('fa-4x').addClass('fa-2x');
		}
	}).resize();



	var title = $('title').text();
	var $back = $('#header ul li:nth-child(1) a');
	var $heading = $('#header ul li:nth-child(2) p');

	if(title == "Log in") {
		$back.css("opacity", "0.2");
		$back.attr("href", "");
		$('#header ul li a img').css('opacity', '0');
	}
	else if(title == "Choose your class") {
		$back.attr("href", "/sandbox/login.php");
		$heading.html(title);
		$('#wrapper ul li').click(function() {
			window.location.href = "/sandbox/hub.php";
		});
	}
	else if(title == "Feedback") {
		$back.attr("href", "/sandbox/courses.php");
		$heading.html(title);
		$('#mobile-wrapper #ask').click(function() {
			window.location.href = "/sandbox/ask.php";
		});
	}
	else if(title == "Ask a question") {
		$back.attr("href", "/sandbox/hub.php");
		$heading.html(title);
	}
	
});
