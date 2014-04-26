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
			<div id="presets">
				<ul id="canvas2">
					<li><div><p>Go faster</p></div></li>
					<li><div><p>Go slower</p></div></li>
					<li><div><p>I don't understand</p></div></li>
					<li><div><p>Give an example</p></div></li>
				</ul>
			</div>
			<div id="ask">
				<h2>Ask a question</h2>
			</div>
		</div>

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
		<script type="text/javascript" src="packages/bower/paper/dist/paper-full.js"></script>
		<script type="text/paperscript" src="js/buttoncode.js" canvas="canvas"></script>
		<!--<script type="text/paperscript" src="js/buttoncode2.js" canvas="canvas2"></script>-->
		<script src="js/script.js"></script>
	</body>

</html>