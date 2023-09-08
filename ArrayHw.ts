//create a string array dynamically traverse the array
let arr:String[]=["pratiksha","vaibhav","anita","ab","abc"];

for(let i=0;i<arr.length;i++){
    //console.log("Origional array :"+arr[i]);
    console.log(arr[i]);
}
arr.push("mayur");
arr.push("xyz");
arr.push("shweta");
arr.pop();
console.log( "final array :")

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

