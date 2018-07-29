

/*Using var instead of let makes sense in try/catch block because var will make it function scoped
* therefore making it accessible to outside of try block. let will not work like this*/
function a(){
    try{
    var id = 10;
    throw "too big";
    }catch(err){
        console.log("id = " + id);
        var id = -1;
    }
    console.log("id = " + id);
}
a();
