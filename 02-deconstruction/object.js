// 对象的解构赋值
// 基本用法
let {foo, bar} = {foo: "aaa", bar: "bbb"};
console.log(foo, bar);
// 全写
let {a: a, b: b} = {a: "aaa", b: "bbb"};
console.log(a, b);
// 属性名与变量名不同
let {i: t1, j: t2} = {i: "aaa", j: "bbb"};
console.log(t1, t2);
// 默认值
let {x = 3} = {};
console.log(x);