function getMin(i) {
    if(i.length == 0) {
        return NaN;
    } else if(i.length == 1) {
        let val = i.pop();
        if (typeof val == "number" ) {
            return val;
        } else {
            return NaN;
        }
    } else {
        let val = i.pop();
        return Math.min(val, this.getMin(i))
    }
};
