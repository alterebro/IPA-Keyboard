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
	'IPA-Full' : {
		'a' : ['ɑ','æ','ɐ','ɑ̃'],
		'b' : ['β','ɓ','ʙ'],
		'c' : ['ɕ','ç'],
		'd' : ['ð','ɖ','ɗ','d͡'],
		'e' : ['ə','ɚ','ɵ','ɘ'],
		'3' : ['ɛ','ɜ','ɝ','ɛ̃','ɞ'],
		'g' : ['ɠ','ɢ','ʛ','ɡ'],
		'h' : ['ɥ','ɦ','ħ','ɧ','ʜ'],
		'i' : ['ɪ','ɪ̈','ɨ'],
		'j' : ['ʝ','ɟ','ʄ'],
		'l' : ['ɫ','ɬ','ʟ','ɭ','ɮ'],
		'm' : ['ɱ'],
		'n' : ['ŋ','ɲ','ɴ','ɳ'],
		'o' : ['ɔ','œ','ø','ɒ','ɔ̃','ɶ'],
		'p' : ['ɸ'],
		'r' : ['ɾ','ʁ','ɹ','ɻ','ʀ','ɽ','ɺ'],
		's' : ['ʃ','ʂ'],
		't' : ['θ','ʈ','t͡'],
		'u' : ['ʊ','ʊ̈','ʉ'],
		'v' : ['ʌ','ʋ','ⱱ'],
		'w' : ['ʍ','ɯ','ɰ'],
		'x' : ['χ'],
		'y' : ['ʎ','ɣ','ʏ','ɤ'],
		'z' : ['ʒ','ʐ','ʑ'],
		'?' : ['ʔ','ʕ','ʢ','ʡ'],
		' ' : ['d͡ʒ','t͡ʃ','t͡s']
	},
	'IPA-for-English' : {
		'a' : ['æ','ɑ','ɒ'],
		'c' : ['ɔ'],
		'd' : ['ð'],
		'e' : ['ə','ᵊ','ɚ','ɜ','ɛ','ɝ'],
		'i' : ['ɪ','ɪ̈'],
		'l' : ['ɫ'],
		'n' : ['ŋ'],
		'r' : ['ʳ','ɹ','ɾ'],
		's' : ['ʃ'],
		't' : ['θ','t̬'],
		'u' : ['ʊ','ʊ̈'],
		'v' : ['ʌ'],
		'z' : ['ʒ'],
		'?' : ['ʔ']
	},
	'Greek-&-Math' : {
		'a' : ['α','ά','∧','∀','Δ','Λ'],
		'b' : ['β'],
		'c' : ['ξ','⊂','∉','⊄','⊆','⊈','⊃','ℂ'],
		'd' : ['δ','∂'],
		'e' : ['ε','έ','€','∈','∃','Ξ','Σ'],
		'f' : ['φ','∫','∮','∯'],
		'g' : ['γ'],
		'h' : ['η','ή'],
		'i' : ['ι','ί','ϊ','ΐ'],
		'j' : ['ς','ζ'],
		'k' : ['κ'],
		'l' : ['λ'],
		'm' : ['μ','∩'],
		'n' : ['η','ν','ℕ'],
		'o' : ['ο','ό','∅','⊕','Ω','ø'],
		'p' : ['π','ℙ','Π','Φ'],
		'q' : ['θ','ℚ'],
		'r' : ['ρ','ℝ','Γ'],
		's' : ['σ','ς'],
		't' : ['τ'],
		'u' : ['υ','ύ','ϋ','ΰ','μ','∪'],
		'v' : ['ν','∨','∇'],
		'w' : ['ω','ώ'],
		'x' : ['χ'],
		'y' : ['ψ','Ψ'],
		'z' : ['ζ','ℤ'],
		'1' : ['½','¼'],
		'.' : ['∞','∘','°','∠','‰'],
		',' : ['¬','↑','⇒','⇔','→','↔'],
		'-' : ['~'],
		'/' : ['∖','∕']
	},
	'Scandinavian-Characters' : {
		'a' : ['å','æ','ä','á','â'],
		'd' : ['ð'],
		'e' : ['é','è','ê','€'],
		'i' : ['í'],
		'o' : ['ø','ö','ó','ò','ô'],
		'p' : ['þ'],
		'u' : ['ú'],
		'y' : ['ý'],
		'.' : ['’','„','“','”','»','«'],
		'-' : ['–','—']
	},
	'Eastern-Europe' : {
		'a' : ['á','ą','ă','â'],
		'c' : ['ć','ç','č'],
		'd' : ['ď'],
		'e' : ['é','ę','ě','€'],
		'g' : ['ğ'],
		'i' : ['í','ı','İ','î'],
		'l' : ['ł'],
		'n' : ['ń','ň'],
		'o' : ['ö','ő','ó'],
		'r' : ['ř'],
		's' : ['ś','š','ş','ș'],
		't' : ['ţ','ț','ť'],
		'u' : ['ü','ú','ű','ů','û'],
		'y' : ['ý'],
		'z' : ['ž','ź','ż'],
		'.' : ['’','„','“','”','«','»'],
		'-' : ['–','—']
	},
	'Western-Europe' : {
		'a' : ['à','á','â','ä','ã','æ'],
		'b' : ['ß'],
		'c' : ['ç'],
		'e' : ['è','é','ê','ë','€'],
		'i' : ['ï','î','í','ì'],
		'n' : ['ñ'],
		'o' : ['ò','ó','õ','ô','ö','œ'],
		'u' : ['ù','ú','ü','û'],
		'w' : ['ẁ','ẃ','ŵ','ẅ'],
		'y' : ['ỳ','ý','ŷ','ÿ'],
		'?' : ['¿'],
		'!' : ['¡'],
		'.' : ['’','„','«','»','“','”'],
		'-' : ['–','—']
	},
	'Symbols-&-Currencies' : {
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
		'y': ['¥'],
		'1' : ['½','⅓','¼'],
		'2' : ['⅔','²'],
		'3' : ['¾','³'],
		'4' : ['♩','♪','♫','♬','♭','♮','♯'],
		'5' : ['▪','■','●','◀','▶','▲','▼','•','‣'],
		'6' : ['▫','□','○','◁','▷','△','▽','◦'],
		'7' : ['♥','♦','♠','♣'],
		'8' : ['±','−','×','÷','·','~','≠','≈','≤','≥'],
		'9' : ['☺','☹','❤'],
		'0' : ['★','☆','☀','☼','☁','☂','☃','❄','☽']
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
		_placeholder : 'Hi there! Welcome to the IPA Keyboard. \nHere you can write your text using the International Phonetic Alphabet Symbols.\n\n - When the helper window appears, use the tab key to cycle through the special characters.\n - You can switch the Keyboard type by selecting it on the sidebar options menu.\n\nHappy IPA writing!\n@alterebro',
		_support_title : 'Support',
		_support_desc : 'The IPA Keyboard has been done by Spanish Web Developer <strong>Jorge Moreno</strong> (<a href="https://twitter.com/alterebro" target="_blank" title="Jorge Moreno. @alterebro">@alterebro</a>). It is free, it doesn\'t have annoying ads of any kind and you can help to keep it this way if you find it useful and get any value from it by suporting the app creator making a small donation!',
		_support_donate : 'Donate via Paypal'
	},
	es : {
		label : 'Español',
		_title : 'Teclado AFI',
		_tagline : 'Alfabeto Fonético Internacional.',
		_helper_desc : 'Usa el Tabuador &#8677; para desplazarte',
		_options_menu : 'Menu de Opciones',
		_keyboard_type : 'Tipo de Teclado',
		_current_keys : 'Carácteres asociados',
		_ui_lang : 'Idioma de la Interface',
		_footer_created : 'Diseño y desarrollo por',
		_placeholder : 'Hola! Bienvenido al teclado AFI. \nAquí podrás escribir tus textos usando los simbolos del Alfabeto Fonético Internacional.\n\n - Cuando aparezca la ventana de ayuda, usa la tecla de tabulador para desplazarte por los carácteres.\n - Puedes cambiar el tipo de teclado seleccionandolo en el menu de opciones lateral.\n\nFeliz escritura AFI!\n@alterebro',
		_support_title : 'Colabora',
		_support_desc : 'El teclado de simbolos AFI es una creación de <strong>Jorge Moreno</strong> (<a href="https://twitter.com/alterebro" target="_blank" title="Jorge Moreno. @alterebro">@alterebro</a>). Esta app es gratis, no tiene anuncios molestos de ningún tipo y puedes contribuir a que siga de este modo si lo encuentras util y obtienes algún valor de el apoyando al creador de la app haciendole una pequeña donación!',
		_support_donate : 'Donar via Paypal'
	}
}


