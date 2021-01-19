// 数组的解构赋值
// 基本用法
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);
// 匹配模式
let [m, [n, i], k] = [1, [2, 3], 4];
console.log(m, n, i, k);
// 默认值
let [foo = true] = []
console.log(foo);
let [x = true] = [undefined]
console.log(x);