//Anonymous function
// function with parameter and without return type
var temp2 = function (a, b) {
    console.log("Substraction is:" + (a - b));
};
temp2(30, 20);
//function without parameter with return type
var temp3 = function () {
    return (7 + 9);
};
var ress = temp3();
console.log("Addition is:" + ress);
// Fat arrow function
// function with parameter without return type
var temp4 = function (a, b) {
    console.log("Substraction :" + (a - b));
};
temp4(50, 20);
// function without parameter with return type
var temp5 = function () {
    return (10 + 20);
};
var ress1 = temp5();
console.log("Result :" + ress1);
