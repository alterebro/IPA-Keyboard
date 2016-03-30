// Utils
function get_key(e) {
	var keynum;
		keynum = (window.event)
			? e.keyCode
			: ( (e.which) ? e.which : keynum );
	return String.fromCharCode(keynum);
}
function get_style(el,style_prop) {
	var o = null;
	if (el.currentStyle) {
		o = el.currentStyle[style_prop];
	} else if (window.getComputedStyle) {
		o = document.defaultView.getComputedStyle(el,null).getPropertyValue(style_prop);
	}
	return o;
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

var lang = {
	en : {
		label : 'English',
		_title : 'IPA Keyboard',
		_tagline : 'International Phonetic Alphabet Symbols.',
		_helper_desc : 'Press tab &#8677; to cycle through',
		_options_menu : 'Options Menu',
		_keyboard_type : 'Keyboard Type',
		_current_keys : 'Current Key Bindings',
		_ui_lang : 'UI Interface Language',
		_footer_created : 'Design &amp; development by',

		_placeholder : 'Hi there! Welcome to the IPA Keyboard. \nHere you can write your text using the International Phonetic Alphabet Symbols.'
	},
	es : {
		label : 'Español',
		_title : 'Teclado AFI',
		_tagline : 'Alfabeto Fonético Internacional.',
		_helper_desc : 'Usa el Tabuador &#8677; para desplazarte',
		_options_menu : 'Menu de Opciones',
		_keyboard_type : 'Tipo de Teclado',
		_current_keys : 'Carácteres asociados',
		_ui_lang : 'Idioma del interface UI',
		_footer_created : 'Diseño y desarrollo por',

		_placeholder : 'Hola! Bienvenido al teclado AFI. \nAquí podrás escribir tus textos usando los simbolos del Alfabeto Fonético Internacional'
	}
}

var _langs = function() {
	var langs = {};
	for ( var i in lang ) {
		langs[i] = lang[i]['label'];
	}
	return langs;
}

var data = {
	maps : maps,
	current_keymap : 'IPA-full',
	current_lang : 'en',
	input : '',

	keymap : null,
	lang : null,

	langs : _langs(),

	helper_chars : [],
	helper_chars_current : -1,
	helper_chars_origin : null,

	helper_coordinates : {
		top : 0,
		left : 0
	},
	helper_offset : {
		top : 0,
		left : 0
	},

	aside_menu_type_open : false,
	aside_menu_keys_open : false,
	aside_menu_lang_open : true,

	hide_sidebar : false
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
		this.calc_helper_offset();
		this.create_placeholder();

	},
	filters : {

		beautify : function(str) {
			str = str.replace('-', ' ');

			var w = str.split(' ');
			var _w = [];
			for ( var i=0; i<w.length; i++ ) {
				_w.push( w[i][0].toUpperCase() + w[i].substr(1) );
			}
			_w = _w.join(' ');
			return _w;
		}

	},
	methods : {

		create_placeholder : function() {

			var p = this.lang._placeholder;
			var p_str = '';
			var counter = 0;
			var interval = window.setInterval(function() {
				p_str += p[counter];
				counter++;
				if ( counter >= (p.length) ) { clearInterval(interval); }
				document.querySelector('#data-input').setAttribute('placeholder', p_str);
			}, 10);

			document.querySelector('#data-input').focus();

		},

		calc_helper_offset : function() {
			var elem = document.querySelector('#data-input');
			var y = elem.offsetTop;
				// y += parseInt(get_style(elem, 'padding-top'));
				y += parseInt(get_style(elem, 'font-size')) * 1.5;
				this.helper_offset.top = y;

			var x = elem.offsetLeft;
				// x += parseInt(get_style(elem, 'padding-left'));
				this.helper_offset.left = x + 10; // arbitrary 10

			this.helper_positioning(0, 0);
		},

		toogle_sidebar : function() {
			this.hide_sidebar = !this.hide_sidebar;
		},

		toggle_menu_type : function() {
			this.aside_menu_type_open = !this.aside_menu_type_open;
		},
		toggle_menu_keys : function() {
			this.aside_menu_keys_open = !this.aside_menu_keys_open;
		},
		toggle_menu_lang : function() {
			this.aside_menu_lang_open = !this.aside_menu_lang_open;
		},

		helper_positioning(x,y) {
			this.helper_coordinates.top = x + this.helper_offset.top;
			this.helper_coordinates.left = y + this.helper_offset.left;
		},

		onKeyDown : function() {},
		onKeyPress : function() {

			var elem = document.querySelector('#data-input');
			var caret = getCaretCoordinates(elem, elem.selectionEnd);
			this.helper_positioning( caret.top, caret.left );

		},
		onKeyUp : function() {},

		setMap : function(param) {
			data.current_keymap = param;
			this.init();
		},
		setLang(param) {
			data.lang = lang[param];
			this.create_placeholder();
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
			data['lang'] = lang[data.current_lang];


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
