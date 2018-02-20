function forEach(array, element) {
	for (let i = 0; i < array.length; i++) {
		element(array[i]);
	}
}

function getTransformedArray(array, element) {
	let newArray  = [];
	forEach(array, function(index) {
        let v = element.call(this, index);
        if(v) {
            newArray.push(v);
        }
    });
    return newArray;
}

