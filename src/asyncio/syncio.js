/**
 * 同步IO读取文件
 * Created by Songdan on 2016/8/4.
 */
var fs = require("fs");
console.info("read file sync");
var data = fs.readFileSync("../package.json");
console.log(data);
console.log("程序执行结束");
