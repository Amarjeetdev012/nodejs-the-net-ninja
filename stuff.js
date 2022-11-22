// method 1 
// var counter = function(arr){
//     return "there are " + arr.length+ " elements in this array"
// }

// var adder = function (a,b) {
//     return `the sum of two numbers is ${a+b}`
// }

// var pi = 3.142

// module.exports.counter = counter
// module.exports.adder = adder
// module.exports.pi = pi

// method 2
// module.exports.counter = function(arr){
//     return "there are " + arr.length+ " elements in this array"
// }

// module.exports.adder = function (a,b) {
//     return `the sum of two numbers is ${a+b}`
// }

// module.exports.pi = 3.142

// method 3
 
var counter = function(arr){
    return "there are " + arr.length+ " elements in this array"
}

var adder = function (a,b) {
    return `the sum of two numbers is ${a+b}`
}

var pi = 3.142

module.exports = {counter, adder ,pi}