/**
 * What is an event emitter?
 * 
 * An event emitter is a class that can emit named events
 * and allows other parts of the code to listen for those events
 * and respond accordingly.
 * 
 * Real use case:
 * Create a simple event emitter that listens for a "login" event
 * and logs a message when the event is emitted.
 * 
 * Use cases of event emitters:
 * Notifications, logging, asynchronous programming
 */

const EventEmitter = require("events");

// Create an event emitter
const emitter = new EventEmitter();

// Listen for an event
emitter.on("login", (user) => {
  console.log(`${user} logged in`);
});

// Emit an event
emitter.emit("login", "Max");

// run
// node basic-built-in-function/events.js