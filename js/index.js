(function() {
	document.getElementById('no').addEventListener('click', function(){
		this.classList.add('selected');	
		en.classList.remove('selected');
		ar.classList.remove('selected');
	});

	document.getElementById('ar').addEventListener('click', function() {
		this.classList.add('selected');
		no.classList.remove('selected');
		en.classList.remove('selected');
	});

	document.getElementById('en').addEventListener('click', function() {
		this.classList.add('selected');
		no.classList.remove('selected');
		ar.classList.remove('selected');
	});
	window.changeLang = function(lang) {
		if (typeof lang !== 'string' || lang.length !== 2) {
			return;
		}
		var html = document.documentElement;
		html.setAttribute('lang', lang);
	};
}());
