var events = require("events");
var eventEmitter = new events.EventEmitter();
eventEmitter.on("connection", function () {
    setTimeout(function () {
        console.log("连接成功");
        eventEmitter.emit("data-recieved");
    }, 1000);
});
eventEmitter.on("data-recieved", function () {
    console.log("接收到数据");
});
eventEmitter.emit("connection");
console.info("程序执行完毕");