// K 被 T 的 key 所约束，即 K 必须是 T 下面的某个属性
function getProperty<T, K extends keyof T> (obj: T, key: K) {
    return obj[key]
}

let x = {a: 1, b: 2, c: 3, d: 4}

// getProperty(x, 'm') // 报错，类型 "m" 的参数不能赋给类型 "a" | "b" | "c" | "d" 的参数
console.log(getProperty(x, 'a'))
