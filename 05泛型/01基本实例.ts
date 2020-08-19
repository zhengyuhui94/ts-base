
// <T> 捕获传入的参数类型，并使用这个类型来定义返回值的类型
function identity<T>(arg: T): T {
    return arg
}

// 二者都可以，第一种较为简洁，但在较为复杂的情况下，编译器可能不能够自动推断出类型
let outPut1 = identity('myString')
let outPut2 = identity<string>('mySting2')