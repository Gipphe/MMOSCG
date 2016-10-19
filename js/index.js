(function() {
	window.changeLang = function(lang) {
		if (typeof lang !== 'string' || lang.length !== 2) {
			return;
		}
		var body = document.body;
		body.setAttribute('lang', lang);

		// var selected = document.getElementById('selected');


	};
}());
