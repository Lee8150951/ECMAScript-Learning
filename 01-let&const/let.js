/* let命令 */
// 1、仅在块级作用域内起效果
{
    let a = 10;
    var b = 1;
    console.log(a); // 此处显示a
}
console.log(a); // 报错：“a” is not defined
console.log(b); // 此处显示b

for(let i = 0; i < 10; i++) {}
console.log(i); // 报错

// 2、暂时性死区
var tmp;
if(true) {
    tmp = 'abc'; // 报错：Cannot access 'tmp' before initialization
    let tmp;
}

// 3、不允许重复变量
function s() {
    let a = 10;
    var a = 1; // 报错：重复变量名
}