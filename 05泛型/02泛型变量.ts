// <T> 捕获传入的参数是什么数组类型，并使用这个类型来定义返回值的数组类型
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg)
    // arg.push('aaa') // 报错，类型 'aaa' 的参数不能赋给类型 T 的参数
    console.log(arg.length)
    return arg
}

loggingIdentity([1, 'dd'])