// Utils
function get_key(e) {
	var keynum;
		keynum = (window.event)
			? e.keyCode
			: ( (e.which) ? e.which : keynum );
	return String.fromCharCode(keynum);
}

var maps = {
	'greek' : {
		'a' : ['α','ά'],
		'b' : ['β'],
		'c' : ['ξ'],
		'd' : ['δ'],
		'e' : ['ε','έ'],
		'f' : ['φ'],
		'g' : ['γ'],
		'h' : ['η','ή'],
		'i' : ['ι','ί','ϊ','ΐ'],
		'j' : ['ς'],
		'k' : ['κ'],
		'l' : ['λ'],
		'm' : ['μ'],
		'n' : ['ν'],
		'o' : ['ο','ό'],
		'p' : ['π'],
		'q' : ['θ'],
		'r' : ['ρ'],
		's' : ['σ','ς'],
		't' : ['τ'],
		'u' : ['υ','ύ','ϋ','ΰ'],
		'v' : ['ω','ώ'],
		'w' : ['ω','ώ'],
		'x' : ['χ'],
		'y' : ['ψ'],
		'z' : ['ζ']
	},
	'currencies' : {
		'b': ['฿'],
		'c': ['¢'],
		'd': ['₫'],
		'e': ['€'],
		'h': ['₴'],
		'k': ['₪'],
		'l': ['£'],
		'r': ['₹'],
		's': ['$'],
		'w': ['₩'],
		'y': ['¥']
	},
	'IPA-vowels' : {
		'a' : ['a','ɶ','ɑ','ɒ','æ','ɐ','ʌ'],
		'e' : ['ɛ','œ','ɜ','ɞ','ɔ','ə','e','ɘ'],
		'i' : ['ɪ','ʏ','i','y','ɨ'],
		'o' : ['ø','ɵ','ɤ','o'],
		'u' : ['ʊ','ʉ','ɯ','u']
	},
	'IPA-simple' : {
		'A' : ['E','I','O','U'],
		'a' : ['ɑ','á','à','â','æ'],
		'e' : ['ɛ','ə','é','è','ê','ë'],
		'i' : ['í','i','ï','î'],
		'o' : ['ó','ɔ','ø','œ','ô'],
		'u' : ['ú','y','ù','û','ü','ÿ']
	},
	'IPA-full' : {
		'a' : ['æ', 'ɐ', 'ɑ', 'ɒ', 'α', 'ã', 'ă'],
		'b' : ['β', 'ɓ'],
		'c' : ['ç', 'č', 'ɕ'],
		'd' : ['ð', 'ɖ', 'ḍ', 'ɗ'],
		'e' : ['ə', 'ε', 'ɛ', 'ẹ', 'ɜ', 'ɚ', 'ɘ', 'ẽ', 'ĕ'],
		'f' : ['φ', 'ɸ', 'ɟ'],
		'g' : ['γ', 'ɣ', 'ɠ'],
		'h' : ['ħ', 'ɦ', 'h', 'ʰ', 'ɥ', 'ḥ', 'ɧ'],
		'i' : ['ɪ', 'i', 'ɨ', 'ĩ', 'ĭ'],
		'j' : ['ǰ', 'ʝ', 'ʲ', 'ɟ'],
		'l' : ['ɫ', 'l', 'λ', 'ʎ', 'ɭ', 'ḷ', 'ɬ', 'ɮ'],
		'm' : ['ɱ', 'ɯ', 'ɰ'],
		'n' : ['ñ', 'ŋ', 'ɲ', 'ɳ', 'ṇ'],
		'o' : ['ø', 'œ', 'ö', 'ɔ', 'ọ', 'ɵ', 'õ', 'ŏ'],
		'r' : ['ɹ', 'ʁ', 'ř', 'ɾ', 'ɽ', 'ṛ', 'ɻ'],
		's' : ['š', 'ʃ', 'ʄ', 'ś', 'ṣ', 'ʂ'],
		't' : ['θ', 'þ', 'ʈ', 'ṭ'],
		'u' : ['ʊ', 'ü', 'u', 'ʉ', 'ɞ', 'ʌ', 'ũ', 'ŭ'],
		'v' : ['ʋ'],
		'w' : ['ʍ', 'ʷ', 'ɯ', 'ɰ', 'ŵ', 'ẃ'],
		'x' : ['χ'],
		'y' : ['ɥ', 'ŷ', 'y', 'ɰ', 'ỹ', 'ȳ'],
		'z' : ['ž', 'ʒ', 'ẓ', 'ʑ', 'ʐ']
	},
	'welsh' : {
		'a' : ['â','ä','á','à'],
		'e' : ['ê','ë','é','è'],
		'i' : ['î','ï','í','ì'],
		'o' : ['ô','ö','ó','ò'],
		'u' : ['û','ü','ú','ù'],
		'w' : ['ŵ','ẅ','ẃ','ẁ'],
		'y' : ['ŷ','ÿ','ý','ỳ']
	},
	'spanish' : {
		'a' : ['á'],
		'e' : ['é','€'],
		'i' : ['í'],
		'n' : ['ñ'],
		'o' : ['ó'],
		'u' : ['ú','ü'],
		'?' : ['¿'],
		'!' : ['¡']
	}
}

