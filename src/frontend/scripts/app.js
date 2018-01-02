// ------------------------------------------------
// ------------------------------------------------
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

// ------------------------------------------------
// ------------------------------------------------
var started = 0;
var maps = {
	'IPA-Full' : {
		'a' : ['ɑ','æ','ɐ'],
		'b' : ['β','ɓ','ʙ'],
		'c' : ['ɕ','ç'],
		'd' : ['ð','ɖ','ɗ'],
		'e' : ['ə','ɚ','ɵ','ɘ'],
		'3' : ['ɛ','ɜ','ɝ','ɛ̃','ɞ'],
		'g' : ['ɠ','ɢ','ʛ','ɡ'],
		'h' : ['ɥ','ɦ','ħ','ɧ','ʜ'],
		'i' : ['ɪ','ɨ'],
		'j' : ['ʝ','ɟ','ʄ'],
		'l' : ['ɫ','ɬ','ʟ','ɭ','ɮ'],
		'm' : ['ɱ'],
		'n' : ['ŋ','ɲ','ɴ','ɳ'],
		'o' : ['ɔ','œ','ø','ɒ','ɶ'],
		'p' : ['ɸ'],
		'r' : ['ɾ','ʁ','ɹ','ɻ','ʀ','ɽ','ɺ'],
		's' : ['ʃ','ʂ'],
		't' : ['θ','ʈ'],
		'u' : ['ʊ','ʉ'],
		'v' : ['ʌ','ʋ','ⱱ'],
		'w' : ['ʍ','ɯ','ɰ'],
		'x' : ['χ'],
		'y' : ['ʎ','ɣ','ʏ','ɤ'],
		'z' : ['ʒ','ʐ','ʑ'],
		'?' : ['ʔ','ʕ','ʢ','ʡ'],
		' ' : ['d͡ʒ','t͡ʃ']
	},
	'IPA-Extended' : {
		'a' : ['ʌ','ɔ','æ','ɐ','a','ɶ','ɑ','ɒ'],
		'b' : ['b','ʙ','β','ɓ'],
		'c' : ['c','ƈ','ç','ɕ'],
		'd' : ['d','ɖ','ɗ','ʠ','ð'],
		'e' : ['e','ɘ','o','ə','ɛ','œ','ɜ','ɞ','ɚ','ɝ'],
		'f' : ['f','ʄ'],
		'g' : ['ɡ','ɢ','ɠ','ʛ'],
		'h' : ['ħ','h','ɦ','ɥ','ʜ','ɧ'],
		'i' : ['i','ɨ','ɪ'],
		'j' : ['ʝ','j','ɟ'],
		'k' : ['k','ƙ'],
		'l' : ['l','ɭ','ʎ','ʟ','ɫ','ƭ','ɬ'],
		'm' : ['m','ɱ','ʍ'],
		'n' : ['n','ɳ','ɲ','ŋ','ɴ'],
		'o' : ['ø','ɵ','σ','θ','ʘ'],
		'p' : ['p','ƥ','φ','ɸ'],
		'q' : ['q'],
		'r' : ['r','ɾ','ɽ','ʀ','ʁ','ɹ','ɻ','ɺ'],
		's' : ['s','ʃ','ʂ'],
		't' : ['t','ʈ'],
		'u' : ['ʉ','ɯ','u','ʊ'],
		'v' : ['ⱱ','v','ʋ','μ'],
		'w' : ['w','ɰ','ω'],
		'x' : ['x','ɣ','χ'],
		'y' : ['y','ʏ','ɤ'],
		'z' : ['z','ʒ','ʐ','ʑ'],
		'?' : ['ʔ','ʕ','ʢ','ʡ'],
		'.' : ['ː','ˑ','.','‿'],
		',' : ['ɮ','ʦ','ʣ','ʧ','ʤ','ʨ','ʥ'],
		'1' : ['/','[',']'],
		'2' : ['ǀ','ǁ','ˈ','ˌ','|','‖'],
		'3' : ['ǃ','ǂ'],
		'4' : ['˥','˦','˧','˨','˩'],
		'5' : ['↓','↗','↑','↘'],
		'6' : ['ʼ','˭'],
		'7' : ['ʰ','ⁿ','ˡ','ˤ','ˠ','ʲ','ʷ','ᵊ']
	},
	'IPA-for-English' : {
		'a' : ['æ','ɑ','ɒ'],
		'c' : ['ɔ'],
		'd' : ['ð'],
		'e' : ['ə','ᵊ','ɚ','ɜ','ɛ','ɝ'],
		'i' : ['ɪ'],
		'l' : ['ɫ'],
		'n' : ['ŋ'],
		'r' : ['ʳ','ɹ','ɾ'],
		's' : ['ʃ'],
		't' : ['θ'],
		'u' : ['ʊ'],
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
	'German-only-characters' : {
		'a' : ['a','ɔ','ə','ɐ'],
		'c' : ['ç','ɔ̯'],
		'e' : ['ɛ','ə','ɛ̯'],
		'h' : ['ˀ'],
		'i' : ['ɪ'],
		'j' : ['ʝ'],
		'l' : ['l̩'],
		'm' : ['m̩'],
		'n' : ['n̩', 'ŋ'],
		'o' : ['ɔ', 'ø', 'œ', 'œ̯'],
		'r' : ['ʁ', 'ʶ'],
		's' : ['ʃ'],
		'u' : ['ʊ'],
		'x' : ['x'],
		'y' : ['ʏ'],
		'z' : ['ʒ']
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

// ------------------------------------------------
// ------------------------------------------------
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
		_placeholder : 'Hi there! Welcome to the IPA Keyboard. \nHere you can write your text using the International Phonetic Alphabet Symbols. \n\n - When the helper window appears, use the tab key to cycle through the special characters. \n - You can switch the Keyboard type by selecting it on the sidebar options menu. \n\nHappy IPA writing! \n@alterebro',
		_support_title : 'Support',
		_support_desc : 'The IPA Keyboard is a personal project still in development, help to make it better by sending your comments and bugs found to the developer (<a href="https://twitter.com/alterebro" target="_blank" title="Jorge Moreno. @alterebro">@alterebro</a>).<br />This App is free and doesn\'t have annoying ads of any kind, please consider making a donation to keep it this way if you get any value from it!',
		_support_donate : 'Donate via Paypal'
	},
	es : {
		label : 'Español',
		_title : 'Teclado AFI',
		_tagline : 'Alfabeto Fonético Internacional.',
		_helper_desc : 'Usa el Tabulador &#8677; para desplazarte',
		_options_menu : 'Menu de Opciones',
		_keyboard_type : 'Tipo de Teclado',
		_current_keys : 'Carácteres asociados',
		_ui_lang : 'Idioma de la Interface',
		_footer_created : 'Diseño y desarrollo por',
		_placeholder : 'Hola! Bienvenido al teclado AFI. \nAquí podrás escribir tus textos usando los simbolos del Alfabeto Fonético Internacional.\n\n - Cuando aparezca la ventana de ayuda, usa la tecla de tabulador para desplazarte por los carácteres.\n - Puedes cambiar el tipo de teclado seleccionandolo en el menu de opciones lateral. \n\nFeliz escritura AFI! \n@alterebro',
		_support_title : 'Colabora',
		_support_desc : 'El teclado AFI es un proyecto personal todavía en desarrollo, ayuda a hacerlo mejor mandando tus comentarios y los errores que puedas encontrar al desarrollador (<a href="https://twitter.com/alterebro" target="_blank" title="Jorge Moreno. @alterebro">@alterebro</a>).<br />Esta aplicación es gratis y no tiene molestos anuncios de ningún tipo, considera hacer un donativo para que siga siendo así en caso de que obtengas algún valor de su uso!',
		_support_donate : 'Donar via Paypal'
	},
	fr : {
		label : 'Français',
		_title : 'API Clavier',
		_tagline : 'Alphabet Phonétique International.',
		_helper_desc : 'Utilisez la touche Tab &#8677; pour passer',
		_options_menu : 'Options du Menu',
		_keyboard_type : 'Type de clavier',
		_current_keys : 'Caractères associés',
		_ui_lang : 'Interface Langue',
		_footer_created : 'Design &amp; développement par',
		_placeholder : 'Salut! Bienvenue sur le clavier API. \nIci vous pouvez écrire votre texte en utilisant les symboles de l\'alphabet phonétique international.\n\n - Lorsque la fenêtre d\'aide apparaît, utilisez la touche de tabulation pour faire défiler les caractères spéciaux.\n - Vous pouvez changer le type de clavier en le sélectionnant dans le menu des options de la barre latérale. \n\nBonne écriture API! \n@alterebro',
		_support_title : 'Collaborer',
		_support_desc : 'Le clavier API est un projet personnel encore en développement, aider à faire mieux en envoyant vos commentaires et les bugs trouvés pour le développeur (<a href="https://twitter.com/alterebro" target="_ blank" title="Jorge Moreno. @alterebro">@alterebro</a>).<br />Cette application est libre et n\'a pas de publicités ennuyeuses de toute nature, envisager de faire un don à garder de cette façon si vous obtenez une valeur de utiliser!',
		_support_donate : 'Faire un don via Paypal'
	},
	de : {
		label : 'Deutsche',
		_title : 'IPA-Tastatur',
		_tagline : 'Internationale phonetische Alphabet-Symbole.',
		_helper_desc : 'Drücken Sie die Tabulatortaste &#8677; um durchzublättern',
		_options_menu : 'Optionsmenü',
		_keyboard_type : 'Tastaturtyp',
		_current_keys : 'Aktuelle Tastenbelegung',
		_ui_lang : 'UI-Schnittstellensprache',
		_footer_created : 'Design &amp; Entwicklung von',
		_placeholder : 'Hallo! Willkommen auf der IPA-Tastatur. \nHier können Sie Ihren Text mit den International Phonetic Alphabet Symbols schreiben.\n\n - Wenn das Hilfsfenster angezeigt wird, verwenden Sie die Tabulatortaste, um durch die Sonderzeichen zu blättern.\n - Sie können den Tastaturtyp wechseln, indem Sie ihn im Optionenmenü der Seitenleiste auswählen. \n\nGlückliches IPA Schreiben! \n@alterebro',
		_support_title : 'Unterstützung',
		_support_desc : 'Das IPA Keyboard ist ein persönliches Projekt, das noch in der Entwicklung ist. Es hilft, es besser zu machen, indem es seine Kommentare und Fehler an den Entwickler sendet (<a href="https://twitter.com/alterebro" target="_ blank" title="Jorge Moreno. @alterebro">@alterebro</a>).<br />Diese App ist kostenlos und hat keine lästigen Anzeigen jeglicher Art. Bitte denken Sie daran, eine Spende zu machen, um es auf diese Weise zu halten, wenn Sie irgendeinen Wert daraus ziehen können!!',
		_support_donate : 'Spenden Sie über Paypal'
	}

}

// ------------------------------------------------
// ------------------------------------------------
var app_state = JSON.parse(localStorage.getItem('IPA-Keyboard-settings')) || {
	input_data : '',
	default_keymap : 'IPA-Full',
	default_lang : 'en',
	menu_type_open : false,
	menu_keys_open : false,
	menu_lang_open : false,
	menu_help_open : false,
	sidebar_hidden : false
};
// Force language if found in URL > http:://url/path/?en
var url_lang = location.search.slice(1,3);
app_state.default_lang = (lang[url_lang] && (location.search.length ==3)) ? url_lang : app_state.default_lang;

// ------------------------------------------------
// ------------------------------------------------
var data = {
	maps : maps,
	current_keymap : app_state.default_keymap,
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
		description : 'IPA Keyboard. International Phonetic Alphabet Symbols Web Application.',
		url : 'https://git.io/ipa'
	},
	textarea : document.querySelector('#data-input'),
};

