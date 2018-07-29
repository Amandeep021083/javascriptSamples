var foo = "bar";

function bar(){
var foo = "baz";

function baz(foo){
foo = "bam";
console.log("baz()>foo = ", foo);

bam = "yay";
console.log("baz()>bam = ", bam);
}
baz();
}
bar();
console.log("Global Scope >foo = ", foo);
console.log("Global Scope >bam = ", bam);
//baz();/*This will throw reference error because baz in not in global scope. Also a new function declaration
       will not be added because it is a RHS reference. Referenece error - baz() is not defined will be
       thrown in this case*/