var data = {
	maps : maps,
	current_keymap : 'IPA-full',
	input : '',

	keymap : null,
	output : '',

	helper_chars : [],
	helper_chars_current : -1,
	helper_chars_origin : null,

	helper_coordinates : {
		top : 0,
		left : 0
	}
};

var started = 0;

var app = new Vue({

	config : {
		debug : true,
		devtools : true
	},

	el : '#app',
	data : data,
	created : function() {

		this.init();

	},
	filters : {},
	methods : {
		onKeyDown : function() {},
		onKeyPress : function() {

			var elem = document.querySelector('#data-input');
			this.helper_coordinates = getCaretCoordinates(elem, elem.selectionEnd);
			this.helper_coordinates.top += 90;
			this.helper_coordinates.left += 30;
			console.log('top: ', this.helper_coordinates.top, ' - left: ', this.helper_coordinates.left);

		},
		onKeyUp : function() {},

		setMap : function(param) {
			data.current_keymap = param;
			this.init();
		},
		addChar : function(c) {
			var s = document.querySelector('#data-input').selectionStart;

			this.input = data.input.substr(0,s) + c + data.input.substr(s);
			this.setCaret(s+1);
			document.querySelector('#data-input').focus();
			this.closeHelper();
		},

		setCaret : function(pos) {
			// ...
			window.setTimeout(function(){
				document.querySelector('#data-input').setSelectionRange(pos,pos);
			}, 1);
		},

		cycleHelperChar : function() {

			var cl = this.helper_chars.length;
			if( cl > 0 ) {

				this.helper_chars_current = ( this.helper_chars_current++ >= (cl) ) ? 0 : this.helper_chars_current++;

				var c = (this.helper_chars_current == cl) ? this.helper_chars_origin : this.helper_chars[this.helper_chars_current];
				var s = document.querySelector('#data-input').selectionStart;

				this.input = data.input.substr(0,s-1) + c + data.input.substr(s);
				this.setCaret(s);
			}
		},

		openHelper : function(chars) {
			this.helper_chars = chars;
		},
		closeHelper : function() {
			this.helper_chars = [];
			this.helper_chars_current = -1;
		},

		init : function() {

			data['keymap'] = data.maps[data.current_keymap];

			var self = this;
			var input_element = document.querySelector('#data-input');

				Mousetrap.reset();

				if (!started) { // ?

					// Tab key
					Mousetrap(input_element).bind('tab', function(e, combo) {
					    e.preventDefault();
						self.cycleHelperChar();
						return false;
					});
				}

				// Delete key
				Mousetrap(input_element).bind('backspace', function(e, combo) {
					self.closeHelper();
				});

				// all keys...
				input_element.onkeypress = function(e) {
					var y = get_key(e);
					if ( !data.keymap[y] ) {
						self.closeHelper();
					}
				}

				// ... but keys on current mapping
				for ( k in data.keymap ) {
					Mousetrap(input_element).bind( k, function(e, combo) {
						self.helper_chars_origin = combo;
						self.openHelper( data.keymap[combo] );
					});
				}

			started = true;
		}
	}
});
