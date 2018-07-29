function a(){
    a = "hello a";

    console.log(a);

    return function b(){
        console.log(a);
    };
}
a()();
