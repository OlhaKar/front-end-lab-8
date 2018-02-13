let number = Number(prompt('Please, enter number from 1 to 20'));

if (number > 0 && number <= 20) {
	for (let i = 0; i < number; i++) {
		let output="";
		for (let j = 0; j < number-i; j++) {
			output+=" ";
		}
		for (let k = 0; k <= i; k++) {
			output += "[~]";
		}
		console.log(output); 
	}
} else {
	console.error ('Incorrect!');
}

