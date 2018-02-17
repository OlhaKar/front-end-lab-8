let getClosestToZero = function (x, arr) {
    let indexArr = arr.map(function(k) { 
    	return Math.abs(k - x) 
    });
    let min = Math.min.apply(Math, indexArr);
    return arr[indexArr.indexOf(min)]
}

// console.log(getClosestToZero(0,[-5,2,85,0,-85]))