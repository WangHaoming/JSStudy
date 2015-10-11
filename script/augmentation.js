var module2 = (function(mod){
	mod.m3 = function(){
		alert('m3 is called');
	};

	return mod;
})(window.module1 || {});


