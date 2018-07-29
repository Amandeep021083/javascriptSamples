/*Hoisting allows function to the declared anywhere and but the moment it is executed it will be resolved.
* This can be think as if all the function declaration is moved to the top but its actually happening with due
* two pass processing of the compiler. Same goes for variables using declare using var*/
function a(){
    console.log("function a");
}
a();
b();
function b(){
    console.log("function b");
}


/*This won't work because function expressions don't hoist. Gives e is not defined error.*/
e();
e=function(){
    console.log("function e");
};

/*to make above work switch the sequence*/
var f=function(){
    console.log("function f");
};

f();

/*Let key word do not hoists*/

{
    i = 10;
    let i = 0;
    console.log(" i = "+i);
}