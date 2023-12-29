function range(start, end, step) {
    var step = typeof step !== "undefined" ? step : 1;
    var l = [];
    if (start <= end) {
        for (var index = start; index <= end; index+= step) {
            l.push(index);  
        }
    } else {
        for (var index = start; index >= end; index+= step) {
            l.push(index);   
        }
    }
    
    return l;
}

module.exports = { range }
