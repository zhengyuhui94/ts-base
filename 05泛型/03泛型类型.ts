// 泛型函数
function identity<T>(arg: T): T {
    return arg
}

// 泛型函数类型
let myIdentity: <T>(arg: T) => T = identity
console.log(myIdentity('yuhui'))

// 泛型接口
interface GenericIdentityFn<T> {
    (arg: T): T
}

// 传入类型 number 来指定泛型的类型
let myIdentity2: GenericIdentityFn<number> = identity // 推荐使用的方式
// myIdentity2('lala') // 报错，类型 "lala" 的参数不能赋给类型 number 的参数
console.log(myIdentity2(24))
