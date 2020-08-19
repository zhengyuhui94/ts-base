// 使用 --strictNullChecks，当赋值为 null 或 undefined 的时候，都会报错
let s: string = 'foo'
s = null
s = undefined

// 使用了 --strictNullChecks，可选参数会被自动地加上 | undefined，
// 即默认 undefined 不报错，null 报错
function f(x: number, y?: number){
    return x + (y || 0)
}
f(1, 2)
f(1, undefined)
f(1, null) // Argument of type 'null' is not assignable to parameter of type 'number | undefined'

// 使用了 --strictNullChecks
function broken(name: string | null): string{
    function postfix(epithet: string){
        // 后缀： name! 从 name 的类型里去除了 null 和 undefined，即 name! 类型只能为 string
        return name!.charAt(0) + '.  the ' + epithet // 编辑器在这里默认 name! 类型是 string 类型，不会报错
        // return name.charAt(0) + '.  the ' + epithet // 报错，Object is possibly 'null'，即没有 charAt 方法
    }
    name = name || 'Bob'
    return postfix('great')
}
broken(null)