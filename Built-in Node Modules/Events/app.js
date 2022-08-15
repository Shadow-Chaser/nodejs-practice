const { log } = require('console');
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on("event1", () => {
    console.log("event 1 called");
})

emitter.on("event2", (arg) => {
    log("event 2 called", arg);
});

emitter.emit("event1");

emitter.emit("event2", { name: "Ashab Hussan", id: 101 });


// Inheriting from EventEmitter class

const MyEvent = require("./myEvent")
const myEvent = new MyEvent();

myEvent.on("event3", function () {
    console.log("event 3 called");
})

myEvent.func1();

