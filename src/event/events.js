var events = require("events");
var eventEmitter = new events.EventEmitter();
var listener1 = function () {
    console.info("监听器listener1执行");
};
eventEmitter.addListener("connection", listener1);
eventEmitter.addListener("connection", function () {
    console.info("监听器listener2执行");
});
var listenerCount = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
console.info(listenerCount + "个监听器连接事件");
eventEmitter.emit("connection");
eventEmitter.removeListener("connection",listener1);
console.info("移除listener1");
eventEmitter.emit("connection");
var listenerCount = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
console.info(listenerCount + "个监听器连接事件");
