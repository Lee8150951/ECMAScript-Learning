// 字符串拓展
// 1、Unicode表示法
console.log("\u0061");
// 2、codePointAt()
var s = "李";
console.log(s.length);
console.log(s.codePointAt(0));
// 3、遍历接口
for(let codePoint of "foo") {
    console.log(codePoint);
}
// 4、includes(), startsWith(), endsWith()
var t = 'Hello World!';
console.log(t.startsWith('Hello'));
console.log(t.endsWith('!'));
console.log(t.includes('o'));
// 5、repeat()重复
console.log("x".repeat(5));