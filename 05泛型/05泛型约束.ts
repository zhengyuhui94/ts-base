// 错误事例
// function loggingIdentity < T > (arg: T): T {
//     console.log(arg.length) // 报错，类型 T 上不存在属性 length
//     return arg
// }

interface Lengthwise {
    length: number
}

// 使用 Lengthwise 接口和 extends 关键字来实现约束
// 传入符合约束类型的值，必须包含 Lengthwise 接口的属性，如 length 属性
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
}

// number 数据类型没有 length 属性
// loggingIdentity(24) // 报错，类型 24 的参数不能赋给类型 Lengthwise 的参数

// 以下数据类型都包含 length 属性
loggingIdentity('lala') // 4
loggingIdentity([]) // 0
loggingIdentity({length: 24, type: 'wife'}) // 24

