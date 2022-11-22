//  normal function statement

function sayHi() {
    console.log("hi")
}

sayHi()

//  functional expression
var sayBye = function(){
    console.log("bye")
}

sayBye()

// function inside function
function callFunction(fun){
    fun()
}

callFunction(sayBye)