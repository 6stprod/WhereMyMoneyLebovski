let WMLModule = (function() {
	let _show; // = true / false
	let _text = 'ГДЕ ДЕНЬГИ, ЛЕБОВСКИ?'; // Текст, который хотим показывать

	let _init = function(params) {
		_show = params["show"]; // Этот параметр мы передаем при инициализации, но можно сразу поставить _show = true;, а тут переменную оставить пустой
		_text;
		_event();
	};
	
	let _event = function() {
		if(_show){
			_onEvent();
		}
	};
	
	let _onEvent = function() {
		$('<style>').text('.blink{animation: blink .3s infinite;}@keyframes blink {from { opacity: 1;}to{ opacity: .5;}}.wml{position:fixed;top:35%;left:0;width:100%;text-align: center;font-size: 120px;color: red;text-shadow: 0 0 20px red;word-break: break-word;-moz-user-select: none;-khtml-user-select: none;user-select: none;}').appendTo('head');
		$('<div>', {
			id: _genToken,
			class: 'blink wml',
			html: _text
		}).appendTo('body');
	};
	
	let _genToken = function() {
		const r=()=>Math.random(0).toString(36).substr(2);
		const t=(length)=>(r()+r()+r()+r()).substr(0,length);
		return t(10);
	};
	
	return {
		"init":_init
	}
})();


