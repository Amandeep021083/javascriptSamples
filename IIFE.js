var  name = "XXX";

function display(firstname){console.log("name= "+firstname)};

display(name);/*declaring fxn like this polutes the scope in which it is declared. Here display will be added
to the scope.*/

(function display(firstname){console.log("name= "+firstname)})(name); /*here display will not be added
scope*/


function display(firstname){console.log("name= "+firstname+ " Singh")};
display(name); /*in case a duplicate fxn is declared then this fxn will replace the other at compile time
then during execution last declared implementation will be called.*/