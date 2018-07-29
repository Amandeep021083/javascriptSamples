

/*Because we have used var the below will print 66666, because it creates only one variable i.*/
for(var p =1; p<=5;p++){
    setTimeout(function(){
        console.log("p: "+p);
    }, i*1000);
}

/*in order to create new variable each time we can use IIFE*/
for(var n =1; n<=5;n++){
    (function IIFE(n){
        console.log("n: "+n);
    })(n);
}

/*A new variable can also created each time if we replace var with let*/

for(let q =1; q<=5;q++){
        console.log("q: "+q);
}
