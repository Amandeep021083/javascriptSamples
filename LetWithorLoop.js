

    var sum = 0 ;
    for (let i = 0; i < 5; i++) {
        sum = sum + i;
    }
    //console.log("i = "+ i); // Reference error i is not defined.
    console.log("sum = "+ sum);



    var sum = 0 ;
    for (var i = 0; i < 5; i++) {
        sum = sum + i;
    }
    console.log("i = "+ i); // Prints 5 because var i creates the variable to be function scope.
    console.log("sum = "+ sum);
