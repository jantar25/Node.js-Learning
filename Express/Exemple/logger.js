const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    //Call Event
    this.emit("message", { id: uuid.v4(), msg });
  }
}
module.exports = Logger;

const Logger = require("./logger");
const logger = new Logger();
//console.log(logger);
//const identity = new Person("JAMEL", 24);
//identity.greeting();
logger.on("message", (data) => console.log("Message emited:", data));
logger.log("Hello Janta");
