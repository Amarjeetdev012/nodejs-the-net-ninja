var events = require("events")

// var myEmitter = new events.EventEmitter()

// myEmitter.on("someEvent", function(msg){
//     console.log(msg)
// })

// myEmitter.emit("someEvent", "the event is emitted")

var util = require("util")

var Person = function (name) {
    this.name = name
}
// inherits like class or type of saancha or eske use se copyies bna sakte hai
util.inherits(Person, events.EventEmitter)

var james = new Person("james")
var mary = new Person("mary")
var ryu = new Person("ryu")

var people = [james,mary,ryu]

people.forEach(function(person){
    person.on("speak", function (msg) {
        console.log(person.name + " said "+ msg)
    })
})

james.emit("speak" ," hey dudes")
ryu.emit("speak" ," i want a curry")
mary.emit("speak" ," i want a fresh mushrooms")