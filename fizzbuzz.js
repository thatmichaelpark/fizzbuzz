'use strict'

$(document).ready(function () {

	function print(a) {
		$('body').append(a + '<br>');
	}

	function FizzBuzz(limit) {
		for (var i=1; i<=limit; ++i) {
			var fizzbuzz = '';
			if (i % 3 == 0) fizzbuzz = 'Fizz';
			if (i % 5 == 0) fizzbuzz += 'Buzz';
			fizzbuzz = fizzbuzz || i;
			print(fizzbuzz);
		}
	}

	var limit = parseInt(prompt('Enter upper limit'));

	if (isNaN(limit)) {
		print('Invalid input for limit');
	} else {
		FizzBuzz(limit);
	}

});