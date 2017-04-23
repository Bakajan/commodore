<html>
<head>

</head>

<link rel="stylesheet" type="text/css" href="css/main.css">
<script
	src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
	integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g="
	crossorigin="anonymous">
</script>

<script src="js/prompt.js"></script>
<script src="js/parser.js"></script>

<body>
<div id="tabs">
	<div class="tab">Console</div>
</div>

<div id="console"></div>

<div id="prompt-wrapper"><div id="prompt">User</div><input id="input" type="text" autocomplete="off" /></div>
</body>
<script>
var CONSOLE = document.getElementById('console');
var INPUT = document.getElementById('input');
var LABEL = document.getElementById('prompt');

PROMPT.pull("**** Commodore 184 ****");
PROMPT.pull("184 Bytes of fun!!!");
PROMPT.pull("---Type in 'help' for basic commands---");
PROMPT.pull("Ready.");

INPUT.addEventListener('keyup', function(e) {
	if (e.keyCode == 13) // Enter
		PARSER.parse(INPUT.value, PROMPT);
	if (e.keyCode == 38 || e.keyCode == 40) // Up
		PROMPT.getHistory(e.keyCode);
});

window.onload = function() {
	INPUT.style.width = window.innerWidth - LABEL.getBoundingClientRect().width;
}
</script>

</html>