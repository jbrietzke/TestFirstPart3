function findACount(newStr){
	var result = 0;
	newStr = newStr.match(/([a]+)/gi);
	if (newStr !== null) {
		newStr = newStr.join("");
		result = newStr.length;
	}
	return result;
}

function areaCodeFinder(newStr){
	newStr = newStr.match(/(\d{3})/)
	return parseInt(newStr[0]);
}

function adjustUrlParameter(url, parameter){
	var parameterType = parameter.match(/[A-Z]+/)
	var idValue = new RegExp(parameterType[0], "g");
	var urlMatch = url.match(idValue);
	if (urlMatch === null) {
		var existingID = url.match(/[=]/);
		if (existingID !== null) {
			url = url + "&" + parameter;
		}else{
			url = url + "?" + parameter;
		}
	}else{
		url = url.slice(0, -6) + parameter;
	}
	return url;
}

function stringPlusPlus(newStr){
	var response;
	var numberString = newStr.match(/\d+/);
	var finalNumString = "";
	if (numberString !== null) {
		var newNumber = parseInt(numberString[0]) + 1;
		var long = numberString[0].length;
		var newNumber = newNumber.toString();
		var counter = newNumber.length;
	}else{
		finalNumString += "1";
	}
	while(counter < long){
		finalNumString += "0";
		counter++;
	}
	if (numberString !== null) {
		finalNumString += newNumber;
	}
	var wordString = newStr.match(/\w+\D/);
	if (wordString !== null) {
		response = wordString + finalNumString;
	}else{
		response = finalNumString;
	}
	return response;
}






