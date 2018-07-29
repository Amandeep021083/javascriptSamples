var student = function getStudentModuleFactory(){
    var o = {name:"", adge:""};
    var publicAPI = {
        setName: function(name){ o.name = name;},
        setAge: function(age){o.age = age;},
        getName: function(){return o.name;},
        getAge: function(){return o.age}
    };

    return publicAPI;
}

var student1 = student();
console.log(student1.getName());
console.log(student1.getAge());
student1.setName("Amandeep Singh");
student1.setAge(34);
console.log(student1.getName());
console.log(student1.getAge());

var student2 = student();
console.log(student2.getName());
console.log(student2.getAge());