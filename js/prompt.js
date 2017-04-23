function Prompt() {
	var actions = {
		history: [],
		history_pos: 0,
		push: function(input) {
			if(input != '')
				this.history.push(input);
			this.history_pos = this.history.length;
			CONSOLE.innerHTML = CONSOLE.innerHTML + '>>' + input + '<br />';
			CONSOLE.scrollTop = CONSOLE.scrollHeight;
			INPUT.value = '';
		},
		pull: function(input) {
			if(input.constructor === Array)
			{
				input.forEach(function(val, index) {
					CONSOLE.innerHTML = CONSOLE.innerHTML + val + '<br />';
					CONSOLE.scrollTop = CONSOLE.scrollHeight;
				});
			}
			else {
				CONSOLE.innerHTML = CONSOLE.innerHTML + input + '<br />';
				CONSOLE.scrollTop = CONSOLE.scrollHeight;
			}
			INPUT.value = '';
		},
		getHistory: function(button) {
			console.log(this.history_pos);
			if(button == 38) { // Up
				if(this.history_pos != 0) {
					this.history_pos--;
					if(this.history[this.history_pos]) {
						INPUT.value = '';
						INPUT.value = this.history[this.history_pos];
					}
					else
						INPUT.value = '';
				}
				else
					INPUT.value = '';
			}
			if(button == 40) { // Down
				if(this.history_pos < this.history.length) {
					this.history_pos++;
					if(this.history[this.history_pos]) {
						INPUT.value = '';
						INPUT.value = this.history[this.history_pos];
					}
					else
						INPUT.value = '';
				}
				else
					INPUT.value = '';
			}
		}
	}

	return actions;
}

var PROMPT = Prompt();