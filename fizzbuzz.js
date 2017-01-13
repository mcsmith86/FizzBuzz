var FizzBuzz = (function() {

	var public = {};
	var fizzFactor, buzzFactor,
		fizzCallback, buzzCallback, counterCallback,
		countSpeed, runMax, counter = 0, intervalId;

	public.setFizz = function(iFizzFactor) {
		fizzFactor = iFizzFactor;
	};
	public.getFizz = function(iFizzFactor) {
		return fizzFactor;
	};

	public.setBuzz = function(iBuzzFactor) {
		buzzFactor = iBuzzFactor;
	};
	public.getBuzz = function(iBuzzFactor) {
		return buzzFactor;
	};

	public.setFizzCallback = function(fFizzCallback) {
		fizzCallback = fFizzCallback;
	};
	public.getFizzCallback = function(fFizzCallback) {
		return fizzCallback;
	};

	public.setBuzzCallback = function(fBuzzCallback) {
		buzzCallback = fBuzzCallback;
	};
	public.getBuzzCallback = function(fBuzzCallback) {
		return buzzCallback;
	};

	public.setCounterCallback = function(fCounterCallback) {
		counterCallback = fCounterCallback;
	};
	public.getCounterCallback = function(fCounterCallback) {
		return counterCallback;
	};

	public.setRate = function(icountSpeed) {
		countSpeed = icountSpeed;
	};
	public.getRate = function(icountSpeed) {
		return countSpeed;
	};

	public.setRunMax = function(iRunMax) {
		runMax = iRunMax;
	};
	public.getRunMax = function(iRunMax) {
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
	public.setOptions = function() {

		args = arguments[0];
		fizzFactor = args['fizzFactor'];
		buzzFactor = args['buzzFactor'];
		countSpeed = args['rate'];
		runMax = args['runMax'];
		fizzCallback = args['fizzCallback'];
		buzzCallback = args['buzzCallback'];
		counterCallback = args['countCallback'];

	};

	public.run = function() {

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

	return public;
})();
