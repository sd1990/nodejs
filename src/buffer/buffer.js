/**
 * Created by Songdan on 2016/8/4.
 */
console.info("write....");
var buf = new Buffer(256);
var len = buf.write("www.fpkj.piaotong.com");
console.info("写入的字节数："+len);

console.info("concat....");
var buffer1 = new Buffer("1菜鸟教程");
var buffer2 = new Buffer("2www.hello.com");
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3:" + buffer3);
console.info("concat....");
console.info("buffer1和buffer2的比较结果是："+buffer1.compare(buffer2))

