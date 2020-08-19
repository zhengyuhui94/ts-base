class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}

// 传入类型 number 来指定泛型类的类型
let myGenericNumber = new GenericNumber<number>()

// myGenericNumber.zeroValue = 'yuhui' // 报错，不能将类型 "yuhui" 分配给类型 number
myGenericNumber.zeroValue = 24
myGenericNumber.add = function(x, y){
    return x + y
}
console.log(myGenericNumber.add(24, 1))