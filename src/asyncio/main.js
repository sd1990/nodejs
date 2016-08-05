var fs = require("fs");
var data = '';
var readStream = fs.createReadStream("../../package.json");
readStream.setEncoding("UTF-8");
readStream.on("data", function (chunk) {
    data += chunk;
});
readStream.on("end", function () {
    console.info(data);
    writeStream.write(data,"UTF-8");
    writeStream.end();
});

readStream.on("error", function (err) {
    console.info(err.stack);
});
var writeStream = fs.createWriteStream("output.txt");

writeStream.on("finish", function () {
    console.info("写入完成");
    var readStream2 = fs.createReadStream("output.txt");
    var writeStream2 = fs.createWriteStream("output2.txt");
    readStream2.pipe(writeStream2);
});
writeStream.on("error", function (err) {
    console.error(err.stack)
});
console.info("==========管道流===============")
console.info("==========链式流");
console.info("程序执行完毕")