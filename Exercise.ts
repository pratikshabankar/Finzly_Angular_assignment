//Anonymous function
// function with parameter and without return type
let temp22= function(a:number,b:number){
    console.log("Substraction is:"+(a-b));
}
temp22(30,20);

//function without parameter with return type
let temp33=function():number{
    return(7+9);
}

let res1 =temp33();
console.log("Addition is:"+res1);

// Fat arrow function
// function with parameter without return type
let temp44=(a:number,b:number)=>{
    console.log("Substraction :"+(a-b));
}
temp44(50,20);

// function without parameter with return type
let temp55=():number =>{
    return(10+20);
    
}
let res11=temp55();
console.log("Result :"+res11);