var app_state = JSON.parse(localStorage.getItem('IPA-Keyboard-settings')) || {
	input_data : '',
	default_lang : 'en',
	menu_type_open : false,
	menu_keys_open : false,
	menu_lang_open : false,
	menu_help_open : false,
	sidebar_hidden : false
};

var data = {
	maps : maps,
	current_keymap : 'IPA-Full',
	current_lang : app_state.default_lang,
	input : app_state.input_data,

	keymap : null,
	lang : null,
	langs : (function() {
		var langs = {};
		for ( var i in lang ) {
			langs[i] = lang[i]['label'];
		}
		return langs;
	})(),

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

	aside_menu_type_open : app_state.menu_type_open,
	aside_menu_keys_open : app_state.menu_keys_open,
	aside_menu_lang_open : app_state.menu_lang_open,
	aside_menu_help_open : app_state.menu_help_open,
	hide_sidebar : app_state.sidebar_hidden,

	metadata : {
		title : 'IPA Keyboard',
		description : 'IPA Keyboard. International Phonetic Alphabet Symbols',
		url : 'http://alterebro.github.io/IPA-Keyboard/'
	}
};

var started = 0;
Vue.config.debug = true;
Vue.config.devtools = true;

var app = new Vue({

	el : '#app',
	data : data,
	created : function() {

		this.init();
		this.calc_helper_offset();
		this.create_placeholder();
		this.socialLinks();

	},

	filters : {

		beautify : function(str) {
			return str.replace(/-/g, ' ');
		},
		urlencode : function(str) {
            return encodeURIComponent(str);
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
			}, 5);

			document.querySelector('#data-input').focus();
		},

		calc_helper_offset : function() {
			var elem = document.querySelector('#data-input');
			var y = elem.offsetTop;
				y += parseInt(get_style(elem, 'font-size')) * 1.5;
				this.helper_offset.top = y;

			var x = elem.offsetLeft;
				this.helper_offset.left = x + 10; // arbitrary 10

			this.helper_positioning(0, 0);
		},

		toogle_sidebar : function() {
			this.hide_sidebar = !this.hide_sidebar;
			this.saveAppState();
		},
		toggle_menu_type : function() {
			this.aside_menu_type_open = !this.aside_menu_type_open;
			this.saveAppState();
		},
		toggle_menu_keys : function() {
			this.aside_menu_keys_open = !this.aside_menu_keys_open;
			this.saveAppState();
		},
		toggle_menu_lang : function() {
			this.aside_menu_lang_open = !this.aside_menu_lang_open;
			this.saveAppState();
		},
		toggle_menu_help : function() {
			this.aside_menu_help_open = !this.aside_menu_help_open;
			this.saveAppState();
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
		onKeyUp : function() {
			this.saveAppState();
		},

		saveAppState : function() {
			// Save App state
			var app_settings = {
				input_data : data.input,
				default_lang : data.current_lang,
				menu_type_open : data.aside_menu_type_open,
				menu_keys_open : data.aside_menu_keys_open,
				menu_lang_open : data.aside_menu_lang_open,
				menu_help_open : data.aside_menu_help_open,
				sidebar_hidden : data.hide_sidebar
			}
			localStorage.setItem('IPA-Keyboard-settings', JSON.stringify(app_settings));
		},

		setMap : function(param) {
			data.current_keymap = param;
			this.init();
		},
		setLang(param) {
			console.log(param);
			this.current_lang = param;
			this.lang = lang[param];
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

		socialLinks : function() {
            var social_links = document.querySelectorAll('#main footer ul li a');
            for (var i=0; i<social_links.length; i++) {
                social_links[i].onclick = function(e) {
                    e.preventDefault();
                    var network_window = window.open( this.href, this.getAttribute('data-network'), 'height=350,width=600');
                	network_window.focus();
                }
            }
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
