var foo = "bar";

function bar() {

    /*console.log("foo=",foo);*/
    /*
    Q: what is the output of console.log("foo=",foo);
    A: foo = undefined
    Because foo is declared on below line so at the compile time compiler adds foo to the scope of function bar()
    But during execution scope manager finds foo in the scope of function bar() but at this point in time it has no value, therefore,
      undefined error is generated
    */

    var foo = "baz";
    /*console.log("foo=",foo);*/
    /*Output: foo = baz.
     Because during execution phase at this point of time foo has the value baz. */
}

function baz(foo) {
    foo = "bam";
    bam = "yay"; /*During lexical scoping, the scope manager ignores this statement because it is not a
                 declaration.
                 But during execution it will add bam to the global scope.
                 "use strict" mode would throw error at the compile time.
                 "use script will throw a reference error saying 'Reference error bam is not defined.'
                 because bam is not declared."*/
}
