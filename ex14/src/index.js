//Only change code below this line
function myForLoop1() {
    var i;
    var evenNumbers = "";
    for (i = 0; i < 10; i += 2) {
        if (i == 8) {
            evenNumbers += i;
        }
        if (i != 8) {
            evenNumbers += i + ",";
        }
    }
    return evenNumbers;
}

function myForLoop2() {
    var i;
    var evenInverseNumbers = "";
    for (i = 8; i >= 0; i -= 2) {
        if (i == 0) {
            evenInverseNumbers += i;
        }
        if (i != 0) {
            evenInverseNumbers += i + ",";
        }
    }
    return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());
//Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
}