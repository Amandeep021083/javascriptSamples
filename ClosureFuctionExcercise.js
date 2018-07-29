function a(){
    var a = "hello a";

    function b(){
        var b = "hello b"
        console.log(b);
    }
    h(b);

    console.log(a);
}

function h(b){
    b();
}

a();