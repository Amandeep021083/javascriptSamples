var foo = (function(){
    var o = {name:"Amandeep Singh", age: 34};

    var publicAPI = {
        getName: function(){return o.name},
        getAge: function(){return o.age},
        setName: function(name){o.name= name},
        setAge: function(age){o.age= age}
    }
    return publicAPI;
})();
``
console.log(foo.getName());
console.log(foo.getAge());
foo.setName("Amandeep Kaur");
foo.setAge(27);
console.log(foo.getName());
console.log(foo.getAge());

