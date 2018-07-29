
/*Below snippet will give error because const will create a blocked scope variable.*/
function a(){
    {
        const counter =10;
    }

    console.log("counter = "+ counter);
}
a();

/*Below snippet describes that const means that the variable will never be reassigned not*/

var a =1;
console.log( "a = " , ++a); // 2

const d =1;
console.log( "d = " , ++d); // Error - VM116:2 TypeError: Assignment to constant variable.

const c = [2];
c[0] = 1;
console.log( "c[0]++ = " , ++c[0]); //2