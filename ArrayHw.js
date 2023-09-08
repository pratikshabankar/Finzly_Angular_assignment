//create a string array dynamically traverse the array
var arr = ["pratiksha", "vaibhav", "anita", "ab", "abc"];
for (var i = 0; i < arr.length; i++) {
    //console.log("Origional array :"+arr[i]);
    console.log(arr[i]);
}
arr.push("mayur");
arr.push("xyz");
arr.push("shweta");
arr.pop();
console.log("final array :");
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
