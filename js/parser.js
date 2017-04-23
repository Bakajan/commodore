function Parser(inputText) {}
Parser.prototype.actions = {
	browser: {
		action: function() {
			return "Browser: " + navigator.appVersion;
		},
		description: function() {
			return "Shows browser info.";
		}
	},
	clear: {
		action: function() {
			CONSOLE.innerHTML = '';
		},
		description: function() {
			return "Clears console.";
		}
	},
	date: {
		action: function() {
			var d = new Date();
			var t= d.toDateString();
			var h = d.getHours();
			var m = d.getMinutes();
			var time = t.concat(" ", h, ":", m);

			return time;
		},
		description: function() {
			return "Gets time.";
		}
	},
	roll: {
		action: function(commands) {
			let dice = (!isNaN(commands[1])) ? commands[1] : 1;
			let roll = Math.floor((Math.random() * 5));
			let die = '';
			let total = 0;
			for(let i = 0; i != dice; i++) {
				roll = Math.floor((Math.random() * 5));
				total += roll + 1;
				
				if(roll == 0)
					die += '\u2680';
				if(roll == 1)
					die += '\u2681';
				if(roll == 2)
					die += '\u2682';
				if(roll == 3)
					die += '\u2683';
				if(roll == 4)
					die += '\u2684';
				if(roll == 5)
					die += '\u2685';
			}
			
			die += ' = ' + total;

			return die;
		},
		description: function() {
			return 'Rolls a die or dice.'
		}
	},
	history: {
		action: function(input, prompt) {
			if(input.length > 1)
			{
				if(input[1].toLowerCase() == 'clear') {
					prompt.history = [];
					return;
				}

			}
			return prompt.history;
		},
		description: function() {
			return "returns all previously entered commands."
		}
	},
	home: {
		action: function() {
			var url = "http://thejavadrinker.com";
			window.location=url;
			return "Going home!";
		},
		description: function() {
			return "Goes to the root page."
		}
	},
	help: {
		action: function(options, parser) {
			if(options[1]) {
				if(parser.actions.hasOwnProperty(options[1].toLowerCase()))
					return parser.actions[options[1]].description();
				else
					return 'That command doesn\'t exist';
			}
			else
				return 'Available commands: ' + Object.keys(parser.actions).toString();
		},
		description: function(command) {
			return 'Shows a list of help commands.'
		}
	}
}
Parser.prototype.parse = function parse(input, prompt) {
	let commands = input.split(' ');
	let result = '';

	prompt.push(input);

	if(input != '') {
		for (var key in this.actions) {

			if(commands[0].toUpperCase() === key.toUpperCase()) {
				if(commands[0] == 'help') {
					result = this.actions[key].action(commands, this);
					break;
				}
				result = this.actions[key].action(commands, prompt);
				break;
			}
			else
				result = 'Unknown command.';
		}
		if(result) prompt.pull(result);
	}
}

var PARSER = new Parser();