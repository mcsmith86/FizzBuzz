var FizzBuzz = (function() {

	var pub = {};
	var fizzFactor, buzzFactor,
		fizzCallback, buzzCallback, counterCallback,
		countSpeed, runMax, counter = 0, intervalId;

	pub.setFizz = function(iFizzFactor) {
		fizzFactor = iFizzFactor;
	};
	pub.getFizz = function(iFizzFactor) {
		return fizzFactor;
	};

	pub.setBuzz = function(iBuzzFactor) {
		buzzFactor = iBuzzFactor;
	};
	pub.getBuzz = function(iBuzzFactor) {
		return buzzFactor;
	};

	pub.setFizzCallback = function(fFizzCallback) {
		fizzCallback = fFizzCallback;
	};
	pub.getFizzCallback = function(fFizzCallback) {
		return fizzCallback;
	};

	pub.setBuzzCallback = function(fBuzzCallback) {
		buzzCallback = fBuzzCallback;
	};
	pub.getBuzzCallback = function(fBuzzCallback) {
		return buzzCallback;
	};

	pub.setCounterCallback = function(fCounterCallback) {
		counterCallback = fCounterCallback;
	};
	pub.getCounterCallback = function(fCounterCallback) {
		return counterCallback;
	};

	pub.setRate = function(icountSpeed) {
		countSpeed = icountSpeed;
	};
	pub.getRate = function(icountSpeed) {
		return countSpeed;
	};

	pub.setRunMax = function(iRunMax) {
		runMax = iRunMax;
	};
	pub.getRunMax = function(iRunMax) {
		return countRunMax;
	};

	/*
	 * Parameters: Object
	 *	fizzFactor
	 *  buzzFactor
	 *  fizzFunction
	 * 	buzzFunction
	 * 	fizzbuzzFunction // if null do fizz + buzz fxns
	 *  rate
	 *  runMax
	 */
	pub.setOptions = function() {

		args = arguments[0];
		fizzFactor = args['fizzFactor'];
		buzzFactor = args['buzzFactor'];
		countSpeed = args['rate'];
		runMax = args['runMax'];
		fizzCallback = args['fizzCallback'];
		buzzCallback = args['buzzCallback'];
		counterCallback = args['countCallback'];

	};

	pub.run = function() {

		intervalId = setInterval(increment, 1000 / countSpeed);

	};

	increment = function() {

		if (counter <= runMax) {
			counterCallback(counter);
			var isFizz = counter % fizzFactor == 0 ? true : false;
			var isBuzz = counter % buzzFactor == 0 ? true : false;

			if (isFizz && isBuzz) {
				console.log(counter + ' - FizzBuzz!!!');
				fizzCallback();
				buzzCallback();
			} else if (isFizz) {
				console.log(counter + ' - fizz');
				fizzCallback();
			} else if (isBuzz) {
				console.log(counter + ' - buzz');
				buzzCallback();
			}
		} else {
			clearInterval(intervalId);
			console.log('DONE')
		}

		counter++;
	};

	return pub;
})();
