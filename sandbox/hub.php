<!DOCTYPE html>
<html>

	<head>
		<title>Feedback</title>

		<link rel="stylesheet" href="packages/font-awesome/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/global.css">
		<link rel="stylesheet" type="text/css" href="css/hub.css">
	</head>

	<body>
		<?php include 'header.html'; ?>

		<div id="mobile-wrapper">
			<div id="presets">
				<canvas id="canvas"></canvas>
			</div>
			<div id="ask">
				<h2>Ask a question</h2>
			</div>
		</div>

		<div id="desktop-wrapper">
			<div id="content">
				<div id="presets">
					<canvas id="canvas2"></canvas>
				</div>
				<div id="ask">
					<div id="screen">
						<h3>Message Board</h3>
						<div id="typefield">
							<input type="text" id="field" placeholder="Ask a question">
						</div>
						<div id="messages">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed vulputate lacus, ut viverra urna. Curabitur a suscipit turpis?</p>
							<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur varius lobortis felis, id molestie metus malesuada lobortis?</p>
							<p>Maecenas ultricies convallis dui, sit amet malesuada purus convallis a. Fusce ac lobortis nisl. Pellentesque vel neque eget augue bibendum posuere eu ac massa?</p>
							<p>Donec euismod massa et erat scelerisque, et sodales dui tincidunt?</p>
							<p>Integer sit amet ligula non ante luctus ultricies?</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
		<script type="text/javascript" src="packages/bower/paper/dist/paper-full.js"></script>
		<script type="text/paperscript" src="js/buttoncode.js" canvas="canvas"></script>
		<script type="text/paperscript" src="js/buttoncode2.js" canvas="canvas2"></script>
		<script src="js/script.js"></script>
	</body>

</html>