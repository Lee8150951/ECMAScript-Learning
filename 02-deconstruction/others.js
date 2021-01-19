// 字符串解构赋值
let [a, b, c, d, e] = "Hello";
console.log(a, b, c, d, e);
// 函数解构赋值
function add([x, y]) {
    return x + y
}
console.log(add([1, 2]));
// 函数解构赋值默认值
function reduce([x = 0, y = 0] = []) {
    return x - y
}
console.log(reduce());
console.log(reduce([3, 1]));