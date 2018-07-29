
/*This not a module because foo can still access O*/
var foo = {
    o:{bar:"bar"},
    bar() {
        console.log(this.o.bar);
    }
};
foo.bar();
console.log(foo.o.bar); // private method accessible here