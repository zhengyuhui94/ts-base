interface Square {
    color: string
    area: number
}

// 可选属性：接口里的属性不全都是必需的
interface SquareConfig {
    color?: string // 带？，可选属性，使用该接口定义的时候，带？的属性可传可不传
    with?: number
    // 额外属性检查
    // [propName: string]: any // 该接口带有任意数量的其他属性，且数据类型是 any
}
function createSquare(config: SquareConfig): Square {
    let newSquare = {color: 'white', area: 100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.with){
        newSquare.area = config.with * config.with;
    }
    return newSquare;
}
let mySquare = createSquare({color: 'black'});
console.log(mySquare);

// 只读属性
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[1] = 2; // 报错，类型 “readonly number[]” 中的索引签名仅允许读取
// ro.push(3); // 报错，类型 “readonly number[]” 上不存在属性 “push”
// ro.length = 100; // 报错
// a = ro; // 报错
a = ro as number[]; // 不能复制给一个数组，但可以用类型断言重写

// readonly 与 const 使用区别
// 作为属性使用 readonly
// 作为变量使用 const
