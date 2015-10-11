// iife stands by Immediately-Invoked Function Expression
var module1 = (function(){
	var _count = 0;
	var m1 = function(){
		alert('m1 is called');
		_count++;

	};
	var m2 = function(){
		alert('m2 is called');
		_count++;
	};
	var getCount = function(){
		return _count;
	}
	return {
		m1 : m1,
		m2 : m2,
		getCount : getCount
	};
})();
console.log(typeof(module1));
module1.m1();
console.log(module1.getCount());
