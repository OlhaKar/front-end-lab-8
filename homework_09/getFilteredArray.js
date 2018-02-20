function forEach(array, element) {
	for (let i = 0; i < array.length; i++) {
		element(array[i]);
	}
}