// ------------------------------------------------
// ------------------------------------------------
var app = new Vue({
	el : '#app',
	data : data,

	// ------------------------
	created : function() {

		this.init();
		this.calc_helper_offset();
		this.create_placeholder();
		this.socialLinks();
		window.addEventListener('resize', this.closeHelper);
		window.setTimeout(function() {
			document.querySelector('body').classList.remove('preload');
		}, 2000);

	},

	// ------------------------
	filters : {
		beautify : function(str) {
			return str.replace(/-/g, ' ');
		},
		urlencode : function(str) {
            return encodeURIComponent(str);
        }
	},

	// ------------------------
	methods : {
		create_placeholder : function() {
			var _in = this.textarea;
			var p = this.lang._placeholder;
			var p_str = '';
			var counter = 0;
			var interval = window.setInterval(function() {
				p_str += p[counter];
				counter++;
				if ( counter >= (p.length) ) { clearInterval(interval); }
				_in.setAttribute('placeholder', p_str);
			}, 5);

			_in.focus();
		},

		calc_helper_offset : function() {
			var y = this.textarea.offsetTop;
				y += parseInt(get_style(this.textarea, 'font-size')) * 1.5;
				this.helper_offset.top = y;

			var x = this.textarea.offsetLeft;
				this.helper_offset.left = x + 10; // arbitrary 10

			this.helper_positioning(0, 0);
		},

		toogle_sidebar : function() {
			this.hide_sidebar = !this.hide_sidebar;
			this.saveAppState();
			this.closeHelper();
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

		helper_positioning : function(x,y) {
			this.helper_coordinates.top = x + this.helper_offset.top;
			this.helper_coordinates.left = y + this.helper_offset.left;
		},

		onKeyDown : function() {},

		onKeyPress : function() {
			var caret = getCaretCoordinates(this.textarea, this.textarea.selectionEnd);
			this.helper_positioning( caret.top, caret.left );
		},

		onKeyUp : function() {
			this.saveAppState();

			// Calc helper modal displacement
			if (this.helper_chars.length > 0) {
				var the_helper = document.querySelector('#helper');
				var the_inner_helper = document.querySelector('#helper dl');

				var hhw = Math.round(parseInt( get_style(the_helper, 'width') ) / 2);
				var hl = this.helper_coordinates.left;
				var il = this.textarea.offsetLeft;

				var displacement = false;
				var displacement_value = 0;
				var calc_l = (hhw+il)-hl;
					if ( calc_l > 0 ) {
						displacement = true;
						displacement_value = (calc_l + 10);
					}
				var calc_r = this.textarea.offsetWidth - (hl+hhw-10);
					if ( calc_r < 0 ) {
						displacement = true;
						displacement_value = calc_r;
					}
				the_inner_helper.style.left = (displacement) ? displacement_value + 'px' : '0px';
			}
		},

		saveAppState : function() {
			var app_settings = {
				input_data : data.input,
				default_keymap : data.current_keymap,
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
			this.saveAppState();
			this.init();
		},

		setLang : function(param) {
			this.current_lang = param;
			this.lang = lang[param];
			this.saveAppState();
			this.create_placeholder();
		},

		addChar : function(c) {
			var s = this.textarea.selectionStart;
			this.input = data.input.substr(0,s) + c + data.input.substr(s);

			this.setCaret(s+1);
			this.closeHelper();
			this.saveAppState();
			this.textarea.focus();
		},

		setCaret : function(pos) {
			var _in = this.textarea;
			window.setTimeout(function(){
				_in.setSelectionRange(pos,pos);
			}, 1);
		},

		cycleHelperChar : function() {
			var cl = this.helper_chars.length;
			if( cl > 0 ) {
				this.helper_chars_current = ( this.helper_chars_current++ >= (cl) ) ? 0 : this.helper_chars_current++;
				var c = (this.helper_chars_current == cl) ? this.helper_chars_origin : this.helper_chars[this.helper_chars_current];
				var s = this.textarea.selectionStart;
				this.input = data.input.substr(0,s-1) + c + data.input.substr(s);
				this.setCaret(s);
			}
		},

		openHelper : function(chars) {
			this.helper_chars_current = -1;
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
			var input_element = this.textarea;

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
				Mousetrap(input_element).bind(['space', 'backspace'], function(e, combo) {
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


// Google Analytics Tracking ID
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-63335-24', 'auto');
ga('send', 'pageview');
