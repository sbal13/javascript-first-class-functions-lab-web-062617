function countdown(callback){
	window.setTimeout(callback, 2)
}

function createMultiplier(multiplierValue){
	return function (value) {
		return value * multiplierValue
	}
}


var doubler = new createMultiplier(2)
var tripler = new createMultiplier(3)

function multiplier(val1, val2){
	return val1*val2
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)