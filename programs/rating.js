function getExpectancy(player, opponent){
	return 1.0 / (1.0 + Math.pow(10, (opponent - player) / 400.0));
}
function getTripleExpectancy(rating, o1, o2, o3){
	var r0s = [o1, o2, o3];
	return getMultiExpectancy(rating, r0s);
}
function getMultiExpectancy(rating, r0s){
	var e = 0.0;
	for (var i = 0; i < r0s.length; i++){
		e += getExpectancy(rating, r0s[i]);
	}
	return e;
}
function getNormExpectancy(rating, opponent){
	var delta = rating - opponent;
	if (delta <= -400){
		return 0;
	} else if (delta <= 0) {
		return 0.5 + delta / 800.0;
	} else if (delta <= 200) {
		return 0.5 + delta / 400.0;	
	} else {
		return 1;
	}
}
function getMultiNormExpectancy(rating, r0s){
	var e = 0.0;
	for (var i = 0; i < r0s.length; i++){
		e += getNormExpectancy(rating, r0s[i]);
	}
	return e;
}
function getTriplePerformance(score, o1, o2, o3){
	var r0s = [o1, o2, o3];
	return getPerformance(score, r0s);
}
function getPerformance(score, r0s){
	if (r0s.length == 0){
		return -400;
	} else if (score >= r0s.length){
		return Math.max.apply(null, r0s) + 400;
	} else if (score <= 0){
		return Math.min.apply(null, r0s) - 400;
	}
	var error = 100.0;
	var guess = 1;
	var minguess = 1;
	var maxguess = 1;
	while (getMultiExpectancy(maxguess, r0s) < score){
		maxguess *= 2;
	}
	while (true) {
		guess = 0.5 * (minguess + maxguess);
		var exp = getMultiExpectancy(guess, r0s);
		if (Math.abs(exp - score) < 0.0000001){
			return Math.round(guess);
		}
		if (exp < score){
			minguess = guess;
		} else {
			maxguess = guess;
		}
	}
}
function getNormCode(rating){
	switch (rating){
		case 2400:
		return "S";
		case 2200:
		return "M";
		case 2000:
		return "C";
		case 1800:
		return "1";
		case 1600:
		return "2";
		case 1400:
		return "3";
		case 1200:
		return "4";
		default:
		return "None"
	}
}
function getHighestNormEarned(score, r0s){
	if (r0s.length < 4){
		return "None";
	}
	for (var guess = 2400; guess >= 1200; guess -= 200){
		var exp = getMultiNormExpectancy(guess, r0s);
		if (score - exp > 1.0){
			return getNormCode(guess);
		}	
	}
	return "None";
}
function getN(rating){
	if (rating >= 2355){
		return 50.0;
	} else {
		return 50.0 / Math.sqrt(0.662 + 0.00000739 * (2569.0 - rating) * (2569.0 - rating));
	}
}
function getK(rating, m){
	if (rating >= 2500){
		return 200 / (getN(rating) + m);	
	} else if (rating > 2200){
		return 800 * (6.5 - 0.0025 * rating)/ (getN(rating) + m);	
	} else {
		return 800 / (getN(rating) + m);
	}
}
function getEstimatedPostEvent(rating, score, r0s){
	var exp = getMultiExpectancy(rating, r0s);
	var extra = getK(rating, r0s.length) * (score - exp);
	var bonus = 0.0;
	var mp = +Math.max(r0s.length, 4);
	if (r0s.length >= 3 && extra > 12 * Math.sqrt(mp)){
		bonus = extra - 12 * Math.sqrt(mp);
	}
	var newR = rating + extra + bonus;
	if (newR < 100){
		newR = 100;
	}
	if (newR > rating){
		return Math.ceil(newR);
	} else {
		return Math.floor(newR);	
	}
}
