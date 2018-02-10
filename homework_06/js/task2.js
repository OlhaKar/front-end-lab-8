let euro = Number(prompt('Enter an amount of EURO'));
let dollar = Number(prompt('Enter an amount of USD'));
let euroToUah = 33.2324;
let dollarToUah = 27.1240;
let euroToDollar = euroToUah / dollarToUah;
let converterEuro = euro*euroToUah.toFixed(2);
let converterUsd = dollar*dollarToUah.toFixed(2);
console.log(euro + ' euros are equal ' + converterEuro + ' UAH, ' + 
	dollar +  ' dollars are equal ' + converterUsd + ' UAH,' + 
	' one euro is equal ' + euroToDollar.toFixed(2) + ' dollars');
