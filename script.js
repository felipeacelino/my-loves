(function(){

	var heart = document.querySelector('.heart-container');
	var parts = document.querySelectorAll('.heart');
	var campo = document.querySelector('#nome');
	var nome = '';

	var animar = function animar() {
		nome = campo.value.toString().toLowerCase();
		switch(nome){
			case 'beatriz':
				Array.prototype.forEach.call(parts, function (part) {			
					part.style.WebkitTransition = 'background 0.5s';
					part.style.MozTransition = 'background 0.5s';
					part.style.background = '#FF3F3F';
				});
				heart.className = 'heart-container heart-animate-fast';
				break;
			case 'palmeiras':
				Array.prototype.forEach.call(parts, function (part) {				
					part.style.WebkitTransition = 'background 0.5s';
					part.style.MozTransition = 'background 0.5s';
					part.style.background = '#22F340';
				});
				heart.className = 'heart-container heart-animate-slow';
				break;
			case 'felipe':
			case 'gabriel':
				Array.prototype.forEach.call(parts, function (part) {				
					part.style.WebkitTransition = 'background 0.5s';
					part.style.MozTransition = 'background 0.5s';
					part.style.background = '#656DFF';
				});
				heart.className = 'heart-container heart-animate';
				break;
			default:
				Array.prototype.forEach.call(parts, function (part) {				
					part.style.WebkitTransition = 'background 0.5s';
					part.style.MozTransition = 'background 0.5s';
					part.style.background = '#CCC';
				});
				heart.className = 'heart-container';
		}
	} 

	campo.addEventListener('keyup', animar);
	campo.addEventListener('paste', animar);

}());





