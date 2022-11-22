console.log("hello we are learning ndejs global bject");

setTimeout(function () {
    console.log("this is settimeout function ")
},3000)

var time = 0
var timer = setInterval(() => {
    time += 2
    console.log(time +" "+ "this is from setinterval function");
    if(time>10){
        clearInterval(timer)
    }
}, 6000);