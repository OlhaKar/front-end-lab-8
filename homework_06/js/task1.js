let a = Number(prompt('Please, enter value for length of trianlgle first side:'));
let b = Number(prompt('Please, enter value for length of trianlgle second side:'));
let c = Number(prompt('Please, enter value for length of trianlgle third side:'));
let per = (a+b+c)/2;
let square = Math.sqrt(per*(per-a)*(per-b)*(per-c));

if (a>0 && b>0 && c>0){
	if ((a * a) == (b * b) + (c * c) || (b * b) == (a * a) + (c * c) || (c * c) == (a * a) + 
		+ (b * b)) {
		console.log("Type of triangle is right triangle and the square is " + 
			+ square.toFixed(2));
	} else if (a == b && a == c && b == c) {
		console.log("Type of triangle is equilateral triangle and the square is " + 
			+ square.toFixed(2));
	} else if (a == b && a != c || a == c && a != b || b == c && b != a) {
		console.log("Type of triangle is isosceles triangle and the square is " + 
			+ square.toFixed(2));
	} else if (a != b != c) {
		console.log("Type of triangle is scalene triangle and the square is " + 
			+ square.toFixed(2));
	} 
} else {
	console.log('Incorrect data');
}
