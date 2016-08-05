/**
 * 异步IO
 * Created by Songdan on 2016/8/4.
 */
//引入文件系统
var fs = require("fs");
fs.readFile("../../package.json",{
   encoding:"utf-8"
},function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
console.info("程序执行结束");