function factorialIterative(num){
	var total = 1;
	for (var i = 1; i <= num; i++) {
			total = total * i;
	}
	return total;
}

function factorial(num){
	if(num === 0){
		return 1;
	}else{
		return num * factorial(num-1);
	}
}

function fib(numberInSequence){
	if (numberInSequence === 0) {
		return 1;
	}
	if (numberInSequence === 1) {
		return 1;
	}
	return fib(numberInSequence -1) + fib(numberInSequence -2);
}

function type(typeToFind){
	var response = Object.prototype.toString.call(typeToFind);
	response = response.slice(8, -1);
	return response;
}

/*function stringify(typeToConvert){
	var typeString = type(typeToConvert);
	var stringy = "";
	if (typeString !== "Array" && typeString !== "Object") {
		if (typeString === "String") {
			stringy = "\"" + typeToConvert +"\"";
		}else{
			stringy += typeToConvert;
		}
	}else if (typeString === "Array") {
		for(var i=0; i < typeToConvert.length; i++){
			stringify(typeToConvert[i]);
		}
	}
	return stringy;
}
*/

/*function stringify(typeToConvert){
	var typeString = type(typeToConvert);
	var stringy = "";
	if (typeString !== "Array" && typeString !== "Object") {
		if (typeString === "String") {
			stringy = "\"" + typeToConvert +"\"";
		}else{
			stringy += typeToConvert;
		}
		return stringy;
	}else if (typeString === "Array") {
		for(var i=0; i < typeToConvert.length; i++){
			if (type(typeToConvert[i]) === "Array") {
				stringy += stringify(typeToConvert[i]);
			}else{
				stringy += (stringify(typeToConvert[i]));
			}
			stringy = stringy + ",";
		}
		stringy = stringy.slice(0,-1);
		stringy = "[" + stringy + "]";
		return stringy;
	}else if (typeString === "Object") {
		for(var keys in typeToConvert){
			stringy += stringify([keys]+ "\"" + ": " + typeToConvert[keys] + ",");
			stringy = stringy.slice(0,-1);
		}
		stringy = stringy.slice(0,-1);
		stringy = "{" + stringy + "}";
		return stringy;
	}
}
*/



function stringify(typeToConvert){
	var typeString = type(typeToConvert);
	var stringy = "";
	if (typeString !== "Array" && typeString !== "Object") {
		if (typeString === "String") {
			stringy = "\"" + typeToConvert +"\"";
		}else{
			stringy += typeToConvert;
		}
		return stringy;
	}else if (typeString === "Array") {
		for(var i=0; i < typeToConvert.length; i++){
			if (type(typeToConvert[i]) === "Array") {
				stringy += stringify(typeToConvert[i]);
			}else{
				stringy += (stringify(typeToConvert[i]));
			}
			stringy = stringy + ",";
		}
		stringy = stringy.slice(0,-1);
		stringy = "[" + stringy + "]";
		return stringy;
	}else if (typeString === "Object") {
		for(var keys in typeToConvert){
			if (type(typeToConvert[keys]) === "Object") {
				stringy += stringify([keys]+ "\"" + ": ");
				stringy += stringify(typeToConvert[keys]);
			}else{
				stringy += stringify([keys]+ "\"" + ": " + typeToConvert[keys] + ",");
				stringy = stringy.slice(0,-1);
			}
		}
		stringy = stringy.slice(0,-1);
		stringy = "{" + stringy + "}";
		return stringy;
	}
}





